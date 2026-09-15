import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 500,
        height: 500,
        marginLeft: -250,
        marginTop: -250,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
        filter: "blur(20px)",
        willChange: "transform",
      }}
    />
  );
}