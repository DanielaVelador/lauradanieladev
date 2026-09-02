import React, { useState } from "react";
import "../fonts.css";
import { useReducedMotion } from "../hooks/useReducedMotion";
import Nav from "./Nav";
import Hero from "./Hero";
import BuildSection from "./BuildSection";
import TeachSection from "./TeachSection";
import CareSection from "./CareSection";
import TalkSection from "./TalkSection";
import Footer from "./Footer";
import { C } from "../theme";

export default function Portfolio() {
  const reduced = useReducedMotion();
  const [likesOpen, setLikesOpen] = useState(false);

  return (
    <div style={{ background: C.paper, minHeight: "100vh", position: "relative" }}>
      <Nav likesOpen={likesOpen} setLikesOpen={setLikesOpen} />
      <Hero reduced={reduced} />
      <BuildSection reduced={reduced} />
      <TeachSection reduced={reduced} />
      <CareSection reduced={reduced} />
      <TalkSection />
      <Footer />
    </div>
  );
}
