"use client";

import { useEffect, useState } from "react";
import { bone, ink } from "@/components/portfolio/tokens";

export function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"draw" | "dissolve" | "gone">("draw");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("dissolve"), 1800);
    const t2 = setTimeout(() => { setPhase("gone"); onDone(); }, 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  if (phase === "gone") return null;

  return (
    <div className="intro-screen" style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: ink,
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: phase === "dissolve" ? 0 : 1,
      transition: "opacity 0.7s ease",
      pointerEvents: "none",
    }}>
      <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
        {/* S */}
        <path
          d="M58 14 C58 14 16 14 16 36 C16 58 56 52 56 70 C56 88 16 88 16 88"
          stroke={bone} strokeWidth="2.5" strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 0,
            animation: "introDraw 1.1s ease both",
            transition: "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)",
          }}
        />
        {/* M */}
        <path
          d="M78 88 L78 14 L112 58 L146 14 L146 88"
          stroke={bone} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: phase === "draw" ? 1 : 0,
            transition: "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1) 0.08s",
          }}
        />
      </svg>
    </div>
  );
}

