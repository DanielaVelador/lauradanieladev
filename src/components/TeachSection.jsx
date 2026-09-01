import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";
import { TEACH_TERMS } from "../data/teachTerms";
import SectionEyebrow from "./shared/SectionEyebrow";
import FacetHeader from "./shared/FacetHeader";

export default function TeachSection({ reduced }) {
  const [openTerm, setOpenTerm] = useState(null);
  const active = TEACH_TERMS.find((t) => t.term === openTerm);

  return (
    <section id="teach" className="max-w-5xl mx-auto px-6 py-16">
      <SectionEyebrow n="02" label="HOW DO I TEACH?" />
      <FacetHeader
        label="TEACHER"
        lines={["I make complex things click.", "Sometimes it's a Python loop.", "Sometimes it's a \u201cwait, it starts once?\u201d", "Sometimes it's just patience."]}
      />
      <div className="flex flex-wrap gap-3 mt-2">
        {TEACH_TERMS.map((t) => {
          const isOpen = openTerm === t.term;
          return (
            <button
              key={t.term}
              onClick={() => setOpenTerm(isOpen ? null : t.term)}
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 16,
                color: isOpen ? "#fff" : C.ink,
                background: isOpen ? C.accent : C.paperSoft,
                border: `1px solid ${C.line}`,
                padding: "10px 16px",
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
          <motion.div
            key={active.term}
            initial={reduced ? {} : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            style={{ marginTop: 20, borderLeft: `3px solid ${C.accent}`, paddingLeft: 16, maxWidth: 460 }}
          >
            <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint, letterSpacing: "0.04em" }}>
              {active.term.toUpperCase()}
            </p>
            <p style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.inkSoft, marginTop: 6, lineHeight: 1.6 }}>
              {active.before} <span style={{ color: C.accent }}>→</span><br />{active.after}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
