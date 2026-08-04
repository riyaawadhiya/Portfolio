import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-16 ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow mb-4 block">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-white">
        {title}
      </h2>
      {description && <p className="mt-5 text-ivory-muted text-base md:text-lg">{description}</p>}
    </motion.div>
  );
}
