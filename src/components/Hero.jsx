import React, { useState, useEffect } from "react";
import { C, FONT_SERIF, FONT_BODY, FONT_MONO } from "../theme";
import { ABOUT, ROLES, PROYECTO_ADA } from "../data/about";
import heroPhoto from "../assets/polaroid.jpg";
import profilePhoto from "../assets/dany-b.png";
import CurrentlyStrip from "./shared/CurrentlyStrip";
import ToolkitFolder from "./ToolkitFolder";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ reduced }) {
  const { lang } = useLanguage();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = ABOUT[lang].tagline;

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Función para un scroll fluido y personalizado
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById("who-i-am");
    
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Duración en milisegundos (1200 = 1.2 segundos). ¡Cámbialo a tu gusto!
      let start = null;

      // Función matemática para suavizar la aceleración y desaceleración (easeInOutCubic)
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Curva de aceleración: empieza lento, se acelera, y termina lento
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };
  return (
    <>
      <header id="top" className="max-w-5xl mx-auto w-full px-6 relative min-h-screen flex flex-col justify-center pb-20">
        
        {/* 1. ENVOLTORIO RELATIVO: Mantiene la imagen y el texto alineados siempre */}
        <div className="relative w-full">
          
          {/* Foto móvil (se mantiene igual) */}
          <div className="block md:hidden mb-6" style={{ width: "clamp(140px, 45vw, 220px)" }}>
            <img src={profilePhoto} alt="Laura Daniela" className="w-full h-auto" style={{ display: "block" }} />
          </div>

          {/* Bloque de Texto Principal */}
          <div className="relative z-10 max-w-2xl">
            <h1 style={{ fontFamily: FONT_SERIF, fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 1.05, color: C.ink }}>
              Laura Daniela
              <br />
              <span style={{ fontStyle: "italic", color: C.inkSoft }}>{ABOUT[lang].role}</span>
            </h1>

            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: 18,
                color: C.inkSoft,
                maxWidth: 620,
                marginTop: 24,
                lineHeight: 1.6,
                minHeight: "60px",
              }}
            >
              {displayedText}
              <span className="animate-pulse inline-block ml-1 [animation-duration:.8s]">|</span>
            </p>

            {/* Etiquetas Glassmorphism */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div
                className="flex items-center gap-2 backdrop-blur-md bg-green-50/40 border border-green-200/50 transition-colors cursor-default"
                style={{
                  color: "#15803d",
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  padding: "6px 14px",
                  borderRadius: 9999,
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                {lang === "EN" ? "Open to work" : "Disponible"}
              </div>

              {ROLES[lang].map((role) => (
                <div
                  key={role}
                  className="backdrop-blur-md bg-white/30 border border-white/60 hover:bg-white/50 transition-colors cursor-default"
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 13,
                    color: C.ink,
                    padding: "6px 14px",
                    borderRadius: 9999,
                  }}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* 2. IMAGEN + ETIQUETA: Ahora relativas al texto */}
          <div 
            className="absolute hidden md:block" 
            style={{ 
              top: "clamp(2.8rem, 7.5vw, 5.2rem)", // Esto la empuja hacia abajo justo al nivel de "Software Engineer"
              right: "0%", // Alineada a la derecha del contenedor principal
              width: "clamp(140px, 16vw, 240px)" 
            }}
          >
            {/* Etiqueta de Colima agrupada junto a tu ilustración */}
            <div
              className="sticker absolute -top-8 -right-8 rotate-6 px-4 py-2 rounded-full whitespace-nowrap"
              style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft, zIndex: 20 }}
            >
              📍 {ABOUT[lang].location}
            </div>
            
            <img 
              src={profilePhoto} 
              alt="Laura Daniela" 
              className="w-full h-auto relative z-10" 
              style={{ display: "block" }} 
            />
          </div>

        </div>

        {/* 3. RATÓN DE SCROLL: Subido con 'bottom-20' en lugar de 'bottom-8' */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a href="#who-i-am" 
          onClick={handleSmoothScroll}
          className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-6 h-10 backdrop-blur-md bg-white/30 border border-gray-300/60 rounded-full flex justify-center pt-1.5 shadow-sm">
              <div className="w-1 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkSoft, textTransform: "uppercase", letterSpacing: "1px" }}>
              Scroll
            </span>
          </a>
        </div>
      </header>

      {/* SECCIÓN "WHO I AM" */}
      <section id="who-i-am" className="max-w-5xl mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-5">
            <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 30, color: C.ink }}>
              {ABOUT[lang].whoIAm}
            </h2>
            {ABOUT[lang].bio.map((p, i) => (
              <p key={i} style={{ fontFamily: FONT_BODY, fontSize: 16, color: C.inkSoft, lineHeight: 1.7 }}>
                {p}
              </p>
            ))}
          </div>

          <div className="md:col-span-5 relative h-[420px] hidden md:block">
            <div className="photo-polaroid absolute top-0 left-0 w-44 -rotate-6 z-10">
              <img src={heroPhoto} alt="Laura Daniela" className="w-full h-44 object-cover grayscale" style={{ display: "block" }} />
              <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 14, display: "block", marginTop: 6 }}>
                Hello there :)
              </span>
            </div>

            <div className="sticker absolute bottom-6 right-0 w-56 rotate-3 z-20 p-5">
              <h3 style={{ fontFamily: FONT_SERIF, fontSize: 20, marginBottom: 6, color: C.ink }}>
                {PROYECTO_ADA[lang].title}
              </h3>
              <p style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft, lineHeight: 1.6 }}>
                {PROYECTO_ADA[lang].body}
              </p>
            </div>
           <ToolkitFolder /> 
          </div>
          
          
        </div>
      </section>

      {/*<CurrentlyStrip reduced={reduced} />*/}
    </>
  );
}