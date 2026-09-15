"use client";

import { useVisible } from "../hooks/use-visible";
import { PROJECTS } from "./projects";
import { bone, dim, edge, sg } from "@/components/portfolio/tokens";

export function ProjectScene({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
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

