"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Language Types ─── */
type Lang = "ko" | "en" | "ja";

/* ─── Multilingual Content ─── */
const content = {
  ko: {
    heroSubtitle: "크리에이티브 디렉션 콜렉티브",
    heroTagline: "보이지 않는 감각을 형태로.",
    heroTagline2: "본질을 시각화하는 경계 없는 크리에이티브.",
    heroCta: "작업 보기",
    designerName: "이혜리",
    designerTitle: "크리에이티브 디렉터 · THE HEART OF MATTER 대표",
    designerBio1:
      "이혜리는 아티스트의 정체성을 시각 언어로 번역하는 크리에이티브 디렉터입니다.",
    designerBio2:
      "THE HEART OF MATTER를 이끌며, 브랜딩 전략에서 비주얼 아이덴티티, 앨범 패키지, 콘텐츠 크리에이티브까지 아티스트가 세상과 만나는 모든 접점을 하나의 응집된 경험으로 설계합니다.",
    designerBio3:
      "BTS, Jungkook, RM, SUGA/Agust D를 포함한 글로벌 아티스트들과의 협업을 통해, 그는 음악이 시작되기 이전부터 팬의 기억에 새겨지는 시각적 세계관을 만들어왔습니다.",
    designerBio4:
      "보이지 않는 것을 보이게 하는 것. 그것이 THE HEART OF MATTER의 본질입니다.",
    aboutLabel: "About Us",
    aboutTitle: "필요를 채우고,\n감동을 만든다.",
    aboutDesc1:
      "THE HEART OF MATTER 는 하나의 개념이 다양한 경험으로 확장되는 해석의 과정으로 바라봅니다.",
    aboutDesc2:
      "브랜딩 전략을 바탕으로 보이지 않는 감각을 형태로 구체화 하고, 아티스트와 팬이 만나는 모든 접점을 하나의 경험으로 만들어 갑니다.",
    aboutDiffLabel: "우리의 차별점",
    aboutDiffTitle: "아이덴티티에서\n경험으로",
    aboutDiffDesc:
      "아티스트의 정체성에서 출발하여 기준과 방향을 설계합니다. 음악, 비주얼, 콘텐츠, 경험 전반에 걸쳐 개념을 일관되게 확장하여 선명하고 잊을 수 없는 인상을 만듭니다.",
    workLabel: "Selected Work",
    workTitle: "프로젝트",
    workCount: "개 프로젝트",
    servicesLabel: "Services",
    servicesTitle: "서비스 영역",
    servicesDesc:
      "각 프로젝트에 최적화된 인재와 협업하는 얼라이언스 네트워크를 운영합니다. 브랜드 전략부터 비주얼 디렉션, 최종 딜리버리까지 응집된 크리에이티브 시스템을 구축합니다.",
    methodologyLabel: "Methodology",
    methodologyTitle: "크리에이티브 개발",
    processLabel: "Work Process",
    processTitle: "요청에서 릴리즈까지",
    allianceLabel: "The Collective",
    allianceTitle: "얼라이언스 네트워크",
    allianceDesc:
      "각 프로젝트에 최적화된 인재와 협업하는 얼라이언스 네트워크를 운영합니다. 핵심적인 내부 디렉션과 아트, 스타일링, 영상, 공간, 콘텐츠 분야의 협업을 결합합니다.",
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
        steps: ["클라이언트 요청", "클라이언트 미팅", "내부 기획", "제안", "클라이언트 확정", "실행"],
      },
      {
        phase: "PHASE 2",
        title: "제작 & 딜리버리",
        steps: ["전략 분석", "프로젝트 컨셉팅", "프로듀싱 & 소싱", "비주얼 디렉팅", "콘텐츠 딜리버리", "릴리즈 디렉션"],
      },
    ],
    services: [
      {
        title: "브랜드 전략",
        items: ["브랜드 진단", "브랜드 에센스", "가치 제안", "브랜드 포지셔닝", "커뮤니케이션 전략", "고객 경험 설계"],
      },
      {
        title: "크리에이티브 디렉션",
        items: ["아티스트 리딩", "내러티브 디자인", "미학적 번역", "릴리즈 플래닝", "비주얼 일관성 관리"],
      },
      {
        title: "비주얼 아이덴티티",
        items: ["로고 & 타이포그래피", "전용 서체 시스템", "그래픽 디자인", "에디토리얼 디자인", "이미저리 & 필름"],
      },
      {
        title: "프로덕션",
        items: ["패키지 디자인", "캠페인 크리에이티브", "프로모션 콘텐츠", "MD 컨셉 & 실행", "스테이지 & 라이브 비주얼", "공간 기획"],
      },
    ],
    projectDescriptions: {
      seven:
        "정국의 첫 글로벌 싱글 'SEVEN'을 위한 브랜드 전략과 비주얼 아이덴티티를 개발하여 글로벌 팝 아티스트로서의 강렬하고 직관적인 인상을 제시. 'OVERLAPPED' 컨셉을 중심으로 로고타입과 그래픽 시스템을 개발하고 디지털 커버부터 릴리즈 프로모션 기획까지 확장.",
      butter:
        "팬데믹 이후 더 나은 내일을 향한 메시지를 담아 BTS의 새로운 국면을 소개. 브랜드 전략부터 비주얼 아이덴티티, 앨범 패키지, 릴리즈 프로모션, 다양한 콘텐츠 장르까지 컨셉을 확장하여 음악-비주얼-캠페인이 결합된 앨범 경험을 제시.",
      indigo:
        "RM의 독립적 시기와 청춘의 기록을 정의하기 위한 브랜드 전략과 확장 가능한 크리에이티브 디렉션을 설계. 'Piece of Mine' 컨셉을 중심으로 비주얼 아이덴티티와 로고타입을 패키지, 콘텐츠, MD로 확장하며 아카이브형 앨범 경험을 시도.",
      dday: "아티스트의 트라우마와 고정관념, 그로 인한 갈등을 시각적으로 해석하는 데 집중. 'GLITCH' 컨셉을 구축하고 비주얼 아이덴티티, 앨범 패키지, 그래픽, MD로 확장하여 아티스트 내면 서사를 위한 일관된 비주얼 시스템을 완성.",
      tour: "Love Yourself, Map of the Soul 시리즈, Permission to Dance 투어: 앨범 비주얼 아이덴티티 컨셉을 B.I(브랜드 아이덴티티), 포토 비주얼, 콘텐츠, 투어 그래픽으로 확장.",
      astronaut:
        "진의 솔로 싱글 'The Astronaut'을 위한 독자적인 비주얼 아이덴티티를 제작하여 모든 접점에서 우주적 여정과 감성적 이별을 일관된 브랜딩으로 포착.",
      jackinthebox:
        "j-hope의 데뷔 솔로 앨범을 위한 브랜드 전략과 비주얼 아이덴티티를 설계하여 스트리트 문화와 파인 아트를 잇는 대담한 비주얼 언어로 예술적 이중성을 번역.",
      dynamite:
        "BTS 첫 영어 싱글 'Dynamite'의 브랜드 아이덴티티 시스템을 개발하여 곡의 에너지 넘치고 긍정적인 메시지에 어울리는 레트로 팝 비주얼 언어를 창조.",
      weverse:
        "Weverse Con 페스티벌의 크리에이티브 비전을 디렉팅하며 네이밍, 그래픽 아이덴티티, 콘텐츠, 공간 기획에 이르는 일관된 비주얼 시스템을 설계하여 몰입형 팬 경험을 구현.",
      tws: "TWS 데뷔 앨범 'Sparkling Blue'의 브랜드 아이덴티티와 그래픽 디자인 디렉션을 제작하여 차세대 그룹을 위한 신선하고 젊은 비주얼 언어를 확립.",
      haon: "HAON의 'HAONOAH' 프로젝트를 위한 그래픽 디자인, 머천다이즈, 패키지 디자인을 개발하여 아티스트의 독특한 크리에이티브 정체성을 반영하는 통합 비주얼 시스템 구축.",
      "txt-freeze":
        "TXT의 'FREEZE' 앨범을 위한 브랜드 아이덴티티와 그래픽 디렉션을 설계하여 얼어붙은 청춘 서사를 선명하고 차가운 비주얼 시스템으로 포착.",
      "txt-bluehour":
        "TXT의 'Blue Hour' 미니 앨범을 위한 브랜드 아이덴티티와 패키지 디자인을 제작하여 낮과 밤 사이의 마법 같은 시간을 실체적인 비주얼 경험으로 번역.",
      "txt-eternity":
        "TXT의 'ETERNITY'를 위한 브랜드 아이덴티티와 크리에이티브 디렉션을 개발하여 영원한 청춘과 판타지 컨셉의 비주얼 시스템을 구축.",
      "txt-magic":
        "TXT 데뷔 앨범 'MAGIC'의 브랜드 아이덴티티와 크리에이티브 디렉션을 제작하여 그룹의 초기 비주얼 DNA와 마법적 서사를 확립.",
      "fx-4walls":
        "f(x)의 '4 WALLS' 앨범을 위한 그래픽 아이덴티티를 디자인하여 그룹의 실험적 사운드에 어울리는 추상 기하학적 비주얼 언어를 창조.",
      redvelvet:
        "레드벨벳 첫 정규 앨범 'The Red'의 그래픽 디자인을 제작하여 그룹의 대담한 컬러 중심 비주얼 아이덴티티를 정의.",
      various:
        "다수의 K-pop 아티스트와 프로젝트에 걸친 그래픽 디자인 및 비주얼 디렉션 작업 컬렉션으로 다채로운 크리에이티브 실행력을 보여줌.",
    },
  },
  en: {
    heroSubtitle: "Creative Direction Collective",
    heroTagline: "Translating the hidden Heart into tangible Matter.",
    heroTagline2: "A borderless creative practice visualizing the essence.",
    heroCta: "View Work",
    designerName: "Hyeri Lee",
    designerTitle: "Creative Director · Founder of THE HEART OF MATTER",
    designerBio1:
      "Hyeri Lee is a Creative Director who translates an artist's identity into visual language.",
    designerBio2:
      "As the founder of THE HEART OF MATTER, she architects cohesive creative systems that span brand strategy, visual identity, album packaging, and content direction — designing every touchpoint where artists meet their world.",
    designerBio3:
      "Through collaborations with global artists including BTS, Jungkook, RM, and SUGA/Agust D, she has built visual universes that imprint themselves on audiences before a single note is heard.",
    designerBio4:
      "Making the invisible visible. That is the essence of THE HEART OF MATTER.",
    aboutLabel: "About Us",
    aboutTitle: "Fulfilling a need.\nCreating a feeling.",
    aboutDesc1:
      "THE HEART OF MATTER sees each concept as a process of interpretation that expands into diverse experiences.",
    aboutDesc2:
      "Based on branding strategy, we materialize invisible senses into form, and create unified experiences across every touchpoint where artists and fans meet.",
    aboutDiffLabel: "What Makes Us Different",
    aboutDiffTitle: "From Identity\nto Experience",
    aboutDiffDesc:
      "We start from an artist's identity to design standards and direction. Expanding concepts consistently across music, visuals, content, and experiences to build a clear, unforgettable impression.",
    workLabel: "Selected Work",
    workTitle: "Projects",
    workCount: " Projects",
    servicesLabel: "Services",
    servicesTitle: "What We Do",
    servicesDesc:
      "We operate an alliance network, collaborating with optimal talent for each project. From brand strategy through visual direction to final delivery, we build cohesive creative systems.",
    methodologyLabel: "Methodology",
    methodologyTitle: "Creative Development",
    processLabel: "Work Process",
    processTitle: "From Request to Release",
    allianceLabel: "The Collective",
    allianceTitle: "Alliance Network",
    allianceDesc:
      "We operate an alliance network, collaborating with optimal talent for each project. Core internal direction combined with collaborations across art, styling, video, space, and content.",
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
        steps: ["Client Request", "Client Meeting", "Internal Planning", "Proposal", "Client Confirm", "Execution"],
      },
      {
        phase: "PHASE 2",
        title: "Creation & Delivery",
        steps: ["Strategy Analysis", "Project Concepting", "Producing & Sourcing", "Visual Directing", "Content Delivery", "Release Direction"],
      },
    ],
    services: [
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
    ],
    projectDescriptions: {
      seven:
        "Developed brand strategy and visual identity for Jungkook's first global single 'SEVEN' to present a strong, intuitive impression as a global pop artist. Centered on the 'OVERLAPPED' concept; developed logotype and graphic system, extended from digital cover to release promotion planning.",
      butter:
        "Post-pandemic message of moving toward a better tomorrow; introduced BTS's new phase. Expanded concept from brand strategy to visual identity, album package, release promotion, and multiple content genres to present a combined music-visual-campaign album experience.",
      indigo:
        "Designed brand strategy and scalable creative direction to define RM's independent phase and a record of youth. Centered on concept 'Piece of Mine'; extended visual identity and logotype to package, content, and MD, attempting an archive-type album experience.",
      dday: "Focused on visually interpreting the artist's trauma and stereotypes and the resulting conflict. Built the 'GLITCH' concept and extended it to visual identity, album package, graphics, and MD, completing a consistent visual system for the artist's inner narrative.",
      tour: "Love Yourself and Map of the Soul series, Permission to Dance tour: expanded album visual identity concept into B.I (brand identity), photo visuals, content, and tour graphics.",
      astronaut:
        "Created a distinctive visual identity for Jin's solo single 'The Astronaut', capturing the cosmic journey and emotional farewell through cohesive branding across all touchpoints.",
      jackinthebox:
        "Designed brand strategy and visual identity for j-hope's debut solo album, translating his artistic duality into a bold visual language that bridges street culture and fine art.",
      dynamite:
        "Developed the brand identity system for BTS's first English-language single 'Dynamite', creating a retro-pop visual language that complemented the song's energetic and uplifting message.",
      weverse:
        "Directed the creative vision for Weverse Con festival, designing a cohesive visual system spanning naming, graphic identity, content, and spatial planning for an immersive fan experience.",
      tws: "Crafted the brand identity and graphic design direction for TWS's debut album 'Sparkling Blue', establishing a fresh, youthful visual language for the new generation group.",
      haon: "Developed graphic design, merchandise, and package design for HAON's 'HAONOAH' project, creating a unified visual system that reflects the artist's unique creative identity.",
      "txt-freeze":
        "Designed brand identity and graphic direction for TXT's 'FREEZE' album, capturing the frozen youth narrative through a crisp, icy visual system.",
      "txt-bluehour":
        "Created brand identity and package design for TXT's 'Blue Hour' mini album, translating the magical hour between day and night into tangible visual experiences.",
      "txt-eternity":
        "Developed brand identity and creative direction for TXT's 'ETERNITY', building a visual system around the concept of eternal youth and fantasy.",
      "txt-magic":
        "Created brand identity and creative direction for TXT's debut album 'MAGIC', establishing the group's initial visual DNA and magical narrative.",
      "fx-4walls":
        "Designed the graphic identity for f(x)'s '4 WALLS' album, creating an abstract geometric visual language that matched the group's experimental sound.",
      redvelvet:
        "Created graphic design for Red Velvet's first full album 'The Red', defining the group's bold color-driven visual identity.",
      various:
        "A collection of graphic design and visual direction work across multiple K-pop artists and projects, showcasing versatile creative execution.",
    },
  },
  ja: {
    heroSubtitle: "クリエイティブ・ディレクション・コレクティブ",
    heroTagline: "見えない感覚を、形へ。",
    heroTagline2: "本質を視覚化する、ボーダレスなクリエイティブ。",
    heroCta: "作品を見る",
    designerName: "イ・ヘリ",
    designerTitle: "クリエイティブ・ディレクター · THE HEART OF MATTER 代表",
    designerBio1:
      "イ・ヘリは、アーティストのアイデンティティをビジュアル言語に翻訳するクリエイティブ・ディレクターです。",
    designerBio2:
      "THE HEART OF MATTERを率い、ブランド戦略からビジュアル・アイデンティティ、アルバムパッケージ、コンテンツ・クリエイティブに至るまで、アーティストが世界と出会うすべての接点を、一つの凝集した体験として設計します。",
    designerBio3:
      "BTS、ジョングク、RM、SUGA/Agust Dをはじめとするグローバルアーティストとのコラボレーションを通じて、音楽が始まる前からオーディエンスの記憶に刻まれるビジュアルな世界観を構築してきました。",
    designerBio4:
      "見えないものを見えるようにすること。それがTHE HEART OF MATTERの本質です。",
    aboutLabel: "About Us",
    aboutTitle: "必要を満たし、\n感動を創る。",
    aboutDesc1:
      "THE HEART OF MATTERは、一つのコンセプトが多様な体験へと拡張される解釈のプロセスとして捉えます。",
    aboutDesc2:
      "ブランディング戦略を基盤に、見えない感覚を形に具現化し、アーティストとファンが出会うすべての接点を一つの体験として創り上げていきます。",
    aboutDiffLabel: "私たちの違い",
    aboutDiffTitle: "アイデンティティから\n体験へ",
    aboutDiffDesc:
      "アーティストのアイデンティティから出発し、基準と方向を設計します。音楽、ビジュアル、コンテンツ、体験全般にわたってコンセプトを一貫して拡張し、鮮明で忘れられない印象を創ります。",
    workLabel: "Selected Work",
    workTitle: "プロジェクト",
    workCount: "件のプロジェクト",
    servicesLabel: "Services",
    servicesTitle: "サービス領域",
    servicesDesc:
      "各プロジェクトに最適な人材と協業するアライアンスネットワークを運営しています。ブランド戦略からビジュアルディレクション、最終デリバリーまで、凝集したクリエイティブシステムを構築します。",
    methodologyLabel: "Methodology",
    methodologyTitle: "クリエイティブ開発",
    processLabel: "Work Process",
    processTitle: "リクエストからリリースまで",
    allianceLabel: "The Collective",
    allianceTitle: "アライアンスネットワーク",
    allianceDesc:
      "各プロジェクトに最適な人材と協業するアライアンスネットワークを運営しています。コア内部ディレクションと、アート、スタイリング、映像、空間、コンテンツ分野のコラボレーションを組み合わせます。",
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
        steps: ["クライアントリクエスト", "クライアントミーティング", "内部企画", "提案", "クライアント確定", "実行"],
      },
      {
        phase: "PHASE 2",
        title: "制作＆デリバリー",
        steps: ["戦略分析", "プロジェクトコンセプティング", "プロデュース＆ソーシング", "ビジュアルディレクティング", "コンテンツデリバリー", "リリースディレクション"],
      },
    ],
    services: [
      {
        title: "ブランド戦略",
        items: ["ブランド診断", "ブランドエッセンス", "バリュープロポジション", "ブランドポジショニング", "コミュニケーション戦略", "顧客体験設計"],
      },
      {
        title: "クリエイティブディレクション",
        items: ["アーティストリーディング", "ナラティブデザイン", "美学的翻訳", "リリースプランニング", "ビジュアル一貫性管理"],
      },
      {
        title: "ビジュアルアイデンティティ",
        items: ["ロゴ＆タイポグラフィ", "専用書体システム", "グラフィックデザイン", "エディトリアルデザイン", "イメージ＆フィルム"],
      },
      {
        title: "プロダクション",
        items: ["パッケージデザイン", "キャンペーンクリエイティブ", "プロモーションコンテンツ", "MDコンセプト＆実行", "ステージ＆ライブビジュアル", "空間企画"],
      },
    ],
    projectDescriptions: {
      seven:
        "ジョングク初のグローバルシングル「SEVEN」のブランド戦略とビジュアルアイデンティティを開発し、グローバルポップアーティストとしての強烈で直感的な印象を提示。「OVERLAPPED」コンセプトを中心にロゴタイプとグラフィックシステムを開発し、デジタルカバーからリリースプロモーション企画まで拡張。",
      butter:
        "パンデミック後のより良い明日へのメッセージを込め、BTSの新たな局面を紹介。ブランド戦略からビジュアルアイデンティティ、アルバムパッケージ、リリースプロモーション、多様なコンテンツジャンルまでコンセプトを拡張し、音楽-ビジュアル-キャンペーンが融合したアルバム体験を提示。",
      indigo:
        "RMの独立した時期と青春の記録を定義するブランド戦略とスケーラブルなクリエイティブディレクションを設計。「Piece of Mine」コンセプトを中心にビジュアルアイデンティティとロゴタイプをパッケージ、コンテンツ、MDへ拡張し、アーカイブ型アルバム体験を試行。",
      dday: "アーティストのトラウマとステレオタイプ、それに伴う葛藤の視覚的解釈に集中。「GLITCH」コンセプトを構築し、ビジュアルアイデンティティ、アルバムパッケージ、グラフィック、MDへ拡張し、アーティストの内面の物語のための一貫したビジュアルシステムを完成。",
      tour: "Love Yourself、Map of the Soulシリーズ、Permission to Danceツアー：アルバムビジュアルアイデンティティコンセプトをB.I（ブランドアイデンティティ）、フォトビジュアル、コンテンツ、ツアーグラフィックへ拡張。",
      astronaut:
        "ジンのソロシングル「The Astronaut」のための独自のビジュアルアイデンティティを制作し、すべての接点で宇宙的旅と感情的な別れを一貫したブランディングで捉えた。",
      jackinthebox:
        "j-hopeのデビューソロアルバムのブランド戦略とビジュアルアイデンティティを設計し、ストリートカルチャーとファインアートを結ぶ大胆なビジュアル言語で芸術的二面性を翻訳。",
      dynamite:
        "BTS初の英語シングル「Dynamite」のブランドアイデンティティシステムを開発し、楽曲のエネルギッシュでポジティブなメッセージに合ったレトロポップなビジュアル言語を創造。",
      weverse:
        "Weverse Conフェスティバルのクリエイティブビジョンをディレクティングし、ネーミング、グラフィックアイデンティティ、コンテンツ、空間企画にわたる一貫したビジュアルシステムを設計し没入型ファン体験を実現。",
      tws: "TWSデビューアルバム「Sparkling Blue」のブランドアイデンティティとグラフィックデザインディレクションを制作し、次世代グループのためのフレッシュで若いビジュアル言語を確立。",
      haon: "HAONの「HAONOAH」プロジェクトのグラフィックデザイン、マーチャンダイズ、パッケージデザインを開発し、アーティスト独自のクリエイティブアイデンティティを反映する統合ビジュアルシステムを構築。",
      "txt-freeze":
        "TXTの「FREEZE」アルバムのブランドアイデンティティとグラフィックディレクションを設計し、凍りついた青春の物語を鮮明で冷たいビジュアルシステムで捉えた。",
      "txt-bluehour":
        "TXTの「Blue Hour」ミニアルバムのブランドアイデンティティとパッケージデザインを制作し、昼と夜の間の魔法のような時間を実体的なビジュアル体験に翻訳。",
      "txt-eternity":
        "TXTの「ETERNITY」のブランドアイデンティティとクリエイティブディレクションを開発し、永遠の青春とファンタジーのコンセプトを中心にビジュアルシステムを構築。",
      "txt-magic":
        "TXTデビューアルバム「MAGIC」のブランドアイデンティティとクリエイティブディレクションを制作し、グループの初期ビジュアルDNAと魔法的な物語を確立。",
      "fx-4walls":
        "f(x)の「4 WALLS」アルバムのグラフィックアイデンティティをデザインし、グループの実験的なサウンドに合った抽象幾何学的ビジュアル言語を創造。",
      redvelvet:
        "Red Velvet初のフルアルバム「The Red」のグラフィックデザインを制作し、グループの大胆なカラー中心のビジュアルアイデンティティを定義。",
      various:
        "複数のK-popアーティストとプロジェクトにわたるグラフィックデザインとビジュアルディレクション作品のコレクションで、多彩なクリエイティブ実行力を展示。",
    },
  },
};

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
    cover: "/images/img_010_02.jpeg",
    images: [
      "/images/img_010_00.jpeg", "/images/img_010_01.jpeg", "/images/img_010_03.jpeg",
      "/images/img_011_00.jpeg", "/images/img_011_01.jpeg", "/images/img_011_02.jpeg",
      "/images/img_011_03.jpeg", "/images/img_011_04.jpeg", "/images/img_011_05.jpeg",
      "/images/img_011_06.jpeg", "/images/img_011_07.png",
    ],
    accent: "#1a6b3c",
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
    accent: "#f5c518",
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
    accent: "#1a3a6b",
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
    accent: "#2a2a2a",
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
    accent: "#6b1a6b",
  },
  {
    id: "astronaut",
    title: "The Astronaut",
    artist: "BTS JIN",
    subtitle: "Single Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    cover: "/images/img_020_00.png",
    images: ["/images/img_020_01.png"],
    accent: "#3a5a8c",
  },
  {
    id: "jackinthebox",
    title: "Jack In The Box",
    artist: "BTS j-hope",
    subtitle: "The 1st Album",
    category: "Brand Strategy / Brand Identity / Creative Direction",
    cover: "/images/img_021_00.jpeg",
    images: ["/images/img_021_01.jpeg", "/images/img_021_02.png", "/images/img_021_03.png"],
    accent: "#c44536",
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
    accent: "#e88d3c",
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
    accent: "#5c2d91",
  },
  {
    id: "tws",
    title: "Sparkling Blue",
    artist: "TWS",
    subtitle: "Debut Album",
    category: "Brand Identity / Graphic Design Direction",
    cover: "/images/img_025_00.jpeg",
    images: ["/images/img_025_01.png", "/images/img_026_00.jpeg"],
    accent: "#2e86de",
  },
  {
    id: "haon",
    title: "HAONOAH",
    artist: "HAON",
    subtitle: "Album",
    category: "Graphic Design / Merchandise Development / Package Design",
    cover: "/images/img_027_01.jpeg",
    images: ["/images/img_027_00.jpeg", "/images/img_027_02.png", "/images/img_028_00.jpeg"],
    accent: "#4a4a4a",
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
    accent: "#89c4f4",
  },
  {
    id: "txt-bluehour",
    title: "Blue Hour",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 3rd Mini Album",
    category: "Brand Identity / Package Design",
    cover: "/images/img_030_00.jpeg",
    images: ["/images/img_030_01.png"],
    accent: "#ff7e47",
  },
  {
    id: "txt-eternity",
    title: "ETERNITY",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 2nd Mini Album",
    category: "Brand Identity / Creative Direction",
    cover: "/images/img_031_00.jpeg",
    images: ["/images/img_031_01.png"],
    accent: "#6c5ce7",
  },
  {
    id: "txt-magic",
    title: "MAGIC",
    artist: "TOMORROW X TOGETHER",
    subtitle: "The 1st Album",
    category: "Brand Identity / Creative Direction",
    cover: "/images/img_032_00.jpeg",
    images: ["/images/img_032_01.png"],
    accent: "#00b894",
  },
  {
    id: "fx-4walls",
    title: "4 WALLS",
    artist: "f(x)",
    subtitle: "The 4th Album",
    category: "Graphic Design",
    cover: "/images/img_033_00.jpeg",
    images: ["/images/img_034_00.jpeg"],
    accent: "#636e72",
  },
  {
    id: "redvelvet",
    title: "The Red",
    artist: "Red Velvet",
    subtitle: "The 1st Album",
    category: "Graphic Design",
    cover: "/images/img_035_00.jpeg",
    images: ["/images/img_036_00.png"],
    accent: "#e74c3c",
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
    accent: "#2d3436",
  },
];

