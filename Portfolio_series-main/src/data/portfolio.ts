
/**
 * Central portfolio data — generated from Tarun Kumar Sinha's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'TARUN KUMAR SINHA',
  displayName: 'TARUN KUMAR SINHA',
  firstName: 'TARUN',
  seriesTag: 'T SERIES',
  /** Studio card shown at the very start of the opening sequence. */
  originalLabel: 'A T SERIES ORIGINAL',
  role: 'FULL-STACK DEVELOPER',
  tagline: ['FULL-STACK DEVELOPER', 'MERN & PERN', 'PYTHON & C++'],
  intro:
    'Analytical Full Stack Developer and final-year BCA student at Accurate Institute of Management and Technology (CCSU) with expertise in MERN/PERN stacks, core programming (Python, C++), and building secure, scalable applications and autonomous AI agents.',
  location: 'Greater Noida, Uttar Pradesh',
  email: 'mailto:taruntarun8010@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tarun-sinha-417391355',
    github: 'https://github.com/taruntarun8010-star',
  },
  resumePdf: '/resume.pdf',
  portrait: {
    src: '/pic.png',
    srcSet: '/pic.png 420w, /pic.png 720w, /pic.png 1100w',
    alt: 'Portrait of Tarun Kumar Sinha',
  },
  interests: ['AI-powered platforms', 'Secure architectures', 'Scalable web apps'],
};

export const education = [
  {
    school: 'Accurate Institute of Management and Technology',
    place: 'Greater Noida',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2024 – 2027 (Expected)',
    score: 'CCSU',
  },
  {
    school: 'U.P. Board',
    place: 'Uttar Pradesh',
    degree: 'Class XII (2024) & Class X (2022) - U.P. Board',
    period: '2022 – 2024',
    score: 'Schooling',
  },
];

