import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_SERIF, FONT_DISPLAY, FONT_MONO } from "../theme";
import { PROJECTS } from "../data/projects";

const VISIBLE_COUNT = 5;

export default function ExperienceSection({ reduced }) {
  const [expanded, setExpanded] = useState(false);
  const workExperience = PROJECTS.filter((p) => p.category === "work");
  const firstFive = workExperience.slice(0, VISIBLE_COUNT);
  const extra = workExperience.slice(VISIBLE_COUNT);
  const hasMore = workExperience.length > VISIBLE_COUNT;

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
      <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 34, color: C.ink }}>
        Experience
      </h2>

      <div className="relative mt-16">
        <div
          className="hidden md:block absolute top-0 bottom-0"
          style={{ left: "50%", width: 1, background: C.line, transform: "translateX(-0.5px)" }}
        />

        <div className="space-y-10 md:space-y-16">
          {firstFive.map((p, i) => (
            <Entry key={p.id + p.title} p={p} side={i % 2 === 0 ? "right" : "left"} />
          ))}

          <AnimatePresence>
            {expanded &&
              extra.map((p, i) => (
                <motion.div
                  key={p.id + p.title}
                  initial={reduced ? {} : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <Entry p={p} side={(firstFive.length + i) % 2 === 0 ? "right" : "left"} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mx-auto mt-10"
          style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.accent }}
        >
          [ {expanded ? "− Show less" : "+ Show more"} ]
        </button>
      )}
    </section>
  );
}

function Entry({ p, side }) {
  const bullets = p.approach
    ? p.approach.split(". ").map((s) => s.trim()).filter(Boolean).map((s) => (s.endsWith(".") ? s : s + "."))
    : [];
  const isRight = side === "right";

  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 relative">
      <div className={isRight ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}>
        <div className="sticker p-5" style={{ borderRadius: 8 }}>
          <div className="flex items-start justify-between gap-3">
            <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600, color: C.ink }}>
              {p.role}
            </h3>
            {p.date && (
              <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint, whiteSpace: "nowrap" }}>
                {p.date}
              </span>
            )}
          </div>
          <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 15, color: C.inkSoft, marginTop: 2 }}>
            {p.title}
          </p>

          {bullets.length > 0 && (
            <ul className="mt-3 space-y-1" style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft, lineHeight: 1.6 }}>
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: C.inkFaint }}>—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}