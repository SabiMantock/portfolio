"use client";

import { useVisible } from "../hooks/use-visible";
import { EXP } from "./data";
import { blue, bone, dim, edge, sg } from "@/components/portfolio/tokens";

export function ExpRow({ item, delay }: { item: typeof EXP[0]; delay: number }) {
  const { ref, visible } = useVisible(0.15);
  return (
    <div ref={ref} style={{
      display:"grid", gridTemplateColumns:"220px 1fr", gap:"0 56px",
      padding:"32px 0", borderTop:`1px solid ${edge}`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition:`opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }} className="reveal-item exp-row">
      <div>
        <p style={{ fontFamily:sg, fontSize:12, color:`rgba(245,241,232,0.28)`, marginBottom:8 }}>{item.period}</p>
        <p style={{ fontFamily:sg, fontSize:16, fontWeight:600, color:bone, letterSpacing:"-0.01em" }}>{item.company}</p>
      </div>
      <div>
        <p style={{ fontFamily:sg, fontSize:14, fontWeight:500, color:dim, marginBottom:12 }}>{item.title}</p>
        <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:7 }}>
          {item.notes.map((n,i)=>(
            <li key={i} style={{ display:"flex", gap:10, fontSize:14, color:`rgba(245,241,232,0.35)`, lineHeight:1.6 }}>
              <span style={{ color:blue, flexShrink:0 }}>—</span>{n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

