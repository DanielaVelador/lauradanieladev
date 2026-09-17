import React from "react";
import { motion } from "framer-motion";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";

// Iconos SVG 
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default function TalkSection() {
  return (
    <section id="talk" className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: C.ink, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        Got a project in mind?<br />Let's make it happen.
      </h2>
      
      <p className="mt-6 mx-auto max-w-xl text-center" style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.inkFaint, lineHeight: 1.6 }}>
        I'm a software engineer crafting complete digital experiences. I work directly with clients to take web projects from initial concept to final deployment, handling every step of the process.
      </p>

      {/* Solo Iconos de Redes Sociales y Contacto */}
      <div className="flex items-center justify-center gap-4 mt-10">
        
        <motion.a
          href="mailto:lauradanieladev@gmail.com"
          whileHover={{ scale: 1.1, y: -2, color: "#EA4335" }} // Rojo Google
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full flex items-center justify-center transition-colors shadow-sm"
          style={{ 
            color: C.inkFaint,
            border: `1px solid ${C.line}`,
            backgroundColor: "transparent"
          }}
          aria-label="Gmail"
        >
          <MailIcon size={18} />
        </motion.a>

        <motion.a
          href="https://github.com/DanielaVelador"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2, color: C.ink }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full flex items-center justify-center transition-colors shadow-sm"
          style={{ 
            color: C.inkFaint,
            border: `1px solid ${C.line}`,
            backgroundColor: "transparent"
          }}
          aria-label="GitHub"
        >
          <GithubIcon size={18} />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/danielavelador"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2, color: "#0A66C2" }} // Azul LinkedIn
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full flex items-center justify-center transition-colors shadow-sm"
          style={{ 
            color: C.inkFaint,
            border: `1px solid ${C.line}`,
            backgroundColor: "transparent"
          }}
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </motion.a>

        <motion.a
          href="https://instagram.com/lauradaniela.dev" // <-- Recuerda cambiar tu usuario aquí
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2, color: "#E1306C" }} // Magenta Instagram
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full flex items-center justify-center transition-colors shadow-sm"
          style={{ 
            color: C.inkFaint,
            border: `1px solid ${C.line}`,
            backgroundColor: "transparent"
          }}
          aria-label="Instagram"
        >
          <InstagramIcon size={18} />
        </motion.a>

      </div>
    </section>
  );
}