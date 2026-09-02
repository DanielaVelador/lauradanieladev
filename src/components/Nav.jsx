import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_MONO } from "../theme";
import { NAV } from "../data/nav";
import { LIKES } from "../data/likes";

export default function Nav({ likesOpen, setLikesOpen }) {
  const [active, setActive] = useState("");
  const [hintHover, setHintHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: `${C.paper}E6`,
        backdropFilter: "blur(6px)",
        borderBottom: `1px solid ${C.line}`,
      }}
      className="w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4">
        <div className="flex items-center gap-3" style={{ position: "relative" }}>
          <a href="#top" style={{ fontFamily: FONT_MONO, color: C.ink, fontSize: 13 }}>
            lauradaniela.dev
          </a>
          <button
            onClick={() => setLikesOpen(!likesOpen)}
            onMouseEnter={() => setHintHover(true)}
            onMouseLeave={() => setHintHover(false)}
            onFocus={() => setHintHover(true)}
            onBlur={() => setHintHover(false)}
            aria-label="things I like"
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              color: likesOpen || hintHover ? C.accent : C.inkFaint,
              border: `1px solid ${likesOpen || hintHover ? C.accent : C.line}`,
              width: 22,
              height: 22,
              lineHeight: 1,
              transition: "all 0.15s ease",
            }}
          >
            ?
          </button>
          <AnimatePresence>
            {hintHover && !likesOpen && (
              <motion.span
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 30,
                  whiteSpace: "nowrap",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.inkFaint,
                  background: C.paper,
                  border: `1px solid ${C.line}`,
                  padding: "3px 8px",
                  zIndex: 45,
                }}
              >
                things I like
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <ul className="flex flex-wrap gap-5">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  color: active === n.id ? C.ink : C.inkSoft,
                  borderBottom: active === n.id ? `2px solid ${C.accent}` : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {likesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 24,
              background: C.paper,
              border: `1px solid ${C.line}`,
              padding: "16px 20px",
              zIndex: 50,
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint, marginBottom: 8 }}>
              things I like
            </p>
            {LIKES.map((l, i) => (
              <p key={l} style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.ink, marginTop: 4 }}>
                <span style={{ color: C.accent }}>0{i + 1} — </span>
                {l}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
