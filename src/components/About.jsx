import { motion } from "framer-motion";
import { User, Hammer, Brain, Heart } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import TiltCard from "./ui/TiltCard.jsx";
import { aboutParagraphs, timeline } from "../data/content.js";

const STORY = [
  {
    icon: User,
    title: "Who I am",
    body: "A software developer from Jabalpur, India, focused on React.js, React Native, and full-stack delivery — comfortable owning a feature from requirement to production.",
  },
  {
    icon: Hammer,
    title: "What I build",
    body: "Responsive web apps, cross-platform mobile apps, and Shopify storefronts — reusable components backed by REST APIs, MongoDB, and clean state management.",
  },
  {
    icon: Brain,
    title: "How I think",
    body: "Requirements first, architecture second, code third. I review designs with the team before writing a single component, so nothing gets rebuilt twice.",
  },
  {
    icon: Heart,
    title: "What I value",
    body: "Clean, documented, reusable code. Fast debugging over guessing. Honest estimates. Shipping something real over a perfect plan that never ships.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering thoughtful products, one component at a time."
        description={aboutParagraphs[0]}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {STORY.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <TiltCard className="group h-full">
              <div className="glass-gold rounded-2xl p-7 h-full transition-shadow duration-300 group-hover:shadow-gold-sm">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <card.icon size={19} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{card.body}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          {aboutParagraphs.slice(1).map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-ivory-soft leading-relaxed mb-5"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="relative pl-8 border-l border-white/10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-ink-950 border-2 border-gold" />
              <span className="text-xs font-display tracking-widest text-gold">{item.date}</span>
              <h4 className="font-display font-semibold text-white mt-1">{item.title}</h4>
              <p className="text-sm text-ivory-muted">{item.org}</p>
              <p className="text-sm text-ivory-muted/80 mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
