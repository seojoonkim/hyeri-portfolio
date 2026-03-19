import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "THE HEART OF MATTER — Creative Direction Collective",
  description:
    "Translating the hidden Heart into tangible Matter. A borderless creative practice visualizing the essence.",
  openGraph: {
    title: "THE HEART OF MATTER",
    description:
      "Creative Direction Collective — Translating the hidden Heart into tangible Matter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased bg-white text-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
