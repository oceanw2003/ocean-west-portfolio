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

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
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
  images?: ProjectImage[];
  sourceImageFolder: string;
  publicImageFolder: string;
  featured: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  metrics?: string[];
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
  title: "Ocean West | AI Engineering Portfolio",
  description:
    "AI engineering portfolio of Ocean West, featuring multi-agent systems, local-first RAG, automotive AI workflows, computer vision, and Formula SAE engineering.",
  siteUrl: "https://ocean-west-portfolio.vercel.app",
  headline:
    "AI Engineering for Reliable, Local-First Product Systems.",
  subheadline:
    "Mechanical engineering student at The University of Texas at Austin building multi-agent systems, retrieval workflows, computer vision, and AI products grounded in evaluation, privacy, and real engineering use cases.",
  introduction:
    "Ocean West builds practical AI systems from provider-agnostic multi-agent tools to strict-local engineering knowledge bases and automotive sales workflows. His mechanical engineering background brings a validation-first mindset to AI products used around proprietary data, physical systems, and human decisions.",
  summary:
    "AI engineering candidate with hands-on experience in multi-agent orchestration, local-first RAG, FastAPI services, LLM evaluation, computer vision, and engineering validation.",
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  heroMetrics: [
    {
      value: "68",
      label: "agent tools",
      detail:
        "Built across 16 specialized sub-agents in a provider-agnostic AI assistant.",
      emphasis: "result",
    },
    {
      value: "418",
      label: "passing tests",
      detail:
        "Verified across the CLU multi-agent codebase and evaluation workflow.",
      emphasis: "result",
    },
    {
      value: "200+",
      label: "engineering documents",
      detail:
        "Indexed in a local-first composites knowledge system for Longhorn Racing.",
      emphasis: "result",
    },
    {
      value: "15%",
      label: "faster design iteration",
      detail:
        "Enabled by an Excel-based laminate calculator extended in the Composites AI Assistant.",
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
      title: "AI Product Engineering",
      description:
        "End-to-end systems that pair useful workflows with typed models, persistence, fallbacks, and test coverage.",
      bullets: [
        "FastAPI, Pydantic, SQLite, REST APIs, and CLI development",
        "Deterministic fallback behavior and API health checks",
        "Audit logging, structured outputs, and LLM guardrails",
      ],
    },
    {
      title: "Engineering Context",
      description:
        "Mechanical systems work that informs how AI outputs are validated against measured behavior and real constraints.",
      bullets: [
        "Formula SAE composites, ANSYS, testing, and manufacturing",
        "YOLO, OpenCV, RTSP streams, and data acquisition",
        "Validation-first engineering for physical and digital systems",
      ],
    },
  ] satisfies CapabilityCard[],
  projects: [
    {
      slug: "clu-multi-agent-assistant",
      title: "CLU: Multi-Agent AI Assistant",
      shortTitle: "CLU",
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
      ],
      sourceImageFolder: "source/images/projects/clu",
      publicImageFolder: "/images/projects/clu",
      featured: true,
    },
    {
      slug: "composites-ai-assistant",
      title: "Composites AI Assistant",
      shortTitle: "Composites AI",
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
      sourceImageFolder: "source/images/projects/composites-ai-assistant",
      publicImageFolder: "/images/projects/composites-ai-assistant",
      featured: true,
    },
    {
      slug: "sales-utility-engine",
      title: "Sales Utility Engine",
      shortTitle: "Sales Utility Engine",
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
      sourceImageFolder: "source/images/projects/sales-utility-engine",
      publicImageFolder: "/images/projects/sales-utility-engine",
      featured: true,
    },
    {
      slug: "door-guard",
      title: "Door Guard",
      shortTitle: "Door Guard",
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
      sourceImageFolder: "source/images/projects/door-guard",
      publicImageFolder: "/images/projects/door-guard",
      featured: true,
    },
    {
      slug: "steering-wheel-redesign",
      title: "Composite Steering Wheel Redesign",
      shortTitle: "Steering Wheel",
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
          label: "weight-reduction target",
          detail:
            "Targeted a 50% reduction in weight compared with the previous design.",
          emphasis: "target",
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
        "Defined a 50% weight-reduction target without presenting it as a completed measured result.",
      ],
      constraintsAndTradeoffs: [
        "Mass reduction could not come at the expense of stiffness, strength, or driver usability.",
        "Manufacturing and tooling constraints shaped laminate and geometry decisions.",
      ],
      images: [
        {
          src: "/images/projects/steering-wheel/cover.jpg",
          alt: "Completed carbon-fiber Formula SAE steering wheel held during fabrication.",
          featured: true,
        },
        {
          src: "/images/projects/steering-wheel/manufacturing.jpg",
          alt: "Carbon-fiber steering wheel plate being weighed during fabrication.",
          caption: "Carbon-fiber plate prepared as part of the steering-wheel manufacturing process.",
        },
      ],
      sourceImageFolder: "source/images/projects/steering-wheel",
      publicImageFolder: "/images/projects/steering-wheel",
      featured: false,
    },
    {
      slug: "mf5-rc-vehicle",
      title: "MF-5 RC Vehicle",
      shortTitle: "MF-5 RC",
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
      images: [
        {
          src: "/images/projects/mf5-rc-car/cover.jpg",
          alt: "Assembled MF-5 RC vehicle on a table with its radio controller.",
          featured: true,
        },
        {
          src: "/images/projects/mf5-rc-car/cad-drawing.jpg",
          alt: "Technical CAD drawing of the MF-5 RC vehicle with multiple orthographic views.",
          caption: "Technical CAD drawing used to communicate the MF-5 vehicle layout and dimensions.",
        },
        {
          src: "/images/projects/mf5-rc-car/chassis.jpg",
          alt: "CAD rendering of the MF-5 RC vehicle chassis.",
          caption: "Chassis CAD rendering showing the vehicle's structural and packaging layout.",
        },
        {
          src: "/images/projects/mf5-rc-car/qualifying-results.jpg",
          alt: "Qualifying results sheet showing Mach Futura in first place with an 18.46 second time.",
          caption: "Qualifying record: first place with an 18.46-second best time.",
        },
      ],
      sourceImageFolder: "source/images/projects/mf5-rc-car",
      publicImageFolder: "/images/projects/mf5-rc-car",
      featured: false,
    },
    {
      slug: "low-cost-engine-dynamometer",
      title: "Low-Cost Engine Dynamometer",
      shortTitle: "Dynamometer",
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
      images: [
        {
          src: "/images/projects/dynamometer/cover.jpg",
          alt: "Low-cost engine dynamometer assembly with a Predator engine, torque arm, instrumentation, and printed intake components.",
          featured: true,
        },
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
      sourceImageFolder: "source/images/projects/dynamometer",
      publicImageFolder: "/images/projects/dynamometer",
      featured: false,
    },
    {
      slug: "motion-tracking-fixture",
      title: "Motion-Tracking Fixture for Immersive Events",
      shortTitle: "Motion Tracking",
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
      sourceImageFolder: "source/images/projects/motion-tracking",
      publicImageFolder: "/images/projects/motion-tracking",
      featured: false,
    },
    {
      slug: "ai-brand-consistency-checker",
      title: "AI Brand Consistency Checker",
      shortTitle: "Brand Checker",
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
      sourceImageFolder: "source/images/projects/ai-brand-checker",
      publicImageFolder: "/images/projects/ai-brand-checker",
      featured: false,
    },
    {
      slug: "basic-rag-system",
      title: "Basic Retrieval-Augmented Generation System",
      shortTitle: "RAG System",
      category: "Independent AI Development",
      summary:
        "Developed a structured plan for a modular RAG application with separate frontend and backend workspaces.",
      heroStatement:
        "A software architecture plan organized around ingestion, retrieval, grounded generation, and maintainable handoff.",
      technologies: [
        "Python",
        "APIs",
        "Document processing",
        "Vector databases",
        "Testing",
        "AI-assisted development with Codex",
      ],
      metrics: [],
      objective:
        "Create a modular RAG application plan with clear separation of concerns, testing, and documentation.",
      responsibilities: [
        "Architecture planning",
        "Capability scoping",
        "Environment and configuration planning",
        "Testing and handoff structure",
      ],
      conceptDetails: [
        "File ingestion and parsing",
        "Text chunking",
        "Embedding generation",
        "Vector search",
        "Context retrieval",
        "Grounded answer generation",
        "Source citations",
        "Configuration and environment management",
        "Automated testing",
        "Project handoff documentation",
        "Cleanup procedures for obsolete generated files",
      ],
      engineeringProcess: [
        "Separated capabilities into modular frontend and backend workspaces.",
        "Defined operational requirements like environment management, testing, and documentation from the outset.",
      ],
      toolsAndTechnologies: [
        "Python",
        "APIs",
        "Document processing",
        "Vector databases",
        "Testing",
      ],
      designDecisions: [
        "Architecture planning emphasized maintainability and grounded responses with citations.",
        "Documentation and cleanup procedures were treated as part of the system design.",
      ],
      results: [
        "Produced a structured plan for a modular RAG system rather than overstating it as a completed deployed product.",
      ],
      constraintsAndTradeoffs: [
        "The system needed to stay modular while still covering ingestion, retrieval, generation, and handoff needs.",
      ],
      focusAreas: [
        "Python",
        "APIs",
        "Document processing",
        "Vector databases",
        "Software architecture",
        "Testing",
      ],
      sourceImageFolder: "source/images/projects/rag-system",
      publicImageFolder: "/images/projects/rag-system",
      featured: false,
    },
  ] satisfies Project[],
  experience: [
    {
      role: "AI Engineering Intern",
      organization: "Agentic Innovations",
      location: "Texas, United States",
      dates: "Summer 2026",
      summary:
        "Completed a 12-week AI engineering program delivering prototypes across engineering, business, and marketing workflows.",
      highlights: [
        "Delivered prototypes on a four-person cross-functional team spanning engineering, business, and marketing.",
        "Led Phase 2 as majority contributor on Sales Utility Engine, covering lead qualification, local LLM integration, persistence, and deployment.",
        "Presented the Phase 2 product to senior engineers from NVIDIA, Google, Meta, and NASA alongside cybersecurity specialists and industry recruiters.",
      ],
    },
    {
      role: "Composites Materials and Processes Integration Lead",
      organization: "Longhorn Racing, UT Austin Formula SAE Combustion Team",
      location: "Austin, Texas",
      dates: "May 2025 - May 2026",
      summary:
        "Led the materials and processing subsystem for non-aerodynamic composites across a 90-person Formula SAE team.",
      highlights: [
        "Owned composite design decisions across five vehicle systems and built material-property workflows used across the 10-person subsystem.",
        "Supported a steering-wheel redesign that achieved a 50% mass reduction.",
        "Validated ANSYS simulations against tensile, bend, adhesive, and torsional testing to establish factors of safety from 1.5 to 8.",
        "Authored composite testing methodology and material-property documentation adopted for the following season.",
      ],
      metrics: [
        "90-person Formula SAE team",
        "Five vehicle systems",
        "50% steering-wheel mass reduction",
        "Factors of safety: 1.5 to 8",
      ],
    },
    {
      role: "Undergraduate Research and Development Intern",
      organization:
        "Margie and Bill Klesse College of Engineering and Integrated Design, UTSA",
      location: "San Antonio, Texas",
      dates: "January 2024 - August 2024",
      summary:
        "Supported an Air Force Research Laboratory project through experimental fatigue testing and engineering analysis of additively manufactured titanium.",
      highlights: [
        "Conducted more than 100 axial fatigue tests on additively manufactured Ti-6Al-4V specimens.",
        "Performed Equivalent Initial Damage Size analysis; results supported a graduate researcher's findings presentation.",
      ],
      metrics: [
        "100+ axial fatigue tests completed.",
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
      title: "Composite Manufacturing",
      items: [
        "Prepreg carbon-fiber layup",
        "Wet layup",
        "Resin infusion",
        "Compression molding",
        "Forged carbon-fiber processes",
        "Sandwich-panel construction",
        "Core-material integration",
        "Adhesive bonding",
        "Composite tooling design",
        "FDM 3D printing",
        "High-temperature printed tooling",
        "CNC machining",
        "Surface preparation and finishing",
        "Prototype fabrication",
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
