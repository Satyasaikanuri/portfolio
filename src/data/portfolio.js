export const portfolioData = {
  personalInfo: {
    fullName: "Kanuri Jagan Satya Sai",
    shortName: "Jagan Sai",
    title: "Java Full Stack Developer",
    subTitle: "Artificial Intelligence & Machine Learning Graduate",
    bio: "AI & ML engineering graduate passionate about building scalable, user-friendly applications using Java 21, Spring Boot, React, and modern AI/RAG web technologies.",
    email: "jagansatyasaikanuri@gmail.com",
    location: "Andhra Pradesh, India",
    github: "https://github.com/Satyasaikanuri",
    linkedin: "https://www.linkedin.com/in/jagan-satya-sai-kanuri-b72562277",
    resumePath: "/Kanuri_Jagan_Satya_Sai_Resume.pdf",
    resumeFileName: "Kanuri_Jagan_Satya_Sai_Resume.pdf",
  },

  // Centralized editable stats
  stats: [
    { id: 1, label: "B.Tech Graduate", value: "2026", subtext: "AI & Machine Learning (7.79 CGPA)" },
    { id: 2, label: "Java Development", value: "Java 21 & Spring Boot", subtext: "Enterprise Architecture & REST APIs" },
    { id: 3, label: "AI & Full Stack", value: "RAG & Neural Tech", subtext: "LangChain4j, Groq & React" },
    { id: 4, label: "Featured Systems", value: "2 Production Repos", subtext: "Live Demos & Full Test Suites" },
  ],

  // Skills categorized
  skills: {
    languages: [
      { name: "Java 21", level: "Core & Enterprise Architecture", icon: "Coffee" },
      { name: "JavaScript (ES6+)", level: "Async & DOM APIs", icon: "Code2" },
      { name: "SQL", level: "Relational Queries & Optimization", icon: "Database" },
      { name: "HTML5", level: "Semantic Web Structure", icon: "FileCode" },
      { name: "CSS3", level: "Flexbox, Grid & Styling", icon: "Palette" },
    ],
    frontend: [
      { name: "React.js", level: "Vite, Hooks & State Management", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: "Frontend DOM & Async Fetch", icon: "FileJson" },
      { name: "HTML5", level: "Web Standards & Markup", icon: "Globe" },
      { name: "CSS3", level: "Responsive Layouts & Glassmorphism", icon: "Sparkles" },
    ],
    backend: [
      { name: "Java 21", level: "OOP & Multithreading", icon: "Coffee" },
      { name: "Spring Boot 3.3", level: "REST API Microservices", icon: "Server" },
      { name: "Spring Security", level: "Stateless JWT & RBAC", icon: "Layers" },
      { name: "Spring Data JPA", level: "ORM & Hibernate Persistence", icon: "HardDrive" },
      { name: "LangChain4j", level: "RAG & Neural AI Integration", icon: "Cpu" },
    ],
    database: [
      { name: "MySQL", level: "Relational Schema & Audits", icon: "Database" },
      { name: "Redis", level: "Session Cache & Rate Limiting", icon: "Search" },
      { name: "Pinecone", level: "Vector Embeddings & Semantic Search", icon: "HardDrive" },
    ],
    tools: [
      { name: "Groq API", level: "Llama-3.1-70b & Whisper-V3", icon: "Cpu" },
      { name: "Docker", level: "Containerization & Deployment", icon: "Server" },
      { name: "Render", level: "Cloud Hosting & Continuous Deployment", icon: "Globe" },
      { name: "Git & GitHub", level: "Version Control & Audit Logs", icon: "Github" },
      { name: "Postman & Maven", level: "API Testing & Build Pipeline", icon: "Send" },
    ],
  },

  // Project Categories for filtering
  projectCategories: ["All", "Java", "Full Stack", "React", "Web"],

  // Projects data array with detailed README specs
  projects: [
    {
      id: "ai-knowledge-assistant",
      title: "AI Knowledge Assistant (Neural RAG Core)",
      shortDescription: "Production-ready Enterprise AI Knowledge Assistant capable of multi-modal ingestion (PDF, Audio, Video), neural transcription (Groq Whisper-V3), and contextual RAG interrogation.",
      category: ["Java", "Full Stack", "React", "Web"],
      featured: true,
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      problem: "Navigating extensive technical documentation, PDFs, and multimedia recordings (MP3/MP4) manually is time-consuming and inefficient for modern teams.",
      solution: "Engineered a production-ready Enterprise Neural RAG platform using Java 21, Spring Boot 3.3, LangChain4j, Groq API (Llama 3.1-70b & Whisper-V3), and Pinecone Vector Store for multi-modal ingestion, instant speech-to-text, and contextual chat interrogation.",
      features: [
        "Multi-modal Ingestion: Native support for PDF documents, MP3 audio, and MP4 video files",
        "Neural Transcription: Groq Whisper-Large-V3 engine for near-instant speech-to-text",
        "Contextual Vector Store: Automatic document chunking & embedding into Pinecone Vector Index",
        "Neural Chat UI: Futuristic terminal-style chat with clickable timestamps & source citations",
        "Neural Summarization: One-click comprehensive AI summaries of any uploaded knowledge unit",
        "Collapsible Media Player: Synced video/audio player jumping directly to neural sync points",
        "Robust Architecture: Backend with Java 21, Spring Boot 3.3, Redis rate-limiting, & MySQL persistence"
      ],
      technologies: [
        "Java 21",
        "Spring Boot 3.3",
        "LangChain4j",
        "Groq API (Llama-3.1-70b & Whisper-V3)",
        "Pinecone Vector Store",
        "React.js",
        "Vite",
        "Redis",
        "MySQL"
      ],
      githubUrl: "https://github.com/Satyasaikanuri/AI_Knowledge_Assistant",
      liveDemoUrl: "https://github.com/Satyasaikanuri/AI_Knowledge_Assistant",
    },
    {
      id: "service-request-workflow-system",
      title: "Service Portal Workflow Automation System",
      shortDescription: "Streamlined IT service request submission, automated agent load balancing, SLA breach tracking, and granular RBAC security for enterprise teams.",
      category: ["Java", "Full Stack"],
      featured: true,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      problem: "Traditional IT service portals struggle with manual ticket routing, unmonitored SLA breaches, lack of audit trails, and fragmented approval workflows.",
      solution: "Developed a full-stack IT service portal featuring automated load-balanced ticket assignments, real-time SLA breach background escalation engines, JWT-based RBAC security, and immutable audit logs.",
      features: [
        "Submit Request Workflows: Enable custom hardware, software, or access requests with priority policies",
        "Automated Load-Balanced Assignment: Auto-assign tickets to available agents based on department mapping",
        "SLA Breach Escalation: Calculate dynamic due dates per priority policy & auto-escalate breached tickets",
        "Real-Time Dashboards: Visualize request metrics, performance statistics, and trend logs",
        "Granular RBAC Security: Enforce authorization scopes for Users, Managers, Approvers & Admins",
        "Immutable Audit Trails: Complete system action logging and status views for enterprise compliance",
        "Production Containerization: Live deployed on Render with Docker & MySQL database"
      ],
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Security (JWT)",
        "Spring Data JPA",
        "MySQL",
        "JavaScript",
        "Docker",
        "Render"
      ],
      githubUrl: "https://github.com/Satyasaikanuri/service-request-workflow-system",
      liveDemoUrl: "https://service-request-workflow-system-1.onrender.com/",
    }
  ],

  // Experience & Learning Timeline (Real Academic & Personal Projects)
  experience: [
    {
      id: 1,
      role: "Lead Full-Stack Developer",
      organization: "Academic Capstone Project — Service Portal Workflow Automation",
      location: "Bonam Venkata Chalamayya Engineering College",
      type: "Academic Capstone Project",
      description: "Designed, architected, and built the end-to-end Service Portal Workflow Automation System for enterprise IT request tracking and SLA monitoring.",
      highlights: [
        "Architected modular Java 21 & Spring Boot REST microservices with JWT stateless authentication.",
        "Implemented automated load-balanced ticket assignment and dynamic SLA breach background escalation.",
        "Designed relational MySQL schemas, granular RBAC access controls, and immutable audit logs.",
        "Created production Docker containerization and deployed live on Render."
      ],
      isPlaceholder: false
    },
    {
      id: 2,
      role: "AI & Full-Stack Developer",
      organization: "Personal Open-Source Project — AI Knowledge Assistant (Neural RAG Core)",
      location: "Self-Driven Development",
      type: "Independent Personal Project",
      description: "Researched, designed, and engineered a production-ready Enterprise AI Knowledge Assistant featuring multi-modal ingestion and neural transcription.",
      highlights: [
        "Integrated Groq Whisper-Large-V3 engine for near-instant speech-to-text transcription of audio/video.",
        "Engineered RAG pipeline using LangChain4j, Groq Llama-3.1-70b, and Pinecone Vector Store embeddings.",
        "Built futuristic React terminal-style chat UI with clickable timestamps and source citations.",
        "Configured Redis session caching, rate-limiting, and MySQL metadata persistence."
      ],
      isPlaceholder: false
    }
  ],

  // Education Timeline (Real User Data)
  education: [
    {
      id: 1,
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Bonam Venkata Chalamayya Engineering College",
      period: "2023 – 2026",
      score: "7.79 CGPA",
      details: "Specialized in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Java Full Stack Development, Object-Oriented Programming, and Database Management Systems.",
      isPlaceholder: false
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      institution: "BVC Institute of Technology and Science",
      period: "2020 – 2023",
      score: "76%",
      details: "Core Computer Science fundamentals, Web Development, Object-Oriented Programming, Software Engineering principles, and Database Systems.",
      isPlaceholder: false
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC / 10th Class)",
      institution: "ZPP High School Cheyyeru",
      period: "2019 – 2020",
      score: "89%",
      details: "Completed secondary education with high academic distinction in Mathematics, Science, and Analytical Problem Solving.",
      isPlaceholder: false
    }
  ]
};
