import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";
import { FACETS, LEARN_WORDS } from "../data/facets";
import SectionEyebrow from "./shared/SectionEyebrow";
import CurrentlyStrip from "./shared/CurrentlyStrip";

export default function Hero({ reduced }) {
  const [selected, setSelected] = useState(null);
  const [learnHover, setLearnHover] = useState(false);
  const facet = selected ? FACETS[selected] : null;

  const headlineStyle = {
    fontFamily: FONT_DISPLAY,
    color: C.ink,
    fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
    lineHeight: 1.08,
    fontWeight: 600,
    letterSpacing: "-0.01em",
  };

  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <SectionEyebrow n="00" label="WHO AM I?" />

      <div style={{ minHeight: "clamp(9rem, 20vw, 12rem)" }}>
        <AnimatePresence mode="wait">
          {facet ? (
            <motion.div
              key={selected}
              initial={reduced ? {} : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {facet.lines.map((l, i) => (
                <h1 key={i} style={headlineStyle}>{l}</h1>
              ))}
              <p style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.accent, marginTop: 14 }}>
                {facet.tag}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={reduced ? {} : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <h1 style={headlineStyle}>I build.</h1>
              <h1 style={headlineStyle}>I teach.</h1>
              <h1 style={headlineStyle}>
                I create spaces where others can{" "}
                <span
                  onMouseEnter={() => setLearnHover(true)}
                  onMouseLeave={() => setLearnHover(false)}
                  onFocus={() => setLearnHover(true)}
                  onBlur={() => setLearnHover(false)}
                  tabIndex={0}
                  style={{ borderBottom: `2px solid ${C.accent}`, cursor: "default" }}
                >
                  learn.
                </span>
              </h1>
              <div style={{ height: 26, marginTop: 6 }}>
                <AnimatePresence>
                  {learnHover && (
                    <motion.div
                      initial={reduced ? {} : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={reduced ? {} : { opacity: 0 }}
                      className="flex gap-3 flex-wrap"
                    >
                      {LEARN_WORDS.map((w, i) => (
                        <motion.span
                          key={w}
                          initial={reduced ? {} : { opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduced ? 0 : i * 0.06 }}
                          style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.inkSoft }}
                        >
                          {w}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {["developer", "teacher", "community"].map((id) => (
          <button
            key={id}
            onClick={() => setSelected(selected === id ? null : id)}
            aria-pressed={selected === id}
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              color: selected === id ? "#fff" : C.ink,
              background: selected === id ? C.accent : "transparent",
              border: `1px solid ${selected === id ? C.accent : C.line}`,
              padding: "8px 14px",
              transition: reduced ? "none" : "all 0.15s ease",
            }}
          >
            [ {id === "community" ? "community builder" : id} ]
          </button>
        ))}
      </div>

      <CurrentlyStrip reduced={reduced} />
    </section>
  );
}
