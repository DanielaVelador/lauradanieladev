import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, FONT_SERIF, FONT_MONO } from "../theme";

// Puedes importar tu lista completa de herramientas desde tu archivo de datos
const TOOLKIT = [
  "Python", "Roblox Studio", "Scratch", "HTML", "CSS", "JavaScript", "PHP", 
  "Tailwind CSS", "Docker", "CodeIgniter", "Node.js", "Microsoft Planner",
  "System Architecture", "Relational Databases", "Angular", "Laravel", "MongoDB"
];

export default function ToolkitFolder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* EL FOLDER EN EL "ESCRITORIO" */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute z-30 cursor-pointer drop-shadow-md"
        // Ajusta top/left según dónde quieras ponerlo en relación a la polaroid
        style={{ top: "60%", left: "12%", rotate: "10deg", zIndex: 15 }} 
        aria-label="Open Toolkit"
      >
        {/* Ícono de Folder estilo Manila (SVG) */}
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C10 7.23858 12.2386 5 15 5H45.5C47.2382 5 48.847 5.92686 49.7236 7.43306L53.7764 14.3934C54.653 15.8996 56.2618 16.8264 58 16.8264H105C107.761 16.8264 110 19.065 110 21.8264V80C110 82.7614 107.761 85 105 85H15C12.2386 85 10 82.7614 10 80V10Z" fill="#5589cc"/>
          {/* Sombra interna para darle volumen */}
          <path d="M10 25H110V80C110 82.7614 107.761 85 105 85H15C12.2386 85 10 82.7614 10 80V25Z" fill="#4472b5"/>
          <text x="50%" y="60%" textAnchor="middle" fill="#ffffff" style={{ fontFamily: FONT_MONO, fontSize: 12, fontWeight: 'bold' }}>
            /01 TOOLKIT
          </text>
        </svg>
      </motion.button>

      {/* EL POP-UP (MODAL) ANIMADO */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            
            {/* Fondo desenfocado que cierra el modal al hacer clic */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-white/40 backdrop-blur-md cursor-pointer"
            />

            {/* Contenedor Principal del Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl p-10 bg-[#FAFAFA] border border-gray-200 shadow-2xl rounded-2xl mx-6"
            >
              {/* Botón de cerrar (X) */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>

              <h3 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 28, color: C.ink, marginBottom: 24 }}>
                My Toolkit
              </h3>

              {/* Grid de Etiquetas animadas en cascada */}
              <div className="flex flex-wrap gap-3">
                {TOOLKIT.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }} // Efecto cascada
                    className="bg-white border border-gray-200 text-gray-700 shadow-sm transition-all cursor-default hover:border-gray-300 hover:shadow-md"
                    style={{ fontFamily: FONT_MONO, fontSize: 13, padding: "8px 16px", borderRadius: 9999 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}