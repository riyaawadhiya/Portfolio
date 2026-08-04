import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Where I've shipped real work."
      />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-white/10 to-transparent md:-translate-x-1/2" />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.date}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-14 md:text-right md:ml-0" : "md:pl-14 md:ml-auto"
              }`}
            >
              <span className="absolute left-[9px] md:left-auto md:right-0 md:translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-ink-950 border-2 border-gold hidden md:block" />
              <span className="absolute left-[9px] top-1.5 w-3 h-3 rounded-full bg-ink-950 border-2 border-gold md:hidden" />

              <div className="glass rounded-2xl p-6 hover:border-gold/30 border border-transparent transition-colors duration-300">
                <span className="text-xs font-display tracking-widest text-gold">{job.date}</span>
                <h3 className="font-display text-lg font-semibold mt-1">{job.role}</h3>
                <p className="text-sm text-ivory-muted mb-4">{job.org}</p>
                <ul className={`space-y-1.5 text-sm text-ivory-soft/90 ${i % 2 === 0 ? "md:list-none" : ""}`}>
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 md:justify-start">
                      <span className="text-gold shrink-0">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
