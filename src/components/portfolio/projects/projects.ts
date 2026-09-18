"use client";

import { BillyIllustration } from "./billy-illustration";
import { DkleenerPreview } from "./dkleener-preview";
import { HeyIllustration } from "./hey-illustration";
import { blue, orange } from "@/components/portfolio/tokens";

export const PROJECTS = [
  {
    n:"01", title:"Billy", accent: blue, Vis: BillyIllustration,
    label:"Collaborative project",
    desc:"A full-stack marketplace for discovering and booking billboard and property advertising space across Ghana, from catalogue browsing through booking.",
    stack:["React","Node.js","MongoDB","Cloudflare R2"],
    href:"https://billy-frontend.vercel.app/",
  },
  {
    n:"02", title:"Dkleener", accent: orange, Vis: DkleenerPreview,
    desc:"A responsive website for a cleaning business, bringing residential, commercial, industrial, and specialist services into one clear experience. Built with reusable components, service discovery, and a guided enquiry form.",
    stack:["Next.js","React","TypeScript","Tailwind CSS"],
    href:"https://dkleener.vercel.app/",
  },
  { n:"03", title:"DevComm1",  accent: blue,   Vis: HeyIllustration     },
];
