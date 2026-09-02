import React from "react";
import { motion } from "framer-motion";
import { C, FONT_MONO } from "../../theme";
import { TIMELINE } from "../../data/timeline";

export default function Timeline({ reduced }) {
  return (
    <div className="mt-10">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3 }}
      >
        {TIMELINE.map((t, i) => (
          <div
            key={t.n}
            className="flex items-baseline gap-4"
            style={{ padding: "10px 0", borderBottom: i < TIMELINE.length - 1 ? `1px solid ${C.line}` : "none" }}
          >
            <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.inkFaint }}>{t.n}</span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.ink }}>{t.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
