import type { EventItem } from "@/lib/types";

// Council-supplied records and original images.
export const studyCircleHighlights = [
  {
    id: "gbls-study-circle-language-culture-identity-2026",
    slug: "gbls-first-study-circle-language-culture-identity",
    title: "First-Ever Study Circle: Language, Culture, and Identity in Gilgit-Baltistan",
    category: "Study Circle",
    summary:
      "The Gilgit-Baltistan Literary Society (GBLS), QAU Islamabad, proudly presents its First-Ever Study Circle exploring linguistic heritage, cultural roots, and collective identity with speaker Shakir Hussain, MPhil Scholar, QAU.",
    description:
      "The Gilgit-Baltistan Literary Society (GBLS), QAU Islamabad, proudly presents its First-Ever Study Circle.\n\nOur inaugural session will explore the theme: “Language, Culture, and Identity in Gilgit-Baltistan”. Join us for an insightful discussion on our linguistic heritage, cultural roots, and collective identity, exploring our past, understanding our present, and reflecting on our future.\n\nSpeaker: Shakir Hussain, MPhil Scholar, Quaid-i-Azam University.\nDate: Thursday, 15 October 2026\nTime: 3:00 PM\nVenue: Mujeed Huts Lawn\n\nLet’s come together to reconnect with our roots, exchange ideas, and strengthen our literary and intellectual traditions.\n\nOne Society. Many Languages. One Shared Heritage.\nGilgit-Baltistan Literary Society (GBLS) | QAU Islamabad",
    date: "Thursday, 15 October 2026",
    time: "3:00 PM",
    venue: "Mujeed Huts Lawn, Quaid-i-Azam University, Islamabad",
    facilitator: "Shakir Hussain (MPhil Scholar, QAU)",
    image: "/images/events/study-circles/language-culture-identity-gb.jpeg",
    imageAlt:
      "GBLS presents First-Ever Study Circle: Language, Culture and Identity in Gilgit Baltistan poster featuring speaker Shakir Hussain, Thursday 15 October 2026 at 3:00 PM, Mujeed Huts Lawn",
    imageWidth: 1122,
    imageHeight: 1402,
    imageFit: "contain",
    status: "past",
    isFeatured: true,
  },
  {
    id: "bayaak-e-aman-fellowship-gbsc",
    slug: "bayaak-e-aman-fellowship-unity-dialogue",
    title: "Bayaak-e-Aman Fellowship: Unity, Peace & Dialogue across Gilgit-Baltistan",
    category: "Study Circle",
    summary:
      "Beyond every conflict and divide, there is unity. Organized by Bayaakeaman Foundation in collaboration with GBSC to bring youth together, promote peace, mutual respect, and rebuild trust through open dialogue across Gilgit-Baltistan.",
    description:
      "Beyond every conflict, every difference, and every divide there is always a stronger force called unity.\n\nOrganized by Bayaakeaman Foundation in collaboration with GBSC, this initiative was more than just an event—it was a heartfelt effort to bring people together and promote peace, dialogue, and understanding across Gilgit-Baltistan.\n\nIn a region where communities have, at times, experienced sectarian tensions and social conflicts, this gathering served as a reminder that our true strength lies not in what divides us, but in what unites us. The focus was on open dialogue, mutual respect, and rebuilding trust among people through meaningful conversation and awareness.\n\nThe message was clear and powerful: let go of division, reject negativity, and replace silence with understanding. The youth were encouraged to rise as carriers of peace—individuals who don't just witness change, but actively become a part of it by promoting harmony and coexistence.\n\nGilgit-Baltistan is a land of beauty, diversity, and resilience and its greatest treasure is its people. Protecting this unity is not just important, it is essential for a peaceful and stronger future.\n\nTogether, we listen. Together, we understand. Together, we rise above differences.\n\nLong live GBSC.",
    date: "Youth Fellowship Archive",
    time: "Interactive Fellowship Session",
    venue: "Quaid-i-Azam University, Islamabad",
    facilitator: "Bayaakeaman Foundation in collaboration with GBSC",
    image: "/images/events/bayaakeaman-fellowship-gbsc.jpeg",
    imageAlt:
      "Bayaak-e-Aman Fellowship gathering at Quaid-i-Azam University organized by Bayaakeaman Foundation in collaboration with GBSC",
    imageWidth: 1280,
    imageHeight: 960,
    imageFit: "cover",
    status: "past",
    isFeatured: true,
  },
] satisfies (EventItem & {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "contain" | "cover";
})[];
