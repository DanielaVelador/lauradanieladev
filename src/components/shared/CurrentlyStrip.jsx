import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_MONO } from "../../theme";
import { CURRENTLY } from "../../data/currently";

export default function CurrentlyStrip({ reduced }) {
  const [indices, setIndices] = useState(CURRENTLY.map(() => 0));

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      setIndices((prev) => prev.map((i, idx) => (i + 1) % CURRENTLY[idx].values.length));
    }, 4200);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <div
      style={{ marginTop: 56, paddingTop: 20, borderTop: `1px solid ${C.line}` }}
      className="flex flex-wrap gap-x-10 gap-y-2"
    >
      {CURRENTLY.map((c, idx) => (
        <p key={c.label} style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint }}>
          {c.label} <span style={{ color: C.inkFaint }}>→</span>{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={c.values[indices[idx]]}
              initial={reduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? {} : { opacity: 0 }}
              style={{ color: C.inkSoft, display: "inline-block" }}
            >
              {c.values[indices[idx]]}
            </motion.span>
          </AnimatePresence>
        </p>
      ))}
    </div>
  );
}
