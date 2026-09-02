import React from "react";
import { ArrowRight } from "lucide-react";
import { C, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../../theme";
import { scrollTo } from "../../utils/scrollTo";

export default function FacetHeader({ label, lines, cta, ctaTarget }) {
  return (
    <div style={{ borderLeft: `3px solid ${C.ink}`, paddingLeft: 18, marginBottom: 28 }}>
      <p style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.inkSoft, letterSpacing: "0.04em" }}>{label}</p>
      <p style={{ fontFamily: FONT_DISPLAY, fontSize: 22, color: C.ink, marginTop: 10, fontWeight: 600 }}>
        {lines[0]}
      </p>
      <div style={{ fontFamily: FONT_BODY, color: C.inkSoft, fontSize: 15, marginTop: 8, lineHeight: 1.6 }}>
        {lines.slice(1).map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
      {cta && (
        <button
          onClick={() => scrollTo(ctaTarget)}
          className="flex items-center gap-1 mt-4"
          style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.accent }}
        >
          [ {cta} <ArrowRight size={13} /> ]
        </button>
      )}
    </div>
  );
}
