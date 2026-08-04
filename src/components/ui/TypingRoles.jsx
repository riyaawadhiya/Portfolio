import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TypingRoles({ roles, className = "" }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(pause);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }
    const speed = deleting ? 28 : 55;
    const t = setTimeout(() => setSubIndex((s) => s + (deleting ? -1 : 1)), speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, roles]);

  return (
    <span className={className}>
      {roles[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-gold ml-1 align-middle"
      />
    </span>
  );
}
