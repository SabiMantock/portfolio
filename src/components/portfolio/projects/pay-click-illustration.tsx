"use client";

import { orange, bone, dim, edge } from "@/components/portfolio/tokens";

export function PayClickIllustration() {
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

