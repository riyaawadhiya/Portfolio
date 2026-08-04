import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 40 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40 });
  const ringX = useSpring(x, { stiffness: 120, damping: 16, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 120, damping: 16, mass: 0.4 });
  const [grown, setGrown] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setGrown(true);
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setGrown(false);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`hidden md:block ${visible ? "opacity-100" : "opacity-0"}`}>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          boxShadow: "0 0 12px 2px rgba(212,175,55,0.9)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] rounded-full border border-gold/60"
        animate={{
          width: grown ? 64 : 32,
          height: grown ? 64 : 32,
          backgroundColor: grown ? "rgba(212,175,55,0.08)" : "rgba(212,175,55,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
