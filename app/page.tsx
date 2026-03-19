"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── SVG Icons (stroke-based, inline) ─── */
const IconArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

/* ─── About Gallery Images ─── */
const aboutGallery = [
  "/images/img_008_00.jpeg",
  "/images/img_008_48.jpeg",
  "/images/img_008_42.jpeg",
];

/* ─── Project Data ─── */
const projects = [
  {
    id: "seven",
    title: "SEVEN",
    artist: "BTS JUNGKOOK",
    subtitle: "The 1st Album (Pre-single)",
    category: "Brand Strategy / Visual Identity Direction / Typography System / Artwork & Promotion Plan Direction",
    description:
      "Developed brand strategy and visual identity for Jungkook's first global single 'SEVEN' to present a strong, intuitive impression as a global pop artist. Centered on the 'OVERLAPPED' concept; developed logotype and graphic system, extended from digital cover to release promotion planning.",
    cover: "/images/img_010_02.jpeg",
    images: [
      "/images/img_010_00.jpeg",
      "/images/img_010_01.jpeg",
      "/images/img_010_03.jpeg",
      "/images/img_011_00.jpeg",
      "/images/img_011_01.jpeg",
      "/images/img_011_02.jpeg",
      "/images/img_011_03.jpeg",
      "/images/img_011_04.jpeg",
      "/images/img_011_05.jpeg",
      "/images/img_011_06.jpeg",
      "/images/img_011_07.png",
    ],
    accent: "#1a6b3c",
  },
  {
    id: "butter",
    title: "Butter / Permission to Dance",
    artist: "BTS",
    subtitle: "Physical Single Album",
    category: "Total Branding / Brand Strategy / Visual Identity Design / Campaign Creative / Promotion Content / Package Design",
    description:
      "Post-pandemic message of moving toward a better tomorrow; introduced BTS's new phase. Expanded concept from brand strategy to visual identity, album package, release promotion, and multiple content genres to present a combined music-visual-campaign album experience.",
    cover: "/images/img_012_00.png",
    images: [
      "/images/img_013_00.jpeg",
      "/images/img_013_01.jpeg",
      "/images/img_013_02.jpeg",
      "/images/img_013_03.jpeg",
      "/images/img_013_04.jpeg",
      "/images/img_013_05.jpeg",
      "/images/img_013_06.jpeg",
      "/images/img_013_07.jpeg",
      "/images/img_013_08.jpeg",
      "/images/img_013_09.jpeg",
      "/images/img_013_10.jpeg",
      "/images/img_013_11.jpeg",
      "/images/img_013_12.jpeg",
      "/images/img_013_13.jpeg",
      "/images/img_014_00.jpeg",
    ],
    accent: "#f5c518",
  },
  {
    id: "indigo",
    title: "Indigo",
    artist: "BTS RM",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Creative Direction / Brand & Visual Identity / Artwork Direction / Package Design / Content Visual Direction",
    description:
      "Designed brand strategy and scalable creative direction to define RM's independent phase and a record of youth. Centered on concept 'Piece of Mine'; extended visual identity and logotype to package, content, and MD, attempting an archive-type album experience.",
    cover: "/images/img_015_00.jpeg",
    images: [
      "/images/img_016_00.jpeg",
      "/images/img_016_01.jpeg",
      "/images/img_016_02.jpeg",
      "/images/img_016_03.jpeg",
      "/images/img_016_04.jpeg",
      "/images/img_016_05.jpeg",
      "/images/img_016_06.jpeg",
      "/images/img_016_07.jpeg",
      "/images/img_016_08.jpeg",
      "/images/img_016_10.jpeg",
      "/images/img_016_11.jpeg",
    ],
    accent: "#1a3a6b",
  },
  {
    id: "dday",
    title: "D-DAY",
    artist: "SUGA / Agust D",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Creative Direction / Brand Identity / Visual Identity / Contents Creative Direction / Graphic Design",
    description:
      "Focused on visually interpreting the artist's trauma and stereotypes and the resulting conflict. Built the 'GLITCH' concept and extended it to visual identity, album package, graphics, and MD, completing a consistent visual system for the artist's inner narrative.",
    cover: "/images/img_017_00.jpeg",
    images: [
      "/images/img_018_00.jpeg",
      "/images/img_018_01.jpeg",
      "/images/img_018_02.jpeg",
      "/images/img_018_03.jpeg",
      "/images/img_018_04.jpeg",
      "/images/img_018_05.jpeg",
      "/images/img_018_06.jpeg",
      "/images/img_018_07.png",
      "/images/img_018_08.png",
      "/images/img_018_09.jpeg",
      "/images/img_018_11.jpeg",
      "/images/img_018_12.jpeg",
    ],
    accent: "#2a2a2a",
  },
  {
    id: "tour",
    title: "Tour Series",
    artist: "BTS",
    subtitle: "Love Yourself / Map of the Soul / Permission to Dance",
    category: "Visual Identity / Brand Identity / Package Design / Poster Design",
    description:
      "Love Yourself and Map of the Soul series, Permission to Dance tour: expanded album visual identity concept into B.I (brand identity), photo visuals, content, and tour graphics.",
    cover: "/images/img_019_03.jpeg",
    images: [
      "/images/img_019_00.png",
      "/images/img_019_01.jpeg",
      "/images/img_019_02.jpeg",
      "/images/img_019_04.jpeg",
    ],
    accent: "#6b1a6b",
  },
  {
    id: "astronaut",
    title: "The Astronaut",
    artist: "BTS JIN",
    subtitle: "Single Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    description:
      "Created a distinctive visual identity for Jin's solo single 'The Astronaut', capturing the cosmic journey and emotional farewell through cohesive branding across all touchpoints.",
    cover: "/images/img_020_00.png",
    images: [
      "/images/img_020_01.png",
    ],
    accent: "#3a5a8c",
  },
  {
    id: "jackinthebox",
    title: "Jack In The Box",
    artist: "BTS j-hope",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    description:
      "Designed brand strategy and visual identity for j-hope's debut solo album, translating his artistic duality into a bold visual language that bridges street culture and fine art.",
    cover: "/images/img_021_00.jpeg",
    images: [
      "/images/img_021_01.jpeg",
      "/images/img_021_02.png",
      "/images/img_021_03.png",
    ],
    accent: "#c44536",
  },
  {
    id: "dynamite",
    title: "DYNAMITE",
    artist: "BTS",
    subtitle: "Digital Single",
    category: "Brand Identity",
    description:
      "Developed the brand identity system for BTS's first English-language single 'Dynamite', creating a retro-pop visual language that complemented the song's energetic and uplifting message.",
    cover: "/images/img_022_00.jpeg",
    images: [
      "/images/img_022_01.jpeg",
      "/images/img_022_02.jpeg",
      "/images/img_022_03.jpeg",
      "/images/img_022_04.jpeg",
      "/images/img_022_05.jpeg",
      "/images/img_022_06.jpeg",
      "/images/img_022_07.jpeg",
      "/images/img_022_08.jpeg",
    ],
    accent: "#e88d3c",
  },
  {
    id: "weverse",
    title: "Weverse Con",
    artist: "HYBE",
    subtitle: "Festival Branding",
    category: "Creative Direction / Visual Direction / Graphic Design / Content Direction",
    description:
      "Directed the creative vision for Weverse Con festival, designing a cohesive visual system spanning naming, graphic identity, content, and spatial planning for an immersive fan experience.",
    cover: "/images/img_023_00.jpeg",
    images: [
      "/images/img_024_00.jpeg",
      "/images/img_024_01.jpeg",
      "/images/img_024_02.jpeg",
      "/images/img_024_03.jpeg",
      "/images/img_024_04.jpeg",
      "/images/img_024_06.jpeg",
      "/images/img_024_08.jpeg",
      "/images/img_024_09.jpeg",
      "/images/img_024_10.jpeg",
      "/images/img_024_11.jpeg",
      "/images/img_024_12.jpeg",
      "/images/img_024_13.jpeg",
      "/images/img_024_14.jpeg",
      "/images/img_024_15.jpeg",
    ],
    accent: "#5c2d91",
  },
  {
    id: "tws",
    title: "Sparkling Blue",
    artist: "TWS",
    subtitle: "Debut Album",
    category: "Brand Identity / Graphic Design Direction",
    description:
      "Crafted the brand identity and graphic design direction for TWS's debut album 'Sparkling Blue', establishing a fresh, youthful visual language for the new generation group.",
    cover: "/images/img_025_00.jpeg",
    images: [
      "/images/img_025_01.png",
      "/images/img_026_00.jpeg",
    ],
    accent: "#2e86de",
  },
  {
    id: "haon",
    title: "HAONOAH",
    artist: "HAON",
    subtitle: "Album",
    category: "Graphic Design / Merchandise Development / Package Design",
    description:
      "Developed graphic design, merchandise, and package design for HAON's 'HAONOAH' project, creating a unified visual system that reflects the artist's unique creative identity.",
    cover: "/images/img_027_01.jpeg",
    images: [
      "/images/img_027_00.jpeg",
      "/images/img_027_02.png",
      "/images/img_028_00.jpeg",
    ],
    accent: "#4a4a4a",
  },
  {
    id: "txt-freeze",
    title: "FREEZE",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 2nd Album",
    category: "Brand Identity / Graphic Design Direction",
    description:
      "Designed brand identity and graphic direction for TXT's 'FREEZE' album, capturing the frozen youth narrative through a crisp, icy visual system.",
    cover: "/images/img_029_03.jpeg",
    images: [
      "/images/img_029_00.jpeg",
      "/images/img_029_01.jpeg",
      "/images/img_029_02.jpeg",
      "/images/img_029_04.png",
    ],
    accent: "#89c4f4",
  },
  {
    id: "txt-bluehour",
    title: "Blue Hour",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 3rd Mini Album",
    category: "Brand Identity / Package Design",
    description:
      "Created brand identity and package design for TXT's 'Blue Hour' mini album, translating the magical hour between day and night into tangible visual experiences.",
    cover: "/images/img_030_00.jpeg",
    images: [
      "/images/img_030_01.png",
    ],
    accent: "#ff7e47",
  },
  {
    id: "txt-eternity",
    title: "ETERNITY",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 2nd Mini Album",
    category: "Brand Identity / Creative Direction",
    description:
      "Developed brand identity and creative direction for TXT's 'ETERNITY', building a visual system around the concept of eternal youth and fantasy.",
    cover: "/images/img_031_00.jpeg",
    images: [
      "/images/img_031_01.png",
    ],
    accent: "#6c5ce7",
  },
  {
    id: "txt-magic",
    title: "MAGIC",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 1st Album",
    category: "Brand Identity / Creative Direction",
    description:
      "Created brand identity and creative direction for TXT's debut album 'MAGIC', establishing the group's initial visual DNA and magical narrative.",
    cover: "/images/img_032_00.jpeg",
    images: [
      "/images/img_032_01.png",
    ],
    accent: "#00b894",
  },
  {
    id: "fx-4walls",
    title: "4 WALLS",
    artist: "f(x)",
    subtitle: "The 4th Album",
    category: "Graphic Design",
    description:
      "Designed the graphic identity for f(x)'s '4 WALLS' album, creating an abstract geometric visual language that matched the group's experimental sound.",
    cover: "/images/img_033_00.jpeg",
    images: [
      "/images/img_034_00.jpeg",
    ],
    accent: "#636e72",
  },
  {
    id: "redvelvet",
    title: "The Red",
    artist: "Red Velvet",
    subtitle: "The 1st Album",
    category: "Graphic Design",
    description:
      "Created graphic design for Red Velvet's first full album 'The Red', defining the group's bold color-driven visual identity.",
    cover: "/images/img_035_00.jpeg",
    images: [
      "/images/img_036_00.png",
    ],
    accent: "#e74c3c",
  },
  {
    id: "various",
    title: "Selected Works",
    artist: "Various Artists",
    subtitle: "Red Velvet · SHINee · TAEYEON · SUPER JUNIOR · and more",
    category: "Graphic Design / Package Design / Visual Direction",
    description:
      "A collection of graphic design and visual direction work across multiple K-pop artists and projects, showcasing versatile creative execution.",
    cover: "/images/img_037_08.jpeg",
    images: [
      "/images/img_037_00.jpeg",
      "/images/img_037_01.jpeg",
      "/images/img_037_02.jpeg",
      "/images/img_037_03.jpeg",
      "/images/img_037_04.jpeg",
      "/images/img_037_06.jpeg",
      "/images/img_037_07.jpeg",
      "/images/img_037_09.jpeg",
      "/images/img_037_10.jpeg",
      "/images/img_037_12.jpeg",
      "/images/img_037_13.jpeg",
      "/images/img_037_15.jpeg",
      "/images/img_037_16.jpeg",
      "/images/img_037_18.jpeg",
      "/images/img_037_19.jpeg",
      "/images/img_037_22.jpeg",
      "/images/img_037_23.jpeg",
      "/images/img_038_00.jpeg",
      "/images/img_038_01.jpeg",
      "/images/img_038_02.jpeg",
      "/images/img_038_03.jpeg",
      "/images/img_038_04.jpeg",
      "/images/img_038_05.jpeg",
      "/images/img_038_06.jpeg",
    ],
    accent: "#2d3436",
  },
];

