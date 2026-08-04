import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import TiltCard from "./ui/TiltCard.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-ink-900/40">
      <SectionHeading
        eyebrow="Services"
        title="What I can build for your team."
        description="From a single interactive feature to a full product build — here's where I plug in."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <TiltCard className="group h-full" intensity={8}>
                <div className="relative overflow-hidden animated-border glass rounded-2xl p-8 h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 shadow-gold-sm">
                    <Icon size={20} className="text-ink-950" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-ivory-muted leading-relaxed">{s.body}</p>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
