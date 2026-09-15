import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";
import { TEACH_TERMS } from "../data/teachTerms";
import { TIMELINE } from "../data/timeline";
import SectionEyebrow from "./shared/SectionEyebrow";

export default function BeyondSection({ reduced }) {
  return (
    <section id="beyond" style={{ background: C.paperSoft }} className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionEyebrow n="04" label="BEYOND THE CODE" />
        <div className="grid md:grid-cols-2 gap-8">
          <TeachingCard reduced={reduced} />
          <CommunityCard />
        </div>
      </div>
    </section>
  );
}

function TeachingCard({ reduced }) {
  const [openTerm, setOpenTerm] = useState(TEACH_TERMS[0]?.term ?? null);
  const active = TEACH_TERMS.find((t) => t.term === openTerm);

  return (
    <div className="sticker p-6">
      <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600, color: C.ink }}>
        I teach.
      </h3>
      <div className="flex flex-wrap gap-2 mt-4">
        {TEACH_TERMS.map((t) => {
          const isOpen = openTerm === t.term;
          return (
            <button
              key={t.term}
              onClick={() => setOpenTerm(isOpen ? null : t.term)}
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                color: isOpen ? "#fff" : C.ink,
                background: isOpen ? C.accent : "transparent",
                border: `1px solid ${C.line}`,
                padding: "5px 10px",
                transition: reduced ? "none" : "all 0.15s ease",
              }}
            >
              {t.term}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {active && (
          <motion.p
            key={active.term}
            initial={reduced ? {} : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? {} : { opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.inkSoft, marginTop: 14, lineHeight: 1.6 }}
          >
            {active.before} <span style={{ color: C.inkFaint }}>→</span> {active.after}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function CommunityCard() {
  return (
    <div className="sticker p-6">
      <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600, color: C.ink }}>
        I create spaces.
      </h3>
      <p style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.inkSoft, marginTop: 8, lineHeight: 1.6 }}>
        I co-founded a coding community built for girls and teenagers — a space to learn, build, and see technology as something they can shape, not just use.
      </p>
      <div className="mt-4">
        {TIMELINE.map((t, i) => (
          <div
            key={t.n}
            className="flex items-baseline gap-3"
            style={{ padding: "6px 0", borderBottom: i < TIMELINE.length - 1 ? `1px solid ${C.line}` : "none" }}
          >
            <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkFaint }}>{t.n}</span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.ink }}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}