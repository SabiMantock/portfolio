"use client";

import { useVisible } from "../hooks/use-visible";
import { FooterLink } from "./footer-link";
import { bone, edge, sg } from "@/components/portfolio/tokens";

export function Footer() {
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

