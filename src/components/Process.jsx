import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { processPhases } from "../data/content.js";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const wrapRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelRefs.current;

      gsap.set(panels, { opacity: 0, y: 60, scale: 0.94, filter: "blur(10px)" });
      gsap.set(panels[0], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: `+=${panels.length * 90}%`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(
          panels[i - 1],
          { opacity: 0, y: -60, scale: 0.94, filter: "blur(10px)", duration: 1 },
          i
        ).to(
          panel,
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1 },
          i
        );
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={wrapRef} className="relative h-screen overflow-hidden bg-ink-900/60">
      <div className="section-pad !py-0 h-full flex flex-col justify-center relative">
        <div className="mb-8 md:mb-12">
          <span className="eyebrow mb-4 block">Development Process</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            How an idea becomes a shipped product.
          </h2>
        </div>

        <div className="relative h-[360px] md:h-[300px]">
          {processPhases.map((phase, i) => {
            const Icon = Icons[phase.icon] || Icons.Circle;
            return (
              <div
                key={phase.n}
                ref={(el) => (panelRefs.current[i] = el)}
                className="absolute inset-0 will-change-transform"
              >
                <div className="glass-gold rounded-3xl p-7 md:p-10 max-w-3xl h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold-sm">
                      <Icon size={26} className="text-ink-950" />
                    </div>
                    <div>
                      <span className="text-xs font-display tracking-[0.25em] uppercase text-gold/70">
                        Phase {phase.n} of {processPhases.length}
                      </span>
                      <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white mt-0.5">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-ivory-soft text-base md:text-lg leading-relaxed max-w-xl">
                    {phase.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-8">
          {processPhases.map((p) => (
            <span key={p.n} className="w-8 h-[3px] rounded-full bg-white/15" />
          ))}
        </div>
      </div>
    </section>
  );
}
