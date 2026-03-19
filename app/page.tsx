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
    cover: "/images/seven-cover.png",
    images: ["/images/seven-01.jpeg", "/images/seven-02.jpeg", "/images/seven-03.png"],
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
    cover: "/images/butter-cover.jpeg",
    images: ["/images/butter-01.jpeg", "/images/butter-02.jpeg", "/images/butter-03.jpeg", "/images/butter-04.jpeg"],
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
    cover: "/images/indigo-cover.jpeg",
    images: ["/images/indigo-01.jpeg", "/images/indigo-02.jpeg", "/images/indigo-03.jpeg", "/images/indigo-04.jpeg"],
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
    cover: "/images/dday-cover.jpeg",
    images: ["/images/dday-01.jpeg", "/images/dday-02.jpeg", "/images/dday-03.png", "/images/dday-04.jpeg"],
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
    cover: "/images/tour-cover.jpeg",
    images: ["/images/tour-01.jpeg", "/images/tour-02.jpeg", "/images/tour-03.jpeg"],
    accent: "#6b1a6b",
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in-up, .fade-in").forEach((el) => {
      observer.observe(el);
    });

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
          <a href="#" className="font-serif text-lg tracking-tight">
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
                className="text-2xl font-serif tracking-tight text-[#0A0A0A]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.jpeg"
            alt="THE HEART OF MATTER"
            fill
            className="object-cover opacity-[0.08]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B6B6B] mb-4 md:mb-6">
              Creative Direction Collective
            </p>
          </div>
          <h1 className="fade-in-up stagger-1">
            <span className="block font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight">
              THE HEART
            </span>
            <span className="block font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight">
              OF MATTER
            </span>
          </h1>
          <div className="fade-in-up stagger-2 mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="max-w-md text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light">
              Translating the hidden Heart into tangible Matter.
              <br />A borderless creative practice visualizing the essence.
            </p>
            <a
              href="#work"
              className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-[#0A0A0A] pb-1 self-start md:self-auto hover:border-[#E85D4A] hover:text-[#E85D4A] transition-colors"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform">
                <IconArrowRight />
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#6B6B6B]">
          <IconArrowDown />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-6">
                About Us
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
                Fulfilling a need.
                <br />
                Creating a feeling.
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-2">
              <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                <p className="text-lg md:text-xl font-light">
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

          {/* What Makes Us Different */}
          <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                What Makes Us Different
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight mb-6">
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
                  src="/images/concept-01.jpeg"
                  alt="Creative concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section id="work" className="py-24 md:py-40 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <div className="fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                Selected Work
              </p>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
                Projects
              </h2>
            </div>
            <p className="hidden md:block text-xs text-[#6B6B6B] tracking-[0.2em] uppercase fade-in-up stagger-1">
              {projects.length} Projects
            </p>
          </div>

          <div className="space-y-32 md:space-y-48">
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
                    <h3 className="font-serif text-4xl md:text-6xl tracking-tight">
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
                    className="object-cover"
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
                      className="text-[10px] tracking-[0.15em] uppercase border border-[#E0E0E0] px-3 py-1.5 text-[#6B6B6B]"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            sizes="(max-width: 768px) 100vw, 700px"
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
      <section id="services" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-24">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                Services
              </p>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`fade-in-up stagger-${idx + 1} bg-white p-8 md:p-10`}
              >
                <div className="flex items-start justify-between mb-8">
                  <h3 className="font-serif text-xl tracking-tight">{service.title}</h3>
                  <span className="text-xs text-[#E85D4A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#6B6B6B] flex items-start gap-3"
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
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              Methodology
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
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
                <h4 className="font-serif text-lg mt-3 mb-3">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              Work Process
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
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
                <h3 className="font-serif text-2xl mb-8">{phase.title}</h3>
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
                src="/images/process-visual.jpeg"
                alt="Work process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALLIANCE ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                The Collective
              </p>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
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
      <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 fade-in-up">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E85D4A] mb-6">
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
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
