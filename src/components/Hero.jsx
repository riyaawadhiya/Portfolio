import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import RevealText from "./ui/RevealText.jsx";
import TypingRoles from "./ui/TypingRoles.jsx";
import MagneticButton from "./ui/MagneticButton.jsx";
import { profile } from "../data/content.js";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 40);
    my.set((e.clientY / innerHeight - 0.5) * 40);
  };

  const orb1X = useTransform(mx, (v) => v * 1);
  const orb1Y = useTransform(my, (v) => v * 1);
  const orb2X = useTransform(mx, (v) => v * -1.4);
  const orb2Y = useTransform(my, (v) => v * -1.4);

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-pad !pt-40"
    >
      {/* floating grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      {/* floating glow orbs, mouse-parallax */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute -top-24 right-[8%] w-[420px] h-[420px] rounded-full bg-gold/20 blur-[120px] animate-float"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute bottom-0 left-[5%] w-[380px] h-[380px] rounded-full bg-gold-light/10 blur-[130px] animate-float-delay"
      />

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6 inline-flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          {profile.status} — {profile.location}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-lg md:text-xl text-ivory-soft mb-3"
        >
          Hi, I'm <span className="text-white font-semibold">{profile.name}</span>
        </motion.p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.08] tracking-tight">
          <RevealText text="Building modern web" />
          <br />
          <RevealText text="experiences that" delay={4} />
          <br />
          <RevealText text="users " delay={7} />
          <span className="gold-text">
            <RevealText text="remember." delay={7.6} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-lg md:text-xl text-ivory-soft font-display h-8"
        >
          <TypingRoles roles={profile.titles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-3 text-ivory-muted max-w-lg"
        >
          Available for freelance & full-time opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-11 flex flex-wrap gap-4"
        >
          <MagneticButton
            href="#work"
            data-cursor-hover
            className="btn-gold hover:shadow-gold"
          >
            View Projects <ArrowRight size={17} />
          </MagneticButton>
          <MagneticButton
            href={profile.resumeUrl}
            download
            data-cursor-hover
            className="btn-outline"
          >
            Download Resume <Download size={16} />
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-muted text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
