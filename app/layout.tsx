import type { Metadata } from "next";
import { Chiron_Hei_HK, DM_Serif_Display, Outfit, Syne, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const dmSans = Chiron_Hei_HK({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["200"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const comfortaa = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["700"],
  style: ["normal"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${dmSans.variable} ${outfit.variable} ${dmSerif.variable} ${comfortaa.variable} ${syne.variable} font-sans antialiased bg-white text-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
