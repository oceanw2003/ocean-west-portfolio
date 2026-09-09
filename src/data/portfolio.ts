export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
  emphasis?: "result" | "target";
};

export type CapabilityCard = {
  title: string;
  description: string;
  bullets: string[];
};

/**
 * Which side of the portfolio a project belongs to. Drives the filters on the
 * projects index and keeps the homepage from becoming all software or all
 * hardware, since the point of the site is that both are the same person.
 */
export type Discipline = "ai" | "mechanical" | "software";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  discipline: Discipline;
  category: string;
  summary: string;
  heroStatement: string;
  timeline?: string;
  technologies: string[];
  metrics: Metric[];
  contributions?: string[];
  responsibilities?: string[];
  objective?: string;
  engineeringProcess?: string[];
  toolsAndTechnologies?: string[];
  designDecisions?: string[];
  testingAndValidation?: string[];
  results?: string[];
  constraintsAndTradeoffs?: string[];
  conceptDetails?: string[];
  focusAreas?: string[];
  /**
   * Shown above the detail blocks on group projects. Without it a page full
   * of "we built X" reads as solo work, which is the wrong impression to
   * leave beside projects that genuinely were.
   */
  teamContext?: string;
  /**
   * Images are not listed here. They are discovered by scripts/scan-images.mjs
   * from public/images/projects/<folder>/ so that adding photos to the site is
   * a file copy rather than a data edit. See src/lib/project-images.ts.
   */
  featured: boolean;
};

/**
 * One position held at an organization.
 *
 * Split out from the organization itself because a single org can span
 * several distinct roles. Flattening those into separate top-level entries
 * repeats the organization three times and hides the progression, which is
 * the most useful thing the section can show.
 */
export type Position = {
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
  /** Renders a live marker on the rail. */
  current?: boolean;
};

