import { EventItem, EventCategory } from "@/lib/types";
import { studyCircleHighlights } from "@/content/study-circles";
import { literarySocietyImages, literarySocietyInitiative } from "@/content/literary-society";
import { poetryEvent } from "@/content/cultural-events";

export const programCategories: {
  title: EventCategory;
  slug: string;
  href: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  objectives: string[];
}[] = [
  {
    title: "Study Circle",
    slug: "study-circles",
    href: "/events/study-circles",
    eyebrow: "Intellectual Life & Critical Inquiry",
    summary: "Student-led reading sessions and thoughtful dialogue on literature, philosophy, and history.",
    description:
      "A forum for intellectual curiosity and critical exchange. Students gather weekly to deconstruct seminal texts in political thought, regional history, ethics, and mountain ecology, fostering a culture of rigorous student scholarship.",
    image: studyCircleHighlights[0].image,
    imageFit: "contain",
    objectives: [
      "Weekly reading circles anchored by student facilitators and peer discussions.",
      "Close readings of South Asian literature, regional historiography, and global thought.",
      "An unhurried space for intellectual inquiry without pedagogical hierarchy.",
    ],
  },
  {
    title: "Literary Society",
    slug: "literary-society",
    href: "/events/literary-society",
    eyebrow: "Literature, Languages & Cultural Heritage",
    summary: "A student initiative celebrating Gilgit-Baltistan’s literature, cultural heritage, and diverse linguistic traditions at QAU.",
    description: literarySocietyInitiative.description,
    image: literarySocietyImages[0].src,
    imageFit: "contain",
    objectives: [
      "Promote literature and meaningful intellectual exchange.",
      "Celebrate Gilgit-Baltistan’s diverse languages and cultural heritage.",
      "Provide a platform for student expression and literary identity.",
    ],
  },
  {
    title: "Seminar",
    slug: "workshops-seminars",
    href: "/events/workshops-seminars",
    eyebrow: "Public Discourse & Faculty Lectures",
    summary: "Guest lectures and scholarly dialogues with visiting academics, writers, and community elders.",
    description:
      "Hosting prominent scholars, historians, and practitioners to discuss contemporary societal questions, climate challenges across the Karakoram-Himalayan cryosphere, and institutional developments in Gilgit-Baltistan.",
    image: "/images/events/study-circle.jpg",
    objectives: [
      "Keynote addresses by visiting researchers and QAU faculty members.",
      "Panels addressing environmental preservation, glaciology, and mountain communities.",
      "Student paper symposiums providing peer review opportunities.",
    ],
  },
  {
    title: "Cultural Event",
    slug: "cultural",
    href: "/events/cultural",
    eyebrow: "Living Heritage & Linguistic Diversity",
    summary: "Celebrations of the varied languages, musical traditions, and living customs of Gilgit-Baltistan.",
    description:
      "Gilgit-Baltistan is a mosaic of distinct linguistic and cultural traditions—including Balti, Shina, Burushaski, Wakhi, Khowar, and Domaki. Our cultural programs offer a vibrant stage for musical performance, traditional attire, poetic recitations (Mushaira), and celebratory fraternity on campus.",
    image: poetryEvent.image,
    imageFit: "contain",
    objectives: [
      "Annual Gilgit-Baltistan Cultural Evening featuring traditional rubab and sitar performances.",
      "Multilingual poetry gatherings celebrating regional literary heritage.",
      "Exhibits of indigenous textile crafts, architecture, and ancestral memory.",
    ],
  },
  {
    title: "Book Fair",
    slug: "book-fairs",
    href: "/events/book-fairs",
    eyebrow: "Literary Culture & Open Access",
    summary: "Campus book exhibits facilitating accessible literature, historical texts, and poetry.",
    description:
      "Organized on university walkways and library lawns to cultivate reading habits. Featuring curated stalls with regional publishers, historical reprints, philosophy classics, and student book exchange stalls.",
    image: "/images/events/book-fair.jpg",
    objectives: [
      "Curated book stalls offering discounted academic and literary titles.",
      "Student-run book exchange tables fostering mutual reading circles.",
      "Author discussions and book launches honoring regional authors.",
    ],
  },
  {
    title: "Community Activity",
    slug: "community",
    href: "/events",
    eyebrow: "Student Welfare & Mutual Aid",
    summary: "Orientation desks, hostel support, study groups, and community solidarity at QAU.",
    description:
      "Day-to-day community support that ensures no student from the mountains feels isolated in the federal capital. From welcoming incoming freshmen to coordinating blood donation drives and hostel guidance.",
    image: "/images/events/study-circle.jpg",
    objectives: [
      "Freshmen welcoming desks and campus orientation tours at the beginning of each semester.",
      "Hostel accommodation guidance and administrative navigation assistance.",
      "Community welfare initiatives and mutual peer support networks.",
    ],
  },
];

// Confirmed and past events archive. Factual dates are specified only where confirmed.
// Note: When no upcoming event is confirmed by the council, the UI renders the dignified editorial empty state.
export const eventsData: EventItem[] = [
  // ── UPCOMING CONFIRMED ────────────────────────────────────────
  {
    id: "gbsc-id-2026",
    slug: "gilgit-baltistan-independence-day-2026",
    title: "Gilgit-Baltistan Independence Day 2026",
    category: "Cultural Event",
    summary:
      "Join GBSC QAU to celebrate Gilgit-Baltistan’s history, cultural heritage, and unity on the eve of 1 November. All Quaidians and QBIANS are welcome.",
    description:
      "GBSC QAU invites all Quaidians and QBIANS to an evening celebrating Gilgit-Baltistan’s liberation, cultural heritage, and shared identity.",
    status: "confirmed",
    date: "Saturday, 31 October 2026",
    startsAt: "2026-10-31T18:30:00+05:00",
    time: "6:30 PM",
    venue: "MFC Lawn, Quaid-i-Azam University, Islamabad",
    image: "/images/events/independence-day/gb-independence-day-2026.jpeg",
    imageAlt: "GBSC QAU poster for Gilgit-Baltistan Independence Day, Saturday 31 October 2026 at 6:30 PM, MFC Lawn",
    imageFit: "contain",
    isFeatured: true,
    isHighlighted: true,
  },
  ...studyCircleHighlights,
  literarySocietyInitiative,
  poetryEvent,
  {
    id: "gbsc-ce-01",
    slug: "annual-cultural-heritage-symposium",
    title: "Cultural Evening: Harmonies of the Northern Valleys",
    category: "Cultural Event",
    summary: "Traditional instrument recitals, Balti and Shina poetry readings, and student cultural dialogue.",
    description:
      "An annual gathering bringing together students from across Quaid-i-Azam University to experience the acoustic heritage of the Rubab, Suranai, and Daf, alongside multilingual poetry recitations.",
    status: "past",
    date: "Annual Cultural Archive",
    venue: "QAU Student Activity Centre",
    image: "/images/events/cultural-night.jpg",
    isFeatured: true,
  },
  {
    id: "gbsc-bf-01",
    slug: "campus-book-circle-exhibition",
    title: "Karakoram Book Fair: Literature, Ecology & Society",
    category: "Book Fair",
    summary: "Open-air book tables featuring regional history, poetry, and classical philosophy.",
    description:
      "An open campus exhibition curated to provide students access to rare regional publications, environmental surveys of the Hindu Kush-Himalayan region, and literary classics at subsidized prices.",
    status: "past",
    date: "Academic Archive",
    venue: "Administration Lawn Promenade, QAU",
    image: "/images/events/book-fair.jpg",
    isFeatured: true,
  },
];
