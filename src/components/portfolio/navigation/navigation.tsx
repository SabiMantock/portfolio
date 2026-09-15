"use client";

import { useEffect, useState } from "react";
import { bone, dim, edge, sg } from "@/components/portfolio/tokens";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <header style={{
      position: "fixed", inset: "0 0 auto", zIndex: 100,
      borderBottom: `1px solid ${scrolled ? edge : "transparent"}`,
      background: scrolled ? "rgba(17,17,17,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 40px",
        height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: sg, fontSize: 15, fontWeight: 700, color: bone, letterSpacing: "-0.02em",
        }}>SM</button>
        <nav style={{ display: "flex", gap: 32 }}>
          {["work","stack","experience","contact"].map(id => (
            <button key={id} onClick={() => go(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: sg, fontSize: 13, color: dim,
              textTransform: "capitalize", letterSpacing: "0.01em",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = bone)}
              onMouseLeave={e => (e.currentTarget.style.color = dim)}
            >{id}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