export type ExperienceEntry = {
  organization: string;
  location: string;
  /** The full span across every position held here. */
  dates: string;
  /** Newest first, so the rail reads top-down as most to least recent. */
  positions: Position[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  gpa: string;
  affiliations: string[];
  coursework: string[];
  primary?: boolean;
};

export type RecognitionItem = {
  title: string;
  detail: string;
};

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const portfolio = {
  name: "Ocean West",
  fullName: "Robert Ocean West",
  location: "Austin, Texas",
  email: "oceanw2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/oceanw2003",
  github: "https://github.com/oceanw2003",
  resumePath: "/documents/Ocean_West_Resume_AI_Engineering.pdf",
  expectedGraduation: "December 2026",
  field: "Mechanical Engineering",
  title: "Ocean West | Engineering Portfolio",
  description:
    "Engineering portfolio of Ocean West: multi-agent AI systems, local-first retrieval, LLM evaluation, computer vision, and mechanical design, analysis, and testing.",
  siteUrl: "https://ocean-west-portfolio.vercel.app",
  headline: "Ocean West",
  subheadline:
    "Mechanical engineering at UT Austin, building multi-agent AI systems, local-first retrieval, and computer vision. Two toolsets, one habit: nothing counts until it has been tested.",
  introduction:
    "In software that means an evaluation layer that caught fabricated sources 418 unit tests had happily passed. In hardware it means simulations checked against physical test data before a part goes on a car. The projects below are organized so you can look at either half, or see where they meet.",
  summary:
    "Mechanical engineering student building multi-agent AI systems, local-first retrieval, and computer vision, with an emphasis on evaluation, validation, and measured results.",
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Work", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  // Deliberately split between the two disciplines. A visitor should be able to
  // tell from the first screen that this is one person doing both.
  heroMetrics: [
    {
      value: "68",
      label: "agent tools",
      detail: "Across 16 specialized sub-agents in a provider-agnostic AI assistant.",
      emphasis: "result",
    },
    {
      value: "200+",
      label: "documents indexed",
      detail: "In a local-first retrieval system with on-device embeddings and no cloud backend.",
      emphasis: "result",
    },
    {
      value: "418",
      label: "passing tests",
      detail: "Across roughly 28,000 lines of Python in the CLU multi-agent codebase.",
      emphasis: "result",
    },
    {
      value: "100+",
      label: "fatigue tests",
      detail: "On additively manufactured titanium for an Air Force Research Laboratory project.",
      emphasis: "result",
    },
  ] satisfies Metric[],
  capabilityCards: [
    {
      title: "Multi-Agent Systems",
      description:
        "Tool-using AI systems designed around explicit autonomy boundaries, provider flexibility, and evaluation.",
      bullets: [
        "Claude, GPT, and local Ollama backends",
        "Tool registry with approval gates for costly or write actions",
        "Evaluation for citations, grounding, and task completion",
      ],
    },
    {
      title: "Local-First RAG",
      description:
        "Retrieval systems that protect proprietary engineering knowledge while keeping workflows useful and inspectable.",
      bullets: [
        "ChromaDB, sentence-transformers, hybrid retrieval",
        "On-device embeddings and strict-local privacy controls",
        "Incremental indexing for large document libraries",
      ],
    },
    {
      title: "Mechanical Design",
      description:
        "Parts taken from CAD and simulation through fabrication and onto a vehicle, where being wrong is expensive.",
      bullets: [
        "SolidWorks, ANSYS Mechanical, and finite element analysis",
        "Design for manufacture across machining, printing, and layup",
        "Material-property workflows other subsystems build against",
      ],
    },
    {
      title: "Test and Validation",
      description:
        "The habit that connects both halves: an unverified result is a guess, whether it came from a solver or a model.",
      bullets: [
        "Tensile, bend, torsional, and axial fatigue testing",
        "FEA correlated against measured physical response",
        "Evaluation scoring for citations, grounding, and task completion",
      ],
    },
  ] satisfies CapabilityCard[],
  projects: [
    {
      slug: "clu-multi-agent-assistant",
      title: "CLU: Multi-Agent AI Assistant",
      shortTitle: "CLU",
      discipline: "ai",
      category: "Multi-Agent Systems and LLM Evaluation",
      summary:
        "A provider-agnostic, production-oriented multi-agent assistant built around explicit autonomy, tool-use boundaries, local model support, and evaluation.",
      heroStatement:
        "A multi-agent system designed to make autonomy inspectable: tools are specialized, risky actions require approval, and evaluation catches failures unit tests miss.",
      timeline: "2026 - Present",
      technologies: [
        "Python",
        "Anthropic Claude",
        "OpenAI GPT",
        "Ollama",
        "FastAPI",
        "SQLite",
        "RAG",
        "LLM evaluation",
      ],
      metrics: [
        {
          value: "68",
          label: "tools",
          detail: "Distributed across 16 specialized sub-agents.",
          emphasis: "result",
        },
        {
          value: "418",
          label: "passing tests",
          detail: "Verified across about 28,000 lines of Python.",
          emphasis: "result",
        },
        {
          value: "35% / 96%",
          label: "evaluation contrast",
          detail: "A fabricated-source failure scored 35% versus 96% for verified output.",
          emphasis: "result",
        },
      ],
      objective:
        "Build a provider-agnostic assistant that can coordinate specialized tools while preserving human control over consequential actions.",
      responsibilities: [
        "Multi-agent architecture and provider abstraction",
        "Tool registry and autonomy-tier design",
        "Local knowledge-base retrieval",
        "LLM evaluation and failure analysis",
      ],
      engineeringProcess: [
        "Organized 68 tools across 16 specialized sub-agents with a backend supporting Claude, GPT, and local Ollama models.",
        "Defined a tiered autonomy model where read-only work can run unattended while writes and cost-incurring actions require explicit approval.",
        "Built a multi-model consensus layer to reduce hallucination: two local models answer independently, their responses are embedded and compared by cosine similarity, and only close agreement returns directly.",
        "Escalated disagreement through a higher-temperature candidate vote, then to a Claude and GPT arbiter, surfacing an unresolved split to the user instead of silently picking a side.",
        "Built RAG over a local Markdown knowledge base using wikilink graph traversal, backlinks, and hybrid semantic and full-text retrieval.",
      ],
      testingAndValidation: [
        "Built an evaluation framework that scores citation resolution, grounding, and task completion.",
        "Identified a fabricated-source failure that passed all unit tests, demonstrating why behavioral evaluation complements test coverage.",
        "Maintained 418 passing tests across about 28,000 lines of Python.",
      ],
      results: [
        "Created a reusable multi-agent foundation with explicit approval boundaries and local-model support.",
        "Established an evaluation practice that distinguishes plausible output from verified, grounded output.",
      ],
      constraintsAndTradeoffs: [
        "Autonomy had to remain useful without allowing silent file writes or cost-incurring actions.",
        "Provider flexibility required stable interfaces across cloud and local models.",
        "Consensus costs latency. Most answers resolve at the first tier in seconds, but a full escalation runs several local generations plus two paid calls, which is the price of not returning a confident wrong answer.",
        "Running two 8B models on a 6GB laptop GPU means they execute back to back rather than concurrently, capping how fast the ladder can resolve.",
      ],
      featured: true,
    },
    {
      slug: "composites-ai-assistant",
      title: "Composites AI Assistant",
      shortTitle: "Composites AI",
      discipline: "ai",
      category: "Local-First RAG for Formula SAE",
      summary:
        "A strict-local RAG system for Longhorn Racing's composites library, built to make proprietary engineering knowledge searchable without moving it to a cloud backend.",
      heroStatement:
        "A local engineering reference tool that pairs on-device retrieval with privacy controls, incremental indexing, and an established laminate-calculation workflow.",
      timeline: "Spring 2026",
      technologies: [
        "Python",
        "Streamlit",
        "ChromaDB",
        "sentence-transformers",
        "Ollama",
        "Azure OpenAI",
        "Local embeddings",
      ],
      metrics: [
        {
          value: "200+",
          label: "composites documents",
          detail: "Standards, textbooks, ANSYS documentation, and internal process files.",
          emphasis: "result",
        },
        {
          value: "10",
          label: "subsystem users",
          detail: "Adopted as the standing reference tool for the composites subsystem.",
          emphasis: "result",
        },
        {
          value: "15%",
          label: "faster design iteration",
          detail: "Extended an Excel-based laminate calculator that cut design iteration time.",
          emphasis: "result",
        },
      ],
      objective:
        "Give the Formula SAE composites team a private, local-first way to retrieve engineering context from its growing document library.",
      responsibilities: [
        "RAG system design and local embedding workflow",
        "Strict-local privacy controls",
        "Incremental indexing and document synchronization",
        "Laminate calculator integration",
      ],
      engineeringProcess: [
        "Indexed 200+ composites documents, including textbooks, material standards, ANSYS documentation, and internal process files, in a local Chroma vector store.",
        "Used on-device embeddings to replace manual shared-drive searches with a focused engineering retrieval workflow.",
        "Implemented incremental synchronization that skips unchanged files to keep re-indexing practical across the document library.",
      ],
      designDecisions: [
        "Enforced a strict-local privacy mode that blocks cloud backends at the application layer for proprietary engineering material.",
        "Supported local Ollama, retrieval-only, and optional Azure generation paths so operating mode stays explicit.",
        "Extended the team's Excel-based laminate calculator rather than replacing a useful, established engineering workflow.",
      ],
      results: [
        "Adopted as the standing reference tool by the 10-person composites subsystem.",
        "Made a large, proprietary engineering library searchable while keeping documents on-machine.",
      ],
      constraintsAndTradeoffs: [
        "The system had to preserve local privacy without making retrieval slow or difficult to maintain.",
        "Engineering output needed to remain grounded in source documents rather than relying on unconstrained generation.",
      ],
      featured: true,
    },
    {
      slug: "sales-utility-engine",
      title: "Sales Utility Engine",
      shortTitle: "Sales Utility Engine",
      discipline: "ai",
      category: "Automotive AI Product Development",
      summary:
        "An end-to-end automotive sales assistant with customer and employee workspaces for lead intake, qualification, recommendations, booking, and handoff.",
      heroStatement:
        "A practical AI product that keeps deterministic qualification, persistence, and fallback behavior at the center of an LLM-assisted sales workflow.",
      timeline: "Summer 2026",
      technologies: [
        "FastAPI",
        "Pydantic",
        "SQLite",
        "Ollama",
        "Gemma",
        "Vercel",
        "REST APIs",
        "Pytest",
      ],
      metrics: [
        {
          value: "103 / 104",
          label: "passing tests",
          detail:
            "Across API, storage, qualification, catalog, and assistant behavior. The single failure is a stale assertion on landing-page copy that has since changed; the route itself still returns 200.",
          emphasis: "result",
        },
        {
          value: "2",
          label: "user workspaces",
          detail: "Separate customer and employee workflows for lead progress and handoff.",
          emphasis: "result",
        },
        {
          value: "500+",
          label: "leads per month",
          detail:
            "The inbound volume of the target dealership profile, established through customer interviews.",
          emphasis: "result",
        },
      ],
      teamContext:
        "A four-person team on a 12-week program. I led Phase 2 as majority contributor on the backend, qualification engine, and local model integration.",
      objective:
        "Build a reliable automotive sales workflow that qualifies inbound leads, helps users explore vehicle options, and produces actionable salesperson handoffs.",
      responsibilities: [
        "Majority contribution to Phase 2 product delivery",
        "Lead qualification and booking-readiness workflow",
        "Pydantic models, SQLite persistence, and session recovery",
        "Local LLM integration, fallback behavior, and tests",
      ],
      engineeringProcess: [
        "Interviewed prospective users across biotech, university departments, a medical company, and car dealerships. The same complaint recurred: time lost answering repetitive questions and qualifying cold leads instead of working hot ones.",
        "Chose car dealerships as the beachhead. They generate high inbound volume, most already run a generic chatbot that answers questions without advancing a sale, and every unanswered lead after hours is a sale walking to a competitor.",
        "Built separate customer and employee workspaces for inbound lead intake, chat-based qualification, vehicle recommendations, meeting booking, and sales-handoff summaries.",
        "Implemented a rule-based qualification engine scoring intent, need fit, timeline, budget, engagement, and contact readiness, with penalties for trolling and manual override support.",
        "Constrained recommendations to a dealership-controlled catalog, so the assistant answers from approved inventory and pricing rather than from model memory.",
        "Added customer-session recovery, structured persistence, and company-profile-aware catalogs.",
      ],
      testingAndValidation: [
        "Integrated local Gemma inference through Ollama with deterministic fallback behavior when the model is unavailable.",
        "Adversarially tested the assistant against prompt injection. Told a $30,400 vehicle was actually $1, it declines to confirm the price, holds to the catalog figure, and offers a callback from a real representative.",
        "Built that guardrail deliberately after the widely reported case of a dealership chatbot being talked into agreeing to sell a truck for a dollar.",
        "Maintained 103 of 104 passing tests across API, storage, qualification, catalog, and assistant behavior.",
        "Presented the Phase 2 product to senior engineers from NVIDIA, Google, Meta, and NASA alongside cybersecurity specialists and industry recruiters.",
      ],
      results: [
        "A working two-sided product: a shopper is qualified through conversation, and a representative picks up a lead with preferences, priority score, and a generated handoff summary already assembled.",
        "Qualification is a side effect of the conversation rather than a form, which is what removes the repetitive early-stage work the interviews identified.",
      ],
      constraintsAndTradeoffs: [
        "External CRM and booking integrations remain mock-first; the product does not claim production integrations.",
        "Local model availability cannot be assumed, so deterministic behavior remains available as a fallback.",
        "Output quality depends on the catalog a dealership maintains. A thin or stale catalog produces thin answers, which is why catalog administration is part of the product rather than a setup step.",
        "The assistant still occasionally reads as AI-generated, which matters in a product whose main claim is that it does not.",
      ],
      featured: true,
    },
    {
      slug: "door-guard",
      title: "Door Guard",
      shortTitle: "Door Guard",
      discipline: "ai",
      category: "Computer Vision and Local AI",
      summary:
        "A local-first computer-vision prototype for door-zone monitoring, loitering detection, structured event capture, and optional local AI dialogue.",
      heroStatement:
        "A real-time vision workflow that combines detection, configurable risk signals, local language-model behavior, and transparent event records.",
      timeline: "Summer 2026",
      technologies: [
        "Python",
        "YOLO",
        "OpenCV",
        "Ollama",
        "RTSP/IP streams",
        "JSONL",
        "Local TTS",
      ],
      metrics: [],
      objective:
        "Prototype a local-first monitoring workflow that identifies people in a configurable door zone and records reliable, reviewable event context.",
      responsibilities: [
        "Live webcam and RTSP stream processing",
        "Door-zone loitering and risk-state logic",
        "Event records, snapshots, and optional local LLM dialogue",
        "Reliability-constraint documentation",
      ],
      engineeringProcess: [
        "Detected people in live webcam and RTSP streams with YOLO and OpenCV.",
        "Tracked configurable door-zone loitering and produced structured JSONL event logs with risk-based snapshots.",
        "Integrated local LLM-generated deterrent dialogue, optional text-to-speech, and microphone interaction.",
      ],
      testingAndValidation: [
        "Documented reliability constraints so the prototype's intended behavior and limitations remain explicit.",
        "Kept the workflow local-first to support privacy-sensitive monitoring contexts.",
      ],
      constraintsAndTradeoffs: [
        "Detection quality depends on camera placement, stream reliability, lighting, and model performance.",
        "The prototype records structured evidence instead of making autonomous enforcement decisions.",
      ],
      featured: false,
    },
    {
      slug: "car-saver",
      title: "CarSaver",
      shortTitle: "CarSaver",
      discipline: "software",
      category: "Graphics and Systems Programming",
      summary:
        "A Windows screensaver that draws a car as a rotating silver line drawing on black, using a software rasteriser and no dependencies beyond what ships with Windows.",
      heroStatement:
        "Not a wireframe. A wireframe shows you the triangles a model happens to be built from; this extracts only the lines a person would actually draw, then recomputes the silhouette every frame so the outline is correct from any angle.",
      timeline: "August 2026",
      technologies: [
        "C#",
        ".NET Framework",
        "JavaScript",
        "glTF",
        "Computational geometry",
        "Software rasterisation",
      ],
      metrics: [
        {
          value: "34 KB",
          label: "executable",
          detail:
            "Plus a 660 KB model. No runtime to install and no libraries, because it compiles against the .NET Framework already present on Windows 10 and 11.",
          emphasis: "result",
        },
        {
          value: "118k to 6k",
          label: "triangle reduction",
          detail:
            "Silhouette extraction from the full mesh every frame is unaffordable, so a vertex-clustered proxy shell stands in for it.",
          emphasis: "result",
        },
        {
          value: "59 MB",
          label: "memory in use",
          detail:
            "The lowest of any screensaver measured, including the Windows built-ins. Bubbles uses 139 MB.",
          emphasis: "result",
        },
        {
          value: "14",
          label: "car models",
          detail: "Each processed through the same offline pipeline, with five selectable finishes.",
          emphasis: "result",
        },
      ],
      objective:
        "Build a screensaver that looks like a designer's line drawing rather than a 3D model, and make it light enough to leave running.",
      responsibilities: [
        "Line-extraction pipeline and geometry processing",
        "Software rasteriser and silhouette solver",
        "Windows screensaver integration and settings dialog",
        "Performance benchmarking against the built-ins",
      ],
      engineeringProcess: [
        "Parsed binary glTF, flattened the scene graph, and baked node transforms into world-space vertices, tagging each face with its material.",
        "Selected edges worth drawing by three rules: creases where the angle between neighbouring faces exceeds a threshold, boundaries where an edge has only one face, and material borders, which is where glass, lamps, and grilles come from.",
        "Chained those edges into long strokes and simplified them, then wrote a compact binary so the screensaver never parses a 3D model at runtime.",
        "Prototyped the whole renderer in the browser first, then ported it to C# as a direct translation, which made the algorithm debuggable before it had to also be fast.",
      ],
      designDecisions: [
        "Built a coarse proxy shell by vertex clustering purely for silhouette extraction, trading exactness for a per-frame cost that fits in the budget.",
        "Rasterised with order-independent additive blending, which removes the need to depth-sort strokes at all.",
        "Moved every expensive step offline. At runtime the program reads pre-computed strokes and projects them, and nothing else.",
        "Added burn-in protection as a pure black background plus slow global drift, so no line ever sits on a fixed pixel, which is what a screensaver was originally for.",
      ],
      testingAndValidation: [
        "Benchmarked against the Windows built-ins at 2560x1440: 4.7% of a 16-core CPU, 20.9% GPU, 59 MB RAM, versus Bubbles at 0.4% CPU, 29.0% GPU, 139 MB.",
        "Confirmed the tradeoff is real rather than a win across the board. It costs roughly ten times the single-core CPU of the built-ins because it is a software rasteriser, while using less GPU and less memory than any of them.",
      ],
      results: [
        "A real .scr that appears in the Windows screensaver dropdown alongside Bubbles and 3D Text, with a working preview thumbnail and a settings dialog that previews as you drag.",
        "A pipeline that works with any 3D car model, currently carrying 14.",
      ],
      constraintsAndTradeoffs: [
        "Software rasterisation keeps one core busy continuously, which on a laptop holds the package in a higher power state and eventually brings the fans up. Lowering the frame rate to 20 fps roughly halves it.",
        "Line extraction is only as good as the model's topology. A mesh with poor material separation loses the glass and lamp outlines that make the drawing readable.",
      ],
      featured: false,
    },
    {
      slug: "steering-wheel-redesign",
      title: "Composite Steering Wheel Redesign",
      shortTitle: "Steering Wheel",
      discipline: "mechanical",
      category: "Composite Structures, FEA, Manufacturing and Testing",
      summary:
        "Redesigned a carbon-fiber Formula SAE steering wheel to reduce mass while retaining stiffness, strength, ergonomics, and manufacturability.",
      heroStatement:
        "A laminate-driven redesign balancing stiffness, failure indices, tooling strategy, and test planning.",
      technologies: [
        "SolidWorks",
        "ANSYS Mechanical",
        "ANSYS ACP",
        "Composite laminate theory",
        "Prepreg carbon fiber",
        "Additive manufacturing",
        "Mechanical testing",
      ],
      metrics: [
        {
          value: "50%",
          label: "mass reduction",
          detail: "Achieved against the previous steering-wheel design.",
          emphasis: "result",
        },
        {
          value: "1.5 - 8",
          label: "factors of safety",
          detail:
            "Established across load cases by correlating ANSYS results with physical testing.",
          emphasis: "result",
        },
      ],
      contributions: [
        "Developed and refined CAD geometry.",
        "Created composite layups in ANSYS ACP.",
        "Evaluated ply count, fiber orientation, load paths, and failure indices.",
        "Designed high-temperature tooling and manufacturing procedures.",
        "Planned three-point bend and torsional validation tests.",
        "Documented requirements, analysis assumptions, manufacturing steps, and validation criteria.",
      ],
      objective:
        "Reduce steering-wheel mass while preserving stiffness, strength, ergonomics, and manufacturability for a Formula SAE application.",
      responsibilities: [
        "Composite layup development",
        "Structural analysis in ANSYS",
        "Tooling and manufacturing planning",
        "Validation planning and technical documentation",
      ],
      engineeringProcess: [
        "Refined steering-wheel geometry in CAD to support both ergonomics and composite construction.",
        "Built laminate definitions in ANSYS ACP and evaluated ply count, orientation, and failure indices.",
        "Adjusted the design around likely load paths and manufacturability constraints.",
        "Prepared high-temperature tooling and test planning for bend and torsion validation.",
      ],
      toolsAndTechnologies: [
        "SolidWorks",
        "ANSYS Mechanical",
        "ANSYS ACP",
        "Prepreg carbon fiber",
        "Additive manufacturing",
        "Composite laminate theory",
      ],
      designDecisions: [
        "Used laminate adjustments to balance weight reduction against stiffness and strength requirements.",
        "Included manufacturability early through tooling and process definition rather than treating it as a downstream concern.",
        "Captured requirements and assumptions explicitly to improve repeatability and traceability.",
      ],
      testingAndValidation: [
        "Planned three-point bend validation.",
        "Planned torsional validation to compare simulated and measured behavior.",
      ],
      results: [
        "Established a documented redesign process for a lighter steering-wheel concept.",
        "Reached the 50% mass-reduction goal while holding stiffness, strength, and driver usability.",
      ],
      constraintsAndTradeoffs: [
        "Mass reduction could not come at the expense of stiffness, strength, or driver usability.",
        "Manufacturing and tooling constraints shaped laminate and geometry decisions.",
      ],
      featured: true,
    },
    {
      slug: "mf5-rc-vehicle",
      title: "MF-5 RC Vehicle",
      shortTitle: "MF-5 RC",
      discipline: "mechanical",
      category: "Mechanical Design Course Project",
      summary:
        "Designed and manufactured a competition RC vehicle through iterative CAD, CAM, fabrication, and testing.",
      heroStatement:
        "A compact vehicle package shaped by steering geometry, packaging density, and real test iteration.",
      timeline: "January 2025 - May 2025",
      technologies: [
        "SolidWorks",
        "GD&T",
        "CAD/CAM",
        "3D printing",
        "Machining",
        "Vehicle dynamics",
        "Iterative testing",
      ],
      metrics: [
        {
          value: "1st / 40",
          label: "qualifying position",
          detail: "Qualified first among 40 teams.",
          emphasis: "result",
        },
        {
          value: "18.46 s",
          label: "fastest qualifying result",
          detail: "Recorded across three laps.",
          emphasis: "result",
        },
        {
          value: "7 deg",
          label: "steering-angle improvement",
          detail: "Improved the steering angle by 7 degrees.",
          emphasis: "result",
        },
        {
          value: "7%",
          label: "packaging-density increase",
          detail:
            "Increased internal packaging density by approximately 7% while maintaining cooling and structural requirements.",
          emphasis: "result",
        },
      ],
      contributions: [
        "Developed a custom steering system using optimized Ackermann geometry.",
        "Refined suspension and steering geometry for improved cornering.",
        "Packaged electrical and mechanical components within a constrained chassis.",
        "Applied GD&T, iterative prototyping, fabrication, and vehicle testing.",
      ],
      objective:
        "Design and manufacture a competitive RC vehicle with strong packaging, steering behavior, and design execution.",
      responsibilities: [
        "Steering system design",
        "Suspension and geometry refinement",
        "Packaging and integration",
        "Fabrication and test iteration",
      ],
      engineeringProcess: [
        "Iterated on steering and suspension geometry to improve cornering behavior and steering angle.",
        "Used CAD and fabrication feedback to improve internal packaging density without compromising cooling or structure.",
        "Validated design choices through repeated prototyping and vehicle testing.",
      ],
      toolsAndTechnologies: [
        "SolidWorks",
        "GD&T",
        "CAD/CAM",
        "3D printing",
        "Machining",
        "Vehicle dynamics",
      ],
      designDecisions: [
        "Custom Ackermann geometry supported the steering goals rather than relying on a generic layout.",
        "Packaging density was improved while preserving cooling and structural requirements.",
        "Prototype speed did not replace design rigor; GD&T and testing remained part of the loop.",
      ],
      testingAndValidation: [
        "Vehicle testing informed suspension and steering refinements.",
        "Qualifying performance provided competitive validation of the final design direction.",
      ],
      results: [
        "Qualified first among 40 teams.",
        "Recorded the fastest qualifying result at 18.46 seconds across three laps.",
        "Earned the top design score.",
      ],
      constraintsAndTradeoffs: [
        "The chassis had limited space for both electrical and mechanical systems.",
        "Steering improvements had to coexist with cooling and structural requirements.",
      ],
      featured: true,
    },
    {
      slug: "low-cost-engine-dynamometer",
      title: "Engine Dynamometer and Tuned Intake",
      shortTitle: "Dynamometer",
      discipline: "mechanical",
      category: "Combustion Engine Processes",
      summary:
        "A homemade dynamometer built to measure whether a Helmholtz-tuned intake actually did what the theory said it would on a 212cc single-cylinder engine.",
      heroStatement:
        "Commercial dynamometers are priced out of a student project, so testing the intake meant building the instrument first. The intake was the hypothesis; the dyno was how we found out.",
      timeline: "Spring 2026",
      teamContext:
        "A four-person team project for ME 374C Combustion Engine Processes, with Carlos Cortez, Milagros Ramirez Martinez, and Tommy Thompson.",
      technologies: [
        "SolidWorks",
        "Arduino",
        "Python",
        "Load cell",
        "Hall-effect sensor",
        "3D printing",
        "Data acquisition",
      ],
      metrics: [
        {
          value: "50 N·m",
          label: "peak torque measured",
          detail:
            "At roughly 3500 RPM, matching the published stock figure for the engine and validating the rig against a known reference.",
          emphasis: "result",
        },
        {
          value: "212cc",
          label: "single-cylinder engine",
          detail: "A Predator engine, chosen for cost and for the availability of published stock data.",
          emphasis: "result",
        },
        {
          value: "3",
          label: "printed intake sections",
          detail: "The tuned runner was split for printability, then assembled and port-matched.",
          emphasis: "result",
        },
      ],
      objective:
        "Design an intake tuned to a target RPM using Helmholtz resonance, then build the instrumentation needed to test whether it delivered the predicted gain.",
      responsibilities: [
        "Intake design and Helmholtz length calculation",
        "Dynamometer mechanical design and fabrication",
        "Arduino and Python data acquisition",
        "Test methodology and results analysis",
      ],
      engineeringProcess: [
        "Used Helmholtz resonance to calculate the runner length that would boost volumetric efficiency at the target RPM, modelled it in SolidWorks, and split it into three printable sections.",
        "Built a strap-brake dynamometer: a load cell reads reaction force through a torque arm while a Hall-effect sensor counts engine speed, both sampled by an Arduino and logged in Python.",
        "Mounted the engine on a plywood base with wood studs, which was enough to hold alignment under load without a welded frame.",
      ],
      testingAndValidation: [
        "Swept the engine under increasing brake load and recorded torque against RPM, applying smoothing to separate the trend from measurement noise.",
        "Validated the rig against the published stock figure of 50 N·m at 3500 RPM before trusting it to evaluate the intake.",
        "Traced scatter in the raw data to load-cell creep, strap settling, and sensitivity to mechanical alignment rather than to engine behavior.",
      ],
      results: [
        "The dynamometer captured the expected torque-versus-RPM relationship: torque rises with braking force while speed falls, consistent with known engine behavior under load.",
        "The rig proved that a low-cost strap brake with a load cell and Hall sensor is accurate enough to compare configurations, which was the point of building it.",
      ],
      constraintsAndTradeoffs: [
        "The intake cracked at the flange while the dynamometer platform was being moved, so the comparison run against the stock intake was never completed. The result is a validated instrument and an unproven intake.",
        "Absolute torque values carry likely calibration error against the stock reference. The rig is more trustworthy for comparing two configurations than for reporting absolute numbers.",
        "A strap brake is cheap and simple but introduces friction and settling effects that a water or eddy-current brake would avoid.",
      ],
      featured: true,
    },
    {
      slug: "linkage-larry",
      title: "Linkage Larry: Jansen Walking Robot",
      shortTitle: "Linkage Larry",
      discipline: "mechanical",
      category: "Robot Mechanism Design",
      summary:
        "An eight-legged walking robot that produces its gait through linkage geometry instead of control software, driven by one motor per side.",
      heroStatement:
        "Most walking robots coordinate many actuators through sensor feedback. This one has none. A Jansen eight-bar linkage turns a single rotary input into a walking trajectory mechanically, so the gait is a property of the geometry rather than the code.",
      timeline: "Spring 2026",
      teamContext:
        "A four-person course project. I worked across the whole build rather than owning one subsystem, so the analysis, fabrication, and testing described below were shared work.",
      technologies: [
        "SolidWorks",
        "Python",
        "Kinematic analysis",
        "FEA",
        "Arduino",
        "Laser cutting",
        "3D printing",
      ],
      metrics: [
        {
          value: "1",
          label: "degree of freedom",
          detail:
            "Confirmed by Gruebler's equation over 12 links and 16 joints, so one input fully determines the gait.",
          emphasis: "result",
        },
        {
          value: "400:1",
          label: "gear reduction",
          detail: "A 200:1 worm drive into a 2:1 gear train, for torque under load.",
          emphasis: "result",
        },
        {
          value: "8",
          label: "legs, 4 per side",
          detail:
            "Phase-offset around a shared crankshaft so at least four feet are on the ground at any point in the rotation.",
          emphasis: "result",
        },
        {
          value: "1.5x",
          label: "load factor in FEA",
          detail:
            "Body weight multiplied by 1.5 for dynamic impact; no linkage failed at that load.",
          emphasis: "result",
        },
      ],
      objective:
        "Demonstrate that stable, steerable walking can be produced by mechanism design rather than by control systems, sensors, and per-joint actuators.",
      engineeringProcess: [
        "Built the linkage in MotionGen first to confirm the foot path before committing to CAD, treating the proof of concept as something that had to stay easy to modify.",
        "Modeled the full eight-bar leg in SolidWorks to check interference and range of motion in three dimensions.",
        "Built one physical leg and got it swinging freely before cutting the remaining five, which set the bolt-torque reference for every joint after it.",
        "Moved from a single leg to a synchronized eight-leg chassis with phase offsets, then added the drivetrain and radio control.",
      ],
      designDecisions: [
        "Used Jansen's published link proportions, which produce a smooth gait with a flat stance phase from a single crank.",
        "Offset adjacent lateral legs by 180 degrees and corner legs by 90 degrees, which keeps at least four of the eight feet on the ground at any point in the rotation and spreads motor load across the cycle instead of spiking once per revolution.",
        "Chose tank drive with one motor per side, making turning a differential-speed problem instead of a steering-mechanism problem.",
        "Added an asymmetric indicator hole to the near-equilateral center ternary link, a poka-yoke that made it impossible to install in the wrong orientation.",
        "Placed stainless washers at every plywood-on-plywood interface to cut friction, and plastic spacers between the three linkage layers to prevent interference.",
      ],
      toolsAndTechnologies: [
        "SolidWorks for the linkage, chassis, and gear train",
        "MotionGen for early kinematic proof of concept",
        "Python for the dyad-based position, velocity, acceleration, and force solver",
        "SolidWorks Simulation for coarse-mesh FEA on the leg assembly",
        "Arduino Uno R3 with a motor shield, FlySky FS-i6X radio, and a 3S LiPo on a battery-eliminator circuit",
        "Laser-cut 6mm plywood links with 3D-printed mounts and gears",
      ],
      testingAndValidation: [
        "Tested an early prototype and catalogued what failed: it ran tethered by wire, the electronics had no housing, the legs slipped under load, and the axles bent easily. Each of those drove a specific change in the final build.",
        "Wrote a Python solver that decomposes the linkage into dyads and applies the law of cosines at each one, avoiding a single large system of equations.",
        "Chained position, velocity, and acceleration through all five loops and checked the resulting toe trace against the expected gait before trusting the output.",
        "Ran coarse-mesh FEA at 1.5x body weight using laminate plywood properties, which identified the crank as the highest-stress region because it carries all input torque through a short moment arm.",
        "Verified walking, differential-drive turning, and repeated operation on the assembled robot under radio control.",
      ],
      results: [
        "The robot walked, turned in place through differential drive, and held together across repeated testing.",
        "Locomotion came entirely from linkage geometry, with no sensors, feedback loops, or per-leg actuators.",
        "No linkage failed under the conservative FEA load case.",
      ],
      constraintsAndTradeoffs: [
        "Bolt-and-washer pivots worked but added friction and needed a torque sweet spot at every joint: too tight and the links bind, too loose and the mechanism develops play. Bearings would remove that tuning entirely and are the first change for a future revision.",
        "The crank remains the structural limit. A metal insert or a machined aluminum crank would raise load capacity for payload or uneven ground.",
        "The enclosure was designed before the electronics were physically laid out, so the cover came out undersized and the battery ended up zip-tied rather than mounted.",
      ],
      featured: false,
    },
    {
      slug: "motion-tracking-fixture",
      title: "Modular Crowd-Tracking Fixture",
      shortTitle: "Crowd-Tracking Fixture",
      discipline: "mechanical",
      category: "Mechanical Engineering Design Capstone",
      summary:
        "A truss-mounted camera and compute pod that tracks audience motion at the Moody Center, turning crowd movement into a signal a production team can act on.",
      heroStatement:
        "Live performance is a one-way experience: the crowd reacts and nothing measures it. This fixture puts sensing on the truss so audience motion becomes an input to the show rather than something only the performer sees.",
      timeline: "Spring 2026",
      teamContext:
        "Senior capstone with Team Argus, sponsored by Agentic Innovations and the Texas Immersive Institute at UT Austin's Moody College of Communication.",
      technologies: [
        "SolidWorks",
        "ZED X stereo camera",
        "Jetson Nano",
        "80/20 extrusion",
        "Vapor chamber cooling",
        "PoE networking",
        "FMEA",
        "TRIZ",
      ],
      metrics: [
        {
          value: "< 100 ms",
          label: "tracking latency",
          detail: "Set by the need for interaction that feels real-time to an audience.",
          emphasis: "target",
        },
        {
          value: "330°",
          label: "camera field of view",
          detail: "Achieved by stitching overlapping wide-angle views rather than one long-range unit.",
          emphasis: "target",
        },
        {
          value: "< 1%",
          label: "false detection rate",
          detail: "A wrong trigger in front of a live crowd is worse than a missed one.",
          emphasis: "target",
        },
        {
          value: "$1,225",
          label: "bill of materials",
          detail:
            "Per pod, including the ZED X camera at $709 and Jetson Nano at $249. Low unit cost is what makes an array of pods viable instead of one expensive long-range sensor.",
          emphasis: "result",
        },
      ],
      objective:
        "Design a modular fixture that captures audience motion across a large venue, processes it on-pod, and hands gesture triggers to the production control room within a latency budget an audience would not notice.",
      responsibilities: [
        "Structural mounting and enclosure design",
        "Thermal strategy for on-pod compute",
        "Specification development from stakeholder interviews",
        "Failure analysis and design-for-X review",
      ],
      engineeringProcess: [
        "Interviewed Moody Center attendees, venue staff, and production engineers, then translated what they asked for into measurable specifications rather than adjectives.",
        "Decomposed the system into capture, process, transmit, generate output, and support deployment, which expanded into 27 leaf functions covering the full requirement set.",
        "Generated concepts through mind mapping, TRIZ, and worst-idea inversion, including a biomimetic study of the insect compound eye that became a multi-camera pod arrangement.",
        "Produced five concept variants, then combined the three highest-ranked into the final design: an RGB stereo camera on a truss-mounted pod.",
      ],
      designDecisions: [
        "Used a TRIZ tradeoff matrix to work through the contradictions directly. Faster tracking raises heat, so processing is burst-based with active cooling; wider coverage adds hardware, so overlapping wide-angle lenses are stitched instead.",
        "Chose an array of low-cost sensors over a single long-range unit, which keeps per-pod cost down and makes coverage a function of how many pods are deployed.",
        "Built the enclosure as a single base plate with bolt-on components, so every part is swappable without full disassembly.",
        "Put compute on the pod rather than centrally, trading a thermal problem for a latency and network-bandwidth saving.",
      ],
      testingAndValidation: [
        "Ran FMEA across structural, thermal, power, networking, and software failure modes, then redesigned against the worst of them.",
        "Thermal throttling on the Jetson Nano was the highest-risk item at RPN 210 and came down to 42 after adding a vapor chamber and burst processing.",
        "Every tracked failure mode was reduced: structural 60 to 18, power 144 to 32, networking 150 to 36, and software 105 to 36.",
      ],
      results: [
        "A costed, analyzed design with a complete specification set, mechanical package, and failure analysis, taken to final design review.",
        "Cooling and mounting were resolved against the specific failure modes that FMEA identified rather than against generic margin.",
      ],
      constraintsAndTradeoffs: [
        "The fixture hangs above an audience, so structural failure is a safety problem rather than a performance one. That drove redundant mounting over minimum weight.",
        "Specifications are design targets carried to final review. The system was not built and tested against a live crowd, so nothing here is a measured result.",
        "Remaining work is field validation: refining gesture recognition on real crowd data, a scaled classroom test simulating two Moody sections, environmental testing across acoustics, lighting and density, and FEA of the mount under dynamic loading.",
      ],
      featured: false,
    },
    {
      slug: "ai-brand-consistency-checker",
      title: "AI Brand Consistency Checker",
      shortTitle: "Brand Checker",
      discipline: "ai",
      category: "AI Product Development Project",
      summary:
        "Built an AI-assisted tool that reviews uploaded marketing content against a company's brand requirements.",
      heroStatement:
        "A user-facing AI workflow focused on document review, explanation quality, and reliable revision guidance.",
      timeline: "2026",
      technologies: [
        "Retrieval-augmented generation",
        "Prompt design",
        "Document processing",
        "Evaluation criteria",
        "User experience",
      ],
      metrics: [],
      objective:
        "Review marketing content against brand requirements and return explanations plus compliant revisions for non-technical users.",
      responsibilities: [
        "Workflow definition",
        "Prompt and evaluation design",
        "Structured results design",
        "User-facing output quality",
      ],
      conceptDetails: [
        "Accepts source documents and brand guidelines",
        "Evaluates tone, terminology, prohibited claims, formatting, and message consistency",
        "Identifies off-brand passages",
        "Explains violations",
        "Recommends compliant revisions",
        "Produces structured review results for non-technical users",
      ],
      engineeringProcess: [
        "Defined evaluation dimensions around tone, terminology, claims, formatting, and consistency.",
        "Structured outputs so findings were understandable for non-technical users rather than only model operators.",
      ],
      toolsAndTechnologies: [
        "Retrieval-augmented generation",
        "Prompt design",
        "Document processing",
        "Evaluation criteria",
      ],
      designDecisions: [
        "Explanation quality was treated as part of the product, not a secondary feature.",
        "Outputs were structured to help content teams act on findings quickly.",
      ],
      results: [
        "Built an AI-assisted review workflow aimed at improving brand compliance and revision clarity.",
      ],
      constraintsAndTradeoffs: [
        "The system needed to be understandable for non-technical users while still being precise enough for policy review.",
      ],
      focusAreas: [
        "Retrieval-augmented generation",
        "Prompt design",
        "Document processing",
        "Evaluation criteria",
        "User experience",
        "AI system reliability",
      ],
      featured: false,
    },
  ] satisfies Project[],
  experience: [
    {
      organization: "Agentic Innovations",
      location: "Texas, United States",
      dates: "May 2026 - August 2026",
      positions: [
        {
          role: "AI Engineering Intern",
          dates: "May 2026 - August 2026",
          summary:
            "Completed a 12-week AI engineering program delivering prototypes across engineering, business, and marketing workflows.",
          highlights: [
            "Delivered prototypes on a four-person cross-functional team spanning engineering, business, and marketing.",
            "Led Phase 2 as majority contributor on Sales Utility Engine, covering lead qualification, local LLM integration, persistence, and deployment.",
            "Presented the Phase 2 product to senior engineers from NVIDIA, Google, Meta, and NASA alongside cybersecurity specialists and industry recruiters.",
          ],
        },
      ],
    },
    {
      organization: "Longhorn Racing, UT Austin Formula SAE",
      location: "Austin, Texas",
      dates: "September 2024 - Present",
      positions: [
        {
          role: "Composites Advisor",
          dates: "May 2026 - Present",
          summary:
            "Advisory role after handing the subsystem off to new leadership, deliberately lighter-touch during a final year of coursework.",
          highlights: [
            "Advises the incoming composites leadership on design, analysis, and manufacturing decisions.",
            "Sits in on critical and final design reviews, and stays reachable between them for questions as they come up.",
          ],
          current: true,
        },
        {
          role: "Composites Materials and Processes Integration Lead, Combustion Team",
          dates: "May 2025 - May 2026",
          summary:
            "Led the materials and processing subsystem for non-aerodynamic composites on a 90-person Formula SAE team, owning design decisions across five vehicle systems.",
          highlights: [
            "Selected 6 engineers from a pool of over 100 applicants, and helped launch an off-campus composites manufacturing facility dedicated to Formula SAE fabrication and testing.",
            "Coordinated subsystem projects across carbon-fiber wheels, panels, and tube structures, including R&D on an in-house carbon-fiber rim and a lightweight bucket seat.",
            "Validated ANSYS Mechanical models against Instron tensile, three-point bend, adhesive, and torsional testing to establish factors of safety from 1.5 to 8.",
            "Researched sheet moulding compound for forged carbon fiber and high-temperature printed molds to cut tooling lead times.",
            "Supported a steering-wheel redesign that achieved a 50% mass reduction, and authored testing methodology adopted the following season.",
          ],
        },
        {
          role: "Composites Engineer, Combustion Team",
          dates: "September 2024 - May 2025",
          summary:
            "Designed, analyzed, and fabricated carbon-fiber components across the car, and built the tooling to produce them.",
          highlights: [
            "Fabricated airfoils, panels, bodywork, and a roll-wrapped carbon-fiber muffler shell; modeled and integrated the front wing assembly in CAD.",
            "Ran FEA in ANSYS Mechanical with ACP to optimize ply orientation and thickness on steering-column supports.",
            "Built an Excel calculator predicting composite weight from CAD surface densities and material properties, later the basis for the Composites AI Assistant.",
            "Produced molds in fiberglass, tooling board, foam, CNC aluminum, and 3D print, using printed prototypes to iterate on parts before committing to tooling.",
          ],
        },
      ],
    },
    {
      organization:
        "Margie and Bill Klesse College of Engineering and Integrated Design, UTSA",
      location: "San Antonio, Texas",
      dates: "January 2024 - August 2024",
      positions: [
        {
          role: "Undergraduate Research Intern",
          dates: "January 2024 - August 2024",
          summary:
            "Supported an Air Force Research Laboratory project through experimental fatigue testing and engineering analysis of additively manufactured titanium.",
          highlights: [
            "Conducted more than 100 axial fatigue tests on additively manufactured Ti-6Al-4V specimens.",
            "Performed Equivalent Initial Damage Size analysis; results supported a graduate researcher's findings presentation.",
          ],
        },
      ],
    },
  ] satisfies ExperienceEntry[],
  skillGroups: [
    {
      title: "AI Engineering",
      items: [
        "Python",
        "Retrieval-augmented generation",
        "OpenAI and Azure OpenAI APIs",
        "ChromaDB",
        "Local-first inference",
        "Multi-agent orchestration",
        "Agent evaluation and observability",
        "Semantic and BM25 retrieval",
        "Structured outputs",
      ],
    },
    {
      title: "Software and AI Operations",
      items: [
        "FastAPI",
        "Streamlit",
        "REST APIs",
        "CLI development",
        "Pydantic",
        "JSON Schema and OpenAPI",
        "Pytest",
        "Git and GitHub",
        "JSONL audit logging",
        "LLM guardrails and prompt-injection testing",
      ],
    },
    {
      title: "Mechanical Design and Analysis",
      items: [
        "SolidWorks",
        "Parametric CAD",
        "GD&T",
        "ANSYS Mechanical",
        "ANSYS ACP",
        "HyperMesh",
        "Structural analysis",
        "Composite laminate analysis",
        "Fiber-orientation optimization",
        "Finite element analysis",
        "Vehicle dynamics",
        "Mechanical system integration",
        "Engineering drawing and documentation",
      ],
    },
    {
      title: "Manufacturing and Fabrication",
      items: [
        "FDM 3D printing",
        "CNC machining",
        "Laser cutting",
        "Tooling design",
        "Prepreg and wet carbon-fiber layup",
        "Resin infusion",
        "Adhesive bonding",
        "Prototype fabrication",
        "Design for manufacture",
      ],
    },
    {
      title: "Testing and Instrumentation",
      items: [
        "MTS mechanical test systems",
        "Tensile testing",
        "Axial fatigue testing",
        "Three-point bend testing",
        "Torsional testing",
        "Adhesive testing",
        "Material characterization",
        "Digital microscopy",
        "Data acquisition",
        "Signal processing",
        "Non-destructive testing",
        "Wind-tunnel testing",
        "Experimental validation",
      ],
    },
    {
      title: "Software and Programming",
      items: [
        "MATLAB",
        "Arduino",
        "Excel",
        "Bild PDM",
        "Orca Slicer",
        "Data acquisition",
        "Technical documentation",
      ],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      institution: "The University of Texas at Austin",
      degree: "Bachelor of Science in Mechanical Engineering",
      location: "Austin, Texas",
      dates: "August 2024 - Expected December 2026",
      gpa: "3.51 / 4.00",
      affiliations: [
        "Longhorn Racing Combustion",
        "American Society of Mechanical Engineers",
      ],
      coursework: [
        "Structural Analysis",
        "Composite Laminate Theory",
        "Mechanics of Materials",
        "Fluid Mechanics",
        "Materials Engineering",
        "Machine Elements",
        "Mechatronics",
        "Heat Transfer",
        "Dynamic Systems and Controls",
        "Materials Processing",
        "Combustion Engine Processes",
        "Mechanical Power Plants",
        "Engineering Economic Analysis",
        "Robot Mechanism Design",
      ],
      primary: true,
    },
    {
      institution: "The University of Texas at San Antonio",
      degree: "Mechanical Engineering Studies",
      location: "San Antonio, Texas",
      dates: "August 2022 - May 2024",
      gpa: "3.89 / 4.00",
      affiliations: ["Undergraduate Research", "AIAA", "Bold Scholars UTSA"],
      coursework: [
        "Dynamics",
        "Thermodynamics",
        "Thermal Fluid Systems",
        "Numerical Methods",
        "Differential Equations",
      ],
    },
  ] satisfies EducationEntry[],
  recognitions: [
    {
      title: "Formula SAE Competition",
      detail:
        "26th Overall in 2026, up from 46th, and 11th in Design in 2025.",
    },
    {
      title: "Academic Recognition",
      detail:
        "President's List and Dean's List for two semesters.",
    },
    {
      title: "AI Product Presentation",
      detail:
        "Presented Sales Utility Engine to senior engineers, cybersecurity specialists, and industry recruiters during the Agentic Innovations program.",
    },
    {
      title: "Engineering Documentation",
      detail:
        "Built material-property and testing workflows adopted for the following Longhorn Racing season.",
    },
  ] satisfies RecognitionItem[],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:oceanw2003@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oceanw2003",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/oceanw2003",
      external: true,
    },
    {
      label: "Resume",
      href: "/documents/Ocean_West_Resume_AI_Engineering.pdf",
    },
  ] satisfies ContactLink[],
  professionalInterests: [
    "Multi-agent systems",
    "Local-first AI",
    "Retrieval-augmented generation",
    "LLM evaluation",
    "Computer vision",
    "Automotive AI",
    "Formula SAE",
    "Composite systems",
    "Motorsport",
    "Astronomy",
    "Golf",
    "Photography",
  ],
};

export const featuredProjects = portfolio.projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
