import React from "react";
import { C, FONT_MONO } from "../theme";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}`, fontFamily: FONT_MONO }} className="py-8 px-6 max-w-6xl mx-auto">
      
      {/* Barra Inferior (Status y Copyright) */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs" style={{ color: C.inkFaint }}>
        
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          Colima, MX
        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} Laura Daniela. All rights reserved.
        </div>
      </div>
      
    </footer>
  );
}