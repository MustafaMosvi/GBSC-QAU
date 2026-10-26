import type { EventItem } from "@/lib/types";

// Council-supplied records and original images. The poster supplies the session date and time.
export const studyCircleHighlights = [
  {
    id: "gbsc-climate-security-2026",
    slug: "indus-treaty-suspension-melting-ice-climate-security",
    title: "Indus Treaty Suspension & Melting Ice: Rethinking GB’s Climate Security",
    category: "Study Circle",
    summary:
      "Naveed Akhtar and Sapna Zamir joined a GBSC study circle on glacier melting, water insecurity, and climate security in Gilgit-Baltistan and the HKH region.",
    description:
      "Naveed Akhtar and Sapna Zamir joined a GBSC study circle on glacier melting, water insecurity, and climate security in Gilgit-Baltistan and the HKH region.",
    date: "14 May 2026",
    time: "4:00 PM – 5:00 PM",
    venue: "Quaid-i-Azam University, Islamabad",
    facilitator: "Naveed Akhtar and Sapna Zamir",
    image: "/images/events/study-circles/indus-treaty-climate-security-2026.jpeg",
    imageAlt: "GBSC study-circle poster featuring speakers Naveed Akhtar and Sapna Zamir for the climate-security session on 14 May 2026",
    imageWidth: 1122,
    imageHeight: 1402,
    imageFit: "contain",
    status: "past",
    isFeatured: true,
  },
] satisfies (EventItem & {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
})[];
