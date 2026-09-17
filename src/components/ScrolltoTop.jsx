import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../theme";

// Icono de flecha hacia arriba SVG
function ArrowUpIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  );
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar el scroll de la página
  useEffect(() => {
    const toggleVisibility = () => {
      // Si el usuario baja más de 400px, mostramos el botón
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // Posicionado fijo en la esquina inferior derecha
          className="fixed bottom-8 right-6 md:right-8 z-50 p-3 flex items-center justify-center rounded-full shadow-md backdrop-blur-md transition-colors"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: `1px solid ${C.line}`,
            color: C.ink,
          }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}