"use client";

import { PROJECTS } from "./projects";
import { ProjectScene } from "./project-scene";
import { sg } from "@/components/portfolio/tokens";

export function Work() {
  return (
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
  );
}

