import React from "react";
import { C, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../theme";
import SectionEyebrow from "./shared/SectionEyebrow";
import FacetHeader from "./shared/FacetHeader";
import Timeline from "./shared/Timeline";

export default function CareSection({ reduced }) {
  return (
    <section id="care" style={{ background: C.paperSoft }} className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionEyebrow n="03" label="WHY DO I CARE?" />
        <FacetHeader
          label="COMMUNITY BUILDER"
          lines={["I build spaces where more people belong.", "Sometimes it's a workshop.", "Sometimes it's one girl asking \u201ccan I try?\u201d", "Sometimes it's showing up, again."]}
        />
        <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: C.ink, fontWeight: 600, maxWidth: 640, marginTop: 8 }}>
          Code should have more voices.
        </h2>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <p style={{ fontFamily: FONT_BODY, color: C.inkSoft, fontSize: 15, lineHeight: 1.7 }}>
            I co-founded a coding community built for girls and teenagers — a space to learn, build, and see technology as something they can shape, not just use. It exists because too many people never get the chance to try, and because the earlier that changes, the more it compounds.
          </p>
          <div>
            <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkFaint }}>HOW IT STARTED</p>
            <Timeline reduced={reduced} />
          </div>
        </div>
      </div>
    </section>
  );
}
