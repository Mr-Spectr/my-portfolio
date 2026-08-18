export const PORTFOLIO_DATA = {
  profile: {
    name: 'Abhay Rawat',
    title: 'Information Science & Data Science Student',
    institution: 'Nitte Meenakshi Institute of Technology · IIT Madras',
    tagline: 'Building trustworthy AI, data, and mobile systems—from retrieval-augmented knowledge agents to financial analytics and real-time applications.',
    avatar: './abhay_avatar.png',
    coverBadge: 'Open to AI/ML, software engineering & research opportunities',
    email: 'workwithabhay3006@gmail.com',
    location: 'Bengaluru, India',
    credly: 'https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly',
    github: 'https://github.com/Mr-Spectr',
    linkedin: 'https://www.linkedin.com/in/abhay-rawat-790b24288/',
    bio: 'Abhay Rawat is pursuing a B.E. in Information Science & Engineering at Nitte Meenakshi Institute of Technology (CGPA 8.5) alongside a B.Sc. in Data Science & Programming at IIT Madras. His work focuses on agentic AI, secure retrieval, backend systems, data-driven analysis, and Flutter applications.'
  },

  metrics: [
    { label: 'CGPA (NMIT)', value: '8.5 / 10', change: 'Information Science & Engineering', icon: 'Award' },
    { label: 'IIT Madras', value: 'B.Sc.', change: 'Data Science & Programming', icon: 'BookOpen' },
    { label: 'Amazon ML Challenge', value: 'Top 15%', change: 'National rank', icon: 'Quote' },
    { label: 'Code Cadets · IISc', value: 'Top 5%', change: 'Among 500+ participants', icon: 'Star' },
    { label: 'Selected projects', value: '4', change: 'AI, analytics & mobile', icon: 'FileText' }
  ],

  researchDomains: [
    {
      id: 'agentic-ai',
      title: 'Enterprise Agentic AI & RAG',
      desc: 'Context-aware retrieval pipelines, role-based access control, LLM integration, workflow automation, and report generation.',
      focusLabel: 'Flagship project',
      status: 'Primary focus'
    },
    {
      id: 'data-science',
      title: 'Data Science & Financial Analytics',
      desc: 'Financial-ratio processing, predictive modeling, automated analysis, and REST services for decision support.',
      focusLabel: 'Analytics platform',
      status: 'Data systems'
    },
    {
      id: 'cloud-devops',
      title: 'Backend Services & Cloud',
      desc: 'FastAPI services, MySQL, Docker, REST APIs, and workflow orchestration for reliable application backends.',
      focusLabel: 'Systems practice',
      status: 'Engineering'
    },
    {
      id: 'flutter-mobile',
      title: 'Cross-Platform Mobile Apps',
      desc: 'Flutter and Dart apps using Firebase authentication, Firestore synchronization, modular architecture, and responsive UI.',
      focusLabel: 'Two mobile apps',
      status: 'Product craft'
    }
  ],

  graphData: {
    nodes: [
      { id: 'AgenticAI', label: 'Agentic AI & RAG', group: 1, size: 28, val: 'Enterprise Knowledge Agent' },
      { id: 'FastAPI', label: 'FastAPI & Python', group: 1, size: 26, val: 'Backend services' },
      { id: 'DataScience', label: 'Data Science', group: 2, size: 26, val: 'IIT Madras B.Sc.' },
      { id: 'ML', label: 'ML & NLP', group: 2, size: 22, val: 'Amazon ML Challenge' },
      { id: 'Flutter', label: 'Flutter & Dart', group: 3, size: 24, val: 'FlutChat & GameMania' },
      { id: 'Firebase', label: 'Firebase & Firestore', group: 3, size: 20, val: 'Real-time sync' },
      { id: 'Docker', label: 'Docker & Cloud', group: 1, size: 22, val: 'AWS & GCP foundations' },
      { id: 'SQL', label: 'MySQL & DBMS', group: 2, size: 20, val: 'Data access & RBAC' },
      { id: 'Analytics', label: 'MACRA', group: 2, size: 21, val: 'Financial analytics' }
    ],
    links: [
      { source: 'AgenticAI', target: 'FastAPI', label: 'REST services' },
      { source: 'AgenticAI', target: 'Docker', label: 'Container delivery' },
      { source: 'AgenticAI', target: 'SQL', label: 'Secure data access' },
      { source: 'DataScience', target: 'ML', label: 'Predictive models' },
      { source: 'DataScience', target: 'Analytics', label: 'MACRA analysis' },
      { source: 'Flutter', target: 'Firebase', label: 'Cloud messaging' },
      { source: 'Flutter', target: 'FastAPI', label: 'API integration' },
      { source: 'ML', target: 'Analytics', label: 'Financial metrics' }
    ]
  },

  projects: [
    {
      id: 'proj-1',
      title: 'Enterprise Knowledge Agent',
      category: 'Agentic AI & RAG',
      period: 'Dec 2025 — Present',
      tagline: 'Scalable, context-aware knowledge retrieval with RAG pipelines, role-based access control, workflow automation, and report generation.',
      tags: ['Python', 'FastAPI', 'RAG', 'MySQL', 'Groq API', 'n8n', 'Docker', 'RBAC'],
      githubUrl: 'https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-',
      demoUrl: 'https://github.com/Mr-Spectr/Enterprise-Knowledge-Agent-AgenticAI-',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      featured: true,
      stats: { Security: 'RBAC', Pipeline: 'RAG + LLM' }
    },
    {
      id: 'proj-2',
      title: 'MACRA',
      category: 'Financial Analytics & ML',
      period: 'Apr 2025 — Jun 2025',
      tagline: 'Data-driven analytics for financial indicators including P/E ratio, P/B ratio, dividend yield, and market capitalization.',
      tags: ['Python', 'JavaScript', 'scikit-learn', 'SQL', 'REST APIs'],
      githubUrl: 'https://github.com/Mr-Spectr/MACRA',
      demoUrl: 'https://github.com/Mr-Spectr/MACRA',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      featured: true,
      stats: { Indicators: 'PE · PB · Yield', Model: 'scikit-learn' }
    },
    {
      id: 'proj-3',
      title: 'FlutChat',
      category: 'Real-Time Mobile App',
      period: 'Jan 2025 — Mar 2025',
      tagline: 'A Flutter chat application with Firebase Authentication and Firestore synchronization for responsive cloud messaging.',
      tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'State Management'],
      githubUrl: 'https://github.com/Mr-Spectr/FlutChat',
      demoUrl: 'https://github.com/Mr-Spectr/FlutChat',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      featured: false,
      stats: { Sync: 'Firestore', Auth: 'Firebase' }
    },
    {
      id: 'proj-4',
      title: 'GameMania',
      category: 'Interactive Flutter Platform',
      period: 'Sep 2025 — Nov 2025',
      tagline: 'A multi-game Flutter application with interactive gameplay, animations, responsive UI components, and modular OOP design.',
      tags: ['Flutter', 'Dart', 'OOP', 'Responsive UI'],
      githubUrl: 'https://github.com/Mr-Spectr/GameMania',
      demoUrl: 'https://github.com/Mr-Spectr/GameMania',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      featured: false,
      stats: { Design: 'OOP', UI: 'Interactive' }
    }
  ],

  timeline: [
    {
      period: 'Aug 2023 — Jul 2027',
      role: 'Bachelor of Engineering in Information Science & Engineering',
      institution: 'Nitte Meenakshi Institute of Technology, Bengaluru',
      details: 'CGPA: 8.5 / 10. Core study areas include Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.',
      badge: 'CGPA 8.5'
    },
    {
      period: 'May 2024 — Present',
      role: 'B.Sc. in Data Science & Programming',
      institution: 'Indian Institute of Technology Madras',
      details: 'Dual degree study in data science, programming, algorithmic thinking, machine learning, deep learning, and NLP.',
      badge: 'IIT Madras'
    },
    {
      period: '2025 — Present',
      role: 'Applied AI, data & mobile project work',
      institution: 'Independent engineering portfolio',
      details: 'Developing secure knowledge-retrieval systems, financial analytics, and real-time Flutter applications.',
      badge: 'Selected work'
    }
  ],

  awards: [
    { year: '2025', title: 'Amazon ML Challenge — Top 15%', organization: 'Amazon India', description: 'Ranked in the top 15% nationally.' },
    { year: '2025', title: 'Code Cadets Hackathon (IISc) — Top 5%', organization: 'Indian Institute of Science, Bengaluru', description: 'Ranked in the top 5% among 500+ participants.' },
    { year: '2025', title: 'Smart India Hackathon 2025', organization: 'Institute representative', description: 'Qualified at the college level and represented the institute.' },
    { year: '2024 — 2025', title: 'Cloud & AI certifications', organization: 'Google Cloud, AWS, Azure & Credly', description: 'Credentials across cloud foundations, AI/DevOps, data science, and machine learning.' }
  ],

  teaching: [
    { code: 'DS', title: 'Data Science Foundations', term: 'IIT Madras', role: 'B.Sc. coursework', level: 'Data & programming', syllabusUrl: 'https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly' },
    { code: 'ALG', title: 'Algorithmic Thinking', term: 'Rice University', role: 'Certified coursework', level: 'Algorithms', syllabusUrl: 'https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly' },
    { code: 'AI', title: 'AI, MLOps, NLP & Deep Learning', term: 'Professional learning', role: 'Technical foundations', level: 'Applied AI', syllabusUrl: 'https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly' }
  ]
};