const services = [
  {
    title: "Brand Strategy",
    items: ["Brand Diagnosis", "Brand Essence", "Value Proposition", "Brand Positioning", "Communication Strategy", "Customer Experience Design"],
  },
  {
    title: "Creative Direction",
    items: ["Artist Reading", "Narrative Design", "Aesthetic Translation", "Release Planning", "Visual Consistency Management"],
  },
  {
    title: "Visual Identity",
    items: ["Logo & Typography", "Dedicated Type Systems", "Graphic Design", "Editorial Design", "Imagery & Film"],
  },
  {
    title: "Production",
    items: ["Package Design", "Campaign Creative", "Promotion Content", "MD Concept & Execution", "Stage & Live Visual Direction", "Spatial Planning"],
  },
];

const processPhases = [
  {
    phase: "PHASE 1",
    title: "Discovery & Strategy",
    steps: ["Client Request", "Client Meeting", "Internal Planning", "Proposal", "Client Confirm", "Execution"],
  },
  {
    phase: "PHASE 2",
    title: "Creation & Delivery",
    steps: ["Strategy Analysis", "Project Concepting", "Producing & Sourcing", "Visual Directing", "Content Delivery", "Release Direction"],
  },
];

/* ─── Concept Gallery (from PDF intro pages) ─── */
const conceptImages = [
  "/images/img_008_31.jpeg",
  "/images/img_008_35.jpeg",
  "/images/img_008_39.jpeg",
  "/images/img_008_40.jpeg",
  "/images/img_008_44.jpeg",
  "/images/img_008_45.jpeg",
  "/images/img_008_46.jpeg",
  "/images/img_008_47.jpeg",
  "/images/img_008_49.jpeg",
  "/images/img_008_53.jpeg",
  "/images/img_008_58.jpeg",
  "/images/img_008_59.jpeg",
  "/images/img_008_63.jpeg",
  "/images/img_008_64.jpeg",
];

