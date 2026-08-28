export const PORTFOLIO_DATA = {
  profile: {
    name: "Abhay Rawat",
    title: "Information Science & Data Science Student",
    institution: "Nitte Meenakshi Institute of Technology · IIT Madras",
    tagline: "Building trustworthy AI, data, and mobile systems—from retrieval-augmented knowledge agents to financial analytics and real-time applications.",
    avatar: "./abhay-profile.jpeg",
    coverBadge: "Open to AI/ML, software engineering & research opportunities",
    email: "workwithabhay3006@gmail.com",
    location: "Bengaluru, India",
    credly: "https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly",
    github: "https://github.com/Mr-Spectr",
    linkedin: "https://www.linkedin.com/in/abhay-rawat-790b24288/",
    bio: "Abhay Rawat is pursuing a B.E. in Information Science & Engineering at Nitte Meenakshi Institute of Technology (CGPA 8.5) alongside a B.Sc. in Data Science & Programming at IIT Madras. His work focuses on agentic AI, secure retrieval, backend systems, data-driven analysis, and Flutter applications."
  },

  metrics: [
    { label: "CGPA (NMIT)", value: "8.5 / 10", change: "B.E. Info Science & Engg", icon: "Award" },
    { label: "IIT Madras Data Science", value: "B.Sc.", change: "Dual Degree Scholar", icon: "BookOpen" },
    { label: "Amazon ML Challenge", value: "Top 15%", change: "National Rank", icon: "Quote" },
    { label: "IISc Hackathon", value: "Top 5%", change: "Among 500+ Teams", icon: "Star" },
    { label: "Projects Built", value: "4 Major", change: "Agentic AI, MACRA, Flutter", icon: "FileText" }
  ],

  researchDomains: [
    {
      id: "agentic-ai",
      title: "Enterprise Agentic AI & RAG",
      desc: "Engineering autonomous retrieval-augmented generation pipelines, role-based access control (RBAC), and Groq LLM API integrations.",
      icon: "Cpu",
      focusLabel: "Flagship project",
      status: "Primary Specialization"
    },
    {
      id: "data-science",
      title: "Data Science & Financial Analytics",
      desc: "Processing financial ratios (PE, PB, Dividend Yield), predictive machine learning modeling, and automated analysis workflows.",
      icon: "Zap",
      focusLabel: "Analytics platform",
      status: "IIT Madras Core"
    },
    {
      id: "cloud-devops",
      title: "Backend Microservices & Docker",
      desc: "FastAPI REST API design, MySQL relational databases, Docker container orchestration, and workflow automation using n8n.",
      icon: "Network",
      focusLabel: "Systems practice",
      status: "Backend Architecture"
    },
    {
      id: "flutter-mobile",
      title: "Cross-Platform Mobile Apps",
      desc: "Flutter & Dart application development, Firebase Realtime Firestore synchronization, and OOP state management.",
      icon: "Bot",
      focusLabel: "Two mobile apps",
      status: "Mobile Engineering"
    }
  ],

  graphData: {
    nodes: [
      { id: "AgenticAI", label: "Agentic AI & RAG", group: 1, size: 28, val: "Enterprise Agent" },
      { id: "FastAPI", label: "FastAPI & Python", group: 1, size: 26, val: "Backend APIs" },
      { id: "DataScience", label: "Data Science (IIT Madras)", group: 2, size: 26, val: "B.Sc. Program" },
      { id: "ML", label: "Scikit-Learn & PyTorch", group: 2, size: 22, val: "Amazon ML Top 15%" },
      { id: "Flutter", label: "Flutter & Dart", group: 3, size: 24, val: "FlutChat & GameMania" },
      { id: "Firebase", label: "Firebase & Firestore", group: 3, size: 20, val: "Real-Time Sync" },
      { id: "Docker", label: "Docker & AWS/GCP", group: 1, size: 22, val: "Cloud Containerization" },
      { id: "SQL", label: "MySQL & DBMS", group: 2, size: 20, val: "Database Design" },
      { id: "Analytics", label: "MACRA Platform", group: 2, size: 21, val: "Financial Analytics" }
    ],
    links: [
      { source: "AgenticAI", target: "FastAPI", label: "REST Engine" },
      { source: "AgenticAI", target: "Docker", label: "Container Deployment" },
      { source: "AgenticAI", target: "SQL", label: "RBAC & Data" },
      { source: "DataScience", target: "ML", label: "Predictive Models" },
      { source: "DataScience", target: "Analytics", label: "MACRA Engine" },
      { source: "Flutter", target: "Firebase", label: "Authentication & Chat" },
      { source: "Flutter", target: "FastAPI", label: "API Consumption" },
      { source: "ML", target: "Analytics", label: "Financial Metrics" }
    ]
  },

  publications: [
    {
      id: "pub-1",
      title: "Enterprise Knowledge Agent: Scalable Agentic AI & RAG Architecture",
      authors: ["Abhay Rawat"],
      venue: "Open Source Engineering Project (GitHub)",
      year: 2025,
      type: "Project",
      category: "Agentic AI",
      isHighlighted: true,
      award: "Featured Agentic Project",
      abstract: "Engineered a scalable Agentic AI platform using FastAPI, MySQL, Docker, and Retrieval-Augmented Generation (RAG) pipelines to deliver secure, context-aware knowledge retrieval. Implemented Role-Based Access Control (RBAC), Groq API LLM integration, n8n workflow automation, and multi-format report generation.",
      pdfUrl: "https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-",
      codeUrl: "https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-",
      demoUrl: "https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-",
      bibtex: `@software{rawat2025enterprise,
  title={Enterprise Knowledge Agent (Agentic AI)},
  author={Rawat, Abhay},
  url={https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-},
  year={2025}
}`
    },
    {
      id: "pub-2",
      title: "MACRA: Data-Driven Business Analytics & Investment Decision Support Platform",
      authors: ["Abhay Rawat"],
      venue: "Financial Technology & Analytics Showcase",
      year: 2025,
      type: "Project",
      category: "Data Science",
      isHighlighted: true,
      award: "Analytics Platform",
      abstract: "Engineered a data-driven analytics platform processing financial datasets to generate actionable investment insights. Processed key financial indicators including PE Ratio, PB Ratio, Dividend Yield, and Market Capitalization with automated scikit-learn predictive modeling.",
      pdfUrl: "https://github.com/Mr-Spectr/MACRA",
      codeUrl: "https://github.com/Mr-Spectr/MACRA",
      bibtex: `@software{rawat2025macra,
  title={MACRA -- Business Analytics & Decision Support Platform},
  author={Rawat, Abhay},
  url={https://github.com/Mr-Spectr/MACRA},
  year={2025}
}`
    },
    {
      id: "pub-3",
      title: "FlutChat: Real-Time Mobile Messaging with Firebase Firestore & Authentication",
      authors: ["Abhay Rawat"],
      venue: "Mobile Computing Showcase",
      year: 2025,
      type: "Project",
      category: "Flutter Mobile",
      isHighlighted: false,
      abstract: "Built a cross-platform Flutter application leveraging Firebase Authentication and real-time Firestore database synchronization. Applied modular architecture and clean state management workflows for optimal responsiveness.",
      pdfUrl: "https://github.com/Mr-Spectr/FlutChat",
      codeUrl: "https://github.com/Mr-Spectr/FlutChat",
      bibtex: `@software{rawat2025flutchat,
  title={FlutChat -- Real-Time Chat Application},
  author={Rawat, Abhay},
  url={https://github.com/Mr-Spectr/FlutChat},
  year={2025}
}`
    },
    {
      id: "pub-4",
      title: "GameMania: Multi-Game Interactive Engine Built with OOP Principles",
      authors: ["Abhay Rawat"],
      venue: "Flutter Application Showcase",
      year: 2025,
      type: "Project",
      category: "Flutter Mobile",
      isHighlighted: false,
      abstract: "Developed a multi-game Flutter platform featuring interactive gameplay mechanics, custom smooth animations, and responsive UI components based on solid Object-Oriented Programming (OOP) design patterns.",
      pdfUrl: "https://github.com/Mr-Spectr/GameMania",
      codeUrl: "https://github.com/Mr-Spectr/GameMania",
      bibtex: `@software{rawat2025gamemania,
  title={GameMania -- Multi-Game Flutter Platform},
  author={Rawat, Abhay},
  url={https://github.com/Mr-Spectr/GameMania},
  year={2025}
}`
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Enterprise Knowledge Agent (Agentic AI)",
      category: "Agentic AI / RAG Architecture",
      tagline: "Scalable Agentic AI platform built with FastAPI, RAG pipelines, MySQL, Groq API, n8n, and Docker containerization.",
      stars: "Open Source",
      forks: "Active",
      tags: ["Python", "FastAPI", "RAG", "MySQL", "Groq API", "n8n", "Docker"],
      githubUrl: "https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-",
      demoUrl: "https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      featured: true,
      stats: { Security: "RBAC Enabled", Pipeline: "RAG + Groq API" }
    },
    {
      id: "proj-2",
      title: "MACRA — Analytics & Decision Platform",
      category: "Data Science & Financial ML",
      tagline: "Predictive analytics platform processing PE/PB ratios, Dividend Yields, and market capitalization for financial decision support.",
      stars: "Open Source",
      forks: "Active",
      tags: ["Python", "JavaScript", "scikit-learn", "SQL", "REST APIs"],
      githubUrl: "https://github.com/Mr-Spectr/MACRA",
      demoUrl: "https://github.com/Mr-Spectr/MACRA",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      featured: true,
      stats: { FinancialMetrics: "PE/PB Ratios", Model: "Scikit-Learn ML" }
    },
    {
      id: "proj-3",
      title: "FlutChat — Real-Time Chat App",
      category: "Flutter & Cloud Backend",
      tagline: "Cross-platform real-time messaging application with Firebase Auth and Firestore cloud data sync.",
      stars: "Open Source",
      forks: "Active",
      tags: ["Flutter", "Dart", "Firebase", "Firestore", "State Management"],
      githubUrl: "https://github.com/Mr-Spectr/FlutChat",
      demoUrl: "https://github.com/Mr-Spectr/FlutChat",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      featured: false,
      stats: { Sync: "Real-Time Firestore", Auth: "Firebase Auth" }
    },
    {
      id: "proj-4",
      title: "GameMania — Multi-Game Platform",
      category: "Mobile Game Architecture",
      tagline: "Interactive multi-game Flutter application applying clean OOP principles and responsive UI components.",
      stars: "Open Source",
      forks: "Active",
      tags: ["Flutter", "Dart", "OOP", "UI/UX Animations"],
      githubUrl: "https://github.com/Mr-Spectr/GameMania",
      demoUrl: "https://github.com/Mr-Spectr/GameMania",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      featured: false,
      stats: { Paradigm: "Object-Oriented", UI: "Custom Animations" }
    }
  ],

  timeline: [
    {
      period: "Aug 2023 -- Jul 2027",
      role: "Bachelor of Engineering in Information Science and Engineering",
      institution: "Nitte Meenakshi Institute of Technology, Bengaluru",
      details: "Current CGPA: 8.5 / 10.0. Core Focus: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks.",
      type: "Education",
      badge: "CGPA 8.5"
    },
    {
      period: "May 2024 -- Present",
      role: "B.Sc. in Data Science & Programming",
      institution: "Indian Institute of Technology, Madras",
      details: "Dual Degree Scholar. Specializing in Python for Data Science, Algorithmic Thinking, Scikit-learn, TensorFlow, PyTorch, and NLP.",
      type: "Education",
      badge: "IIT Madras"
    },
    {
      period: "Dec 2025 -- Present",
      role: "Agentic AI & Backend Engineer",
      institution: "Enterprise Knowledge Agent Project",
      details: "Engineered FastAPI microservices, RBAC security, Groq API integration, and n8n workflow automation backed by Docker containers.",
      type: "Project Lead",
      badge: "Agentic AI"
    },
    {
      period: "Apr 2025 -- Jun 2025",
      role: "Data Science & Analytics Lead",
      institution: "MACRA Platform Project",
      details: "Built automated data ingestion pipelines and predictive models for financial valuation ratios (PE, PB, Dividend Yield).",
      type: "Project Lead",
      badge: "Analytics"
    }
  ],

  awards: [
    {
      year: "2025",
      title: "Amazon ML Challenge — Top 15% National Rank",
      organization: "Amazon India",
      description: "Secured Top 15% standing nationally in structured machine learning model-building and predictive data challenge."
    },
    {
      year: "2025",
      title: "Code Cadets Hackathon (IISc) — Top 5% Finalist",
      organization: "Indian Institute of Science (IISc), Bengaluru",
      description: "Ranked among top 5% of teams out of 500+ participants in competitive software engineering hackathon."
    },
    {
      year: "2025",
      title: "Smart India Hackathon (SIH) 2025 Representative",
      organization: "Ministry of Education / Institute Representative",
      description: "Qualified at college level and selected as Official Institute Representative for Smart India Hackathon."
    },
    {
      year: "2024 - 2025",
      title: "Google Cloud, AWS & Azure Certified",
      organization: "Credly Verified Badges",
      description: "Google Cloud Engineering & Foundations, AWS Cloud Architecture, Azure AI & DevOps Fundamentals."
    }
  ],

  teaching: [
    {
      code: "DATA101",
      title: "IIT Madras Data Science Foundations",
      term: "2024 - 2025",
      role: "B.Sc. Scholar",
      level: "Undergraduate / Professional",
      syllabusUrl: "https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly"
    },
    {
      code: "CS201",
      title: "Algorithmic Thinking & Problem Solving",
      term: "Rice University / Online",
      role: "Certified Scholar",
      level: "Undergraduate",
      syllabusUrl: "https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly"
    },
    {
      code: "MLOPS",
      title: "AI / MLOps & NLP Deep Learning Foundations",
      term: "2024 - 2025",
      role: "Certified Developer",
      level: "Advanced AI",
      syllabusUrl: "https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly"
    }
  ]
};
