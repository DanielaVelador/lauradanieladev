import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { C, FONT_SERIF, FONT_BODY, FONT_MONO } from "../theme";
import { PROJECTS } from "../data/projects";
import ProjectPreview from "./shared/ProjectPreview";

export default function BuildSection({ reduced }) {
  const sideProjects = PROJECTS.filter((p) => p.category === "project");
  const [openId, setOpenId] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);

  return (
    <section id="build" className="max-w-5xl mx-auto px-6 py-24 relative z-20">
      <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 30, color: C.ink, marginBottom: "3rem" }}>
        I build.
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {sideProjects.map((p, i) => {
          const isBig = i === 0;
          const isOpen = openId === p.id + p.category;

          // ==========================================
          // LAYOUT 1: PROYECTO PRINCIPAL (IZQUIERDA) 
          // ==========================================
          if (isBig) {
            return (
              <div key={p.category + p.id} className="md:col-span-2 flex flex-col">
                
                {/* 1. La ventana del navegador (Imagen) */}
                <div 
                  className="bg-white border border-gray-200 shadow-sm transition-transform duration-500 ease-in-out hover:-translate-y-2" 
                  style={{ borderRadius: 8, overflow: "hidden" }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="relative w-full bg-[#E5E7EB]" style={{ minHeight: "380px" }}>
                    <ProjectPreview project={p} />
                  </div>
                </div>

                {/* 2. El texto fuera de la ventana */}
                <div className="mt-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="max-w-md">
                    <h3 style={{ fontFamily: FONT_BODY, fontSize: 18, fontWeight: 700, color: C.ink }}>
                      {p.title}
                    </h3>
                    <p className="mt-1" style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkSoft, lineHeight: 1.5 }}>
                      {p.description}
                    </p>
                  </div>
                  
                  {/* Etiquetas estilo botón (Pills) */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-white border border-gray-200"
                        style={{ fontFamily: FONT_BODY, fontSize: 11, color: C.inkSoft, padding: "4px 8px", borderRadius: 4 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <CaseStudyAccordion p={p} isOpen={isOpen} setOpenId={setOpenId} caseOpen={caseOpen} setCaseOpen={setCaseOpen} reduced={reduced} />
              </div>
            );
          }

          // ==========================================
          // LAYOUT 2: PROYECTO SECUNDARIO (DERECHA)
          // ==========================================
          return (
            <div key={p.category + p.id} className="md:col-span-1 h-fit md:mt-24">
              
              {/* Tarjeta blanca con padding interno */}
              <div className="bg-white border border-gray-200 shadow-sm flex flex-col p-3 pb-6 transition-transform duration-500 ease-in-out hover:-translate-y-2">
                
                {/* Imagen enmarcada */}
                <div className="relative w-full bg-[#E5E7EB]" style={{ minHeight: "260px" }}>
                  <ProjectPreview project={p} />
                </div>

                {/* Textos */}
                <div className="pt-5 px-2 flex flex-col flex-grow">
                  <h3 style={{ fontFamily: FONT_SERIF, fontSize: 20, color: C.ink }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 mb-4" style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkSoft, lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                  
                  {/* Etiquetas como texto con viñetas */}
                  <p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, color: C.ink }}>
                    {p.tags.join(" · ")}
                  </p>
                </div>
              </div>

              <CaseStudyAccordion p={p} isOpen={isOpen} setOpenId={setOpenId} caseOpen={caseOpen} setCaseOpen={setCaseOpen} reduced={reduced} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ==========================================
// COMPONENTES AUXILIARES
// ==========================================

function CaseStudyAccordion({ p, isOpen, setOpenId, caseOpen, setCaseOpen, reduced }) {
  return (
    <div className="mt-4">
      

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduced ? {} : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="grid gap-6 mt-6 pt-6"
              style={{ borderTop: `1px solid ${C.line}`, fontFamily: FONT_BODY, fontSize: 14, color: C.inkSoft, lineHeight: 1.6 }}
            >
              <Field label="THE PROBLEM" text={p.problem} />
              <Field label="MY ROLE" text={p.role} />
              <Field label="THE APPROACH" text={p.approach} />
              {p.why && <Field label="WHY THIS APPROACH?" text={p.why} />}
              <Field label="THE RESULT" text={p.result} />

              <button
                onClick={() => setCaseOpen(!caseOpen)}
                className="flex items-center gap-2 w-fit transition-opacity hover:opacity-70 mt-2"
                style={{ fontFamily: FONT_MONO, fontSize: 12, color: "#3B82F6" }}
              >
                [ {caseOpen ? "hide" : "decisions & learnings"} <ArrowRight size={14} /> ]
              </button>

              <AnimatePresence>
                {caseOpen && (
                  <motion.div
                    initial={reduced ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                    className="grid gap-5 bg-gray-50 p-5 rounded-lg border border-gray-100 mt-2"
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
  );
}

function Field({ label, text }) {
  if (!text) return null;
  return (
    <div>
      <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.ink, marginBottom: 4, letterSpacing: "0.5px" }}>
        {label}
      </p>
      <p>{text}</p>
    </div>
  );
}