/* ─── Navigation Links ─── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/* ─── Main Component ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  /* Scroll observer for animations */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up, .fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#E0E0E0]/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-heading text-lg tracking-tight font-semibold">
            THOM
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading tracking-tight text-[#0A0A0A]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img_008_48.jpeg"
            alt="THE HEART OF MATTER"
            fill
            className="object-cover brightness-[0.15]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full text-white">
          <div className="fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4 md:mb-6">
              Creative Direction Collective
            </p>
          </div>
          <h1 className="fade-in-up stagger-1">
            <span className="block font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
              THE HEART
            </span>
            <span className="block font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
              OF MATTER
            </span>
          </h1>
          <div className="fade-in-up stagger-2 mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="max-w-md text-white/70 text-base md:text-lg leading-relaxed font-light">
              Translating the hidden Heart into tangible Matter.
              <br />A borderless creative practice visualizing the essence.
            </p>
            <a
              href="#work"
              className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-white pb-1 self-start md:self-auto hover:border-[#E85D4A] hover:text-[#E85D4A] transition-colors"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform">
                <IconArrowRight />
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <IconArrowDown />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-6">
                About Us
              </p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight tracking-tight">
                Fulfilling a need.
                <br />
                Creating a feeling.
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-2">
              <div className="space-y-6 text-[#6B6B6B] text-base md:text-lg leading-relaxed">
                <p className="font-light">
                  THE HEART OF MATTER sees each concept as a process of interpretation 
                  that expands into diverse experiences.
                </p>
                <p>
                  Based on branding strategy, we materialize invisible senses into form, 
                  and create unified experiences across every touchpoint where artists and fans meet.
                </p>
                <p className="text-sm" lang="ko">
                  THE HEART OF MATTER 는 하나의 개념이 다양한 경험으로 확장되는 해석의 과정으로 바라봅니다. 
                  브랜딩 전략을 바탕으로 보이지 않는 감각을 형태로 구체화 하고, 
                  아티스트와 팬이 만나는 모든 접점을 하나의 경험으로 만들어 갑니다.
                </p>
              </div>
            </div>
          </div>

          {/* About Gallery */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 fade-in-up stagger-3">
            {aboutGallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden img-hover">
                <Image
                  src={img}
                  alt={`About gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>
            ))}
          </div>

          {/* What Makes Us Different */}
          <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-4 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                What Makes Us Different
              </p>
              <h3 className="font-heading text-2xl md:text-3xl leading-tight tracking-tight mb-6">
                From Identity
                <br />
                to Experience
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                We start from an artist&apos;s identity to design standards and direction. 
                Expanding concepts consistently across music, visuals, content, and experiences 
                to build a clear, unforgettable impression.
              </p>
            </div>
            <div className="md:col-span-8 fade-in-up stagger-2">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden img-hover">
                <Image
                  src="/images/img_008_01.jpeg"
                  alt="Creative concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONCEPT GALLERY (scrolling strip) ─── */}
      <section className="py-12 md:py-16 bg-[#0A0A0A] overflow-hidden">
        <div className="flex gap-4 animate-[scroll_40s_linear_infinite] w-max">
          {[...conceptImages, ...conceptImages].map((img, i) => (
            <div key={i} className="relative w-48 md:w-64 aspect-[3/2] rounded-sm overflow-hidden shrink-0">
              <Image
                src={img}
                alt={`Concept ${i + 1}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section id="work" className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <div className="fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                Selected Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
                Projects
              </h2>
            </div>
            <p className="hidden md:block text-xs text-[#6B6B6B] tracking-[0.2em] uppercase fade-in-up stagger-1">
              {projects.length} Projects
            </p>
          </div>

          <div className="space-y-24 md:space-y-40">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="fade-in-up"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">
                      {project.artist}
                    </p>
                    <h3 className="font-heading text-3xl md:text-6xl tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] mt-2">{project.subtitle}</p>
                  </div>
                  <span className="text-xs tracking-[0.2em] text-[#6B6B6B] font-light">
                    {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Cover Image */}
                <button
                  onClick={() =>
                    setActiveProject(activeProject === project.id ? null : project.id)
                  }
                  className="relative w-full aspect-[16/9] rounded-sm overflow-hidden img-hover project-card group cursor-pointer block"
                >
                  <Image
                    src={project.cover}
                    alt={`${project.artist} - ${project.title}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 1400px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-xs tracking-[0.2em] uppercase flex items-center gap-2">
                      View Details <IconArrowUpRight />
                    </span>
                  </div>
                </button>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.category.split(" / ").map((cat) => (
                    <span
                      key={cat}
                      className="text-xs tracking-[0.15em] uppercase border border-[#E0E0E0] px-3 py-1.5 text-[#6B6B6B]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {activeProject === project.id && (
                  <div className="mt-8 md:mt-12 space-y-8 animate-[fadeIn_0.5s_ease]">
                    <p className="max-w-2xl text-[#6B6B6B] leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-[16/9] rounded-sm overflow-hidden img-hover"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} detail ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 700px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-24">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                Services
              </p>
              <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
                What We Do
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-1">
              <p className="text-[#6B6B6B] leading-relaxed max-w-xl">
                We operate an alliance network, collaborating with optimal talent for each project.
                From brand strategy through visual direction to final delivery, we build cohesive creative systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`fade-in-up stagger-${idx + 1} bg-white border border-[#E0E0E0] p-8 md:p-10`}
              >
                <div className="flex items-start justify-between mb-8">
                  <h3 className="font-heading text-xl tracking-tight font-medium">{service.title}</h3>
                  <span className="text-xs text-[#E85D4A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#6B6B6B] leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E85D4A] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              Methodology
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
              Creative Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {[
              { step: "01", title: "Artist Reading", desc: "Analyzing current state and interpreting the artist's narrative" },
              { step: "02", title: "Narrative Design", desc: "Designing album narrative and deriving direction aligned with career trajectory" },
              { step: "03", title: "Aesthetic Translation", desc: "Sequentially expanding music into visual, tactile, and experiential dimensions" },
              { step: "04", title: "Imagery", desc: "Photography and film direction to capture the artistic vision" },
              { step: "05", title: "Systemization", desc: "Content, spatial, and fan experience communication plan execution" },
              { step: "06", title: "Media & Spatial", desc: "Promotion planning and spatial design for immersive experiences" },
            ].map((item, idx) => (
              <div key={item.step} className={`fade-in-up stagger-${idx + 1}`}>
                <span className="text-[#E85D4A] text-xs tracking-[0.2em]">{item.step}</span>
                <h4 className="font-heading text-lg mt-3 mb-3 font-medium">{item.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Methodology visual strip */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-2 fade-in-up">
            {["/images/img_008_12.jpeg", "/images/img_008_23.png", "/images/img_008_56.jpeg", "/images/img_008_65.jpeg"].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src={img} alt={`Method ${i + 1}`} fill className="object-cover opacity-60" sizes="350px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              Work Process
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
              From Request to Release
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {processPhases.map((phase, pi) => (
              <div key={phase.phase} className={`fade-in-up stagger-${pi + 1}`}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs tracking-[0.2em] text-[#E85D4A]">
                    {phase.phase}
                  </span>
                  <div className="flex-1 h-px bg-[#E0E0E0]" />
                </div>
                <h3 className="font-heading text-2xl mb-8">{phase.title}</h3>
                <div className="space-y-6">
                  {phase.steps.map((step, si) => (
                    <div key={step} className="flex items-start gap-4 group">
                      <span className="text-xs text-[#6B6B6B] mt-1 w-6">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 border-b border-[#E0E0E0] pb-4 group-hover:border-[#E85D4A] transition-colors">
                        <p className="text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Image */}
          <div className="mt-16 md:mt-24 fade-in-up">
            <div className="relative aspect-[21/9] rounded-sm overflow-hidden img-hover">
              <Image
                src="/images/img_008_49.jpeg"
                alt="Work process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALLIANCE ─── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                The Collective
              </p>
              <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
                Alliance Network
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-1">
              <p className="text-[#6B6B6B] leading-relaxed mb-12">
                We operate an alliance network, collaborating with optimal talent for each project.
                Core internal direction combined with collaborations across art, styling, video, space, and content.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {["Brand Strategy", "A&R", "Creative Direction", "Visual Direction", "Style Direction", "Graphic Design"].map(
                  (role, idx) => (
                    <div key={role} className={`fade-in-up stagger-${idx + 1}`}>
                      <div className="w-10 h-px bg-[#E85D4A] mb-4" />
                      <p className="text-sm font-medium">{role}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative py-20 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img_008_00.jpeg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-6">
                Contact
              </p>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                Let&apos;s create
                <br />
                something
                <br />
                together.
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end fade-in-up stagger-2">
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:hello@theheartofmatter.com"
                    className="text-lg flex items-center gap-3 hover:text-[#E85D4A] transition-colors group"
                  >
                    <IconMail />
                    <span className="border-b border-white/20 pb-0.5 group-hover:border-[#E85D4A]">
                      hello@theheartofmatter.com
                    </span>
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                    Project Proposals
                  </p>
                  <a
                    href="mailto:project@theheartofmatter.com"
                    className="text-lg flex items-center gap-3 hover:text-[#E85D4A] transition-colors group"
                  >
                    <IconMail />
                    <span className="border-b border-white/20 pb-0.5 group-hover:border-[#E85D4A]">
                      project@theheartofmatter.com
                    </span>
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                    Based in Seoul, Working Globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 md:px-12 bg-[#0A0A0A] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-[0.1em]">
            &copy; 2026 THE HEART OF MATTER. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
