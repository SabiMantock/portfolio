"use client";

import { blue, dim, edge } from "@/components/portfolio/tokens";

export function HeyIllustration() {
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

