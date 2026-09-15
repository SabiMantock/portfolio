"use client";

import { dim, edge, sg } from "@/components/portfolio/tokens";

const STACK = ["React","React Native","Next.js","TypeScript","Node.js","Expo",
               "PostgreSQL","Firebase","Stripe","Mapbox","Tailwind CSS","Git","GitHub","JavaScript"];

export function StackTicker() {
  const items = [...STACK, ...STACK];
  return (
    <section id="stack" style={{
      borderTop:`1px solid ${edge}`, borderBottom:`1px solid ${edge}`,
      background:"#161616", padding:"20px 0", overflow:"hidden",
    }}>
      <div style={{
        display:"flex", gap:0, whiteSpace:"nowrap",
        animation:"ticker 28s linear infinite",
        width:"max-content",
      }}>
        {items.map((s,i)=>(
          <span key={i} style={{
            fontFamily:sg, fontSize:13, fontWeight:500, color:dim,
            padding:"0 28px",
          }}>
            {s}
            <span style={{ color:edge, marginLeft:28 }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