export const experience = [
  {
    company: 'Uptricks Services Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    place: 'India',
    period: 'Dec 2025 - Feb 2026',
    points: [
      'Engineered responsive web components using React.js, optimized backend REST APIs, managed PostgreSQL and MongoDB databases, and implemented secure authentication.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'project-joy',
    title: 'Project JOY (Jarvis)',
    year: '2026',
    genre: 'AI • Voice Assistant • Autonomous Systems',
    logline: 'A voice-integrated autonomous assistant featuring local LLM processing via Ollama/Llama.',
    stack: ['Ollama', 'Llama'],
    build: [
      'Built a voice-integrated autonomous assistant.',
      'Implemented local LLM processing via Ollama/Llama.',
    ],
    features: ['Voice integration', 'Autonomous assistance', 'Local LLM processing'],
    metrics: [{ value: 'AI', label: 'autonomous assistant' }],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'developers-guild',
    title: 'The Developers Guild',
    year: '2026',
    genre: 'Collaborative Developer Platform',
    logline: 'A collaborative web platform for developer networking and technical resource sharing.',
    stack: ['React', 'Node.js', 'MongoDB', 'Vercel', 'Render'],
    build: ['Built a collaborative web platform for developer networking and technical resource sharing.'],
    features: [
      'Developer networking',
      'Technical resource sharing',
    ],
    metrics: [
      { value: 'Web', label: 'collaborative platform' },
    ],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'vyaparlink',
    title: 'VyaparLink',
    year: '2026',
    genre: 'B2B • Networking • Full-Stack',
    logline: 'A multi-vendor B2B directory and business networking platform.',
    stack: ['React', 'Node.js', 'MongoDB'],
    build: [
      'Built a multi-vendor B2B directory for business discovery and networking.',
      'Created a platform experience for vendors and businesses to connect.',
    ],
    features: [
      'Multi-vendor directory',
      'Business networking',
      'Vendor discovery',
    ],
    metrics: [
      { value: 'B2B', label: 'business platform' },
    ],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'raksha-setu',
    title: 'RAKSHA SETU',
    year: '2026',
    genre: 'Emergency Response • Frontend',
    logline: 'An emergency response platform built with React, TypeScript and Tailwind CSS.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    build: [
      'Built an emergency response platform with React, TypeScript and Tailwind CSS.',
      'Created a responsive interface for emergency coordination.',
    ],
    features: [
      'Emergency response workflows',
      'React and TypeScript interface',
      'Tailwind CSS styling',
    ],
    metrics: [
      { value: 'React', label: 'platform frontend' },
    ],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'markwise',
    title: 'MarkWise',
    year: '2026',
    genre: 'Academic • Security • Backend',
    logline: 'An academic tracking platform with secure backend API authentication.',
    stack: ['React', 'Node.js', 'REST APIs'],
    build: [
      'Built an academic tracking platform for managing student performance.',
      'Implemented secure backend API authentication.',
    ],
    features: ['Academic tracking', 'Secure backend API', 'Authentication'],
    metrics: [{ value: 'Secure', label: 'API authentication' }],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'alveros',
    title: 'AlvEROS',
    year: '2026',
    genre: 'AI • Space Technology',
    logline: 'An AI-based lunar ice detection framework created for Bharatiya Antariksh Hackathon 2026.',
    stack: ['Python', 'AI'],
    build: [
      'Created an AI-based lunar ice detection framework.',
      'Developed for Bharatiya Antariksh Hackathon 2026.',
    ],
    features: ['Lunar ice detection', 'AI-based framework', 'Space technology'],
    metrics: [{ value: '2026', label: 'Bharatiya Antariksh Hackathon' }],
    github: 'https://github.com/taruntarun8010-star',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'github-copilot-dev-day',
    title: 'GitHub Copilot Dev Day (Tech4Hack)',
    org: 'Tech4Hack',
    detail: 'Participant.',
    laurel: 'Participant',
  },
  {
    id: 'hack-the-fall',
    title: 'Hack The Fall 2025',
    org: 'Hack The Fall 2025',
    detail: 'Participant.',
    laurel: 'Participant',
  },
  {
    id: 'hackindia-techstay',
    title: 'HackIndia & TechStay 2.0',
    org: 'SRM Ghaziabad',
    detail: 'National Finalist / Participant.',
    laurel: 'Finalist / Participant',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'IBM', name: 'IBM AI Developer Professional Certificate', link: '' },
  { issuer: 'HENNGE', name: 'HENNGE Admission Challenge 004 (Python recursive & SHA-512 TOTP solutions)', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming and data',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    subtitle: 'Interfaces and backend systems',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and management',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'ai-security',
    title: 'AI & Security',
    subtitle: 'AI integration and application security',
    skills: [
      { name: 'GitHub Copilot', mono: 'Gc' },
      { name: 'LLM Integration', mono: 'Ll' },
      { name: 'Ollama', mono: 'Ol' },
      { name: 'HMAC-SHA-512', mono: 'Hm' },
      { name: 'TOTP', mono: 'To' },
      { name: 'Kali Linux', mono: 'Kl' },
      { name: 'Penetration Testing', mono: 'Pt' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Project JOY (Jarvis)', 'HENNGE Admission Challenge 004'],
  'C++': ['Core programming'],
  C: ['Core programming'],
  JavaScript: ['Full-stack development'],
  Java: ['Core programming'],
  SQL: ['Database development'],
  'React.js': ['The Developers Guild', 'RAKSHA SETU'],
  'Node.js': ['The Developers Guild', 'VyaparLink'],
  'Express.js': ['Backend REST APIs'],
  HTML5: ['Web technologies'],
  CSS3: ['Web technologies'],
  'Tailwind CSS': ['RAKSHA SETU'],
  Bootstrap: ['Web technologies'],
  PostgreSQL: ['Uptricks Services internship'],
  MongoDB: ['Uptricks Services internship'],
  MySQL: ['Database development'],
  'GitHub Copilot': ['GitHub Copilot Dev Day (Tech4Hack)'],
  'LLM Integration': ['Project JOY (Jarvis)'],
  Ollama: ['Project JOY (Jarvis)'],
  'HMAC-SHA-512': ['HENNGE Admission Challenge 004'],
  TOTP: ['HENNGE Admission Challenge 004'],
  'Kali Linux': ['AI & Security'],
  'Penetration Testing': ['AI & Security'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2022 – 2024',
    synopsis: 'Schooling under the U.P. Board: Class X in 2022 and Class XII in 2024.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Class XII (2024) and Class X (2022) under the U.P. Board.',
        tags: ['Class XII', 'Class X'],
        runtime: '2022 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: BCA',
    period: '2024 – 2027 (Expected)',
    synopsis: 'Bachelor of Computer Applications at Accurate Institute of Management and Technology (CCSU), Greater Noida.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Computer Applications (BCA) at Accurate Institute of Management and Technology (CCSU).',
        tags: ['BCA', 'CCSU'],
        runtime: '2024 – 2027 (Expected)',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Final Year',
        description: 'Final-year BCA student building full-stack applications and secure architectures.',
        tags: ['BCA', 'Final Year'],
        runtime: '2024 – Present',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Builder',
        description: 'Building scalable web apps, AI-powered platforms, and secure architectures.',
        tags: ['React', 'Next.js', 'Node.js', 'Python', 'C++'],
        runtime: 'Full-stack development',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: 'Dec 2025 - Feb 2026',
    synopsis: 'Full Stack Developer Intern at Uptricks Services Pvt. Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Full Stack Developer Intern building web applications and backend services.',
        tags: ['Frontend', 'Backend', 'Databases'],
        runtime: 'Dec 2025 - Feb 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications — user interfaces, server-side logic and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Uptricks Services',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Uptricks Services',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Original projects, AI platforms, and hackathon and CTF participation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Product Builder',
        description: 'The Developers Guild, VyaparLink and RAKSHA SETU — collaborative, B2B and emergency response platforms.',
        tags: ['React', 'Node.js', 'MongoDB'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The AI Builder',
        description: 'MarkWise and AlvEROS — academic tracking and AI-based lunar ice detection platforms.',
        tags: ['Python', 'REST APIs', 'AI'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Competitor',
        description: 'GitHub Copilot Dev Day (Tech4Hack), Hack The Fall 2025, and HackIndia & TechStay 2.0 at SRM Ghaziabad.',
        tags: ['Tech4Hack', 'Hack The Fall', 'HackIndia', 'TechStay 2.0'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Full-stack development with MERN/PERN stacks, Python, C++, and autonomous AI agents.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Building secure, scalable applications and autonomous AI agents.',
        tags: ['MERN', 'PERN', 'Python', 'C++'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary stack', title: 'MERN & PERN', detail: 'React • Next.js • Node.js', palette: amber },
  { label: 'Autonomous assistant', title: 'Project JOY', detail: 'Voice integration • Ollama/Llama', palette: violet },
  { label: 'The Developer Original', title: 'The Developers Guild', detail: 'React • Node.js • MongoDB', palette: crimson },
  { label: 'B2B platform', title: 'VyaparLink', detail: 'Multi-vendor business networking', palette: ocean },
  { label: 'Emergency response', title: 'RAKSHA SETU', detail: 'React • TypeScript • Tailwind CSS', palette: violet },
  { label: 'Academic platform', title: 'MarkWise', detail: 'Secure backend API authentication', palette: jade },
  { label: 'AI framework', title: 'AlvEROS', detail: 'Lunar ice detection', palette: amber },
  { label: 'Education', title: 'BCA', detail: 'Accurate Institute of Management and Technology', palette: crimson },
  { label: 'Internship', title: 'Full Stack Intern', detail: 'Uptricks Services Pvt. Ltd.', palette: ocean },
  { label: 'Certification', title: 'IBM AI Developer', detail: 'Professional Certificate', palette: jade },
  { label: 'Security challenge', title: 'HENNGE 004', detail: 'Python recursive • SHA-512 TOTP', palette: amber },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · Final Year',
    lines: ['Accurate Institute of Management and Technology (Affiliated with CCS University)', '2024 – 2027 (Expected)'],
    chips: ['BCA', 'CCSU'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack first.',
    lines: ['React.js, Next.js, TypeScript, Tailwind CSS', 'Node.js, Express.js, MongoDB, PostgreSQL, REST APIs'],
    chips: ['React.js', 'Next.js', 'Node.js', 'Python', 'C++'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['Full Stack Developer Intern · Uptricks Services Pvt. Ltd.', 'Dec 2025 - Feb 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Originals',
    lines: ['Project JOY (Jarvis) — autonomous voice assistant', 'The Developers Guild — developer networking and resource sharing', 'VyaparLink, RAKSHA SETU, MarkWise and AlvEROS'],
  },
  {
    kicker: 'Achievements',
    title: 'Achievements',
    lines: ['GitHub Copilot Dev Day (Tech4Hack)', 'Hack The Fall 2025', 'HackIndia & TechStay 2.0 — SRM Ghaziabad'],
  },
  {
    kicker: 'Certified',
    title: 'Certifications',
    lines: ['IBM AI Developer Professional Certificate', 'HENNGE Admission Challenge 004'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Scalable web apps · AI-powered platforms · Secure architectures'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Tarun',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
