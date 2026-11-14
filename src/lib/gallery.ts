export type GalleryCollection = "awards" | "craft" | "portrait";

export type GalleryAspect =
  | "portrait"
  | "poster"
  | "square"
  | "landscape"
  | "photo"
  | "wide"
  | "banner";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  collection: GalleryCollection;
  year?: string;
  caption: string;
  aspect: GalleryAspect;
  tags: string[];
}

export const COLLECTION_LABELS: Record<GalleryCollection, string> = {
  awards: "Awards",
  craft: "Craft",
  portrait: "Portrait",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "infest-hackathon-2025",
    src: "/gallery/infest-2025.jpg",
    title: "INFEST Hackathon 2025",
    collection: "awards",
    year: "2025",
    caption:
      "Juara 3 Nasional INFEST Hackathon 2025 — Informatics Festival, HMIF Universitas Syiah Kuala. The faculty's congratulations poster for the team from Prodi Teknologi Informasi, UIN Ar-Raniry.",
    aspect: "poster",
    tags: ["INFEST 2025", "Juara 3", "Hackathon"],
  },
  {
    id: "night-coding",
    src: "/gallery/night-coding.jpg",
    title: "Night Coding",
    collection: "craft",
    caption:
      "Night Coding — a studio poster study: a desk, a sunset window, and a long build. Part of the personal night-coding visual series.",
    aspect: "landscape",
    tags: ["Poster", "Studio", "Night"],
  },
  {
    id: "infest-2025-team",
    src: "/gallery/infest-2025-team.jpg",
    title: "Award Night — Team",
    collection: "awards",
    year: "2025",
    caption:
      "Detail from the INFEST Hackathon 2025 poster — the three-person team from Prodi Teknologi Informasi, UIN Ar-Raniry, with the 3rd Place award.",
    aspect: "wide",
    tags: ["INFEST 2025", "Team", "Award"],
  },
  {
    id: "card-back",
    src: "/gallery/card-back.jpg",
    title: "Lanyard Card — Reverse",
    collection: "craft",
    year: "2026",
    caption:
      "The reverse face of the Ferta Junindi lanyard: blueprint grid, corner brackets, and a barcode strip.",
    aspect: "portrait",
    tags: ["Lanyard", "Card", "Design"],
  },
  {
    id: "night-coding-detail",
    src: "/gallery/night-coding-detail.jpg",
    title: "Night Coding — Desk",
    collection: "craft",
    caption:
      "Detail study from the Night Coding poster: the code, the mug, and the amber-to-cyan light split across the desk.",
    aspect: "square",
    tags: ["Poster", "Detail", "Pixel art"],
  },
  {
    id: "nuanscape-mark",
    src: "/gallery/nuanscape-mark.jpg",
    title: "Nuanscape Mark",
    collection: "craft",
    year: "2026",
    caption:
      "Nuanscape studio mark — the wordmark and tag glyph used for the lanyard run.",
    aspect: "square",
    tags: ["Nuanscape", "Brand", "Mark"],
  },
  {
    id: "pixel-sheet",
    src: "/gallery/pixel-sheet.jpg",
    title: "Pixel Character Sheet",
    collection: "craft",
    year: "2026",
    caption:
      "Pixel character sheet — idle, walk, run, jump, and attack states with palette swatches.",
    aspect: "photo",
    tags: ["Pixel art", "Sprite sheet", "Game"],
  },
  {
    id: "portrait-outdoor",
    src: "/gallery/portrait.jpg",
    title: "Portrait — Outdoor",
    collection: "portrait",
    caption:
      "Outdoor portrait in Aceh — the frame behind the profile avatar.",
    aspect: "portrait",
    tags: ["Portrait", "Aceh"],
  },
  {
    id: "cutout",
    src: "/gallery/cutout.png",
    title: "Studio Cutout",
    collection: "portrait",
    year: "2026",
    caption:
      "Studio cutout — the lanyard portrait with the background removed.",
    aspect: "square",
    tags: ["Portrait", "Cutout", "Lanyard"],
  },
  {
    id: "lanyard-rope",
    src: "/gallery/lanyard-rope.jpg",
    title: "Lanyard Weave",
    collection: "craft",
    year: "2026",
    caption:
      "Nuanscape lanyard weave — a close-up of the strap texture used on the card.",
    aspect: "banner",
    tags: ["Nuanscape", "Lanyard", "Texture"],
  },
];

export function getGalleryStats(items: GalleryItem[]) {
  const byCollection: Record<GalleryCollection, number> = {
    awards: 0,
    craft: 0,
    portrait: 0,
  };
  for (const item of items) {
    byCollection[item.collection] += 1;
  }
  return {
    total: items.length,
    collections: Object.values(byCollection).filter((count) => count > 0).length,
    byCollection,
  };
}
