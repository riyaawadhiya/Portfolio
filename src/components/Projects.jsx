import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import TiltCard from "./ui/TiltCard.jsx";
import { projects } from "../data/content.js";

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[86vh] overflow-y-auto glass-gold rounded-3xl p-8 md:p-10"
        >
          <button
            onClick={onClose}
            data-cursor-hover
            className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
          >
            <X size={16} />
          </button>

          <span className="eyebrow">{project.tag}</span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mt-3 mb-6">{project.name}</h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs border border-gold/30 text-gold/90">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-gold/70 mb-2">Problem</h4>
              <p className="text-ivory-soft leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-gold/70 mb-2">Solution</h4>
              <p className="text-ivory-soft leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-gold/70 mb-2">Result</h4>
              <p className="text-ivory-soft leading-relaxed">{project.result}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-9">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="btn-gold text-sm"
              >
                Live Demo <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-hover className="btn-outline text-sm">
                GitHub <Github size={15} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="section-pad relative bg-ink-900/40">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work, built end to end."
        description="Click any project for the full case study — problem, solution, and result."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
          >
            <TiltCard className="group h-full" intensity={6}>
              <button
                onClick={() => setActive(p)}
                data-cursor-hover
                className="text-left w-full h-full glass rounded-3xl overflow-hidden border border-white/10 hover:border-gold/40 transition-colors duration-300"
              >
                <div className={`relative h-56 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">
                      {p.name.split(" — ")[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center group-hover:bg-gold group-hover:text-ink-950 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-xs font-display tracking-widest uppercase text-gold/80 mb-2">{p.tag}</div>
                  <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-ivory-muted leading-relaxed line-clamp-2">{p.description}</p>
                </div>
              </button>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
