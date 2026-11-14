export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: "competition" | "certification" | "education" | "engineering";
  issuer: string;
  year: string;
  date?: string;
  award?: string;
  rank?: string;
  medalVariant?: "gold" | "silver" | "bronze" | "trophy" | "certified";
  highlight?: boolean;
  badge?: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  imageCaption?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "infest-xii-hackathon-2026",
    title: "Juara 1 & Gold Medalist — National Hackathon INFEST XII",
    subtitle: "Informatics Festival XII (HMIF Universitas Syiah Kuala)",
    category: "competition",
    issuer: "HMIF Universitas Syiah Kuala (USK)",
    year: "2026",
    date: "17–18 Oktober 2026",
    award: "Juara 1 & Medali Emas (Gold Medal)",
    rank: "1st Place",
    medalVariant: "gold",
    highlight: true,
    badge: "JUARA 1 NASIONAL",
    description:
      "Meraih Juara 1 tingkat nasional dalam Hackathon Competition INFEST XII bertema 'Synthera: Creating a Harmonized, Intelligent, and Innovative Digital Ecosystem'. Bersama tim Teknologi Informasi FST UIN Ar-Raniry, mengembangkan Karyawanku — platform Agentic Micro-ERP berbasis AI yang mengintegrasikan sistem kasir web dengan asisten cerdas WhatsApp untuk otomasi operasional dan kalkulasi HPP UMKM kuliner.",
    tags: ["Agentic AI", "Micro-ERP", "WhatsApp Bot", "Next.js", "FastAPI"],
    link: "https://fst.uin.ar-raniry.ac.id/informasi-berita/mahasiswa_teknologi_informasi_fst_uin_ar-raniry_raih_juara_i_hackathon_infest_xii",
    linkLabel: "FST UIN Official Press",
  },
  {
    id: "kst-ptki-ii-2026",
    title: "Juara 1 Nasional — KST PTKI II Tahun 2026",
    subtitle: "Lomba Pemetaan Tematik Spasial Berbasis Google My Maps",
    category: "competition",
    issuer: "Fakultas Sains dan Teknologi (FST) UIN Ar-Raniry / KST PTKI",
    year: "2026",
    date: "12 Juni 2026",
    award: "Juara 1 Nasional (Gold Medal)",
    rank: "1st Place",
    medalVariant: "gold",
    highlight: true,
    badge: "JUARA 1 NASIONAL",
    description:
      "Meraih Juara 1 Nasional dalam Kompetisi Sains dan Teknologi Perguruan Tinggi Keagamaan Islam (KST PTKI) II Tahun 2026. Bersama Reval Maulidan dan Syakila Delina Hadisty (Tim Teknologi Informasi FST UIN Ar-Raniry), merancang karya: 'Pemetaan Ekosistem Industri Halal Banda Aceh & Aceh Besar: Analisis Rantai Pasok, Klasterisasi, dan Optimalisasi Halal Hub' untuk mendukung tata ruang ekonomi syariah yang berkelanjutan.",
    tags: ["GIS Mapping", "Spatial Analysis", "Supply Chain", "Google My Maps", "Halal Hub"],
    link: "https://fst.uin.ar-raniry.ac.id/informasi-berita/fst-apresiasi-mahasiswa-peraih-juara-kst-ptki-ii-tahun-2026",
    linkLabel: "FST UIN Press Release",
  },
  {
    id: "infest-hackathon-2025",
    title: "Juara 3 Nasional — INFEST Hackathon 2025",
    subtitle: "Informatics Festival (INFEST XI) Universitas Syiah Kuala",
    category: "competition",
    issuer: "HMIF Universitas Syiah Kuala (USK)",
    year: "2025",
    date: "21 Oktober 2025",
    award: "Juara 3 Nasional (Bronze Medal & IDR 3.000.000,00)",
    rank: "3rd Place",
    medalVariant: "bronze",
    highlight: true,
    badge: "JUARA 3 NASIONAL",
    image: "/images/achievements/infest-hackathon-2025.jpg",
    imageCaption:
      "Syakila Delina Hadisty, Reval Maulidan, dan Ferta Junindi (Mahasiswa Binaan Islamic Trust Fund Prodi TI FST UIN Ar-Raniry) saat menerima penghargaan Juara 3 Nasional INFEST Hackathon.",
    description:
      "Sebagai mahasiswa binaan Islamic Trust Fund (ITF) Program Studi Teknologi Informasi FST UIN Ar-Raniry, berhasil meraih Juara 3 Nasional pada ajang INFEST Hackathon yang diselenggarakan oleh HMIF Universitas Syiah Kuala (USK), membawa pulang medali perunggu dan hadiah uang tunai IDR 3.000.000,00.",
    tags: ["Hackathon", "Web Platform", "Problem Solving", "Islamic Trust Fund", "USK"],
    link: "https://www.instagram.com/p/DQELnx-k6CQ/",
    linkLabel: "Instagram @saintek.uin.arraniry",
  },
  {
    id: "stack-hackathon-2026",
    title: "National Competitor & Finalist — STACK 2026 Hackathon",
    subtitle: "Google Developer Groups on Campus (GDGoC) Institut Teknologi Bandung",
    category: "competition",
    issuer: "GDGoC ITB",
    year: "2026",
    award: "National Hackathon Finalist",
    rank: "Finalist",
    medalVariant: "trophy",
    highlight: true,
    badge: "GDGOC ITB HACKATHON",
    description:
      "Memimpin perancangan sistem dan rekayasa backend tim Nuanscape dalam mengembangkan Seniora — platform agen AI dan WhatsApp gateway untuk koordinasi pendampingan lansia, pengingat minum obat, dan tautan aksi kalender zero-OAuth.",
    tags: ["AI Agents", "PicoClaw Gateway", "Healthcare Tech", "Go", "TypeScript"],
  },
  {
    id: "utu-awards-2026",
    title: "Competitor & Nominator — The 11th UTU Awards",
    subtitle: "Universitas Teuku Umar Annual Innovation Competition",
    category: "competition",
    issuer: "Universitas Teuku Umar (UTU)",
    year: "2026",
    award: "Nominated Startup / Tech Solution",
    medalVariant: "trophy",
    badge: "UTU AWARDS 2026",
    description:
      "Mengembangkan layanan backend terdistribusi berkinerja tinggi berbasis Go untuk inovasi digital pada kategori Startup Business di ajang kompetisi perguruan tinggi nasional The 11th UTU Awards.",
    tags: ["Go", "Distributed Systems", "REST API", "Microservices"],
  },
  {
    id: "dts-junior-web-developer",
    title: "Junior Web Developer Certification",
    subtitle: "Digital Talent Scholarship (DTS) — BPSDMP Kominfo RI",
    category: "certification",
    issuer: "Kementerian Komunikasi dan Informatika (Kominfo)",
    year: "2024",
    award: "National Competency Certified",
    medalVariant: "certified",
    highlight: true,
    badge: "KOMINFO CERTIFIED",
    description:
      "Sertifikasi kompetensi resmi Junior Web Developer dari Kementerian Kominfo RI melalui program Digital Talent Scholarship (DTS). Mencakup pemrograman web modern, integrasi database relasional, API client-server, dan arsitektur aplikasi berbasis standar industri.",
    tags: ["Web Engineering", "JavaScript", "Database", "REST APIs", "Kominfo"],
    link: "https://www.linkedin.com/in/ferta-junindi",
    linkLabel: "LinkedIn Credential",
  },
  {
    id: "diskominfo-aceh-apprentice",
    title: "Technical Apprenticeship — Dinas Kominfo & Sandi Aceh",
    subtitle: "Divisi Komunikasi dan Pengkodean Layanan TI",
    category: "engineering",
    issuer: "Diskominfo dan Persandian Aceh",
    year: "2022",
    date: "Februari – April 2022",
    badge: "GOVERNMENT APPRENTICE",
    description:
      "Menyelesaikan program magang teknis di Dinas Komunikasi, Informatika dan Persandian Aceh. Berkontribusi dalam pemeliharaan portal layanan komunikasi daerah, troubleshooting sistem jaringan, dan alur pengkodean perangkat lunak publik.",
    tags: ["Networking", "Public Services", "Linux", "Troubleshooting"],
  },
  {
    id: "uin-ar-raniry-it",
    title: "S1 Teknologi Informasi — UIN Ar-Raniry Banda Aceh",
    subtitle: "Fakultas Sains dan Teknologi (FST)",
    category: "education",
    issuer: "Universitas Islam Negeri Ar-Raniry",
    year: "2024 – Sekarang",
    badge: "UNDERGRADUATE",
    description:
      "Menempuh studi sarjana di Program Studi Teknologi Informasi FST UIN Ar-Raniry Banda Aceh. Fokus pada arsitektur sistem terdistribusi, kompilator dokumen, model machine learning terapan, dan rekayasa perangkat lunak skala produksi.",
    tags: ["Systems Architecture", "Distributed Systems", "Compilers", "Applied AI"],
    link: "https://fst.uin.ar-raniry.ac.id",
    linkLabel: "FST UIN Ar-Raniry",
  },
  {
    id: "smkn1-meulaboh-tkj",
    title: "Teknik Komputer & Jaringan (TKJ) — SMKN 1 Meulaboh",
    subtitle: "Lulusan Terbaik Bidang Sistem Komputer & Telekomunikasi (Nilai 86.7)",
    category: "education",
    issuer: "SMKN 1 Meulaboh",
    year: "2021 – 2024",
    badge: "GRADE 86.7 / 100",
    description:
      "Menyelesaikan pendidikan vokasi teknik komputer, jaringan kabel/nirkabel, routing & switching mikrotik/cisco, administrasi server Linux, dan infrastruktur telekomunikasi dengan nilai rata-rata akhir 86.7.",
    tags: ["Computer Networks", "Linux Administration", "Routing/Switching", "Hardware"],
  },
  {
    id: "osis-head-documentation",
    title: "Ketua Divisi Dokumentasi — OSIS SMKN 1 Meulaboh",
    subtitle: "Organisasi Siswa Intra Sekolah Periode 2023–2024",
    category: "engineering",
    issuer: "OSIS SMKN 1 Meulaboh",
    year: "2023 – 2024",
    badge: "LEADERSHIP",
    description:
      "Memimpin divisi dokumentasi dan media kreatif, mengelola alur kerja produksi multimedia, pengarsipan visual digital, dan publikasi liputan kegiatan resmi sekolah.",
    tags: ["Leadership", "Media Production", "Archiving", "Creative Workflows"],
  },
  {
    id: "nuanscape-systems-lead",
    title: "Systems Engineer & Tech Lead — Nuanscape",
    subtitle: "Arsitektur Platform, Kompilator Akademik & AI Agent Runtimes",
    category: "engineering",
    issuer: "Nuanscape Studio",
    year: "2025 – 2026",
    medalVariant: "trophy",
    highlight: true,
    badge: "STUDIO LEAD",
    description:
      "Memimpin rekayasa infrastruktur dan perancangan platform di Nuanscape: MakalahKu (kompilator dokumen akademik otomatis), Layanan Pengaduan BK (sistem pelaporan dan bimbingan konseling sekolah), Vectora RAG orchestration plane, dan pipeline agent mandiri.",
    tags: ["Architecture", "Next.js", "FastAPI", "Go", "Docker", "Prisma"],
  },
];

export interface AchievementStats {
  total: number;
  competitions: number;
  certifications: number;
  highlights: number;
  goldMedals: number;
  bronzeMedals: number;
}

export function getAchievementStats(items: Achievement[] = ACHIEVEMENTS): AchievementStats {
  return {
    total: items.length,
    competitions: items.filter((i) => i.category === "competition").length,
    certifications: items.filter((i) => i.category === "certification").length,
    highlights: items.filter((i) => i.highlight).length,
    goldMedals: items.filter((i) => i.medalVariant === "gold").length,
    bronzeMedals: items.filter((i) => i.medalVariant === "bronze").length,
  };
}
