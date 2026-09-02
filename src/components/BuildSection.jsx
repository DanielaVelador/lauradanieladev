import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { C, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../theme";
import { PROJECTS } from "../data/projects";
import SectionEyebrow from "./shared/SectionEyebrow";
import FacetHeader from "./shared/FacetHeader";
import ProjectPreview from "./shared/ProjectPreview";

export default function BuildSection({ reduced }) {
  const [openId, setOpenId] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <section id="build" className="max-w-5xl mx-auto px-6 py-16">
      <SectionEyebrow n="01" label="WHAT DO I BUILD?" />
      <FacetHeader
        label="DEVELOPER"
        lines={["I turn ideas into software.", "Sometimes it's an API.", "Sometimes it's a UI.", "Sometimes it's a very stubborn bug."]}
        cta="explore my work"
        ctaTarget="done"
      />

      <div id="done" style={{ borderTop: `1px solid ${C.line}`, marginTop: 24 }}>
        {PROJECTS.map((p) => {
          const isOpen = openId === p.id;
          const isHovered = hoverId === p.id;
          return (
            <div key={p.id} style={{ borderBottom: `1px solid ${C.line}` }}>
              <button
                onClick={() => { setOpenId(isOpen ? null : p.id); setCaseOpen(false); }}
                onMouseEnter={() => setHoverId(p.id)}
                onMouseLeave={() => setHoverId(null)}
                className="w-full text-left flex items-center justify-between py-5"
                style={{ transform: isHovered && !reduced ? "translateX(6px)" : "translateX(0)", transition: "transform 0.15s ease" }}
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-4">
                  <span style={{ fontFamily: FONT_MONO, color: isHovered ? C.accent : C.inkFaint, fontSize: 13, width: 18, display: "inline-block" }}>
                    {isHovered && !isOpen ? "→" : p.id}
                  </span>
                  <span style={{ fontFamily: FONT_DISPLAY, fontSize: 20, color: C.ink, fontWeight: 600 }}>{p.title}</span>
                </div>
                <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: isHovered ? C.accent : C.inkFaint }}>
                  {isHovered && !isOpen ? "VIEW PROJECT →" : p.tags.join(" · ")}
                </span>
              </button>

              <AnimatePresence>
                {isHovered && !isOpen && (
                  <motion.div
                    initial={reduced ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pb-4 pl-8 pr-4"><ProjectPreview project={p} /></div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={reduced ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pb-6 pl-8 pr-2">
                      <ProjectPreview project={p} />
                      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-5" style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.inkSoft, lineHeight: 1.55 }}>
                        <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>THE PROBLEM</p><p>{p.problem}</p></div>
                        <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>MY ROLE</p><p>{p.role}</p></div>
                        <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>THE APPROACH</p><p>{p.approach}</p></div>
                        {p.why && (
                          <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>WHY THIS APPROACH?</p><p>{p.why}</p></div>
                        )}
                        <div className="md:col-span-2"><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>THE RESULT</p><p>{p.result}</p></div>
                      </div>

                      <button
                        onClick={() => setCaseOpen(openId === p.id ? !caseOpen : true)}
                        className="flex items-center gap-1 mt-5"
                        style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.accent }}
                      >
                        [ open case study <ArrowRight size={12} /> ]
                      </button>

                      <AnimatePresence>
                        {caseOpen && (
                          <motion.div
                            initial={reduced ? {} : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduced ? {} : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-5 pt-5" style={{ borderTop: `1px solid ${C.line}`, fontFamily: FONT_BODY, fontSize: 14, color: C.inkSoft, lineHeight: 1.55 }}>
                              <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>KEY DECISIONS</p><p>{p.decisions}</p></div>
                              <div><p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>LEARNINGS</p><p>{p.learnings}</p></div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
