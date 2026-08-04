import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.035, delayChildren: 0.04 * i },
  }),
};

const child = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RevealText({ text, className = "", el: El = "span", delay = 0 }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.28em]">
          {word.split("").map((letter, j) => (
            <motion.span key={j} variants={child} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
