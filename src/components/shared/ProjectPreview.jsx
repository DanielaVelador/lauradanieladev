import React from "react";
import { C } from "../../theme";

export default function ProjectPreview({ project }) {
  return (
    <svg width="100%" height="140" viewBox="0 0 400 140" preserveAspectRatio="none" style={{ display: "block" }}>
      <rect x="0" y="0" width="400" height="140" fill={C.paperSoft} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={20 + i * 130} y="20" width="100" height="12" fill={C.line} />
      ))}
      <rect x="20" y="50" width="360" height="1" fill={C.line} />
      {project.tags.map((t, i) => (
        <rect
          key={t}
          x={20 + i * 90}
          y={70}
          width={Math.min(80, t.length * 6)}
          height="18"
          fill="none"
          stroke={C.inkFaint}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
