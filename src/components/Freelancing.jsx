import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton.jsx";
import { freelancing } from "../data/content.js";

export default function Freelancing() {
  return (
    <section className="section-pad relative bg-ink-900/40">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4 block">Freelancing</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">
            {freelancing.title}
          </h2>
          <p className="text-ivory-muted mb-8 leading-relaxed">{freelancing.body}</p>
          <MagneticButton href="#contact" data-cursor-hover className="btn-gold">
            Start Your Project <ArrowRight size={17} />
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-3"
        >
          {freelancing.offerings.map((item) => (
            <div
              key={item}
              className="glass rounded-xl px-4 py-4 text-sm text-center hover:border-gold/40 border border-transparent transition-colors duration-300"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
