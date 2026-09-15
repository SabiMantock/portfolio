"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ── tokens ───────────────────────────────────────────────────────────────── */
const blue   = "#345CFF";
const orange = "#FF5A36";
const bone   = "#F5F1E8";
const ink    = "#111111";
const dim    = "rgba(245,241,232,0.42)";
const edge   = "rgba(245,241,232,0.10)";
const sg     = "'Space Grotesk', system-ui, sans-serif";

/* ── tiny hook: observe once ──────────────────────────────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ══════════════════════════════════════════════════════════════════════════
   INTRO
══════════════════════════════════════════════════════════════════════════ */
function Intro({ onDone }: { onDone: () => void }) {
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

/* ══════════════════════════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════════════════════════ */
function Nav() {
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

/* ══════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════ */
function Hero({ ready }: { ready: boolean }) {
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

/* ══════════════════════════════════════════════════════════════════════════
   PROJECT ILLUSTRATIONS
══════════════════════════════════════════════════════════════════════════ */

function BillyIllustration() {
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

function PayClickIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" style={{ width:"100%", height:"100%" }}>
      {/* ripples from center */}
      {[0,1,2,3].map(i=>(
        <circle key={i} cx="200" cy="180" r="4" fill="none" stroke={orange} strokeWidth="1.5">
          <animate attributeName="r" values="4;110" dur="2.4s" begin={`${i*0.6}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin={`${i*0.6}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* phone */}
      <rect x="140" y="60" width="120" height="200" rx="18" fill="rgba(17,17,17,0.9)" stroke={edge} strokeWidth="1.5"/>
      <rect x="150" y="78" width="100" height="140" rx="8" fill="#1a1a1a"/>
      <rect x="172" y="65" width="36" height="7" rx="3.5" fill={edge}/>
      {/* screen */}
      <rect x="158" y="88" width="84" height="5" rx="2.5" fill={edge}/>
      <rect x="158" y="100" width="84" height="32" rx="5" fill="#1e1e1e" stroke={edge} strokeWidth="1"/>
      <rect x="166" y="109" width="28" height="4" rx="2" fill={dim}/>
      <rect x="166" y="117" width="48" height="7" rx="2" fill={bone} opacity="0.7"/>
      <rect x="158" y="140" width="84" height="1" fill={edge}/>
      <rect x="158" y="148" width="36" height="4" rx="2" fill={dim}/>
      <rect x="158" y="158" width="64" height="7" rx="2" fill={bone} opacity="0.5"/>
      {/* pay button */}
      <rect x="158" y="178" width="84" height="26" rx="6" fill={orange}/>
      <rect x="184" y="188" width="32" height="5" rx="2.5" fill="white" opacity="0.85"/>
      {/* home bar */}
      <rect x="180" y="248" width="40" height="3" rx="1.5" fill={edge}/>
      {/* tap indicator */}
      <circle cx="200" cy="191" r="20" fill="none" stroke={orange} strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="20;36" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0" dur="1.2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}


function HeyIllustration() {
  const nodes: [number, number][] = [[200,140],[100,80],[300,75],[90,195],[310,200],[200,250]];
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4]] as [number,number][];
  return (
    <svg viewBox="0 0 400 320" fill="none" style={{ width:"100%", height:"100%" }}>
      {edges.map(([a,b],i)=>{
        const [x1,y1] = nodes[a], [x2,y2] = nodes[b];
        
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={blue} strokeWidth="1"
            pathLength="1"
            style={{
              strokeDasharray:1, strokeDashoffset:1,
              animation:`lineAppear 1.5s ease forwards`,
              animationDelay:`${i*0.25}s`,
              opacity:0,
            }}
          />
        );
      })}
      {nodes.map(([cx,cy],i)=>(
        <g key={i}>
          {/* outer glow */}
          <circle cx={cx} cy={cy} r="18" fill={i===0 ? blue : "transparent"}
            opacity={i===0 ? 0.08 : 0}
            style={{ animation:`nodePulse ${2+i*0.4}s ease-in-out ${i*0.3}s infinite` }}
          />
          <circle cx={cx} cy={cy} r={i===0 ? 14 : 10}
            fill={i===0 ? `${blue}25` : "#1a1a1a"}
            stroke={i===0 ? blue : edge}
            strokeWidth={i===0 ? "1.5" : "1"}
            style={{ animation:`nodePulse ${2.5+i*0.3}s ease-in-out ${i*0.4}s infinite` }}
          />
          {/* avatar lines */}
          <rect x={cx-6} y={cy-2} width="12" height="3" rx="1.5"
            fill={i===0 ? blue : dim} opacity={i===0 ? 0.7 : 0.4}/>
          <rect x={cx-4} y={cy+3} width="8" height="2" rx="1"
            fill={dim} opacity="0.25"/>
        </g>
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PROJECT SCENE
══════════════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    n:"01", title:"Billy", accent: blue, Vis: BillyIllustration,
    label:"Collaborative project",
    desc:"A full-stack marketplace for discovering and booking billboard and property advertising space across Ghana, from catalogue browsing through booking.",
    stack:["React","Node.js","MongoDB","Cloudflare R2"],
    href:"https://billy-frontend.vercel.app/",
  },
  { n:"02", title:"Dkleener",  accent: orange, Vis: PayClickIllustration },
  { n:"03", title:"DevComm1",  accent: blue,   Vis: HeyIllustration     },
];

function ProjectScene({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const { ref, visible } = useVisible(0.1);
  const { Vis } = project;
  return (
    <div ref={ref} style={{
      display:"grid", gridTemplateColumns:"1fr 1fr",
      gap:"0 48px",
      minHeight:"88vh", padding:"60px 40px",
      borderTop:`1px solid ${edge}`,
      maxWidth:1200, margin:"0 auto",
    }} className="proj-row">
      {/* text */}
      <div style={{
        display:"flex", flexDirection:"column", justifyContent:"center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:`opacity 0.7s ease ${index*0.05}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${index*0.05}s`,
      }}>
        <span style={{
          fontFamily:sg, fontSize:12, fontWeight:600, letterSpacing:"0.1em",
          color:project.accent, marginBottom:16,
        }}>{project.n}</span>
        <h2 style={{
          fontFamily:sg, fontSize:"clamp(36px,5.5vw,80px)", fontWeight:700,
          color:bone, letterSpacing:"-0.04em", lineHeight:0.96, marginBottom:24,
        }}>{project.title}</h2>
        {"desc" in project && project.desc && (
          <p style={{
            fontFamily:sg, fontSize:15, color:dim, lineHeight:1.65,
            maxWidth:420, marginBottom:24,
          }}>{project.desc}</p>
        )}
        {"stack" in project && project.stack && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
            {project.stack.map((s: string) => (
              <span key={s} style={{
                fontFamily:sg, fontSize:11, fontWeight:500,
                color:dim, border:`1px solid ${edge}`,
                borderRadius:3, padding:"3px 10px", letterSpacing:"0.02em",
              }}>{s}</span>
            ))}
          </div>
        )}
        <div style={{ display:"flex", alignItems:"center", gap:24 }}>
          <span style={{ fontFamily:sg, fontSize:12, color:`rgba(245,241,232,0.22)`, letterSpacing:"0.06em" }}>
            {"label" in project && project.label ? project.label : "Current project"}
          </span>
          {"href" in project && project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily:sg, fontSize:12, fontWeight:500,
              color:project.accent, letterSpacing:"0.04em",
              textDecoration:"none", borderBottom:`1px solid ${project.accent}`,
              paddingBottom:1, opacity:0.85,
              transition:"opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity="1")}
              onMouseLeave={e => (e.currentTarget.style.opacity="0.85")}
            >View project ↗</a>
          )}
        </div>
      </div>
      {/* illustration */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        minHeight:320,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:`opacity 0.7s ease ${index*0.05+0.15}s, transform 0.7s ease ${index*0.05+0.15}s`,
      }}>
        <Vis />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   STACK TICKER
══════════════════════════════════════════════════════════════════════════ */
const STACK = ["React","React Native","Next.js","TypeScript","Node.js","Expo",
               "PostgreSQL","Firebase","Stripe","Mapbox","Tailwind CSS","Git","GitHub","JavaScript"];

function StackTicker() {
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

/* ══════════════════════════════════════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════════════════════════════════════ */
const EXP = [
  {
    company:"Adaptive Computer Solutions", title:"Operational Support Engineer",
    period:"Sep 2023 – Nov 2024",
    notes:[
      "Provided technical support and maintained internal tooling across operations.",
      "Worked on frontend components and interfaces as part of the support function.",
      "Collaborated with engineering on documenting and resolving recurring technical issues.",
    ],
  },
  {
    company:"Black Labs", title:"Frontend Developer", period:"Sep 2021 – May 2023",
    notes:[
      "Built and maintained React components for client-facing web products.",
      "Developed cross-platform mobile views with React Native.",
      "Implemented UI from design specs and contributed to component architecture.",
    ],
  },
  {
    company:"Ent Transport", title:"Operations Officer", period:"Dec 2017 – Jun 2020",
    notes:[
      "Coordinated logistics and operational workflows in a transport environment.",
      "Managed records and stakeholder communication.",
    ],
  },
];

const EDU = [
  { institution:"Microverse", qual:"Full Stack Web Development", period:"2022 – 2023" },
  { institution:"Ghana Technology University College", qual:"Diploma in IT", period:"2015 – 2017" },
];

function ExpRow({ item, delay }: { item: typeof EXP[0]; delay: number }) {
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

function EduRow({ item, delay }: { item: typeof EDU[0]; delay: number }) {
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

function Experience() {
  const { ref, visible } = useVisible(0.1);
  return (
    <section id="experience" style={{ maxWidth:1200, margin:"0 auto", padding:"80px 40px" }}>
      <h2 style={{
        fontFamily:sg, fontSize:11, fontWeight:600,
        letterSpacing:"0.12em", textTransform:"uppercase",
        color:`rgba(245,241,232,0.28)`, marginBottom:40,
      }}>Experience</h2>

      {/* timeline line */}
      <div ref={ref} style={{ position:"relative" }}>
        <div style={{
          position:"absolute", left:0, top:0, bottom:0,
          width:1, background:blue, transformOrigin:"top",
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transition:"transform 1.4s cubic-bezier(.16,1,.3,1)",
          marginLeft:-40, opacity:0.4,
        }}/>
        {EXP.map((e,i)=><ExpRow key={e.company} item={e} delay={i*0.12}/>)}
        <div style={{ borderTop:`1px solid ${edge}` }}/>

        <h2 style={{
          fontFamily:sg, fontSize:11, fontWeight:600,
          letterSpacing:"0.12em", textTransform:"uppercase",
          color:`rgba(245,241,232,0.28)`, margin:"48px 0 32px",
        }}>Education</h2>
        {EDU.map((e,i)=>(
          <EduRow key={e.institution} item={e} delay={i*0.1}/>
        ))}
        <div style={{ borderTop:`1px solid ${edge}` }}/>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════════ */
function FooterLink({ href, children, external }: {
  href: string; children: React.ReactNode; external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [off, setOff] = useState({ x:0, y:0 });
  return (
    <a ref={ref} href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={e => {
        const r = ref.current!.getBoundingClientRect();
        setOff({ x:(e.clientX-r.left-r.width/2)*0.35, y:(e.clientY-r.top-r.height/2)*0.35 });
      }}
      onMouseLeave={() => setOff({ x:0, y:0 })}
      style={{
        display:"inline-block", fontFamily:sg, fontSize:14, fontWeight:500,
        color:dim, textDecoration:"none",
        transform:`translate(${off.x}px,${off.y}px)`,
        transition:"transform 0.35s cubic-bezier(.16,1,.3,1), color 0.15s",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = bone)}
    >{children}</a>
  );
}

function Footer() {
  const { ref, visible } = useVisible(0.1);
  return (
    <footer id="contact" style={{
      borderTop:`1px solid ${edge}`,
      background:"#0d0d0d",
    }}>
      <div ref={ref} style={{
        maxWidth:1200, margin:"0 auto",
        padding:"80px 40px 48px",
      }}>
        <h2 style={{
          fontFamily:sg,
          fontSize:"clamp(28px,5vw,64px)",
          fontWeight:700, color:bone,
          letterSpacing:"-0.045em", lineHeight:0.9,
          marginBottom:48,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(.16,1,.3,1)",
        }}>
          Sabi<br/>Mantock
        </h2>

        <div style={{
          display:"flex", gap:40, flexWrap:"wrap",
          borderTop:`1px solid ${edge}`, paddingTop:28,
          opacity: visible ? 1 : 0,
          transition:"opacity 0.6s ease 0.2s",
        }}>
          <FooterLink href="https://github.com/sabimantock" external>GitHub ↗</FooterLink>
          <FooterLink href="https://linkedin.com/in/sabimantock" external>LinkedIn ↗</FooterLink>
          <FooterLink href="mailto:sabimantock@gmail.com">sabimantock@gmail.com</FooterLink>
        </div>

        <div style={{
          marginTop:48, paddingTop:20, borderTop:`1px solid ${edge}`,
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12,
        }}>
          <span style={{ fontFamily:sg, fontSize:12, color:`rgba(245,241,232,0.2)` }}>
            © {new Date().getFullYear()} Sabi Mantock
          </span>
          <span style={{ fontFamily:sg, fontSize:12, color:`rgba(245,241,232,0.2)` }}>
            Software Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════════════════════════ */
export function Portfolio() {
  const [ready, setReady] = useState(false);
  const finishIntro = useCallback(() => setReady(true), []);

  return (
    <div style={{ background:ink, minHeight:"100vh" }}>
      {!ready && <Intro onDone={finishIntro} />}
      <Nav />

      <Hero ready={ready} />

      <section id="work" style={{ paddingTop:40 }}>
        <div style={{
          maxWidth:1200, margin:"0 auto", padding:"0 40px 0",
          display:"flex", justifyContent:"space-between", alignItems:"baseline",
          marginBottom:8,
        }}>
          <h2 style={{
            fontFamily:sg, fontSize:11, fontWeight:600,
            letterSpacing:"0.12em", textTransform:"uppercase",
            color:`rgba(245,241,232,0.28)`,
          }}>Work</h2>
          <span style={{ fontFamily:sg, fontSize:11, color:`rgba(245,241,232,0.2)` }}>
            3 projects
          </span>
        </div>
        {PROJECTS.map((p,i) => <ProjectScene key={p.n} project={p} index={i}/>)}
      </section>

      <StackTicker />
      <Experience />
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .proj-row { grid-template-columns: 1fr !important; gap: 32px !important; min-height: auto !important; }
          .exp-row  { grid-template-columns: 1fr !important; gap: 10px !important; }
          section   { padding-left: 20px !important; padding-right: 20px !important; }
          header > div { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}

