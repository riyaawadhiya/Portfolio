// ============================================================
// email.js
//
// Centralized SMTP transporter + email sending logic.
// Extracted from contact.controller.js so any future feature
// (OTP, notifications, etc.) can reuse the same transporter
// instead of creating its own.
//
// Env vars required:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// ============================================================

import nodemailer from "nodemailer";

let transporter = null;

export function getTransporter() {
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
    // Fail fast instead of hanging until the platform's request timeout —
    // surfaces the real error (ETIMEDOUT, ECONNREFUSED, auth failure, etc.)
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
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
    console.log({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
    });
    console.log("✅ SMTP: connected and ready to send");
  } catch (err) {
    console.error("❌ SMTP verification failed:", err.message);
    console.error(
      "   Check: (1) SMTP_PASS has no spaces, (2) it's a 16-char Gmail App Password " +
        "(not your normal password), (3) 2-Step Verification is enabled on that Gmail account"
    );
  }
}

/**
 * Generic send helper. Throws on failure — callers decide how to
 * handle it (e.g. contact controller logs it but doesn't fail the request).
 */
export async function sendEmail({ from, to, replyTo, subject, text, html }) {
  const mail = getTransporter();
  return mail.sendMail({ from, to, replyTo, subject, text, html });
}

export function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}