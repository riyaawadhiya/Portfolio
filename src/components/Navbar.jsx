import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (latest > previous && latest > 200) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-glass" : "bg-transparent border border-transparent"
        }`}
      >
        <a
          href="#top"
          data-cursor-hover
          className="font-display font-semibold text-base tracking-widest w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center"
        >
          <span className="text-gold">R</span>A
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-cursor-hover
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === link.id ? "text-ink-950" : "text-ivory-soft hover:text-white"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-gold-gradient rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-hover
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-ink-950 bg-gold-gradient"
        >
          Let's Connect
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 flex flex-col gap-1 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-ivory-soft hover:text-gold hover:bg-white/5 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-xl font-semibold text-ink-950 bg-gold-gradient"
            >
              Let's Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
