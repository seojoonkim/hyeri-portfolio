'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Lang = 'ko' | 'en' | 'ja'

/* ─── SVG Icons ─── */
const IconArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)
const IconArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
)
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
)
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
)

/* ─── Multilingual Content ─── */
const content = {
  ko: {
    heroSubtitle: "크리에이티브 디렉션 콜렉티브",
    heroTagline: "우리는 장식하지 않는다. 번역한다.",
    heroTagline2: "",
    heroCta: "작업 보기",
    designerName: "이혜리",
    designerTitle: "크리에이티브 디렉터 · THE HEART OF MATTER 대표",
    designerBio1: "이혜리는 아티스트의 정체성을 시각 언어로 번역하는 크리에이티브 디렉터입니다.",
    designerBio2: "THE HEART OF MATTER를 이끌며, 브랜딩 전략에서 비주얼 아이덴티티, 앨범 패키지, 콘텐츠 크리에이티브까지 아티스트가 세상과 만나는 모든 접점을 하나의 응집된 경험으로 설계합니다.",
    designerBio3: "BTS, Jungkook, RM, SUGA/Agust D를 포함한 글로벌 아티스트들과의 협업을 통해, 그는 음악이 시작되기 이전부터 팬의 기억에 새겨지는 시각적 세계관을 만들어왔습니다.",
    designerBio4: "심장이 뛰는 곳에 물질이 생겨나고, 물질이 생겨난 곳에 세계가 열린다.",
    aboutLabel: "About Us",
    aboutTitle: "다채로움은 혼란이 아니다.\n하나의 본질이\n다양한 표면으로 드러나는 현상이다.",
    aboutDesc1: "THE HEART OF MATTER 는 하나의 개념이 다양한 경험으로 확장되는 해석의 과정으로 바라봅니다.",
    aboutDesc2: "브랜딩 전략을 바탕으로 보이지 않는 감각을 형태로 구체화 하고, 아티스트와 팬이 만나는 모든 접점을 하나의 경험으로 만들어 갑니다.",
    aboutDiffLabel: "우리의 차별점",
    aboutDiffTitle: "아이덴티티에서\n경험으로",
    aboutDiffDesc: "아티스트의 정체성에서 출발하여 기준과 방향을 설계합니다. 음악, 비주얼, 콘텐츠, 경험 전반에 걸쳐 개념을 일관되게 확장하여 선명하고 잊을 수 없는 인상을 만듭니다.",
    pullQuote: "보이지 않는 것을\n보이게 하는 것.",
    workLabel: "Selected Work",
    workTitle: "프로젝트",
    workSubtitle: "임팩트는 굉음이 아니다. 울림의 깊이다.",
    workCount: "개 프로젝트",
    servicesLabel: "Services",
    servicesTitle: "서비스 영역",
    servicesManifesto: "우리는 아티스트 뒤에 숨지 않는다. 아티스트 곁에 선다.",
    servicesDesc: "각 프로젝트에 최적화된 인재와 협업하는 얼라이언스 네트워크를 운영합니다. 브랜드 전략부터 비주얼 디렉션, 최종 딜리버리까지 응집된 크리에이티브 시스템을 구축합니다.",
    methodologyLabel: "Methodology",
    methodologyTitle: "크리에이티브 개발",
    processLabel: "Work Process",
    processTitle: "요청에서 릴리즈까지",
    contactLabel: "Contact",
    contactTitle: "함께\n만들어\n갑시다.",
    contactGeneral: "일반 문의",
    contactProject: "프로젝트 제안",
    contactLocation: "서울 기반, 글로벌 활동",
    footerCopy: "© 2026 THE HEART OF MATTER. All rights reserved.",
    viewDetails: "상세 보기",
    methodology: [
      { step: "01", title: "아티스트 리딩", desc: "현재 상태 분석 및 아티스트 서사 해석" },
      { step: "02", title: "내러티브 디자인", desc: "앨범 서사 설계 및 커리어 궤적에 맞는 방향 도출" },
      { step: "03", title: "미학적 번역", desc: "음악을 비주얼, 촉각, 경험적 차원으로 순차 확장" },
      { step: "04", title: "이미저리", desc: "예술적 비전을 포착하는 사진 및 영상 디렉션" },
      { step: "05", title: "시스템화", desc: "콘텐츠, 공간, 팬 경험 커뮤니케이션 플랜 실행" },
      { step: "06", title: "미디어 & 공간", desc: "프로모션 기획 및 몰입형 경험을 위한 공간 디자인" },
    ],
    processPhases: [
      {
        phase: "PHASE 1",
        title: "발견 & 전략",
        steps: ["— 클라이언트 요청", "— 클라이언트 미팅", "— 내부 기획", "— 제안", "— 클라이언트 확정", "— 실행"],
        desc: "클라이언트의 요청에서 시작하여 미팅을 통해 아티스트의 현재 상태와 방향성을 깊이 이해합니다. 내부 기획과 전략적 제안을 거쳐 클라이언트의 확정을 받고, 구체적인 실행 계획을 수립합니다.",
      },
      {
        phase: "PHASE 2",
        title: "제작 & 딜리버리",
        steps: ["— 전략 분석", "— 프로젝트 컨셉팅", "— 프로듀싱 & 소싱", "— 비주얼 디렉팅", "— 콘텐츠 딜리버리", "— 릴리즈 디렉션"],
        desc: "확정된 전략을 바탕으로 프로젝트 컨셉팅과 프로듀싱을 진행합니다. 비주얼 디렉팅을 통해 아티스트의 세계관을 시각 언어로 구현하고, 콘텐츠 딜리버리와 릴리즈 디렉션으로 완성된 경험을 세상에 선보입니다.",
      },
    ],
    services: [
      {
        title: "브랜드 전략",
        items: ["브랜드 진단", "브랜드 에센스", "가치 제안", "브랜드 포지셔닝", "커뮤니케이션 전략", "고객 경험 설계"],
        desc: "아티스트의 본질에서 출발합니다. 브랜드 진단과 에센스 정의를 통해 흔들리지 않는 정체성의 중심을 세우고, 가치 제안과 포지셔닝 전략으로 시장 내 고유한 위치를 설계합니다. 커뮤니케이션 전략과 고객 경험 설계까지 이어지는 통합적 접근으로, 아티스트가 세상과 만나는 모든 접점을 하나의 언어로 묶습니다.",
      },
      {
        title: "크리에이티브 디렉션",
        items: ["아티스트 리딩", "내러티브 디자인", "미학적 번역", "릴리즈 플래닝", "비주얼 일관성 관리"],
        desc: "아티스트를 깊이 읽는 것에서 시작합니다. 내러티브를 설계하고, 음악과 개념을 미학적 언어로 번역하며, 릴리즈 전 주기에 걸쳐 비주얼의 일관성을 지킵니다. 단편적인 시각물이 아닌, 아티스트의 세계관 전체를 관통하는 크리에이티브 디렉션을 제공합니다.",
      },
      {
        title: "비주얼 아이덴티티",
        items: ["로고 & 타이포그래피", "전용 서체 시스템", "그래픽 디자인", "에디토리얼 디자인", "이미저리 & 필름"],
        desc: "아티스트의 정체성을 시각 언어로 번역합니다. 로고타입과 전용 서체 시스템부터 그래픽 디자인, 에디토리얼 레이아웃, 이미저리 & 필름까지 — 모든 비주얼 요소가 단 하나의 아이덴티티를 향해 수렴하도록 설계합니다.",
      },
      {
        title: "프로덕션",
        items: ["패키지 디자인", "캠페인 크리에이티브", "프로모션 콘텐츠", "MD 컨셉 & 실행", "스테이지 & 라이브 비주얼", "공간 기획"],
        desc: "아이디어를 실체로 만듭니다. 앨범 패키지 디자인, 캠페인 크리에이티브, 프로모션 콘텐츠, MD 기획과 실행, 스테이지 비주얼, 공간 기획까지 — 팬이 아티스트를 직접 만지고 경험하는 모든 물리적·공간적 접점을 완성합니다.",
      },
    ],
    projectDescriptions: {
      seven: "정국의 첫 글로벌 싱글 'SEVEN'을 위한 브랜드 전략과 비주얼 아이덴티티를 개발하여 글로벌 팝 아티스트로서의 강렬하고 직관적인 인상을 제시. 'OVERLAPPED' 컨셉을 중심으로 로고타입과 그래픽 시스템을 개발하고 디지털 커버부터 릴리즈 프로모션 기획까지 확장.",
      butter: "팬데믹 이후 더 나은 내일을 향한 메시지를 담아 BTS의 새로운 국면을 소개. 브랜드 전략부터 비주얼 아이덴티티, 앨범 패키지, 릴리즈 프로모션, 다양한 콘텐츠 장르까지 컨셉을 확장하여 음악-비주얼-캠페인이 결합된 앨범 경험을 제시.",
      indigo: "RM의 독립적 시기와 청춘의 기록을 정의하기 위한 브랜드 전략과 확장 가능한 크리에이티브 디렉션을 설계. 'Piece of Mine' 컨셉을 중심으로 비주얼 아이덴티티와 로고타입을 패키지, 콘텐츠, MD로 확장하며 아카이브형 앨범 경험을 시도.",
      dday: "아티스트의 트라우마와 고정관념, 그로 인한 갈등을 시각적으로 해석하는 데 집중. 'GLITCH' 컨셉을 구축하고 비주얼 아이덴티티, 앨범 패키지, 그래픽, MD로 확장하여 아티스트 내면 서사를 위한 일관된 비주얼 시스템을 완성.",
      tour: "Love Yourself, Map of the Soul 시리즈, Permission to Dance 투어: 앨범 비주얼 아이덴티티 컨셉을 B.I(브랜드 아이덴티티), 포토 비주얼, 콘텐츠, 투어 그래픽으로 확장.",
      astronaut: "진의 솔로 싱글 'The Astronaut'을 위한 독자적인 비주얼 아이덴티티를 제작하여 모든 접점에서 우주적 여정과 감성적 이별을 일관된 브랜딩으로 포착.",
      jackinthebox: "j-hope의 데뷔 솔로 앨범을 위한 브랜드 전략과 비주얼 아이덴티티를 설계하여 스트리트 문화와 파인 아트를 잇는 대담한 비주얼 언어로 예술적 이중성을 번역.",
      dynamite: "BTS 첫 영어 싱글 'Dynamite'의 브랜드 아이덴티티 시스템을 개발하여 곡의 에너지 넘치고 긍정적인 메시지에 어울리는 레트로 팝 비주얼 언어를 창조.",
      weverse: "Weverse Con 페스티벌의 크리에이티브 비전을 디렉팅하며 네이밍, 그래픽 아이덴티티, 콘텐츠, 공간 기획에 이르는 일관된 비주얼 시스템을 설계하여 몰입형 팬 경험을 구현.",
      tws: "TWS 데뷔 앨범 'Sparkling Blue'의 브랜드 아이덴티티와 그래픽 디자인 디렉션을 제작하여 차세대 그룹을 위한 신선하고 젊은 비주얼 언어를 확립.",
      haon: "HAON의 'HAONOAH' 프로젝트를 위한 그래픽 디자인, 머천다이즈, 패키지 디자인을 개발하여 아티스트의 독특한 크리에이티브 정체성을 반영하는 통합 비주얼 시스템 구축.",
      "txt-freeze": "TXT의 'FREEZE' 앨범을 위한 브랜드 아이덴티티와 그래픽 디렉션을 설계하여 얼어붙은 청춘 서사를 선명하고 차가운 비주얼 시스템으로 포착.",
      "txt-bluehour": "TXT의 'Blue Hour' 미니 앨범을 위한 브랜드 아이덴티티와 패키지 디자인을 제작하여 낮과 밤 사이의 마법 같은 시간을 실체적인 비주얼 경험으로 번역.",
      "txt-eternity": "TXT의 'ETERNITY'를 위한 브랜드 아이덴티티와 크리에이티브 디렉션을 개발하여 영원한 청춘과 판타지 컨셉의 비주얼 시스템을 구축.",
      "txt-magic": "TXT 데뷔 앨범 'MAGIC'의 브랜드 아이덴티티와 크리에이티브 디렉션을 제작하여 그룹의 초기 비주얼 DNA와 마법적 서사를 확립.",
      "fx-4walls": "f(x)의 '4 WALLS' 앨범을 위한 그래픽 아이덴티티를 디자인하여 그룹의 실험적 사운드에 어울리는 추상 기하학적 비주얼 언어를 창조.",
      redvelvet: "레드벨벳 첫 정규 앨범 'The Red'의 그래픽 디자인을 제작하여 그룹의 대담한 컬러 중심 비주얼 아이덴티티를 정의.",
      various: "다수의 K-pop 아티스트와 프로젝트에 걸친 그래픽 디자인 및 비주얼 디렉션 작업 컬렉션으로 다채로운 크리에이티브 실행력을 보여줌.",
    },
  },
  en: {
    heroSubtitle: "Creative Direction Collective",
    heroTagline: "We do not decorate. We translate.",
    heroTagline2: "",
    heroCta: "View Work",
    designerName: "Hyeri Lee",
    designerTitle: "Creative Director · Founder of THE HEART OF MATTER",
    designerBio1: "Hyeri Lee is a Creative Director who translates an artist's identity into visual language.",
    designerBio2: "As the founder of THE HEART OF MATTER, she architects cohesive creative systems that span brand strategy, visual identity, album packaging, and content direction — designing every touchpoint where artists meet their world.",
    designerBio3: "Through collaborations with global artists including BTS, Jungkook, RM, and SUGA/Agust D, she has built visual universes that imprint themselves on audiences before a single note is heard.",
    designerBio4: "Where the heart beats, matter is born. Where matter is born, a world opens.",
    aboutLabel: "About Us",
    aboutTitle: "Diversity is not chaos.\nOne essence,\nmany surfaces.",
    aboutDesc1: "THE HEART OF MATTER sees each concept as a process of interpretation that expands into diverse experiences.",
    aboutDesc2: "Based on branding strategy, we materialize invisible senses into form, and create unified experiences across every touchpoint where artists and fans meet.",
    aboutDiffLabel: "What Makes Us Different",
    aboutDiffTitle: "From Identity\nto Experience",
    aboutDiffDesc: "We start from an artist's identity to design standards and direction. Expanding concepts consistently across music, visuals, content, and experiences to build a clear, unforgettable impression.",
    pullQuote: "Making the invisible\nvisible.",
    workLabel: "Selected Work",
    workTitle: "Projects",
    workSubtitle: "Impact is not volume. It is depth of resonance.",
    workCount: " Projects",
    servicesLabel: "Services",
    servicesTitle: "What We Do",
    servicesManifesto: "We do not hide behind the artist. We stand beside them.",
    servicesDesc: "We operate an alliance network, collaborating with optimal talent for each project. From brand strategy through visual direction to final delivery, we build cohesive creative systems.",
    methodologyLabel: "Methodology",
    methodologyTitle: "Creative Development",
    processLabel: "Work Process",
    processTitle: "From Request to Release",
    contactLabel: "Contact",
    contactTitle: "Let's create\nsomething\ntogether.",
    contactGeneral: "General Inquiries",
    contactProject: "Project Proposals",
    contactLocation: "Based in Seoul, Working Globally",
    footerCopy: "© 2026 THE HEART OF MATTER. All rights reserved.",
    viewDetails: "View Details",
    methodology: [
      { step: "01", title: "Artist Reading", desc: "Analyzing current state and interpreting the artist's narrative" },
      { step: "02", title: "Narrative Design", desc: "Designing album narrative and deriving direction aligned with career trajectory" },
      { step: "03", title: "Aesthetic Translation", desc: "Sequentially expanding music into visual, tactile, and experiential dimensions" },
      { step: "04", title: "Imagery", desc: "Photography and film direction to capture the artistic vision" },
      { step: "05", title: "Systemization", desc: "Content, spatial, and fan experience communication plan execution" },
      { step: "06", title: "Media & Spatial", desc: "Promotion planning and spatial design for immersive experiences" },
    ],
    processPhases: [
      {
        phase: "PHASE 1",
        title: "Discovery & Strategy",
        steps: ["— Client Request", "— Client Meeting", "— Internal Planning", "— Proposal", "— Client Confirm", "— Execution"],
        desc: "Beginning with the client's request, we engage in deep dialogue to understand the artist's current state and future direction. Through internal planning and strategic proposals, we align on vision before building a concrete execution roadmap.",
      },
      {
        phase: "PHASE 2",
        title: "Creation & Delivery",
        steps: ["— Strategy Analysis", "— Project Concepting", "— Producing & Sourcing", "— Visual Directing", "— Content Delivery", "— Release Direction"],
        desc: "With strategy confirmed, we move into conceptual development and production. Visual direction brings the artist's world to life in image and form — culminating in content delivery and release direction that introduces a fully realized creative experience to the world.",
      },
    ],
    services: [
      {
        title: "Brand Strategy",
        items: ["Brand Diagnosis", "Brand Essence", "Value Proposition", "Brand Positioning", "Communication Strategy", "Customer Experience Design"],
        desc: "Everything begins with the artist's essence. Through brand diagnosis and essence definition, we establish an identity that doesn't waver — then build outward with positioning, communication strategy, and customer experience design. Every touchpoint where an artist meets their world is unified under a single, coherent language.",
      },
      {
        title: "Creative Direction",
        items: ["Artist Reading", "Narrative Design", "Aesthetic Translation", "Release Planning", "Visual Consistency Management"],
        desc: "We begin by reading the artist deeply. Narratives are designed, music and concepts are translated into aesthetic language, and visual consistency is maintained across the full release cycle. What we deliver is not a collection of visuals, but a creative direction that runs through the entirety of an artist's world.",
      },
      {
        title: "Visual Identity",
        items: ["Logo & Typography", "Dedicated Type Systems", "Graphic Design", "Editorial Design", "Imagery & Film"],
        desc: "We translate an artist's identity into visual language. From logotype and dedicated type systems to graphic design, editorial layouts, and imagery & film — every visual element is designed to converge toward a single identity.",
      },
      {
        title: "Production",
        items: ["Package Design", "Campaign Creative", "Promotion Content", "MD Concept & Execution", "Stage & Live Visual Direction", "Spatial Planning"],
        desc: "We make ideas tangible. Album package design, campaign creative, promotional content, MD concepting and execution, stage visuals, spatial planning — we complete every physical and spatial touchpoint where fans directly encounter the artist.",
      },
    ],
    projectDescriptions: {
      seven: "Developed brand strategy and visual identity for Jungkook's first global single 'SEVEN' to present a strong, intuitive impression as a global pop artist. Centered on the 'OVERLAPPED' concept; developed logotype and graphic system, extended from digital cover to release promotion planning.",
      butter: "Post-pandemic message of moving toward a better tomorrow; introduced BTS's new phase. Expanded concept from brand strategy to visual identity, album package, release promotion, and multiple content genres to present a combined music-visual-campaign album experience.",
      indigo: "Designed brand strategy and scalable creative direction to define RM's independent phase and a record of youth. Centered on concept 'Piece of Mine'; extended visual identity and logotype to package, content, and MD, attempting an archive-type album experience.",
      dday: "Focused on visually interpreting the artist's trauma and stereotypes and the resulting conflict. Built the 'GLITCH' concept and extended it to visual identity, album package, graphics, and MD, completing a consistent visual system for the artist's inner narrative.",
      tour: "Love Yourself and Map of the Soul series, Permission to Dance tour: expanded album visual identity concept into B.I (brand identity), photo visuals, content, and tour graphics.",
      astronaut: "Created a distinctive visual identity for Jin's solo single 'The Astronaut', capturing the cosmic journey and emotional farewell through cohesive branding across all touchpoints.",
      jackinthebox: "Designed brand strategy and visual identity for j-hope's debut solo album, translating his artistic duality into a bold visual language that bridges street culture and fine art.",
      dynamite: "Developed the brand identity system for BTS's first English-language single 'Dynamite', creating a retro-pop visual language that complemented the song's energetic and uplifting message.",
      weverse: "Directed the creative vision for Weverse Con festival, designing a cohesive visual system spanning naming, graphic identity, content, and spatial planning for an immersive fan experience.",
      tws: "Crafted the brand identity and graphic design direction for TWS's debut album 'Sparkling Blue', establishing a fresh, youthful visual language for the new generation group.",
      haon: "Developed graphic design, merchandise, and package design for HAON's 'HAONOAH' project, creating a unified visual system that reflects the artist's unique creative identity.",
      "txt-freeze": "Designed brand identity and graphic direction for TXT's 'FREEZE' album, capturing the frozen youth narrative through a crisp, icy visual system.",
      "txt-bluehour": "Created brand identity and package design for TXT's 'Blue Hour' mini album, translating the magical hour between day and night into tangible visual experiences.",
      "txt-eternity": "Developed brand identity and creative direction for TXT's 'ETERNITY', building a visual system around the concept of eternal youth and fantasy.",
      "txt-magic": "Created brand identity and creative direction for TXT's debut album 'MAGIC', establishing the group's initial visual DNA and magical narrative.",
      "fx-4walls": "Designed the graphic identity for f(x)'s '4 WALLS' album, creating an abstract geometric visual language that matched the group's experimental sound.",
      redvelvet: "Created graphic design for Red Velvet's first full album 'The Red', defining the group's bold color-driven visual identity.",
      various: "A collection of graphic design and visual direction work across multiple K-pop artists and projects, showcasing versatile creative execution.",
    },
  },
  ja: {
    heroSubtitle: "クリエイティブ・ディレクション・コレクティブ",
    heroTagline: "私たちは装飾しない。翻訳する。",
    heroTagline2: "",
    heroCta: "作品を見る",
    designerName: "イ・ヘリ",
    designerTitle: "クリエイティブ・ディレクター · THE HEART OF MATTER 代表",
    designerBio1: "イ・ヘリは、アーティストのアイデンティティをビジュアル言語に翻訳するクリエイティブ・ディレクターです。",
    designerBio2: "THE HEART OF MATTERを率い、ブランド戦略からビジュアル・アイデンティティ、アルバムパッケージ、コンテンツ・クリエイティブに至るまで、アーティストが世界と出会うすべての接点を、一つの凝集した体験として設計します。",
    designerBio3: "BTS、ジョングク、RM、SUGA/Agust Dをはじめとするグローバルアーティストとのコラボレーションを通じて、音楽が始まる前からオーディエンスの記憶に刻まれるビジュアルな世界観を構築してきました。",
    designerBio4: "心臓が鼓動する場所に物質が生まれ、物質が生まれた場所に世界が開く。",
    aboutLabel: "About Us",
    aboutTitle: "多様性は混沌ではない。\n一つの本質が\n様々な表面に現れる現象だ。",
    aboutDesc1: "THE HEART OF MATTERは、一つのコンセプトが多様な体験へと拡張される解釈のプロセスとして捉えます。",
    aboutDesc2: "ブランディング戦略を基盤に、見えない感覚を形に具現化し、アーティストとファンが出会うすべての接点を一つの体験として創り上げていきます。",
    aboutDiffLabel: "私たちの違い",
    aboutDiffTitle: "アイデンティティから\n体験へ",
    aboutDiffDesc: "アーティストのアイデンティティから出発し、基準と方向を設計します。音楽、ビジュアル、コンテンツ、体験全般にわたってコンセプトを一貫して拡張し、鮮明で忘れられない印象を創ります。",
    pullQuote: "見えないものを\n見えるようにすること。",
    workLabel: "Selected Work",
    workTitle: "プロジェクト",
    workSubtitle: "インパクトは轟音ではない。共鳴の深さだ。",
    workCount: "件のプロジェクト",
    servicesLabel: "Services",
    servicesTitle: "サービス領域",
    servicesManifesto: "私たちはアーティストの後ろに隠れない。アーティストの隣に立つ。",
    servicesDesc: "各プロジェクトに最適な人材と協業するアライアンスネットワークを運営しています。ブランド戦略からビジュアルディレクション、最終デリバリーまで、凝集したクリエイティブシステムを構築します。",
    methodologyLabel: "Methodology",
    methodologyTitle: "クリエイティブ開発",
    processLabel: "Work Process",
    processTitle: "リクエストからリリースまで",
    contactLabel: "Contact",
    contactTitle: "共に\n創り\nましょう。",
    contactGeneral: "一般お問い合わせ",
    contactProject: "プロジェクト提案",
    contactLocation: "ソウル拠点、グローバル活動",
    footerCopy: "© 2026 THE HEART OF MATTER. All rights reserved.",
    viewDetails: "詳細を見る",
    methodology: [
      { step: "01", title: "アーティストリーディング", desc: "現状分析とアーティストの物語の解釈" },
      { step: "02", title: "ナラティブデザイン", desc: "アルバムの物語を設計し、キャリア軌跡に合った方向を導出" },
      { step: "03", title: "美学的翻訳", desc: "音楽をビジュアル、触覚、体験的次元へ順次拡張" },
      { step: "04", title: "イメージ", desc: "芸術的ビジョンを捉える写真・映像ディレクション" },
      { step: "05", title: "システム化", desc: "コンテンツ、空間、ファン体験コミュニケーションプラン実行" },
      { step: "06", title: "メディア＆空間", desc: "プロモーション企画と没入型体験のための空間デザイン" },
    ],
    processPhases: [
      {
        phase: "PHASE 1",
        title: "発見＆戦略",
        steps: ["— クライアントリクエスト", "— クライアントミーティング", "— 内部企画", "— 提案", "— クライアント確定", "— 実行"],
        desc: "クライアントのリクエストから始まり、ミーティングを通じてアーティストの現状と方向性を深く理解します。内部企画と戦略的な提案を経て、クライアントの確認を得た後、具体的な実行計画を策定します。",
      },
      {
        phase: "PHASE 2",
        title: "制作＆デリバリー",
        steps: ["— 戦略分析", "— プロジェクトコンセプティング", "— プロデュース＆ソーシング", "— ビジュアルディレクティング", "— コンテンツデリバリー", "— リリースディレクション"],
        desc: "確定した戦略を基に、プロジェクトのコンセプティングとプロデュースを進めます。ビジュアル・ディレクティングによってアーティストの世界観を視覚言語で具現化し、コンテンツデリバリーとリリースディレクションで完成した体験を世界に届けます。",
      },
    ],
    services: [
      {
        title: "ブランド戦略",
        items: ["ブランド診断", "ブランドエッセンス", "バリュープロポジション", "ブランドポジショニング", "コミュニケーション戦略", "顧客体験設計"],
        desc: "アーティストの本質から出発します。ブランド診断とエッセンス定義を通じて、揺るぎないアイデンティティの核を確立し、バリュープロポジションとポジショニング戦略で市場における独自の位置を設計します。コミュニケーション戦略から顧客体験設計まで続く統合的アプローチで、アーティストが世界と出会うすべての接点を一つの言語で結びます。",
      },
      {
        title: "クリエイティブディレクション",
        items: ["アーティストリーディング", "ナラティブデザイン", "美学的翻訳", "リリースプランニング", "ビジュアル一貫性管理"],
        desc: "アーティストを深く読み解くことから始めます。ナラティブを設計し、音楽とコンセプトを美学的言語に翻訳し、リリース全サイクルにわたってビジュアルの一貫性を守ります。断片的なビジュアルではなく、アーティストの世界観全体を貫くクリエイティブ・ディレクションを提供します。",
      },
      {
        title: "ビジュアルアイデンティティ",
        items: ["ロゴ＆タイポグラフィ", "専用書体システム", "グラフィックデザイン", "エディトリアルデザイン", "イメージ＆フィルム"],
        desc: "アーティストのアイデンティティをビジュアル言語に翻訳します。ロゴタイプと専用書体システムから、グラフィックデザイン、エディトリアルレイアウト、イメージ&フィルムまで — すべてのビジュアル要素が単一のアイデンティティへ収束するよう設計します。",
      },
      {
        title: "プロダクション",
        items: ["パッケージデザイン", "キャンペーンクリエイティブ", "プロモーションコンテンツ", "MDコンセプト＆実行", "ステージ＆ライブビジュアル", "空間企画"],
        desc: "アイデアを実体にします。アルバムパッケージデザイン、キャンペーンクリエイティブ、プロモーションコンテンツ、MDの企画と実行、ステージビジュアル、空間企画まで — ファンがアーティストと直接触れ合うすべての物理的・空間的接点を完成させます。",
      },
    ],
    projectDescriptions: {
      seven: "ジョングク初のグローバルシングル「SEVEN」のブランド戦略とビジュアルアイデンティティを開発し、グローバルポップアーティストとしての強烈で直感的な印象を提示。「OVERLAPPED」コンセプトを中心にロゴタイプとグラフィックシステムを開発し、デジタルカバーからリリースプロモーション企画まで拡張。",
      butter: "パンデミック後のより良い明日へのメッセージを込め、BTSの新たな局面を紹介。ブランド戦略からビジュアルアイデンティティ、アルバムパッケージ、リリースプロモーション、多様なコンテンツジャンルまでコンセプトを拡張し、音楽-ビジュアル-キャンペーンが融合したアルバム体験を提示。",
      indigo: "RMの独立した時期と青春の記録を定義するブランド戦略とスケーラブルなクリエイティブディレクションを設計。「Piece of Mine」コンセプトを中心にビジュアルアイデンティティとロゴタイプをパッケージ、コンテンツ、MDへ拡張し、アーカイブ型アルバム体験を試行。",
      dday: "アーティストのトラウマとステレオタイプ、それに伴う葛藤の視覚的解釈に集中。「GLITCH」コンセプトを構築し、ビジュアルアイデンティティ、アルバムパッケージ、グラフィック、MDへ拡張し、アーティストの内面の物語のための一貫したビジュアルシステムを完成。",
      tour: "Love Yourself、Map of the Soulシリーズ、Permission to Danceツアー：アルバムビジュアルアイデンティティコンセプトをB.I（ブランドアイデンティティ）、フォトビジュアル、コンテンツ、ツアーグラフィックへ拡張。",
      astronaut: "ジンのソロシングル「The Astronaut」のための独自のビジュアルアイデンティティを制作し、すべての接点で宇宙的旅と感情的な別れを一貫したブランディングで捉えた。",
      jackinthebox: "j-hopeのデビューソロアルバムのブランド戦略とビジュアルアイデンティティを設計し、ストリートカルチャーとファインアートを結ぶ大胆なビジュアル言語で芸術的二面性を翻訳。",
      dynamite: "BTS初の英語シングル「Dynamite」のブランドアイデンティティシステムを開発し、楽曲のエネルギッシュでポジティブなメッセージに合ったレトロポップなビジュアル言語を創造。",
      weverse: "Weverse Conフェスティバルのクリエイティブビジョンをディレクティングし、ネーミング、グラフィックアイデンティティ、コンテンツ、空間企画にわたる一貫したビジュアルシステムを設計し没入型ファン体験を実現。",
      tws: "TWSデビューアルバム「Sparkling Blue」のブランドアイデンティティとグラフィックデザインディレクションを制作し、次世代グループのためのフレッシュで若いビジュアル言語を確立。",
      haon: "HAONの「HAONOAH」プロジェクトのグラフィックデザイン、マーチャンダイズ、パッケージデザインを開発し、アーティスト独自のクリエイティブアイデンティティを反映する統合ビジュアルシステムを構築。",
      "txt-freeze": "TXTの「FREEZE」アルバムのブランドアイデンティティとグラフィックディレクションを設計し、凍りついた青春の物語を鮮明で冷たいビジュアルシステムで捉えた。",
      "txt-bluehour": "TXTの「Blue Hour」ミニアルバムのブランドアイデンティティとパッケージデザインを制作し、昼と夜の間の魔法のような時間を実体的なビジュアル体験に翻訳。",
      "txt-eternity": "TXTの「ETERNITY」のブランドアイデンティティとクリエイティブディレクションを開発し、永遠の青春とファンタジーのコンセプトを中心にビジュアルシステムを構築。",
      "txt-magic": "TXTデビューアルバム「MAGIC」のブランドアイデンティティとクリエイティブディレクションを制作し、グループの初期ビジュアルDNAと魔法的な物語を確立。",
      "fx-4walls": "f(x)の「4 WALLS」アルバムのグラフィックアイデンティティをデザインし、グループの実験的なサウンドに合った抽象幾何学的ビジュアル言語を創造。",
      redvelvet: "Red Velvet初のフルアルバム「The Red」のグラフィックデザインを制作し、グループの大胆なカラー中心のビジュアルアイデンティティを定義。",
      various: "複数のK-popアーティストとプロジェクトにわたるグラフィックデザインとビジュアルディレクション作品のコレクションで、多彩なクリエイティブ実行力を展示。",
    },
  },
}

