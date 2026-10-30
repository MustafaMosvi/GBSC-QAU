import type { EventItem } from "@/lib/types";

// Jashn-e-Mayfung: Celebration of Culture & History
export const jashnEMayfungEvent = {
  id: "gbsc-jashn-e-mayfung",
  slug: "jashn-e-mayfung",
  title: "Jashn-e-Mayfung",
  category: "Cultural Event",
  summary:
    "A celebration of culture and history. Event details will be disclosed in the future.",
  description:
    "Jashn-e-Mayfung is an ancient festival of light, fire, and warmth in Gilgit-Baltistan, celebrating the triumph of hope over hardship and communal solidarity against the winter frost. Rooted in centuries of mountain history, the festival brings people together through torchlit processions, night bonfires, traditional music, and joyful collective gatherings. GBSC-QAU brings this historic celebration to Quaid-i-Azam University to celebrate our rich cultural heritage and shared history. Event details will be disclosed in the future.",
  date: "Date to be disclosed in the future",
  time: "To be disclosed",
  venue: "Quaid-i-Azam University, Islamabad (Venue to be disclosed)",
  image: "/images/events/jashn-e-mayfung/Mayfung.jpeg",
  imageAlt: "GBSC QAU poster for Jashn-e-Mayfung, a celebration of culture and history",
  imageWidth: 900,
  imageHeight: 1600,
  imageFit: "contain",
  status: "confirmed",
  isFeatured: true,
  isHighlighted: true,
} satisfies EventItem & {
  imageWidth: number;
  imageHeight: number;
};

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
