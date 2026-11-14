export const GITHUB_USER = "MyMrshll";
export const GITHUB_URL = "https://github.com/MyMrshll";
export const INSTAGRAM_URL = "https://www.instagram.com/fertajunindi/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ferta-junindi";
export const CONTACT_EMAIL = "ferta.junindi@gmail.com";

export const PROFILE = {
  name: "Ferta Junindi",
  role: "Systems Engineer",
  company: "Nuanscape",
  location: "Aceh, Indonesia",
  publicRepos: 27,
  followers: 16,
};

export interface Project {
  id: number;
  image: string;
  title: string;
  category?: string;
  year?: string;
  description?: string;
  tags?: string[];
  link?: string;
  demo?: string;
}

export interface RepoSummary {
  name: string;
  language?: string;
  year: string;
  stars: number;
  description?: string;
  url: string;
}

const og = (repo: string) => `/projects/${repo.toLowerCase()}.png`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: og("Vectora"),
    title: "VECTORA",
    category: "RAG Orchestration",
    year: "2026",
    description:
      "High-performance RAG orchestration and administration control plane with FastAPI, Next.js, Qdrant, and Gemini.",
    tags: ["Python", "FastAPI", "Next.js", "Qdrant", "Gemini"],
    link: "https://github.com/MyMrshll/Vectora",
  },
  {
    id: 2,
    image: og("bisalapor"),
    title: "BISALAPOR",
    category: "B2B SaaS",
    year: "2026",
    description:
      "AI-assisted field service reporting: technicians send notes and photos, AI drafts the report, supervisors verify and export.",
    tags: ["TypeScript", "React", "Vite", "AI"],
    link: "https://github.com/MyMrshll/bisalapor",
  },
  {
    id: 3,
    image: og("cca"),
    title: "CYBERCOMMUNITY ACEH",
    category: "Community Platform",
    year: "2026",
    description:
      "Digital hub for Aceh's cyber community: publications, competition engine, team registration, and payment verification.",
    tags: ["TypeScript", "Next.js", "Prisma", "Turborepo"],
    link: "https://github.com/MyMrshll/cca",
  },
  {
    id: 4,
    image: og("SL-Detection"),
    title: "SL-DETECTION",
    category: "Computer Vision",
    year: "2026",
    description:
      "Real-time BISINDO recognition using MediaPipe Holistic landmarks and a BiLSTM with multi-head temporal self-attention.",
    tags: ["Python", "PyTorch", "MediaPipe", "BiLSTM"],
    link: "https://github.com/MyMrshll/SL-Detection",
  },
  {
    id: 5,
    image: og("moto-care"),
    title: "MOTOCARE",
    category: "Mobile App",
    year: "2026",
    description:
      "Android app that tracks motorcycle oil condition from mileage and time since the last change, then schedules reminders.",
    tags: ["React Native", "Expo", "TypeScript"],
    link: "https://github.com/MyMrshll/moto-care",
  },
  {
    id: 6,
    image: og("AI-Forge"),
    title: "AI-FORGE",
    category: "AI Developer Tool",
    year: "2026",
    description:
      "AI-powered generator that turns natural-language prompts into fullstack architecture, code, documentation, and Docker setup.",
    tags: ["Node.js", "React", "Groq", "Tailwind"],
    link: "https://github.com/MyMrshll/AI-Forge",
  },
  {
    id: 7,
    image: og("9router-free-stack"),
    title: "9ROUTER FREE STACK",
    category: "Developer Tooling",
    year: "2026",
    description:
      "Local stack that exposes free OpenCode models through 9Router with a bridge, WARP exits, and a verified runbook.",
    tags: ["Shell", "9Router", "OpenCode", "WARP"],
    link: "https://github.com/MyMrshll/9router-free-stack",
  },
  {
    id: 8,
    image: og("restaurant-api-simulator"),
    title: "RESTAURANT API",
    category: "Interactive Learning",
    year: "2026",
    description:
      "Interactive REST API simulator that teaches request and response flow through a restaurant analogy.",
    tags: ["TypeScript", "Vite", "REST API"],
    link: "https://github.com/MyMrshll/restaurant-api-simulator",
    demo: "https://mymrshll.github.io/restaurant-api-simulator/",
  },
];

