"use client";

import { useRef, useState } from "react";
import { sg, dim, bone } from "../tokens";

export function FooterLink({ href, children, external }: {
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