/* ─── Project Data ─── */
const projects = [
  {
    id: "seven",
    title: "SEVEN",
    artist: "BTS JUNGKOOK",
    subtitle: "The 1st Album (Pre-single)",
    category: "Brand Strategy / Visual Identity Direction / Typography System / Artwork & Promotion Plan Direction",
    cover: "/images/img_010_02.jpeg",
    images: [
      "/images/img_010_00.jpeg", "/images/img_010_01.jpeg", "/images/img_010_03.jpeg",
      "/images/img_011_00.jpeg", "/images/img_011_01.jpeg", "/images/img_011_02.jpeg",
      "/images/img_011_03.jpeg", "/images/img_011_04.jpeg", "/images/img_011_05.jpeg",
      "/images/img_011_06.jpeg", "/images/img_011_07.png",
    ],
  },
  {
    id: "butter",
    title: "Butter / Permission to Dance",
    artist: "BTS",
    subtitle: "Physical Single Album",
    category: "Total Branding / Brand Strategy / Visual Identity Design / Campaign Creative / Promotion Content / Package Design",
    cover: "/images/img_012_00.png",
    images: [
      "/images/img_013_00.jpeg", "/images/img_013_01.jpeg", "/images/img_013_02.jpeg",
      "/images/img_013_03.jpeg", "/images/img_013_04.jpeg", "/images/img_013_05.jpeg",
      "/images/img_013_06.jpeg", "/images/img_013_07.jpeg", "/images/img_013_08.jpeg",
      "/images/img_013_09.jpeg", "/images/img_013_10.jpeg", "/images/img_013_11.jpeg",
      "/images/img_013_12.jpeg", "/images/img_013_13.jpeg", "/images/img_014_00.jpeg",
    ],
  },
  {
    id: "indigo",
    title: "Indigo",
    artist: "BTS RM",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Creative Direction / Brand & Visual Identity / Artwork Direction / Package Design / Content Visual Direction",
    cover: "/images/img_015_00.jpeg",
    images: [
      "/images/img_016_00.jpeg", "/images/img_016_01.jpeg", "/images/img_016_02.jpeg",
      "/images/img_016_03.jpeg", "/images/img_016_04.jpeg", "/images/img_016_05.jpeg",
      "/images/img_016_06.jpeg", "/images/img_016_07.jpeg", "/images/img_016_08.jpeg",
      "/images/img_016_10.jpeg", "/images/img_016_11.jpeg",
    ],
  },
  {
    id: "dday",
    title: "D-DAY",
    artist: "SUGA / Agust D",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Creative Direction / Brand Identity / Visual Identity / Contents Creative Direction / Graphic Design",
    cover: "/images/img_017_00.jpeg",
    images: [
      "/images/img_018_00.jpeg", "/images/img_018_01.jpeg", "/images/img_018_02.jpeg",
      "/images/img_018_03.jpeg", "/images/img_018_04.jpeg", "/images/img_018_05.jpeg",
      "/images/img_018_06.jpeg", "/images/img_018_07.png", "/images/img_018_08.png",
      "/images/img_018_09.jpeg", "/images/img_018_11.jpeg", "/images/img_018_12.jpeg",
    ],
  },
  {
    id: "tour",
    title: "Tour Series",
    artist: "BTS",
    subtitle: "Love Yourself / Map of the Soul / Permission to Dance",
    category: "Visual Identity / Brand Identity / Package Design / Poster Design",
    cover: "/images/img_019_03.jpeg",
    images: [
      "/images/img_019_00.png", "/images/img_019_01.jpeg",
      "/images/img_019_02.jpeg", "/images/img_019_04.jpeg",
    ],
  },
  {
    id: "astronaut",
    title: "The Astronaut",
    artist: "BTS JIN",
    subtitle: "Single Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    cover: "/images/img_020_00.png",
    images: ["/images/img_020_01.png"],
  },
  {
    id: "jackinthebox",
    title: "Jack In The Box",
    artist: "BTS j-hope",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    cover: "/images/img_021_00.jpeg",
    images: ["/images/img_021_01.jpeg", "/images/img_021_02.png", "/images/img_021_03.png"],
  },
  {
    id: "dynamite",
    title: "DYNAMITE",
    artist: "BTS",
    subtitle: "Digital Single",
    category: "Brand Identity",
    cover: "/images/img_022_00.jpeg",
    images: [
      "/images/img_022_01.jpeg", "/images/img_022_02.jpeg", "/images/img_022_03.jpeg",
      "/images/img_022_04.jpeg", "/images/img_022_05.jpeg", "/images/img_022_06.jpeg",
      "/images/img_022_07.jpeg", "/images/img_022_08.jpeg",
    ],
  },
  {
    id: "weverse",
    title: "Weverse Con",
    artist: "HYBE",
    subtitle: "Festival Branding",
    category: "Creative Direction / Visual Direction / Graphic Design / Content Direction",
    cover: "/images/img_023_00.jpeg",
    images: [
      "/images/img_024_00.jpeg", "/images/img_024_01.jpeg", "/images/img_024_02.jpeg",
      "/images/img_024_03.jpeg", "/images/img_024_04.jpeg", "/images/img_024_06.jpeg",
      "/images/img_024_08.jpeg", "/images/img_024_09.jpeg", "/images/img_024_10.jpeg",
      "/images/img_024_11.jpeg", "/images/img_024_12.jpeg", "/images/img_024_13.jpeg",
      "/images/img_024_14.jpeg", "/images/img_024_15.jpeg",
    ],
  },
  {
    id: "tws",
    title: "Sparkling Blue",
    artist: "TWS",
    subtitle: "Debut Album",
    category: "Brand Identity / Graphic Design Direction",
    cover: "/images/img_025_00.jpeg",
    images: ["/images/img_025_01.png", "/images/img_026_00.jpeg"],
  },
  {
    id: "haon",
    title: "HAONOAH",
    artist: "HAON",
    subtitle: "Album",
    category: "Graphic Design / Merchandise Development / Package Design",
    cover: "/images/img_027_01.jpeg",
    images: ["/images/img_027_00.jpeg", "/images/img_027_02.png", "/images/img_028_00.jpeg"],
  },
  {
    id: "txt-freeze",
    title: "FREEZE",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 2nd Album",
    category: "Brand Identity / Graphic Design Direction",
    cover: "/images/img_029_03.jpeg",
    images: [
      "/images/img_029_00.jpeg", "/images/img_029_01.jpeg",
      "/images/img_029_02.jpeg", "/images/img_029_04.png",
    ],
  },
  {
    id: "txt-bluehour",
    title: "Blue Hour",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 3rd Mini Album",
    category: "Brand Identity / Package Design",
    cover: "/images/img_030_00.jpeg",
    images: ["/images/img_030_01.png"],
  },
  {
    id: "txt-eternity",
    title: "ETERNITY",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 2nd Mini Album",
    category: "Brand Identity / Creative Direction",
    cover: "/images/img_031_00.jpeg",
    images: ["/images/img_031_01.png"],
  },
  {
    id: "txt-magic",
    title: "MAGIC",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 1st Album",
    category: "Brand Identity / Creative Direction",
    cover: "/images/img_032_00.jpeg",
    images: ["/images/img_032_01.png"],
  },
  {
    id: "fx-4walls",
    title: "4 WALLS",
    artist: "f(x)",
    subtitle: "The 4th Album",
    category: "Graphic Design",
    cover: "/images/img_033_00.jpeg",
    images: ["/images/img_034_00.jpeg"],
  },
  {
    id: "redvelvet",
    title: "The Red",
    artist: "Red Velvet",
    subtitle: "The 1st Album",
    category: "Graphic Design",
    cover: "/images/img_035_00.jpeg",
    images: ["/images/img_036_00.png"],
  },
  {
    id: "various",
    title: "Selected Works",
    artist: "Various Artists",
    subtitle: "Red Velvet · SHINee · TAEYEON · SUPER JUNIOR · and more",
    category: "Graphic Design / Package Design / Visual Direction",
    cover: "/images/img_037_08.jpeg",
    images: [
      "/images/img_037_00.jpeg", "/images/img_037_01.jpeg", "/images/img_037_02.jpeg",
      "/images/img_037_03.jpeg", "/images/img_037_04.jpeg", "/images/img_037_06.jpeg",
      "/images/img_037_07.jpeg", "/images/img_037_09.jpeg", "/images/img_037_10.jpeg",
      "/images/img_037_12.jpeg", "/images/img_037_13.jpeg", "/images/img_037_15.jpeg",
      "/images/img_037_16.jpeg", "/images/img_037_18.jpeg", "/images/img_037_19.jpeg",
      "/images/img_037_22.jpeg", "/images/img_037_23.jpeg", "/images/img_038_00.jpeg",
      "/images/img_038_01.jpeg", "/images/img_038_02.jpeg", "/images/img_038_03.jpeg",
      "/images/img_038_04.jpeg", "/images/img_038_05.jpeg", "/images/img_038_06.jpeg",
    ],
  },
]

