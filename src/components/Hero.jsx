import React, { useState, useEffect } from "react";
import { C, FONT_SERIF, FONT_BODY, FONT_MONO } from "../theme";
import { ABOUT, ROLES, PROYECTO_ADA } from "../data/about";
import heroPhoto from "../assets/hero.png";
import profilePhoto from "../assets/dany-b.png";
import CurrentlyStrip from "./shared/CurrentlyStrip";

export default function Hero({ reduced }) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = ABOUT.tagline;

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
  return (
    <header id="top" className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
      <div
        className="sticker absolute top-2 right-2 md:top-10 md:right-10 rotate-6 px-4 py-2 rounded-full"
        style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft }}
      >
        📍 {ABOUT.location}
      </div>
      <div className="block md:hidden mb-6" style={{ width: "clamp(140px, 45vw, 220px)" }}>
        <img
          src={profilePhoto}
          alt="Laura Daniela"
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </div>
      <div
        className="absolute hidden md:block"
        style={{
          top: "8%",
          right: "18%",
          width: "clamp(140px, 16vw, 240px)",
        }}
      >
        <img
          src={profilePhoto}
          alt="Laura Daniela"
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </div>

      <h1 style={{ fontFamily: FONT_SERIF, fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 1.05, color: C.ink }}>
        Laura Daniela
        <br />
        <span style={{ fontStyle: "italic", color: C.inkSoft }}>Software Engineer.</span>
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
        {/* Cursor parpadeante simulado con Tailwind */}
        <span className="animate-pulse inline-block ml-1 [animation-duration:1.5s]">
          |
        </span>
      </p>

      {/* 2. Nuevo contenedor de etiquetas (Status & Roles) */}
      <div className="flex flex-wrap items-center gap-3 mt-8">
        
        {/* Etiqueta Destacada: Open to work */}
        <div
          className="flex items-center gap-2 backdrop-blur-md bg-green-50/40 border border-green-200/50 transition-colors cursor-default"
          style={{
            color: "#15803d", // Verde más oscuro para contraste
            fontFamily: FONT_MONO,
            fontSize: 13,
            padding: "6px 14px",
            borderRadius: 9999, // Bordes completamente redondeados estilo 'pill'
          }}
        >
          {/* Animación del punto verde */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Open to work
        </div>

        {/* Etiquetas de Roles mapeadas */}
        {ROLES.map((role) => (
          <div
            key={role}
            className="backdrop-blur-md bg-white/30 border border-white/60 hover:bg-white/50 transition-colors cursor-default"
            style={{ 
              fontFamily: FONT_MONO, 
              fontSize: 13, 
              color: C.ink, 
              padding: "6px 14px", 
              borderRadius: 9999 
            }}
          >
            {role}
          </div>
        ))}
      </div>

      {/* Who I am */}
      <div className="grid md:grid-cols-12 gap-12 items-center mt-24">
        <div className="md:col-span-7 space-y-5">
          <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 30, color: C.ink }}>
            Who I am
          </h2>
          {ABOUT.bio.map((p, i) => (
            <p key={i} style={{ fontFamily: FONT_BODY, fontSize: 16, color: C.inkSoft, lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
        </div>

        <div className="md:col-span-5 relative h-[420px] hidden md:block">
          <div className="photo-polaroid absolute top-0 left-0 w-44 -rotate-6 z-10">
            <img src={heroPhoto} alt="Building" className="w-full h-44 object-cover grayscale" style={{ display: "block" }} />
            <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 14, display: "block", marginTop: 6 }}>
              Building.
            </span>
          </div>

          <div className="sticker absolute bottom-6 right-0 w-56 rotate-3 z-20 p-5">
            <h3 style={{ fontFamily: FONT_SERIF, fontSize: 20, marginBottom: 6, color: C.ink }}>
              {PROYECTO_ADA.title}
            </h3>
            <p style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkSoft, lineHeight: 1.6 }}>
              {PROYECTO_ADA.body}
            </p>
          </div>
        </div>
      </div>

      <CurrentlyStrip reduced={reduced} />
    </header>
  );
}