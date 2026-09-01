import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, FONT_MONO } from "../theme";

export default function Footer() {
  const [egg, setEgg] = useState(false);
  return (
    <footer style={{ borderTop: `1px solid ${C.line}` }} className="py-8">
      <button
        onClick={() => setEgg(!egg)}
        style={{ display: "block", margin: "0 auto", fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint }}
      >
        code, people & curiosity.
      </button>
      <AnimatePresence>
        {egg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.accent, textAlign: "center", marginTop: 6 }}
          >
            (you found this. hi. — dany)
          </motion.p>
        )}
      </AnimatePresence>
    </footer>
  );
}
