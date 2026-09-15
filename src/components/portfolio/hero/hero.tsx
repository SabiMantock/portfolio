"use client";

import { blue, orange, bone, dim, sg } from "@/components/portfolio/tokens";

export function Hero({ ready }: { ready: boolean }) {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "80px 40px 60px",
      maxWidth: 1200, margin: "0 auto",
      overflow: "hidden",
    }}>

      {/* geometric fragments */}
      {[
        { w:64, h:64, top:"18%", left:"72%", border:`1.5px solid ${blue}`, opacity:.35,
          animation:"driftA 7s ease-in-out infinite" },
        { w:32, h:32, top:"28%", left:"85%", background:blue, borderRadius:"50%", opacity:.12,
          animation:"driftB 9s ease-in-out infinite" },
        { w:2, h:88, top:"45%", left:"68%", background:orange, opacity:.4,
          animation:"driftA 11s ease-in-out 2s infinite" },
        { w:80, h:2, top:"60%", left:"60%", background:bone, opacity:.07,
          animation:"driftB 8s ease-in-out 1s infinite" },
        { w:28, h:28, bottom:"22%", left:"78%", border:`1.5px solid ${orange}`,
          borderRadius:"50%", opacity:.3, animation:"driftC 10s ease-in-out 3s infinite" },
      ].map((f, i) => (
        <div key={i} style={{ position:"absolute", ...f as React.CSSProperties, width:f.w, height:f.h, pointerEvents:"none" }} />
      ))}

      {/* staggered name */}
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ overflow:"hidden" }}>
          <div style={{
            fontFamily: sg,
            fontSize: "clamp(72px,12vw,160px)",
            fontWeight: 700, lineHeight: 0.92, color: bone,
            letterSpacing: "-0.045em",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(.16,1,.3,1) 0.1s",
          }}>Sabi</div>
        </div>
        <div style={{ overflow:"hidden" }}>
          <div style={{
            fontFamily: sg,
            fontSize: "clamp(72px,12vw,160px)",
            fontWeight: 700, lineHeight: 0.92, color: bone,
            letterSpacing: "-0.045em",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.75s ease 0.28s, transform 0.75s cubic-bezier(.16,1,.3,1) 0.28s",
          }}>Mantock</div>
        </div>

        <div style={{
          marginTop: 24,
          opacity: ready ? 1 : 0,
          transform: ready ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
        }}>
          <span style={{
            fontFamily: sg, fontSize: "clamp(20px,3vw,36px)", fontWeight: 400,
            color: blue, letterSpacing: "-0.015em",
          }}>Software Engineer</span>
        </div>

        <p style={{
          fontFamily: sg, fontSize: 16, fontWeight: 300,
          color: dim, lineHeight: 1.7, maxWidth: 420, marginTop: 28,
          opacity: ready ? 1 : 0,
          transform: ready ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
        }}>
          React · React Native · Next.js · TypeScript · Node.js.
          <br />Building interfaces that do what people expect.
        </p>
      </div>

      {/* scroll cue */}
      <div style={{
        position: "absolute", bottom: 40, left: 40,
        display: "flex", alignItems: "center", gap: 12,
        opacity: ready ? 1 : 0,
        transition: "opacity 0.6s ease 0.9s",
      }}>
        <div style={{
          width: 1, height: 48,
          background: `linear-gradient(to bottom, transparent, ${blue})`,
          animation: "scrollLine 2s ease-in-out infinite",
          transformOrigin: "top",
        }} />
        <span style={{
          fontFamily: sg, fontSize: 11, color: dim,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>Scroll to explore</span>
      </div>
    </section>
  );
}

