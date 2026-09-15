import React from "react";
import { C, FONT_MONO } from "../theme";
import { SKILLS } from "../data/skills";
import SectionEyebrow from "./shared/SectionEyebrow";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <SectionEyebrow n="01" label="TOOLKIT" />
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="sticker"
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              color: C.inkSoft,
              padding: "6px 12px",
              borderRadius: 999,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}