import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabi Mantock — Software Engineer",
  description: "Portfolio of Sabi Mantock, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
