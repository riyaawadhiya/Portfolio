import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { profile, availabilityCards } from "../data/content.js";

export default function OpenToWork() {
  return (
    <section className="section-pad relative">
      <div className="glass-gold rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/10 blur-[100px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Open to Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Actively seeking full-time roles<br className="hidden md:block" /> and freelance projects.
          </h2>
          <p className="text-ivory-muted max-w-2xl mx-auto mb-10">
            I'm actively seeking full-time Software Developer opportunities where I can contribute to
            impactful products while continuously growing as an engineer. I'm also available for
            freelance projects involving React.js, React Native, Shopify Development, and modern web
            applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {availabilityCards.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-left"
              >
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