/* ─── Concept Gallery (from PDF intro pages) ─── */
const conceptImages = [
  "/images/img_008_31.jpeg", "/images/img_008_35.jpeg", "/images/img_008_39.jpeg",
  "/images/img_008_40.jpeg", "/images/img_008_44.jpeg", "/images/img_008_45.jpeg",
  "/images/img_008_46.jpeg", "/images/img_008_47.jpeg", "/images/img_008_49.jpeg",
  "/images/img_008_53.jpeg", "/images/img_008_58.jpeg", "/images/img_008_59.jpeg",
  "/images/img_008_63.jpeg", "/images/img_008_64.jpeg",
];

/* ─── Designer Profile Tags ─── */
const designerTags = [
  "Brand Strategy",
  "Creative Direction",
  "Visual Identity",
  "Album Packaging",
  "Content Direction",
  "Campaign Creative",
  "Spatial Design",
];

/* ─── Navigation Links ─── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/* ─── Alliance Roles ─── */
const allianceRoles = [
  "Brand Strategy",
  "A&R",
  "Creative Direction",
  "Visual Direction",
  "Style Direction",
  "Graphic Design",
];

/* ─── Main Component ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("ko");

  const t = content[lang];

  /* Scroll observer for animations */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up, .fade-in");
    els.forEach((el) => el.classList.add("animated"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "50px 0px 0px 0px" }
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
        <div className="max-w-[1200px] mx-auto section-pad flex items-center justify-between h-16 md:h-20">
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
            {/* Language Toggle */}
            <div className="flex items-center gap-0.5 ml-6">
              {(["ko", "en", "ja"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="text-[#D0D0D0] text-[11px] mx-1">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`text-[11px] tracking-wide transition-colors ${
                      lang === l
                        ? "text-[#0A0A0A] font-semibold"
                        : "text-[#B0B0B0] hover:text-[#0A0A0A]"
                    }`}
                  >
                    {l === "ko" ? "한" : l === "en" ? "EN" : "日"}
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-0.5">
              {(["ko", "en", "ja"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="text-[#D0D0D0] text-[10px] mx-0.5">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`text-[11px] tracking-wide transition-colors ${
                      lang === l
                        ? "text-[#0A0A0A] font-semibold"
                        : "text-[#B0B0B0] hover:text-[#0A0A0A]"
                    }`}
                  >
                    {l === "ko" ? "한" : l === "en" ? "EN" : "日"}
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
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
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 section-pad overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img_008_48.jpeg"
            alt="THE HEART OF MATTER"
            fill
            className="object-cover brightness-[0.15]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto w-full text-white">
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-4 md:mb-6">
              {t.heroSubtitle}
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
            <p className="max-w-md text-white/70 text-sm md:text-base leading-relaxed font-light">
              {t.heroTagline}
              <br />
              {t.heroTagline2}
            </p>
            <a
              href="#work"
              className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-white pb-1 self-start md:self-auto hover:border-[#E85D4A] hover:text-[#E85D4A] transition-colors"
            >
              {t.heroCta}
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

      {/* ─── DESIGNER PROFILE ─── */}
      <section className="py-12 md:py-20 section-pad bg-white section-divider">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left: Name & Title */}
            <div className="md:col-span-4 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                Creative Director
              </p>
              <h2 className="font-heading text-2xl md:text-5xl tracking-tight leading-[1.1] mb-3">
                {t.designerName}
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed tracking-wide">
                {t.designerTitle}
              </p>
            </div>
            {/* Right: Bio */}
            <div className="md:col-span-8 fade-in-up stagger-2">
              <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base leading-relaxed max-w-2xl">
                <p className="text-[#0A0A0A] font-light text-sm md:text-base leading-relaxed">
                  {t.designerBio1}
                </p>
                <p>{t.designerBio2}</p>
                <p>{t.designerBio3}</p>
                <p className="text-[#0A0A0A] font-medium text-sm md:text-base italic leading-relaxed mt-6">
                  {t.designerBio4}
                </p>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2 fade-in-up stagger-3">
            {designerTags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-[11px] tracking-[0.12em] uppercase bg-[#F0F0F0] text-[#555] px-3 py-1.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-12 md:py-20 section-pad border-t border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.aboutLabel}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl leading-tight tracking-tight whitespace-pre-line">
                {t.aboutTitle}
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-2">
              <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base leading-relaxed max-w-2xl">
                <p className="font-light">{t.aboutDesc1}</p>
                <p>{t.aboutDesc2}</p>
              </div>
            </div>
          </div>

          {/* About Gallery */}
          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 fade-in-up stagger-3">
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
          <div className="mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.aboutDiffLabel}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl leading-tight tracking-tight mb-6 whitespace-pre-line">
                {t.aboutDiffTitle}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
                {t.aboutDiffDesc}
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
      <section className="py-10 md:py-14 bg-[#0A0A0A] overflow-hidden">
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
      <section id="work" className="py-12 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto section-pad">
          <div className="flex items-end justify-between mb-10 md:mb-16">
            <div className="fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.workLabel}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl tracking-tight">
                {t.workTitle}
              </h2>
            </div>
            <p className="hidden md:block text-xs text-[#6B6B6B] tracking-[0.2em] uppercase fade-in-up stagger-1">
              {projects.length}{t.workCount}
            </p>
          </div>

          <div className="space-y-16 md:space-y-28">
            {projects.map((project, idx) => (
              <div key={project.id} className="fade-in-up">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">
                      {project.artist}
                    </p>
                    <h3 className="font-heading text-2xl md:text-5xl tracking-tight">
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
                      {t.viewDetails} <IconArrowUpRight />
                    </span>
                  </div>
                </button>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.category.split(" / ").map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] tracking-[0.12em] uppercase bg-[#F5F5F5] text-[#6B6B6B] px-3 py-1 rounded-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {activeProject === project.id && (
                  <div className="mt-6 md:mt-10 space-y-6 animate-[fadeIn_0.5s_ease]">
                    <p className="max-w-2xl text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                      {t.projectDescriptions[project.id as keyof typeof t.projectDescriptions]}
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
      <section id="services" className="py-12 md:py-20 section-pad border-t border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-16">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.servicesLabel}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl tracking-tight">
                {t.servicesTitle}
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-1">
              <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-xl">
                {t.servicesDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {t.services.map((service, idx) => (
              <div
                key={service.title}
                className={`fade-in-up stagger-${idx + 1} bg-white border-0 border-b border-[#E8E8E8] py-6 px-4 md:border md:border-[#F0F0F0] md:p-8 md:rounded-sm`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-heading text-xl tracking-tight font-medium">{service.title}</h3>
                  <span className="text-xs text-[#E85D4A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#555] leading-relaxed flex items-start gap-3"
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
      <section className="py-12 md:py-20 section-pad bg-[#0A0A0A] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-16 fade-in-up">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              {t.methodologyLabel}
            </p>
            <h2 className="font-heading text-2xl md:text-4xl tracking-tight">
              {t.methodologyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {t.methodology.map((item, idx) => (
              <div key={item.step} className={`fade-in-up stagger-${idx + 1}`}>
                <span className="text-[#E85D4A] text-xs tracking-[0.2em]">{item.step}</span>
                <h4 className="font-heading text-lg mt-3 mb-3 font-medium">{item.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Methodology visual strip */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2 fade-in-up">
            {["/images/img_008_12.jpeg", "/images/img_008_23.png", "/images/img_008_56.jpeg", "/images/img_008_65.jpeg"].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src={img} alt={`Method ${i + 1}`} fill className="object-cover opacity-60" sizes="350px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-12 md:py-20 section-pad border-t border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-16 fade-in-up">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
              {t.processLabel}
            </p>
            <h2 className="font-heading text-2xl md:text-4xl tracking-tight">
              {t.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {t.processPhases.map((phase, pi) => (
              <div key={phase.phase} className={`fade-in-up stagger-${pi + 1}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-[0.2em] text-[#E85D4A]">
                    {phase.phase}
                  </span>
                  <div className="flex-1 h-px bg-[#E0E0E0]" />
                </div>
                <h3 className="font-heading text-2xl mb-6">{phase.title}</h3>
                <div className="space-y-6">
                  {phase.steps.map((step, si) => (
                    <div key={step} className="flex items-start gap-4 group">
                      <span className="text-xs text-[#6B6B6B] mt-1 w-6">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 border-b border-[#E0E0E0] pb-4 group-hover:border-[#E85D4A] transition-colors">
                        <p className="text-sm leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Image */}
          <div className="mt-10 md:mt-16 fade-in-up">
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
      <section className="py-12 md:py-20 section-pad bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.allianceLabel}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl tracking-tight">
                {t.allianceTitle}
              </h2>
            </div>
            <div className="md:col-span-7 fade-in-up stagger-1">
              <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-8">
                {t.allianceDesc}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
                {allianceRoles.map((role, idx) => (
                  <div key={role} className={`fade-in-up stagger-${idx + 1}`}>
                    <div className="w-10 h-px bg-[#E85D4A] mb-4" />
                    <p className="text-sm font-medium">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative py-12 md:py-20 section-pad bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img_008_00.jpeg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7 fade-in-up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E85D4A] mb-4">
                {t.contactLabel}
              </p>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] whitespace-pre-line">
                {t.contactTitle}
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end fade-in-up stagger-2">
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                    {t.contactGeneral}
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
                    {t.contactProject}
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
                    {t.contactLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 section-pad bg-[#0A0A0A] text-white border-t border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-[0.1em]">
            {t.footerCopy}
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
