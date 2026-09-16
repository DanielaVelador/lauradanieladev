import React, { useState, useEffect } from "react";
import { C, FONT_MONO, FONT_BODY, FONT_SERIF } from "../theme";
import { NAV } from "../data/nav";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const {lang, toggleLanguage} = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. BARRA SUPERIOR (Más espacio en los bordes con md:px-16 lg:px-20) */}
      <nav 
        className="fixed top-0 left-0 w-full z-[60] px-8 py-8 md:px-16 lg:px-20 flex justify-between items-center backdrop-blur-sm"
        style={{ backgroundColor: `${C.paper}99` }}
      >
        <a 
          href="#top" 
          className="text-sm tracking-wide"
          style={{ fontFamily: FONT_BODY, color: C.ink }}
        >
          lauradaniela.dev
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
            style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.ink, letterSpacing: "1px" }}
            aria-label="Toggle Language"
          >
            <span style={{ fontWeight: lang === "EN" ? "bold" : "normal" }}>EN</span>
            <span className="opacity-50">/</span>
            <span style={{ fontWeight: lang === "ES" ? "bold" : "normal" }}>ES</span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block w-7 h-0.5 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: C.ink }}></span>
            <span className={`block w-7 h-0.5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: C.ink }}></span>
            <span className={`block w-7 h-0.5 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: C.ink }}></span>
          </button>
        </div>
      </nav>

      {/* 2. OVERLAY (Fondo oscuro desenfocado para cerrar al hacer clic fuera) */}
      <div 
        className={`fixed inset-0 z-[40] bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 3. PANEL LATERAL (100% en móvil, 45% en escritorio) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-[50] w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: `${C.paper}F2` }}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          {NAV.map((n, index) => (
            <li 
              key={n.id}
              style={{ 
                transitionDelay: isOpen ? `${index * 50 + 200}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transitionProperty: 'all',
                transitionDuration: '500ms'
              }}
            >
              <a 
                href={`#${n.id}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl hover:opacity-50 transition-opacity"
                style={{ fontFamily: FONT_SERIF, fontStyle: "italic", color: C.ink }}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div 
          className="absolute bottom-10 opacity-60"
          style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft }}
        >
          @lauradaniela.dev
        </div>
      </div>
    </>
  );
}