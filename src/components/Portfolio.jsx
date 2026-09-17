import React, { useState } from "react";
import "../fonts.css";
import { useReducedMotion } from "../hooks/useReducedMotion";
import Nav from "./Nav";
import Hero from "./Hero";
import BuildSection from "./BuildSection";
import ExperienceSection from "./ExperienceSection";
import BeyondSection from "./BeyondSection";
import TalkSection from "./TalkSection";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";
import { C } from "../theme";
import { LanguageProvider } from "../context/LanguageContext";
import ScrollToTop from "../components/ScrolltoTop";


export default function Portfolio() {
  const reduced = useReducedMotion();
  const [likesOpen, setLikesOpen] = useState(false);

  return (
    <LanguageProvider>
    <div style={{ background: C.paper, minHeight: "100vh", position: "relative" }}>
      <Nav likesOpen={likesOpen} setLikesOpen={setLikesOpen} />
      <CursorGlow />
      <Hero reduced={reduced} />
      <BuildSection reduced={reduced} />
      <ExperienceSection reduced={reduced} />
      <TalkSection />
      <Footer />
      <ScrollToTop />
    </div>
    </LanguageProvider>
  );
}