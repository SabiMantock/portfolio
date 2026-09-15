"use client";

import { useVisible } from "../hooks/use-visible";
import { EXP, EDU } from "./data";
import { ExpRow } from "./experience-row";
import { EduRow } from "./education-row";
import { blue, edge, sg } from "@/components/portfolio/tokens";

export function Experience() {
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

