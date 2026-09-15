"use client";

import { useVisible } from "../hooks/use-visible";
import { EDU } from "./data";
import { bone, dim, edge, sg } from "@/components/portfolio/tokens";

export function EduRow({ item, delay }: { item: typeof EDU[0]; delay: number }) {
  const { ref, visible } = useVisible(0.1);
  return (
    <div ref={ref} style={{
      display:"grid", gridTemplateColumns:"220px 1fr", gap:"0 56px",
      padding:"24px 0", borderTop:`1px solid ${edge}`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition:`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }} className="reveal-item exp-row">
      <div>
        <p style={{ fontFamily:sg, fontSize:12, color:`rgba(245,241,232,0.28)`, marginBottom:8 }}>{item.period}</p>
        <p style={{ fontFamily:sg, fontSize:15, fontWeight:600, color:bone }}>{item.institution}</p>
      </div>
      <div style={{ display:"flex", alignItems:"center" }}>
        <p style={{ fontFamily:sg, fontSize:14, color:dim }}>{item.qual}</p>
      </div>
    </div>
  );
}

