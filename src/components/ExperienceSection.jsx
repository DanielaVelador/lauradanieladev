import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_SERIF, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../theme";
import { PROJECTS } from "../data/projects";

const VISIBLE_COUNT = 3;

export default function ExperienceSection({ reduced }) {
  const [expanded, setExpanded] = useState(false);
  const workExperience = PROJECTS.filter((p) => p.category === "work");
  const firstFive = workExperience.slice(0, VISIBLE_COUNT);
  const extra = workExperience.slice(VISIBLE_COUNT);
  const hasMore = workExperience.length > VISIBLE_COUNT;

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 relative z-20">
      <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 34, color: C.ink }}>
        Experience
      </h2>

      <div className="relative mt-16">
        {/* Línea central del timeline */}
        <div
          className="hidden md:block absolute top-0 bottom-0"
          style={{ left: "50%", width: 1, background: C.line, transform: "translateX(-0.5px)" }}
        />

        <div className="space-y-12 md:space-y-16">
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
          className="flex items-center gap-2 mx-auto mt-12"
          style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.accent }}
        >
          [ {expanded ? "− Show less" : "+ Show more"} ]
        </button>
      )}
    </section>
  );
}

function Entry({ p, side }) {
  const bullets = p.achievements && p.achievements.length > 0 
    ? p.achievements 
    : (p.description ? [p.description] : []);

  const isRight = side === "right";
  // Inclinación alternada sutil para dar el efecto de nota/sticker
  const tiltClass = isRight ? "rotate-1" : "-rotate-1";

  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 relative items-center">
      
      {/* PUNTO NEGRO DEL TIMELINE EN ESCRITORIO */}
      <div 
        className="hidden md:block absolute w-3 h-3 bg-black rounded-full z-10 shadow-sm" 
        style={{ left: "50%", transform: "translateX(-50%)", backgroundColor: "#5589cc"}}
      />

      {/* CONTENEDOR DE LA TARJETA (Alineado hacia el centro del timeline) */}
      <div className={`flex ${isRight ? "md:col-start-2 md:justify-start" : "md:col-start-1 md:row-start-1 md:justify-end"}`}>
        <div 
          className={`sticker p-6 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:rotate-0 hover:shadow-md w-full max-w-[360px] ${tiltClass}`} 
          style={{ borderRadius: 8 }}
        >
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
          
          <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 16, color: C.inkSoft, marginTop: 2, marginBottom: 14 }}>
            {p.title}
          </p>

          {bullets.length > 0 && (
            <ul className="space-y-2 list-disc list-inside" style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkSoft, lineHeight: 1.6 }}>
              {bullets.map((b, i) => (
                <li key={i}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}