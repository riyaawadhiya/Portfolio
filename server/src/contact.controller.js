import nodemailer from "nodemailer";
import contactRepository from "./contact.repository.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// simple in-memory rate limiter (per IP) to cut down on spam
const submissionLog = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (submissionLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  submissionLog.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for 587/others
    auth: {
      user: process.env.SMTP_USER,
      // Gmail displays app passwords with spaces for readability — strip them,
      // since auth fails if they're pasted in as-is.
      pass: (process.env.SMTP_PASS || "").replace(/\s+/g, ""),
    },
  });
  return transporter;
}

/** Call once at server startup to confirm SMTP credentials actually work. */
export async function verifySmtp() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️  SMTP is not fully configured — check SMTP_HOST/SMTP_USER/SMTP_PASS in .env");
    return;
  }
  try {
    await getTransporter().verify();
    console.log("✅ SMTP: connected and ready to send");
  } catch (err) {
    console.error("❌ SMTP verification failed:", err.message);
    console.error(
      "   Check: (1) SMTP_PASS has no spaces, (2) it's a 16-char Gmail App Password " +
        "(not your normal password), (3) 2-Step Verification is enabled on that Gmail account"
    );
  }
}

const contactController = {
  /** POST /api/contact — validates, saves, and emails a new enquiry. */
  async submit(req, res) {
    try {
      // honeypot — bots fill hidden fields, humans don't
      if (req.body.company) {
        return res.status(201).json({ success: true }); // pretend success, drop silently
      }

      if (isRateLimited(req.ip)) {
        return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
      }

      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address." });
      }

      console.log(`📩 New enquiry from ${name} <${email}> — saving to MongoDB...`);
      const enquiry = await contactRepository.create({ name, email, subject, message });
      console.log(`✅ Saved to MongoDB (id: ${enquiry._id})`);

      try {
        console.log("📤 Sending email via SMTP...");
        const mail = getTransporter();
        await mail.sendMail({
          from: `"${process.env.CONTACT_FROM_NAME || "Portfolio Contact Form"}" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_TO_EMAIL,
          replyTo: email,
          subject: `[Portfolio] ${subject || "New enquiry"} — from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `
            <div style="font-family:sans-serif;line-height:1.6">
              <p><b>Name:</b> ${escapeHtml(name)}</p>
              <p><b>Email:</b> ${escapeHtml(email)}</p>
              <p><b>Subject:</b> ${escapeHtml(subject || "New portfolio enquiry")}</p>
              <p><b>Message:</b></p>
              <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
            </div>
          `,
        });
        await contactRepository.markEmailSent(enquiry._id);
        console.log("✅ Email sent successfully");
      } catch (mailErr) {
        // The enquiry is safely saved in MongoDB even if the SMTP send fails —
        // nothing is lost, and it can be re-sent or read from the database later.
        console.error("❌ SMTP send failed:", mailErr.message);
      }

      return res.status(201).json({
        success: true,
        message: "Thanks for reaching out — I'll get back to you soon.",
      });
    } catch (err) {
      console.error("❌ Error handling contact submission:", err.message);
      return res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
  },

  /** GET /api/contact — protected, lists enquiries for a simple admin view. */
  async list(req, res) {
    try {
      const adminKey = req.headers["x-admin-key"];
      if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: "Unauthorized." });
      }
      const enquiries = await contactRepository.findAll();
      return res.json(enquiries);
    } catch (err) {
      console.error("Error listing enquiries:", err.message);
      return res.status(500).json({ error: "Something went wrong." });
    }
  },
};

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default contactController;