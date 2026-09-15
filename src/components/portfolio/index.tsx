"use client";

import { useCallback, useState } from "react";
import { Intro } from "./intro/intro";
import { Nav } from "./navigation/navigation";
import { Hero } from "./hero/hero";
import { Work } from "./projects/work";
import { StackTicker } from "./stack/stack-ticker";
import { Experience } from "./experience/experience";
import { Footer } from "./footer/footer";
import { ink } from "@/components/portfolio/tokens";

export function Portfolio() {
  const [ready, setReady] = useState(false);
  const finishIntro = useCallback(() => setReady(true), []);

  return (
    <div style={{ background:ink, minHeight:"100vh" }}>
      {!ready && <Intro onDone={finishIntro} />}
      <Nav />

      <Hero ready={ready} />

      <Work />

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

