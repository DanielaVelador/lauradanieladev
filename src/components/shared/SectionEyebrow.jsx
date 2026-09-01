import React from "react";
import { C, FONT_MONO } from "../../theme";

export default function SectionEyebrow({ n, label }) {
  return (
    <p style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkFaint, marginBottom: 20 }}>
      /{n} — {label}
    </p>
  );
}