/* ─── About Gallery Images ─── */
const aboutGallery = [
  "/images/img_008_00.jpeg",
  "/images/img_008_48.jpeg",
  "/images/img_008_42.jpeg",
]

/* ─── Concept Gallery ─── */
const conceptImages = [
  "/images/img_008_31.jpeg", "/images/img_008_35.jpeg", "/images/img_008_39.jpeg",
  "/images/img_008_40.jpeg", "/images/img_008_44.jpeg", "/images/img_008_45.jpeg",
  "/images/img_008_46.jpeg", "/images/img_008_47.jpeg", "/images/img_008_49.jpeg",
  "/images/img_008_53.jpeg", "/images/img_008_58.jpeg", "/images/img_008_59.jpeg",
  "/images/img_008_63.jpeg", "/images/img_008_64.jpeg",
]

/* ─── Designer Tags ─── */
const designerTags = [
  "Brand Strategy",
  "Creative Direction",
  "Visual Identity",
  "Album Packaging",
  "Content Direction",
  "Campaign Creative",
  "Spatial Design",
]

/* ─── Navigation ─── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

/* ─── Main Component ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [lang, setLang] = useState<Lang>('ko')

  const t = content[lang]

  const visionStatement: Record<Lang, string> = {
    ko: '다음 챕터는\n지금 쓰여지고 있습니다.',
    en: 'The next chapter\nis being written.',
    ja: '次の章は\n今まさに書かれています。',
  }

  const visionDesc: Record<Lang, string> = {
    ko: 'K-pop의 비주얼 문법을 설계해온 THE HEART OF MATTER는 이제 그 언어를 더 넓은 세계로 가져갑니다. 럭셔리 패션, 게임, 글로벌 문화 브랜딩 — 아티스트의 정체성을 시각 언어로 번역하는 방법론은 어떤 경계도 넘습니다.',
    en: 'THE HEART OF MATTER has spent years building the visual grammar of K-pop. Now, that language is ready for a wider world — luxury fashion, gaming, global cultural branding. The methodology that translates identity into image knows no borders.',
    ja: 'THE HEART OF MATTERはK-popのビジュアル文法を設計してきました。今、その言語はより広い世界へと向かいます。ラグジュアリーファッション、ゲーム、グローバル文化ブランディング — アイデンティティを視覚言語に翻訳する手法に、境界はありません。',
  }

  const visionAreas: Record<Lang, { title: string; desc: string }[]> = {
    ko: [
      { title: 'Luxury × K-pop', desc: '글로벌 럭셔리 하우스와 K-pop 아티스트가 만나는 교차점을 설계합니다. 아티스트의 세계관과 브랜드 헤리티지 사이의 번역자.' },
      { title: 'Gaming & Metaverse', desc: '게임과 버추얼 IP의 세계관 설계에 K-pop의 팬덤 드리븐 비주얼 전략을 이식합니다. 스크린 너머의 감정을 설계하는 일.' },
      { title: 'Thought Leadership', desc: '\'K-pop이 브랜드를 만드는 법\'을 세계와 나눕니다. 강연, 글, 케이스 스터디를 통해 크리에이티브 디렉션의 새로운 언어를 제안.' },
      { title: 'AI-Augmented Direction', desc: 'AI가 실행하는 시대, 무엇을 만들지 결정하는 것이 진짜 크리에이티브입니다. AI 프로토타이핑과 인간 서사의 결합을 탐구합니다.' },
      { title: 'Global Cultural Branding', desc: '국가 브랜딩, 문화 외교, 대형 공연의 아트 디렉션. K-culture가 국가 자산이 된 시대의 크리에이티브 파트너.' },
      { title: 'New Artist IP', desc: '차세대 아티스트의 비주얼 DNA를 초기부터 설계합니다. 데뷔 이전부터 팬의 기억에 새겨지는 세계관.' },
    ],
    en: [
      { title: 'Luxury × K-pop', desc: 'Designing the intersection where global luxury houses meet K-pop artists. Translator between an artist\'s universe and a brand\'s heritage.' },
      { title: 'Gaming & Metaverse', desc: 'Transplanting K-pop\'s fandom-driven visual strategy into gaming and virtual IP worldbuilding. Designing emotion beyond the screen.' },
      { title: 'Thought Leadership', desc: 'Sharing \'how K-pop builds brands\' with the world. Proposing a new language for creative direction through talks, writing, and case studies.' },
      { title: 'AI-Augmented Direction', desc: 'In an age when AI executes, deciding what to make is the real creative act. Exploring the fusion of AI prototyping and human narrative.' },
      { title: 'Global Cultural Branding', desc: 'Art direction for national branding, cultural diplomacy, and large-scale performances. Creative partner for an era when K-culture has become national capital.' },
      { title: 'New Artist IP', desc: 'Designing the visual DNA of next-generation artists from the very beginning. A universe imprinted on fans\' memories before debut.' },
    ],
    ja: [
      { title: 'Luxury × K-pop', desc: 'グローバルラグジュアリーハウスとK-popアーティストが出会う交差点を設計します。アーティストの世界観とブランドの歴史の間の翻訳者。' },
      { title: 'Gaming & Metaverse', desc: 'K-popのファンダム主導のビジュアル戦略をゲームとバーチャルIPの世界観設計に移植します。スクリーンを超えた感情を設計すること。' },
      { title: 'Thought Leadership', desc: '「K-popがブランドを作る方法」を世界と共有します。講演、執筆、ケーススタディを通じてクリエイティブ・ディレクションの新しい言語を提案。' },
      { title: 'AI-Augmented Direction', desc: 'AIが実行する時代、何を作るかを決めることが本当のクリエイティブです。AIプロトタイピングと人間のナラティブの融合を探求します。' },
      { title: 'Global Cultural Branding', desc: '国家ブランディング、文化外交、大規模公演のアートディレクション。K-cultureが国家資産となった時代のクリエイティブパートナー。' },
      { title: 'New Artist IP', desc: '次世代アーティストのビジュアルDNAを初期から設計します。デビュー前からファンの記憶に刻まれる世界観。' },
    ],
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
      }),
      { threshold: 0.05 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between h-[58px] md:h-[72px]" style={{paddingLeft:'16px', paddingRight:'16px'}}>
          {/* Logo */}
          <a href="#" style={{display:'flex', alignItems:'center', height:'32px', textDecoration:'none'}}>
            <span style={{
              fontFamily:'var(--font-comfortaa), Comfortaa, cursive',
              fontWeight:700,
              fontSize:'13px',
              letterSpacing:'0.12em',
              lineHeight:1.2,
              textTransform:'uppercase',
              whiteSpace:'nowrap',
              color: scrolled ? '#1A1A1A' : '#ffffff',
              transition:'color 0.3s',
            }}>
              <span style={{color:'#FF3D7F'}}>THE HEART</span>
              {' '}OF MATTER
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="font-heading text-[9px] tracking-[0.25em] uppercase text-[#888] hover:text-[#0A0A0A] transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <div className="flex items-center ml-4">
              {(['ko', 'en', 'ja'] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="lang-sep">/</span>}
                  <button onClick={() => setLang(l)} className={`lang-btn${lang === l ? ' active' : ''}`}>
                    {l === 'ko' ? '한' : l === 'en' ? 'EN' : '日'}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center md:hidden" style={{gap:'12px'}}>
            <div className="flex items-center" style={{gap:'4px'}}>
              {(['ko', 'en', 'ja'] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="lang-sep" style={{margin:'0 3px', fontSize:'9px', color: scrolled ? '#CCC' : 'rgba(255,255,255,0.3)'}}>/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`lang-btn${lang === l ? ' active' : ''}`}
                    style={{fontSize:'11px', letterSpacing:'0.05em', padding:'4px 2px', minWidth:'20px', color: lang===l ? (scrolled ? '#0A0A0A' : '#FFFFFF') : (scrolled ? '#AAAAAA' : 'rgba(255,255,255,0.45)'), fontWeight: lang===l ? 700 : 400}}>
                    {l === 'ko' ? '한' : l === 'en' ? 'EN' : '日'}
                  </button>
                </span>
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" style={{padding:'4px', color: scrolled ? '#0A0A0A' : '#fff'}}>
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
      </nav>

      {/* ─── MOBILE MENU OVERLAY (nav 밖으로 꺼냄 — backdrop-blur stacking context 회피) ─── */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#FFFFFF',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '36px',
        }}>
          {/* 로고 */}
          <div style={{position:'absolute', top:'20px', left:'20px'}}>
            <span style={{
              fontFamily:'var(--font-comfortaa), Comfortaa, cursive',
              fontWeight:700,
              fontSize:'13px',
              letterSpacing:'0.12em',
              color:'#1A1A1A',
              textTransform:'uppercase',
              whiteSpace:'nowrap',
            }}>THE HEART OF MATTER</span>
          </div>
          {/* 닫기 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{position:'absolute', top:'18px', right:'20px', background:'none', border:'none', cursor:'pointer', color:'#0A0A0A', padding:'4px'}}
          >
            <IconClose />
          </button>
          {/* 메뉴 링크 */}
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
              style={{fontFamily:'var(--font-heading)', fontSize:'30px', letterSpacing:'-0.01em', color:'#0A0A0A', textDecoration:'none', fontWeight:300, lineHeight:1}}>
              {link.label}
            </a>
          ))}
          {/* 언어 토글 */}
          <div style={{display:'flex', alignItems:'center', gap:'8px', marginTop:'4px'}}>
            {(['ko', 'en', 'ja'] as Lang[]).map((l, i) => (
              <span key={l} style={{display:'flex', alignItems:'center', gap:'8px'}}>
                {i > 0 && <span style={{color:'#DDD', fontSize:'11px'}}>/</span>}
                <button onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                  style={{background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-heading)', fontSize:'13px', letterSpacing:'0.08em', color: lang===l ? (scrolled ? '#0A0A0A' : '#FFFFFF') : (scrolled ? '#AAAAAA' : 'rgba(255,255,255,0.45)'), fontWeight: lang===l ? 700 : 400, padding:'4px 2px'}}>
                  {l === 'ko' ? '한' : l === 'en' ? 'EN' : '日'}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ─── HERO (fullscreen, editorial) ─── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/img_008_48.jpeg" alt="THE HEART OF MATTER" fill
            className="object-cover brightness-[0.35] hero-bg-reveal" priority />
        </div>

        {/* 전체 다크 베이스 오버레이 */}
        <div className="absolute inset-0 pointer-events-none" style={{zIndex:1, background:'rgba(0,0,0,0.55)'}} />

        {/* 하단에서 올라오는 그라데이션 — 텍스트 가독성 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex:2,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
        }} />

        {/* 비네트 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex:2,
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.5) 100%)',
        }} />

        {/* 떠다니는 하트 파티클 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{zIndex:3}}>
          {[
            { left:'12%', bottom:'38%', delay:'0s',   duration:'6s',   size:8,  opacity:0.35 },
            { left:'22%', bottom:'48%', delay:'1.5s', duration:'8s',   size:6,  opacity:0.25 },
            { left:'38%', bottom:'32%', delay:'3s',   duration:'7s',   size:10, opacity:0.3  },
            { left:'58%', bottom:'42%', delay:'0.8s', duration:'9s',   size:7,  opacity:0.2  },
            { left:'72%', bottom:'58%', delay:'2s',   duration:'6.5s', size:9,  opacity:0.3  },
            { left:'84%', bottom:'36%', delay:'4s',   duration:'8s',   size:6,  opacity:0.25 },
            { left:'48%', bottom:'27%', delay:'1s',   duration:'7.5s', size:8,  opacity:0.2  },
            { left:'65%', bottom:'65%', delay:'2.5s', duration:'10s',  size:5,  opacity:0.15 },
            { left:'30%', bottom:'62%', delay:'5s',   duration:'9s',   size:7,  opacity:0.2  },
          ].map((p, i) => (
            <div key={i} style={{
              position:'absolute',
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              animation: `floatParticle${i % 2 === 0 ? '' : '2'} ${p.duration} ease-in-out ${p.delay} infinite`,
            }}>
              <svg viewBox="0 0 10 9" width={p.size} height={p.size} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8.5C5 8.5 0.5 5.5 0.5 2.8C0.5 1.5 1.5 0.5 2.8 0.5C3.6 0.5 4.4 0.9 5 1.6C5.6 0.9 6.4 0.5 7.2 0.5C8.5 0.5 9.5 1.5 9.5 2.8C9.5 5.5 5 8.5 5 8.5Z"
                  fill="#FF3D7F" fillOpacity={p.opacity} />
              </svg>
            </div>
          ))}
        </div>

        {/* Page number — left vertical */}
        <div className="absolute left-6 md:left-12 bottom-32 md:bottom-40 z-10 hidden md:block">
          <p className="font-heading text-[10px] tracking-[0.2em] text-white/30 [writing-mode:vertical-lr]">
            01 / 09
          </p>
        </div>

        {/* Issue label */}
        {/* PORTFOLIO 2024 label removed */}

        {/* Hero content */}
        <div className="relative z-10 container" style={{paddingBottom: 'clamp(60px, 12vw, 120px)'}}>
          <div className="hero-label-reveal">
            <p className="label" style={{color:'rgba(255,255,255,0.5)', marginBottom:'24px', fontSize:'12px'}}>{t.heroSubtitle}</p>
          </div>
          <h1 style={{textShadow:'0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(255,255,255,0.04)'}}>
            <span className="hero-text-wrap">
              <span className="hero-text-inner hero-heart-gradient" style={{
                animationDelay:'0.3s',
                fontFamily:'var(--font-comfortaa), Comfortaa, cursive',
                fontStyle:'normal',
                fontWeight:700,
                fontSize:'clamp(4.5rem,13vw,12rem)',
                lineHeight:1.0,
                letterSpacing:'0.02em',
              }}>
                THE HEART
              </span>
            </span>
            <span className="hero-text-wrap">
              <span className="hero-text-inner" style={{
                fontFamily:'var(--font-comfortaa), Comfortaa, cursive',
                fontStyle:'normal',
                fontWeight:700,
                fontSize:'clamp(4.5rem,13vw,12rem)',
                lineHeight:1.0,
                letterSpacing:'0.06em',
                color:'#fff',
                animation:'textReveal 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',
              }}>
                OF MATTER
              </span>
            </span>
          </h1>

          <div className="hero-tagline-reveal" style={{marginTop:'clamp(32px,6vw,56px)', display:'flex', flexDirection:'column', gap:'16px'}}>
            <p className="hero-color-shift-subtle" style={{maxWidth:'400px', color:'rgba(255,255,255,0.55)', fontSize:'15px', lineHeight:1.8, fontWeight:300}}>
              {t.heroTagline}{t.heroTagline2 && <><br />{t.heroTagline2}</>}
            </p>
            <a href="#work"
              className="group"
              style={{display:'inline-flex', alignItems:'center', gap:'8px', fontFamily:'var(--font-heading)', fontSize:'10px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#fff', borderBottom:'1px solid rgba(255,255,255,0.3)', paddingBottom:'6px', alignSelf:'flex-start', textDecoration:'none', transition:'border-color 0.2s'}}>
              {t.heroCta}
              <span style={{transition:'transform 0.2s'}}><IconArrowUpRight /></span>
            </a>
          </div>
        </div>

        {/* Hero 하단 구분선 */}
        <div style={{
          position:'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          background: 'white',
          animation: 'lineExpand 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards',
          width: 0,
          zIndex: 10,
        }} />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 text-white/30" style={{animation:'fadeInUp 1s ease 1.2s both, scrollPulse 2s ease-in-out 1.5s infinite'}}>
          <IconArrowDown />
        </div>
      </section>

      {/* ─── DESIGNER PROFILE ─── */}
      <section className="section bg-white">
        {/* Top rule */}
        <div className="container"><div className="rule-dark" style={{marginBottom:'40px'}} /></div>

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column */}
            <div className="md:col-span-4 fade-up">
              <p className="label label-accent" style={{marginBottom:'16px'}}>Creative Director</p>
              <h2 className="heading text-4xl md:text-6xl" style={{marginBottom: '12px'}}>{t.designerName}</h2>
              <p style={{fontSize: '14px', color: '#888', letterSpacing: '0.02em', marginTop: '8px'}}>{t.designerTitle}</p>
            </div>

            {/* Right column — bio */}
            <div className="md:col-span-8 fade-up stagger-1">
              <div className="max-w-2xl" style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <p className="body-text" style={{fontSize:'16px', lineHeight:'1.9', color:'#333', fontWeight:'300'}}>{t.designerBio1}</p>
                <p className="body-text" style={{fontSize:'16px', lineHeight:'1.9', color:'#444', fontWeight:'300'}}>{t.designerBio2}</p>
                <p className="body-text" style={{fontSize:'16px', lineHeight:'1.9', color:'#444', fontWeight:'300'}}>{t.designerBio3}</p>
                <p className="pull-quote" style={{fontSize:'17px', lineHeight:'1.8', color:'#0A0A0A', fontWeight:'600', fontStyle:'normal', marginTop:'12px', paddingTop:'20px', borderTop:'1px solid #EBEBEB'}}>{t.designerBio4}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="tag-group fade-up stagger-2">
            {designerTags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT (editorial 2-column) ─── */}
      <section id="about" className="section">
        <div className="container">
          {/* Pull quote + intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="fade-up">
              <p className="label label-accent" style={{marginBottom:'16px'}}>{t.aboutLabel}</p>
              <h2 className="heading-impact whitespace-pre-line" style={{
                fontSize:'clamp(2.8rem, 7vw, 5.5rem)',
                color:'#0A0A0A',
                lineHeight:1.0,
                letterSpacing:'0.02em',
              }}>
                {t.pullQuote}
              </h2>
            </div>
            <div className="fade-up stagger-1 flex flex-col justify-end">
              <h3 className="heading whitespace-pre-line" style={{fontSize:'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom:'28px', lineHeight:1.35}}>{t.aboutTitle}</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <p className="body-text" style={{fontSize:'16px', lineHeight:'1.85'}}>{t.aboutDesc1}</p>
                <p className="body-text" style={{fontSize:'16px', lineHeight:'1.85'}}>{t.aboutDesc2}</p>
              </div>
            </div>
          </div>

          {/* About Gallery */}
          <div style={{marginTop:'80px'}} className="grid grid-cols-1 md:grid-cols-3 gap-4 fade-up stagger-2">
            {aboutGallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden img-cover">
                <Image src={img} alt={`About ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>

          {/* What Makes Us Different */}
          <div style={{marginTop:'100px'}} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4 fade-up">
              <p className="label label-accent" style={{fontSize:'13px', marginBottom:'16px'}}>{t.aboutDiffLabel}</p>
              <h3 className="heading whitespace-pre-line" style={{fontSize:'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom:'24px', lineHeight:1.35, marginTop:'4px'}}>{t.aboutDiffTitle}</h3>
              <p className="body-text max-w-xl" style={{fontSize:'18px', lineHeight:'1.85'}}>{t.aboutDiffDesc}</p>
            </div>
            <div className="md:col-span-8 fade-up stagger-1" style={{marginTop:'0px'}}>
              <div className="relative aspect-[16/9] overflow-hidden img-cover">
                <Image src="/images/img_008_01.jpeg" alt="Creative concept" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONCEPT GALLERY (marquee strip) ─── */}
      <section className="py-14 md:py-20 bg-[#0A0A0A] overflow-hidden">
        <div className="flex gap-4 w-max" style={{ animation: 'marquee 40s linear infinite' }}>
          {[...conceptImages, ...conceptImages].map((img, i) => (
            <div key={i} className="relative w-44 md:w-60 aspect-[3/2] overflow-hidden shrink-0">
              <Image src={img} alt={`Concept ${i + 1}`} fill
                className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" sizes="240px" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section id="work" className="section bg-white">
        <div className="container">
          {/* Section header */}
          <div className="flex items-end justify-between" style={{marginBottom:'64px'}}>
            <div className="fade-up">
              <p className="label label-accent" style={{marginBottom:'16px'}}>{t.workLabel}</p>
              <h2 className="heading-impact" style={{fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:1.05}}>{t.workTitle}</h2>
              <p className="body-text" style={{marginTop:'16px', fontSize:'15px', color:'#888'}}>{t.workSubtitle}</p>
            </div>
            <p className="hidden md:block project-num fade-up stagger-1">
              {projects.length}{t.workCount}
            </p>
          </div>

          {/* Projects */}
          <div>
            {projects.map((project, idx) => (
              <div key={project.id} className="fade-up" style={{marginBottom:'80px'}}>
                {/* Rule */}
                <div className="rule" style={{marginBottom:'40px'}} />

                {/* Project header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{marginBottom:'40px'}}>
                  <div>
                    <p className="label" style={{marginBottom:'16px'}}>{project.artist}</p>
                    <h3 className="heading-impact" style={{fontSize:'clamp(2.5rem,8vw,7rem)',lineHeight:1.05}}>{project.title}</h3>
                    <p className="body-text" style={{marginTop:'10px', fontSize:'15px'}}>{project.subtitle}</p>
                  </div>
                  <span className="project-num">
                    {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Cover image — fullbleed */}
                <button
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  className="relative w-full overflow-hidden img-cover project-card group cursor-pointer block"
                  style={{aspectRatio:'4/3'}}
                >
                  <Image src={project.cover} alt={`${project.artist} – ${project.title}`} fill
                    className="object-contain md:object-cover" sizes="(max-width: 768px) 100vw, 1280px" style={{objectPosition:'center top'}} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-heading text-[9px] tracking-[0.25em] uppercase flex items-center gap-2">
                      {t.viewDetails} <IconArrowUpRight />
                    </span>
                  </div>
                </button>

                {/* Category tags */}
                <div className="flex flex-wrap gap-2" style={{marginTop:'20px'}}>
                  {project.category.split(' / ').map(cat => (
                    <span key={cat} className="tag">{cat}</span>
                  ))}
                </div>

                {/* Expanded gallery */}
                {activeProject === project.id && (
                  <div className="mt-10 md:mt-14 space-y-8" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <p className="body-text max-w-2xl">
                      {t.projectDescriptions[project.id as keyof typeof t.projectDescriptions]}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {project.images.map((img, i) => (
                        <div key={i} className="relative overflow-hidden img-cover" style={{aspectRatio:'4/3'}}>
                          <Image src={img} alt={`${project.title} detail ${i + 1}`} fill
                            className="object-contain" sizes="(max-width: 768px) 50vw, 640px" style={{objectPosition:'center top'}} />
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

      {/* ─── VISION ─── */}
      <section id="vision" className="section" style={{borderTop:'1px solid #EBEBEB'}}>
        <div className="container">
          {/* Vision Statement */}
          <div className="rule-dark" style={{marginBottom:'40px'}} />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 fade-up" style={{marginBottom:'80px'}}>
            <div className="md:col-span-2">
              <p className="label label-accent" style={{marginBottom:'16px'}}>Vision</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="heading-impact" style={{
                fontSize:'clamp(2.8rem, 7vw, 6rem)',
                lineHeight:1.05,
                letterSpacing:'0.02em',
                color:'#0A0A0A',
                marginBottom:'56px',
                whiteSpace:'pre-line'
              }}>{visionStatement[lang]}</h2>
              <p className="heading-impact" style={{
                fontSize:'clamp(1.4rem,3vw,2rem)',
                lineHeight:1.2,
                letterSpacing:'0.01em',
                color:'#444',
                marginBottom:'48px',
                fontWeight:700,
              }}>
                {lang === 'ko' ? '경계는 없다. 심장이 뛰는 곳에 세계가 있을 뿐이다.' : lang === 'en' ? 'There are no borders. Only worlds where the heart beats.' : '境界はない。心臓が鼓動する場所に世界があるだけだ。'}
              </p>
              <p className="body-text" style={{fontSize:'16px', lineHeight:'1.9', maxWidth:'680px'}}>{visionDesc[lang]}</p>
            </div>
          </div>

          {/* Interest Areas */}
          <div className="rule" style={{marginTop:'40px', marginBottom:'40px'}} />
          <div className="fade-up" style={{marginBottom:'48px'}}>
            <p className="label" style={{marginBottom:'16px'}}>Expanding Horizons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 fade-up stagger-1" style={{gap:'0'}}>
            {visionAreas[lang].map((area, idx) => (
              <div key={area.title} style={{
                borderTop: '1px solid #E0E0E0',
                paddingTop: '32px',
                paddingBottom: '48px',
              }}
              className="md:odd:pr-16">
                <span style={{
                  display:'block',
                  fontFamily:'var(--font-heading)',
                  fontSize:'10px',
                  fontWeight:400,
                  letterSpacing:'0.2em',
                  color:'#BBBBBB',
                  marginBottom:'16px',
                }}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="heading" style={{
                  fontSize:'clamp(1.2rem, 2.8vw, 1.6rem)',
                  marginBottom:'20px',
                  letterSpacing:'-0.01em',
                  lineHeight:1.1,
                }}>{area.title}</h3>
                <p className="body-text" style={{
                  fontSize:'15px',
                  lineHeight:'1.85',
                  color:'#555',
                }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES (4-column grid) ─── */}
      <section id="services" className="section">
        <div className="container">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16" style={{marginBottom:'64px'}}>
            <div className="md:col-span-5 fade-up">
              <p className="label label-accent" style={{marginBottom:'16px'}}>{t.servicesLabel}</p>
              <h2 className="heading-impact" style={{fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:1.05}}>{t.servicesTitle}</h2>
            </div>
            <div className="md:col-span-7 fade-up stagger-1 flex flex-col justify-end">
              <p style={{
                fontFamily:'var(--font-heading)',
                fontSize:'13px',
                letterSpacing:'0.15em',
                textTransform:'uppercase',
                color:'#888',
                marginBottom:'32px',
                paddingBottom:'24px',
                borderBottom:'1px solid #EBEBEB',
              }}>{t.servicesManifesto}</p>
              <p className="body-text max-w-xl">{t.servicesDesc}</p>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{gap:'0', columnGap:'48px'}}>
            {t.services.map((service, idx) => (
              <div key={service.title} className={`fade-up stagger-${idx + 1} md:pr-12`} style={{
                borderTop: '1px solid #D8D8D8',
                paddingTop: '32px',
                paddingBottom: '48px',
              }}>
                <span style={{
                  display:'block',
                  fontFamily:'var(--font-heading)',
                  fontSize:'10px',
                  fontWeight:400,
                  letterSpacing:'0.2em',
                  color:'#BBBBBB',
                  marginBottom:'20px',
                }}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="heading" style={{
                  fontSize:'clamp(1.2rem, 2.5vw, 1.5rem)',
                  marginBottom:'28px',
                  lineHeight:1.1,
                }}>{service.title}</h3>
                <div style={{width:'100%', height:'1px', background:'#E8E8E8', marginBottom:'24px'}} />
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.85',
                  color: '#555',
                  fontWeight: 300,
                  margin: 0,
                }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY (dark section) ─── */}
      <section className="section bg-[#0A0A0A] text-white">
        <div className="container">
          <div className="fade-up" style={{marginBottom:'64px'}}>
            <p className="label label-accent" style={{marginBottom:'16px'}}>{t.methodologyLabel}</p>
            <h2 className="heading-impact" style={{fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.95,color:'#fff'}}>{t.methodologyTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{gap:0}}>
            {t.methodology.map((item, idx) => (
              <div key={item.step} className={`fade-up stagger-${(idx % 3) + 1}`} style={{paddingTop:'32px',paddingBottom:'48px',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
                <span className="font-heading" style={{fontSize:'11px',letterSpacing:'0.2em',color:'#E85D4A',display:'block',marginBottom:'16px'}}>{item.step}</span>
                <h4 className="heading" style={{fontSize:'clamp(1.2rem, 2.5vw, 1.5rem)',marginBottom:'20px',color:'white'}}>{item.title}</h4>
                <div style={{width:'100%',height:'1px',backgroundColor:'rgba(255,255,255,0.12)',marginBottom:'20px'}} />
                <p style={{fontSize:'15px',lineHeight:1.85,color:'rgba(255,255,255,0.6)',fontWeight:300}}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Method images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 fade-up" style={{marginTop:'80px'}}>
            {["/images/img_008_12.jpeg", "/images/img_008_23.png", "/images/img_008_56.jpeg", "/images/img_008_65.jpeg"].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image src={img} alt={`Method ${i + 1}`} fill className="object-cover opacity-50 hover:opacity-80 transition-opacity duration-500" sizes="320px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="section">
        <div className="container">
          <div className="fade-up" style={{marginBottom:'64px'}}>
            <p className="label label-accent" style={{marginBottom:'16px'}}>{t.processLabel}</p>
            <h2 className="heading-impact" style={{fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.95}}>{t.processTitle}</h2>
          </div>

          <div>
            {t.processPhases.map((phase, pi) => (
              <div key={phase.phase} className={`fade-up stagger-${pi + 1}`} style={{borderTop:'1px solid #EBEBEB',paddingTop:'40px',marginBottom: pi === 0 ? '80px' : '0'}}>
                <span className="font-heading" style={{fontSize:'11px',letterSpacing:'0.2em',color:'#E85D4A',display:'block',marginBottom:'16px'}}>{phase.phase}</span>
                <h3 className="heading-impact" style={{fontSize:'clamp(2rem, 5vw, 3.5rem)',lineHeight:1,marginBottom:'24px'}}>{phase.title}</h3>
                <p style={{fontSize:'16px',lineHeight:1.9,color:'#444',fontWeight:300,marginTop:'24px',maxWidth:'600px'}}>{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* Process image */}
          <div className="fade-up" style={{marginTop:'80px'}}>
            <div className="relative aspect-[21/9] overflow-hidden img-cover">
              <Image src="/images/img_008_49.jpeg" alt="Work process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT (dark, fullscreen feel) ─── */}
      <section id="contact" className="section bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/img_008_00.jpeg" alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="relative z-10 container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            {/* Left — big headline */}
            <div className="md:col-span-7 fade-up">
              <p className="label label-accent" style={{marginBottom:'16px'}}>{t.contactLabel}</p>
              <h2 className="heading-impact text-white whitespace-pre-line" style={{
                fontSize:'clamp(3rem,8vw,7rem)',
                lineHeight:1.15,
                letterSpacing:'0.02em',
              }}>
                {t.contactTitle}
              </h2>
            </div>

            {/* Right — contact info */}
            <div className="md:col-span-5 flex flex-col justify-end fade-up stagger-1">
              <div style={{display:'flex', flexDirection:'column', gap:'36px'}}>
                <div>
                  <p style={{
                    fontFamily:'var(--font-heading)',
                    fontSize:'11px',
                    fontWeight:400,
                    letterSpacing:'0.2em',
                    textTransform:'uppercase',
                    color:'rgba(255,255,255,0.4)',
                    marginBottom:'12px',
                  }}>{t.contactGeneral}</p>
                  <a href="mailto:hello@theheartofmatter.com"
                    style={{display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', color:'#fff'}}
                    className="group hover:opacity-80 transition-opacity">
                    <IconMail />
                    <span style={{
                      fontFamily:'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize:'16px',
                      fontWeight:300,
                      letterSpacing:'0.01em',
                      borderBottom:'1px solid rgba(255,255,255,0.2)',
                      paddingBottom:'4px',
                    }}>
                      hello@theheartofmatter.com
                    </span>
                  </a>
                </div>
                <div>
                  <p style={{
                    fontFamily:'var(--font-heading)',
                    fontSize:'11px',
                    fontWeight:400,
                    letterSpacing:'0.2em',
                    textTransform:'uppercase',
                    color:'rgba(255,255,255,0.4)',
                    marginBottom:'12px',
                  }}>{t.contactProject}</p>
                  <a href="mailto:project@theheartofmatter.com"
                    style={{display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', color:'#fff'}}
                    className="group hover:opacity-80 transition-opacity">
                    <IconMail />
                    <span style={{
                      fontFamily:'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize:'16px',
                      fontWeight:300,
                      letterSpacing:'0.01em',
                      borderBottom:'1px solid rgba(255,255,255,0.2)',
                      paddingBottom:'4px',
                    }}>
                      project@theheartofmatter.com
                    </span>
                  </a>
                </div>
                <div>
                  <p style={{
                    fontFamily:'var(--font-heading)',
                    fontSize:'11px',
                    fontWeight:400,
                    letterSpacing:'0.2em',
                    textTransform:'uppercase',
                    color:'rgba(255,255,255,0.4)',
                    marginBottom:'8px',
                  }}>{t.contactLocation}</p>
                  <p style={{fontSize:'15px', color:'rgba(255,255,255,0.6)', fontWeight:300}}>Seoul, Korea</p>
                </div>
                <p style={{
                  fontFamily:'var(--font-heading)',
                  fontSize:'11px',
                  letterSpacing:'0.2em',
                  textTransform:'uppercase',
                  color:'rgba(255,255,255,0.25)',
                  paddingTop:'16px',
                  borderTop:'1px solid rgba(255,255,255,0.08)',
                }}>
                  {lang === 'ko' ? '여백은 자신감이다.' : lang === 'en' ? 'Negative space is confidence.' : '余白は自信だ。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        paddingTop:'48px',
        paddingBottom:'56px',
        background:'#0A0A0A',
        borderTop:'1px solid rgba(255,255,255,0.08)',
      }}>
        <div className="container" style={{display:'flex', flexDirection:'column', gap:'32px'}}>
          {/* Nav links row */}
          <div style={{display:'flex', flexWrap:'wrap', gap:'24px', alignItems:'center'}}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                style={{
                  fontFamily:'var(--font-heading)',
                  fontSize:'11px',
                  letterSpacing:'0.18em',
                  textTransform:'uppercase',
                  color:'rgba(255,255,255,0.35)',
                  textDecoration:'none',
                  transition:'color 0.2s',
                }}
                className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          {/* Divider */}
          <div style={{width:'100%', height:'1px', background:'rgba(255,255,255,0.06)'}} />
          {/* Copyright */}
          <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
            <p style={{
              fontFamily:'var(--font-heading)',
              fontSize:'11px',
              letterSpacing:'0.12em',
              color:'rgba(255,255,255,0.2)',
            }}>{t.footerCopy}</p>
            <p style={{
              fontFamily:'var(--font-heading)',
              fontSize:'10px',
              letterSpacing:'0.08em',
              color:'rgba(255,255,255,0.12)',
            }}>THE HEART OF MATTER — Creative Direction Collective</p>
          </div>
        </div>
      </footer>
    </>
  )
}
