import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Globe } from "lucide-react";
import { profile, contactCards } from "../data/content.js";
import { sendContactMessage, getErrorMessage } from "../services/contact.service";

const initialForm = { name: "", email: "", subject: "", message: "", company: "" }; // "company" = honeypot

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in your name, email, and message.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("loading");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(getErrorMessage(err));
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4 block">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Let's Connect
          </h2>
          <p className="text-ivory-muted mb-10 leading-relaxed max-w-md">
            Interested in working together? Whether you have a freelance project, a startup idea,
            or a full-time opportunity, I'd love to hear from you.
          </p>

          <div className="space-y-4 mb-10">
            {contactCards.map((c) => {
              const Icon = Icons[c.icon] || Icons.Mail;
              return (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-ivory-muted font-display tracking-wide uppercase">
                      {c.label}
                    </div>
                    <div className="text-sm text-white">{c.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <a
              href={profile.socials.github}
              data-cursor-hover
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.socials.linkedin}
              data-cursor-hover
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            {/* <a
              href={profile.socials.portfolio}
              data-cursor-hover
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Portfolio"
            > */}
              {/* <Globe size={17} />
            </a> */}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-gold rounded-3xl p-7 md:p-9 relative overflow-hidden"
        >
          {/* honeypot field — hidden from real users, catches bots */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px]"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="mb-5"
            required={false}
          />
          <div className="mb-3">
            <label className="text-xs font-display tracking-widest uppercase text-ivory-muted mb-2 block">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            data-cursor-hover
            className="btn-gold w-full justify-center mt-4 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            {status !== "loading" && <Send size={16} />}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-gold"
              >
                <CheckCircle2 size={16} /> Message sent — I'll reply within 24 hours.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-red-400"
              >
                <AlertCircle size={16} /> {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, className = "", required = true, ...props }) {
  return (
    <div className={className}>
      <label className="text-xs font-display tracking-widest uppercase text-ivory-muted mb-2 block">
        {label}
      </label>
      <input
        {...props}
        required={required}
        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}