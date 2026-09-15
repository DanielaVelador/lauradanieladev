import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { C, FONT_SERIF, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../theme";
import { PROJECTS } from "../data/projects";
import ProjectPreview from "./shared/ProjectPreview";

export default function BuildSection({ reduced }) {
  const sideProjects = PROJECTS.filter((p) => p.category === "project");
  const [openId, setOpenId] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);

  return (
    <section id="build" className="max-w-5xl mx-auto px-6 py-16">
      <h2 style={{ fontFamily: FONT_SERIF, fontSize: 36, color: C.ink }}>I build.</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {sideProjects.map((p, i) => {
          const isBig = i === 0;
          const isOpen = openId === p.id + p.category;
          return (
            <div
              key={p.category + p.id}
              className={`sticker ${isBig ? "md:col-span-2" : "md:col-span-1"}`}
              style={{ borderRadius: 8, overflow: "hidden" }}
            >
              {isBig && (
                <div className="browser-header">
                  <span className="browser-dot dot-red" />
                  <span className="browser-dot dot-yellow" />
                  <span className="browser-dot dot-green" />
                </div>
              )}

              <ProjectPreview project={p} />

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: isBig ? 22 : 18, fontWeight: 600, color: C.ink }}>
                    {p.title}
                  </h3>
                  {p.date && (
                    <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint, whiteSpace: "nowrap" }}>
                      {p.date}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 11,
                        color: C.inkSoft,
                        border: `1px solid ${C.line}`,
                        borderRadius: 4,
                        padding: "3px 8px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setOpenId(isOpen ? null : p.id + p.category);
                    setCaseOpen(false);
                  }}
                  className="flex items-center gap-1 mt-4"
                  style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.accent }}
                >
                  [ {isOpen ? "close" : "case study"} <ArrowRight size={12} /> ]
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? {} : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="grid gap-4 mt-5 pt-5"
                        style={{ borderTop: `1px solid ${C.line}`, fontFamily: FONT_BODY, fontSize: 14, color: C.inkSoft, lineHeight: 1.55 }}
                      >
                        <Field label="THE PROBLEM" text={p.problem} />
                        <Field label="MY ROLE" text={p.role} />
                        <Field label="THE APPROACH" text={p.approach} />
                        {p.why && <Field label="WHY THIS APPROACH?" text={p.why} />}
                        <Field label="THE RESULT" text={p.result} />

                        <button
                          onClick={() => setCaseOpen(!caseOpen)}
                          className="flex items-center gap-1"
                          style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.accent }}
                        >
                          [ {caseOpen ? "hide" : "decisions & learnings"} <ArrowRight size={12} /> ]
                        </button>

                        <AnimatePresence>
                          {caseOpen && (
                            <motion.div
                              initial={reduced ? {} : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={reduced ? {} : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              style={{ overflow: "hidden" }}
                              className="grid gap-4"
                            >
                              <Field label="KEY DECISIONS" text={p.decisions} />
                              <Field label="LEARNINGS" text={p.learnings} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Field({ label, text }) {
  return (
    <div>
      <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink }}>{label}</p>
      <p>{text}</p>
    </div>
  );
}