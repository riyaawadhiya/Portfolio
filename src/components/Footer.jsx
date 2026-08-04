import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/content.js";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 section-pad !py-14">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div>
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            {profile.name}
          </a>
          <p className="text-sm text-ivory-muted mt-2 max-w-xs flex items-center gap-1.5">
            <MapPin size={13} /> {profile.location}
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-ivory-muted">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <a
            href={profile.socials.github}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 text-center text-xs text-ivory-muted/70">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
