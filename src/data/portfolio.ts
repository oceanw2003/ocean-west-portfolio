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
  sourceImageFolder: string;
  publicImageFolder: string;
  featured: boolean;
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
  resumePath: "/documents/Ocean_West_Resume.pdf",
  expectedGraduation: "Fall 2026",
  field: "Mechanical Engineering",
  title: "Ocean West | Mechanical Engineer",
  description:
    "Mechanical engineering portfolio of Ocean West, featuring composite structures, Formula SAE, advanced manufacturing, mechanical testing, and AI product development.",
  siteUrl: "https://ocean-west-portfolio.vercel.app",
  headline:
    "Mechanical Engineering, Composite Systems, and Intelligent Product Development.",
  subheadline:
    "Mechanical engineering student at The University of Texas at Austin focused on composite structures, advanced manufacturing, motorsport engineering, and AI-enabled product development.",
  introduction:
    "Ocean West leads materials and processes integration for non-aerodynamic composite systems on Longhorn Racing's Formula SAE combustion vehicle. His work connects structural analysis, carbon-fiber manufacturing, experimental validation, vehicle integration, and practical AI software.",
  summary:
    "Mechanical engineering student at The University of Texas at Austin with experience in composite structures, motorsport engineering, mechanical design, material testing, and AI product development.",
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  heroMetrics: [
    {
      value: "100+",
      label: "axial fatigue tests",
      detail:
        "Conducted on additively manufactured titanium specimens using an MTS Landmark test system.",
      emphasis: "result",
    },
    {
      value: "50%",
      label: "steering-wheel mass target",
      detail:
        "Carbon-fiber steering-wheel redesign targeted a 50% reduction while retaining stiffness and strength.",
      emphasis: "target",
    },
    {
      value: "1st / 40",
      label: "MF-5 qualifying result",
      detail:
        "Qualified first among 40 teams and recorded the fastest qualifying result at 18.46 seconds across three laps.",
      emphasis: "result",
    },
    {
      value: "11th",
      label: "Formula SAE design finish",
      detail:
        "Contributed to Longhorn Racing's 11th-place finish in the 2025 Formula SAE design event.",
      emphasis: "result",
    },
  ] satisfies Metric[],
  capabilityCards: [
    {
      title: "Design and Analysis",
      description:
        "Parametric CAD, structural analysis, and composite laminate decisions grounded in manufacturability and load paths.",
      bullets: [
        "SolidWorks, ANSYS Mechanical, ANSYS ACP, HyperMesh",
        "Composite laminate analysis and fiber-orientation optimization",
        "Documentation systems that improve continuity and traceability",
      ],
    },
    {
      title: "Composite Manufacturing",
      description:
        "Hands-on process ownership across tooling, layup strategy, curing, machining, and integration.",
      bullets: [
        "Prepreg, wet layup, resin infusion, compression molding",
        "High-temperature 3D-printed tooling and CNC finishing",
        "Material-waste reduction through improved layup workflows",
      ],
    },
    {
      title: "Testing and Validation",
      description:
        "Experimental work that connects simulation assumptions to measured behavior.",
      bullets: [
        "Tensile, three-point bend, torsional, adhesive, and fatigue testing",
        "Data acquisition, signal processing, and material characterization",
        "Validation planning for structural and vehicle systems",
      ],
    },
    {
      title: "AI and Software",
      description:
        "Software tools built to make engineering and product communication more reliable.",
      bullets: [
        "Python, MATLAB, Arduino, Excel, retrieval-augmented generation",
        "Document-processing workflows and prompt engineering",
        "AI-assisted product development with practical user-facing outputs",
      ],
    },
  ] satisfies CapabilityCard[],
  projects: [
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
      sourceImageFolder: "source/images/projects/steering-wheel",
      publicImageFolder: "/images/projects/steering-wheel",
      featured: true,
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
      sourceImageFolder: "source/images/projects/mf5-rc-car",
      publicImageFolder: "/images/projects/mf5-rc-car",
      featured: true,
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
      featured: true,
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
      featured: true,
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
      role: "Composites Materials and Processes Integration Lead",
      organization: "Longhorn Racing, UT Austin Formula SAE Combustion Team",
      location: "Austin, Texas",
      dates: "May 2025 - Present",
      summary:
        "Leads non-aerodynamic composite systems integration across design, analysis, manufacturing, testing, and vehicle installation.",
      highlights: [
        "Coordinates composite projects involving the steering wheel, pedal-box integration, sandwich panels, body panels, structural tubes, seat pan, firewall, headrest plate, steering supports, muffler shell, dashboard, and other assemblies.",
        "Introduced a structured design-documentation system to improve continuity, engineering traceability, and manufacturing readiness.",
        "Built and maintained a composite material-property library in ANSYS ACP.",
        "Conducted tensile, three-point bend, adhesive, and torsional testing to validate simulations and characterize performance.",
        "Applied compression molding, resin infusion, forged-carbon sheet molding compound, CNC machining, prepreg processing, and high-temperature 3D-printed tooling.",
      ],
      metrics: [
        "Targeted a 50% steering-wheel weight reduction.",
        "Estimated 10% reduction in material waste.",
        "Recruited and onboarded six engineers from more than 100 applicants.",
        "Developed parametric CAD models that improved modeling efficiency by as much as 60%.",
      ],
    },
    {
      role: "Composites Engineer",
      organization: "Longhorn Racing, UT Austin Formula SAE Combustion Team",
      location: "Austin, Texas",
      dates: "September 2024 - May 2025",
      summary:
        "Engineered and manufactured carbon-fiber vehicle components while improving design iteration speed and manufacturability.",
      highlights: [
        "Engineered and manufactured carbon-fiber airfoils, body panels, a muffler shell, sandwich structures, and additional components.",
        "Created an Excel-based composite weight-estimation calculator using CAD surface areas, laminate definitions, and material properties.",
        "Used FDM 3D printing for prototypes, molds, tooling, and design validation.",
        "Supported development of front-wing, side-pod, steering-wheel, and bodywork prototypes.",
      ],
      metrics: [
        "Contributed to the team's 11th-place finish in the 2025 Formula SAE design event.",
        "Accelerated composite design iterations by approximately 15% through automated weight estimation.",
      ],
    },
    {
      role: "Undergraduate Research and Development Intern",
      organization:
        "Margie and Bill Klesse College of Engineering and Integrated Design, UTSA",
      location: "San Antonio, Texas",
      dates: "January 2024 - August 2024",
      summary:
        "Supported experimental fatigue research on additively manufactured titanium through testing, microscopy, data processing, and engineering analysis.",
      highlights: [
        "Conducted more than 100 axial fatigue tests on additively manufactured titanium specimens using an MTS Landmark test system.",
        "Processed and analyzed fatigue data for additively manufactured Ti-6Al-4V.",
        "Calculated Equivalent Initial Damage Size values to characterize fatigue performance.",
        "Investigated relationships among manufacturing conditions, microstructure, defects, and fatigue life.",
      ],
      metrics: [
        "100+ axial fatigue tests completed.",
      ],
    },
  ] satisfies ExperienceEntry[],
  skillGroups: [
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
        "Python",
        "MATLAB",
        "Arduino",
        "Excel",
        "Bild PDM",
        "Orca Slicer",
        "AI-assisted development with Codex",
        "Retrieval-augmented generation",
        "Prompt engineering",
        "Document-processing workflows",
      ],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      institution: "The University of Texas at Austin",
      degree: "Bachelor of Science in Mechanical Engineering",
      location: "Austin, Texas",
      dates: "August 2024 - Fall 2026",
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
      title: "Formula SAE Design - 11th Place",
      detail:
        "Contributed to Longhorn Racing's 11th-place finish in the 2025 Formula SAE design event.",
    },
    {
      title: "Recruitment and Mentoring",
      detail:
        "Recruited and onboarded six engineers from a pool of more than 100 applicants.",
    },
    {
      title: "MF-5 RC Vehicle Results",
      detail:
        "Qualified first among 40 teams, earned the fastest qualifying result, and received the top design score.",
    },
    {
      title: "Documentation and Continuity Systems",
      detail:
        "Built documentation and material-property systems to improve technical continuity and manufacturing readiness.",
    },
    {
      title: "Academic Recognition",
      detail:
        "President's List, Dean's List for two semesters, and Sapientia Award.",
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
      label: "Resume",
      href: "/documents/Ocean_West_Resume.pdf",
    },
  ] satisfies ContactLink[],
  professionalInterests: [
    "Composite structures",
    "Advanced manufacturing",
    "Motorsport engineering",
    "Mechanical product development",
    "Structural analysis",
    "Experimental testing",
    "Vehicle systems",
    "Artificial intelligence",
    "Engineering software",
    "Robotics",
    "Computer vision",
    "Automotive photography",
  ],
};

export const featuredProjects = portfolio.projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
