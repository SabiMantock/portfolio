"use client";

import { BillyIllustration } from "./billy-illustration";
import { PayClickIllustration } from "./pay-click-illustration";
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
  { n:"02", title:"Dkleener",  accent: orange, Vis: PayClickIllustration },
  { n:"03", title:"DevComm1",  accent: blue,   Vis: HeyIllustration     },
];

