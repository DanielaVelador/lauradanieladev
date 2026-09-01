import React from "react";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";
import SectionEyebrow from "./shared/SectionEyebrow";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/your-handle", Icon: Github },
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
