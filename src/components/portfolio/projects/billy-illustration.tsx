"use client";

import { orange, bone } from "@/components/portfolio/tokens";

export function BillyIllustration() {
  const amber  = "#F59E0B";
  const navy   = "#0F1B3D";
  const muted  = "#7C3A6B";
  return (
    <div style={{ position:"relative", width:"100%", height:360, display:"flex", alignItems:"center", justifyContent:"center" }}>

      {/* ── background orbit shapes ── */}
      <div style={{
        position:"absolute", width:260, height:90, borderRadius:999,
        border:`2px solid ${orange}`, opacity:0.18,
        top:"8%", left:"2%",
        animation:"orbitA 11s ease-in-out infinite",
      }}/>
      <div style={{
        position:"absolute", width:180, height:180, borderRadius:999,
        border:`1.5px solid ${amber}`, opacity:0.13,
        bottom:"6%", right:"4%",
        animation:"orbitB 14s ease-in-out infinite",
      }}/>
      <div style={{
        position:"absolute", width:140, height:50, borderRadius:999,
        background:`linear-gradient(135deg,${navy} 0%,transparent 100%)`,
        border:`1px solid ${navy}`, opacity:0.55,
        top:"32%", right:"0%",
        animation:"orbitC 18s ease-in-out infinite",
      }}/>
      <div style={{
        position:"absolute", width:90, height:90, borderRadius:999,
        border:`1px solid ${muted}`, opacity:0.20,
        bottom:"18%", left:"8%",
        animation:"orbitD 9s ease-in-out infinite",
      }}/>
      <div style={{
        position:"absolute", width:320, height:50,
        background:`linear-gradient(90deg,${orange}22 0%,${amber}11 50%,transparent 100%)`,
        borderRadius:999,
        top:"60%", left:"-4%",
        animation:"orbitA 22s ease-in-out 4s infinite",
        filter:"blur(6px)",
      }}/>

      {/* ── browser window ── */}
      <div style={{
        position:"relative", width:340, borderRadius:14,
        background:"#171717",
        border:`1px solid rgba(245,241,232,0.12)`,
        boxShadow:`0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(245,241,232,0.04)`,
        animation:"billyRise 0.9s cubic-bezier(.16,1,.3,1) both, billyFloat 6s ease-in-out 1s infinite",
        overflow:"hidden",
      }}>
        {/* chrome bar */}
        <div style={{
          display:"flex", alignItems:"center", gap:6, padding:"10px 14px",
          background:"#1e1e1e",
          borderBottom:`1px solid rgba(245,241,232,0.07)`,
        }}>
          {["#FF5F57","#FFBD2E","#28C840"].map((c,i) => (
            <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c, opacity:0.8 }}/>
          ))}
          <div style={{
            flex:1, marginLeft:8, height:18, borderRadius:4,
            background:"rgba(245,241,232,0.06)",
            display:"flex", alignItems:"center", padding:"0 8px",
          }}>
            <div style={{ width:80, height:4, borderRadius:2, background:"rgba(245,241,232,0.15)" }}/>
          </div>
        </div>

        {/* page content */}
        <div style={{ padding:"16px 16px 20px" }}>
          {/* nav */}
          <div style={{
            display:"flex", justifyContent:"space-between", alignItems:"center",
            marginBottom:14,
          }}>
            <div style={{ width:36, height:6, borderRadius:2, background:orange, opacity:0.85 }}/>
            <div style={{ display:"flex", gap:8 }}>
              {[40,30,34].map((w,i)=>(
                <div key={i} style={{ width:w, height:4, borderRadius:2, background:"rgba(245,241,232,0.15)" }}/>
              ))}
            </div>
            <div style={{ width:48, height:16, borderRadius:3, background:orange, opacity:0.9 }}/>
          </div>

          {/* hero band */}
          <div style={{
            borderRadius:8, overflow:"hidden", marginBottom:12,
            background:`linear-gradient(135deg,${navy} 0%,#1a2550 60%,#0d0d0d 100%)`,
            padding:"16px 14px",
          }}>
            <div style={{ width:100, height:5, borderRadius:2, background:"rgba(245,241,232,0.4)", marginBottom:6 }}/>
            <div style={{ width:160, height:8, borderRadius:2, background:bone, opacity:0.85, marginBottom:8 }}/>
            <div style={{ width:120, height:4, borderRadius:2, background:"rgba(245,241,232,0.25)", marginBottom:10 }}/>
            <div style={{ width:56, height:18, borderRadius:4, background:orange }}/>
          </div>

          {/* listing grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:7 }}>
            {[
              { accent:orange, h:44 },
              { accent:amber,  h:44 },
              { accent:navy,   h:44 },
              { accent:muted,  h:36 },
              { accent:orange, h:36 },
              { accent:amber,  h:36 },
            ].map(({ accent, h }, i) => (
              <div key={i} style={{
                borderRadius:5, overflow:"hidden",
                background:"#1e1e1e",
                border:`1px solid rgba(245,241,232,0.07)`,
                padding:"8px 7px",
              }}>
                <div style={{ width:"100%", height:h, borderRadius:3, background:accent, opacity:0.18, marginBottom:5 }}/>
                <div style={{ width:"80%", height:3, borderRadius:2, background:"rgba(245,241,232,0.18)", marginBottom:3 }}/>
                <div style={{ width:"55%", height:3, borderRadius:2, background:"rgba(245,241,232,0.09)" }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

