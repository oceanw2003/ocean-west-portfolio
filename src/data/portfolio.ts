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
export type Discipline = "ai" | "mechanical";

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
          value: "23",
          label: "passing tests",
          detail: "Focused API, storage, and assistant-generation coverage.",
          emphasis: "result",
        },
        {
          value: "2",
          label: "user workspaces",
          detail: "Separate customer and employee workflows for lead progress and handoff.",
          emphasis: "result",
        },
      ],
      objective:
        "Build a reliable automotive sales workflow that qualifies inbound leads, helps users explore vehicle options, and produces actionable salesperson handoffs.",
      responsibilities: [
        "Majority contribution to Phase 2 product delivery",
        "Lead qualification and booking-readiness workflow",
        "Pydantic models, SQLite persistence, and session recovery",
        "Local LLM integration, fallback behavior, and tests",
      ],
      engineeringProcess: [
        "Built separate customer and employee workspaces for inbound lead intake, chat-based qualification, vehicle recommendations, meeting booking, and sales-handoff summaries.",
        "Implemented a rule-based qualification engine for profile completeness, sales priority, and booking readiness, with manual override support.",
        "Added customer-session recovery, structured persistence, and company-profile-aware mock vehicle catalogs.",
      ],
      testingAndValidation: [
        "Integrated local Gemma inference through Ollama with deterministic fallback behavior when the model is unavailable.",
        "Maintained 23 passing tests across API, storage, and assistant workflows.",
        "Presented the Phase 2 product to senior engineers, cybersecurity specialists, and industry recruiters.",
      ],
      constraintsAndTradeoffs: [
        "External CRM and booking integrations remain mock-first; the product does not claim production integrations.",
        "Local model availability cannot be assumed, so deterministic behavior remains available as a fallback.",
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
      title: "Low-Cost Engine Dynamometer",
      shortTitle: "Dynamometer",
      discipline: "mechanical",
      category: "Combustion Engine Processes",
      summary:
        "Developed a low-cost dynamometer concept for a Predator 212 cc single-cylinder engine to measure torque and rotational speed and validate a custom Helmholtz-tuned intake.",
      heroStatement:
        "An instrumentation-heavy concept centered on torque measurement, RPM sensing, calibration, and uncertainty.",
      timeline: "Spring 2026",
      technologies: [
        "Arduino",
        "Force sensing",
        "RPM sensing",
        "Temperature monitoring",
        "Data acquisition",
        "Combustion-engine testing",
      ],
      metrics: [],
      objective:
        "Create a low-cost dynamometer concept capable of measuring torque and rotational speed for engine testing and intake validation.",
      responsibilities: [
        "Mechanical system concept development",
        "Instrumentation architecture",
        "Calibration and uncertainty planning",
        "Experimental test design",
      ],
      conceptDetails: [
        "Strap-brake dynamometer",
        "Torque measurement through a calibrated force sensor and moment arm",
        "Hall-effect or optical RPM sensing",
        "Arduino-based data acquisition",
        "Temperature monitoring",
        "Low-cost fabricated frame and brake assembly",
      ],
      engineeringProcess: [
        "Framed the system around direct measurement of torque and speed rather than inferred estimates.",
        "Specified low-cost instrumentation that could still support calibration and uncertainty analysis.",
        "Tied the test rig concept to validation of a custom Helmholtz-tuned intake.",
      ],
      toolsAndTechnologies: [
        "Arduino",
        "Force sensors",
        "Hall-effect or optical sensing",
        "Temperature instrumentation",
        "Experimental validation methods",
      ],
      designDecisions: [
        "Selected a strap-brake architecture to keep the concept manufacturable and low cost.",
        "Included sensor choices that support both educational value and meaningful measurement quality.",
      ],
      testingAndValidation: [
        "Calibration planning for torque measurement.",
        "Instrumentation intended to support uncertainty-aware engine testing.",
      ],
      results: [
        "Developed a structured dynamometer concept and test architecture for future validation work.",
      ],
      constraintsAndTradeoffs: [
        "Low cost had to be balanced against usable instrumentation quality.",
        "The concept needed to support both mechanical fabrication and repeatable data collection.",
      ],
      focusAreas: [
        "Mechanical design",
        "Instrumentation",
        "Calibration",
        "Uncertainty",
        "Combustion-engine testing",
        "Data acquisition",
        "Experimental validation",
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
        "A six-legged walking robot that produces its gait through linkage geometry instead of control software, driven by one motor per side.",
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
          value: "8-bar",
          label: "linkage per leg",
          detail: "Six legs total, phase-offset around a shared crankshaft on each side.",
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
        "Moved from a single leg to a synchronized six-leg chassis with phase offsets, then added the drivetrain and radio control.",
      ],
      designDecisions: [
        "Used Jansen's published link proportions, which produce a smooth gait with a flat stance phase from a single crank.",
        "Offset adjacent lateral legs by 180 degrees and corner legs by 90 degrees, so ground contact is continuous and motor load is spread across the rotation rather than spiking once per cycle.",
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
      title: "Motion-Tracking Fixture for Immersive Events",
      shortTitle: "Motion Tracking",
      discipline: "mechanical",
      category: "Senior Design",
      summary:
        "Developed a modular multi-camera fixture concept for real-time human motion tracking in stadiums, concerts, and immersive venues.",
      heroStatement:
        "A systems concept connecting structural design, thermal thinking, computer vision integration, and deployment logistics.",
      timeline: "Spring 2026",
      technologies: [
        "Computer vision integration",
        "Sensor fusion",
        "PoE connectivity",
        "TouchDesigner output",
        "Structural design",
        "Thermal management",
      ],
      metrics: [
        {
          value: "50 ms",
          label: "latency target",
          detail: "End-to-end latency target of 50 milliseconds or less.",
          emphasis: "target",
        },
        {
          value: "60 FPS",
          label: "frame-rate target",
          detail: "Target frame rate of at least 60 FPS.",
          emphasis: "target",
        },
        {
          value: "300 ft",
          label: "tracking-range target",
          detail: "Target tracking range of at least 300 feet.",
          emphasis: "target",
        },
        {
          value: "35 lb",
          label: "fixture-weight target",
          detail: "Total fixture weight target of 35 pounds or less.",
          emphasis: "target",
        },
      ],
      objective:
        "Develop a modular fixture concept for large-venue human motion tracking with practical deployment and performance targets.",
      responsibilities: [
        "Mechanical architecture",
        "Requirements definition",
        "Structural concept design",
        "Thermal and integration planning",
      ],
      conceptDetails: [
        "Hemispherical suspended fixture with overlapping RGB camera views",
        "Multi-view pose estimation and sensor fusion",
        "PoE connectivity",
        "Edge or NPU-assisted inference",
        "OSC output to TouchDesigner",
        "Modular camera and processing architecture",
      ],
      engineeringProcess: [
        "Defined system requirements around latency, frame rate, range, field of view, setup time, weight, and structural safety.",
        "Mapped the fixture around overlapping camera views to support multi-view tracking.",
        "Considered deployment reality by including PoE, modularity, and integration with TouchDesigner workflows.",
      ],
      toolsAndTechnologies: [
        "Computer vision integration",
        "Sensor fusion",
        "PoE infrastructure",
        "TouchDesigner interoperability",
        "Structural design thinking",
      ],
      designDecisions: [
        "A hemispherical suspended concept supports overlapping views and venue coverage.",
        "Modularity was treated as a core requirement for scaling and field setup.",
        "Edge or NPU-assisted inference was considered to help satisfy latency targets.",
      ],
      testingAndValidation: [
        "Performance targets were documented as design requirements rather than claimed completed outcomes.",
      ],
      results: [
        "Established a requirements-driven concept for a modular motion-tracking fixture.",
      ],
      constraintsAndTradeoffs: [
        "Large field of view, low latency, and low fixture weight create competing system demands.",
        "Venue deployment requirements shape both structural and processing architecture.",
      ],
      focusAreas: [
        "Mechanical architecture",
        "System requirements",
        "Structural design",
        "Thermal management",
        "Computer vision integration",
        "Latency budgeting",
        "Scalability",
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
