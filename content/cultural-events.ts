import type { EventItem } from "@/lib/types";

// Council-supplied event; the original poster provides the date, time, and venue.
export const poetryEvent = {
  id: "gbsc-bazm-e-sukhan-2026",
  slug: "bazm-e-sukhan-poetry-evening-2026",
  title: "Bazm-e-Sukhan: Poetry & Cultural Evening",
  category: "Cultural Event",
  summary:
    "GBSC QAU hosted Bazm-e-Sukhan with poet Shehzad Mehdi, bringing students together for poetry, singing, and cultural performances.",
  description:
    "GBSC QAU hosted Bazm-e-Sukhan with poet Shehzad Mehdi, bringing students together for poetry, singing, and cultural performances.",
  date: "Wednesday, 13 May 2026",
  startsAt: "2026-05-13T16:00:00+05:00",
  time: "4:00 PM",
  venue: "Earth Science Auditorium, QAU Islamabad",
  facilitator: "Shehzad Mehdi",
  image: "/images/events/poetry/bazm-e-sukhan-2026.jpeg",
  imageAlt: "GBSC QAU Bazm-e-Sukhan poetry and cultural evening poster for 13 May 2026 at 4:00 PM, Earth Science Auditorium",
  imageWidth: 1135,
  imageHeight: 1600,
  imageFit: "contain",
  status: "past",
  isFeatured: true,
} satisfies EventItem & {
  imageWidth: number;
  imageHeight: number;
};
