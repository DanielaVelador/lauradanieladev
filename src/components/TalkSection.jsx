import React from "react";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";
import SectionEyebrow from "./shared/SectionEyebrow";

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", Icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/your-handle", Icon: GithubIcon },
  { label: "Email", href: "mailto:you@email.com", Icon: Mail },
  { label: "CV", href: "#", Icon: FileText },
];

export default function TalkSection() {
  return (
    <section id="talk" className="max-w-5xl mx-auto px-6 py-24">
      <SectionEyebrow n="04" label="LET'S TALK." />
      <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.8rem, 5vw, 3rem)", color: C.ink, fontWeight: 600 }}>
        Have an idea? Let's build something.
      </h2>
      <div className="flex flex-wrap gap-6 mt-8">
        {links.map(({ label, href, Icon }) => (
          <a key={label} href={href} className="flex items-center gap-2" style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.ink, borderBottom: `1px solid ${C.line}`, paddingBottom: 4 }}>
            <Icon size={16} />{label}<ArrowUpRight size={13} />
          </a>
        ))}
      </div>
      <div className="mt-14" style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.inkFaint }}>
        <p>ABOUT DANY — software engineer · educator · community builder · based in Mexico</p>
        <p style={{ marginTop: 4 }}>Also into: building things, AI/ML, learning Korean, creative technology</p>
      </div>
    </section>
  );
}
