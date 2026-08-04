import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <SectionHeading
        eyebrow="Technologies I Use"
        title="Tools I reach for on real projects."
        description="Demonstrated through shipped work, not self-rated percentages."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (gi % 3) * 0.1 }}
            className="glass rounded-2xl p-7 hover:border-gold/30 border border-transparent transition-colors duration-300"
          >
            <h3 className="font-display text-sm tracking-widest uppercase text-gold/80 mb-5">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -3, boxShadow: "0 8px 20px -6px rgba(212,175,55,0.35)" }}
                  className="px-3.5 py-2 rounded-full text-sm bg-white/[0.04] border border-white/10 hover:border-gold/50 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