export const OTHER_REPOS: RepoSummary[] = [
  {
    name: "MyMrshll",
    year: "2025",
    stars: 1,
    url: "https://github.com/MyMrshll/MyMrshll",
  },
  {
    name: "aliyen",
    language: "TypeScript",
    year: "2026",
    stars: 0,
    url: "https://github.com/MyMrshll/aliyen",
  },
  {
    name: "amelia-birthday",
    language: "TypeScript",
    year: "2026",
    stars: 0,
    url: "https://github.com/MyMrshll/amelia-birthday",
  },
  {
    name: "UAS_IMK",
    language: "PHP",
    year: "2026",
    stars: 1,
    url: "https://github.com/MyMrshll/UAS_IMK",
  },
  {
    name: "Astra",
    language: "Dart",
    year: "2026",
    stars: 0,
    url: "https://github.com/MyMrshll/Astra",
  },
  {
    name: "kecerdasan-bisnis",
    year: "2026",
    stars: 0,
    url: "https://github.com/MyMrshll/kecerdasan-bisnis",
  },
  {
    name: "laporan_jaringan_kampus",
    language: "TypeScript",
    year: "2025",
    stars: 1,
    url: "https://github.com/MyMrshll/laporan_jaringan_kampus",
  },
  {
    name: "project-wrapper-example",
    language: "JavaScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/project-wrapper-example",
  },
  {
    name: "task-manager-bootcamp",
    language: "TypeScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/task-manager-bootcamp",
  },
  {
    name: "inabah_store",
    language: "JavaScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/inabah_store",
  },
  {
    name: "sasa_birthday",
    language: "TypeScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/sasa_birthday",
  },
  {
    name: "shallbott",
    language: "JavaScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/shallbott",
  },
  {
    name: "pern-todo-list",
    language: "JavaScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/pern-todo-list",
  },
  {
    name: "web-porto-vanilla",
    language: "CSS",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/web-porto-vanilla",
  },
  {
    name: "todo-app-python",
    language: "Python",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/todo-app-python",
  },
  {
    name: "backend-catatan",
    language: "JavaScript",
    year: "2025",
    stars: 0,
    url: "https://github.com/MyMrshll/backend-catatan",
  },
  {
    name: "MyMrshll.github.io",
    language: "CSS",
    year: "2025",
    stars: 1,
    url: "https://github.com/MyMrshll/MyMrshll.github.io",
  },
  {
    name: "todo_app",
    language: "JavaScript",
    year: "2024",
    stars: 0,
    url: "https://github.com/MyMrshll/todo_app",
  },
  {
    name: "BE-AUTH",
    language: "JavaScript",
    year: "2024",
    stars: 0,
    url: "https://github.com/MyMrshll/BE-AUTH",
  },
];

export interface Collaboration {
  name: string;
  owner: string;
  description?: string;
  language?: string;
  year: string;
  visibility: "public" | "private";
  url?: string;
  demo?: string;
  role: string;
}

export const COLLABORATIONS: Collaboration[] = [
  {
    name: "AL-KAZEM",
    owner: "Nuanscape × junalbarn",
    description:
      "Nuanscape project with a live production deployment.",
    language: "TypeScript",
    year: "2026",
    visibility: "private",
    demo: "https://al-kazem.vercel.app",
    role: "Studio work",
  },
  {
    name: "MAKALAHKU",
    owner: "Nuanscape",
    description:
      "Automated academic document compiler for Indonesian universities.",
    language: "JavaScript",
    year: "2026",
    visibility: "private",
    role: "Studio work",
  },
  {
    name: "LAYANAN PENGADUAN BK",
    owner: "Nuanscape",
    description: "Complaint and counseling service platform for schools.",
    language: "TypeScript",
    year: "2026",
    visibility: "private",
    role: "Studio work",
  },
  {
    name: "KARYAWANKU",
    owner: "RvLionXz",
    language: "TypeScript",
    year: "2026",
    visibility: "private",
    role: "Invited collaborator",
  },
  {
    name: "UTU AWARDS 2026",
    owner: "RvLionXz",
    language: "Go",
    year: "2026",
    visibility: "private",
    role: "Invited collaborator",
  },
  {
    name: "ATTENDANCE PT ANH",
    owner: "muharriel06",
    language: "TypeScript",
    year: "2026",
    visibility: "private",
    role: "Invited collaborator",
  },
  {
    name: "KITABANTU",
    owner: "RvLionXz × delcode92",
    description:
      "AI platform connecting students and communities with local service providers.",
    language: "JavaScript",
    year: "2025",
    visibility: "private",
    role: "Invited collaborator",
  },
  {
    name: "KITABANTU ADMIN",
    owner: "delcode92",
    language: "TypeScript",
    year: "2026",
    visibility: "private",
    demo: "https://v0-kitabantu-admin-dashboard.vercel.app",
    role: "Invited collaborator",
  },
  {
    name: "EKUIPANGAN",
    owner: "RvLionXz",
    language: "JavaScript",
    year: "2026",
    visibility: "private",
    demo: "https://ekuipangan.vercel.app",
    role: "Invited collaborator",
  },
  {
    name: "ANALISIS KEBOCORAN DATA",
    owner: "delcode92",
    language: "Python",
    year: "2025",
    visibility: "private",
    role: "Invited collaborator",
  },
  {
    name: "PERPUSTAKAAN DIGITAL",
    owner: "RysZx1",
    description:
      "Digital library app with a React frontend and Express API.",
    language: "JavaScript",
    year: "2026",
    visibility: "public",
    url: "https://github.com/RysZx1/Perpustakaan_digital",
    role: "Contributor",
  },
  {
    name: "UAS IMK",
    owner: "icharifqia",
    description: "PHP storefront for Gayo Aceh products.",
    language: "PHP",
    year: "2026",
    visibility: "public",
    url: "https://github.com/icharifqia/UAS_IMK",
    role: "Invited collaborator",
  },
  {
    name: "WCD",
    owner: "delcode92",
    description: "Community development sandbox and Linux tooling notes.",
    language: "Python",
    year: "2024",
    visibility: "public",
    url: "https://github.com/delcode92/WCD",
    role: "Invited collaborator",
  },
  {
    name: "EXAMPLE WRAPPER",
    owner: "RvLionXz",
    language: "Go",
    year: "2025",
    visibility: "public",
    url: "https://github.com/RvLionXz/example-wrapper",
    role: "Invited collaborator",
  },
];
