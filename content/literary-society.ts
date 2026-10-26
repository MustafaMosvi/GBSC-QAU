import type { EventItem } from "@/lib/types";

export const literarySocietyImages = [
  {
    id: "literary-society-emblem",
    title: "Gilgit-Baltistan Literary Society Emblem",
    src: "/images/literary-society/literary-society-emblem.jpeg",
    alt: "Gilgit-Baltistan Literary Society QAU Islamabad emblem with mountains, a river, an open book, and a fountain pen nib",
    width: 1242,
    height: 1229,
  },
  {
    id: "literary-society-members-2025-26",
    title: "GBSC QAU Cabinet 2025–26",
    src: "/images/literary-society/literary-society-members-2025-26.jpeg",
    alt: "Group photograph outside Dr. Raziuddin Siddiqi Memorial Library at QAU, shared for the Literary Society initiative",
    width: 1242,
    height: 790,
  },
  {
    id: "literary-society-initiative-2025-26",
    title: "Literary Society Initiative at QAU",
    src: "/images/events/study-circles/gb-literary-society-2025-26.jpeg",
    alt: "GBSC members gathered outside Dr. Raziuddin Siddiqi Memorial Library at QAU for the Literary Society initiative",
    width: 1242,
    height: 1351,
  },
];

export const literarySocietyInitiative = {
  id: "gbsc-literary-society-2025-26",
  slug: "gilgit-baltistan-literary-society-initiative",
  title: "Gilgit-Baltistan Literary Society Initiative",
  category: "Literary Society",
  summary:
    "The GBSC QAU Cabinet 2025–26 initiated the establishment of QAU’s first Gilgit-Baltistan Literary Society to promote literature, cultural heritage, and regional languages.",
  description:
    "The GBSC QAU Cabinet 2025–26 initiated the establishment of QAU’s first Gilgit-Baltistan Literary Society to promote literature, cultural heritage, and regional languages.",
  date: "Cabinet 2025–26",
  venue: "Quaid-i-Azam University, Islamabad",
  image: literarySocietyImages[1].src,
  imageAlt: literarySocietyImages[1].alt,
  imageWidth: literarySocietyImages[1].width,
  imageHeight: literarySocietyImages[1].height,
  imageFit: "contain",
  status: "past",
  isFeatured: true,
} satisfies EventItem & {
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};
