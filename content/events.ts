import { EventItem, EventCategory } from "@/lib/types";

export const programCategories: {
  title: EventCategory;
  slug: string;
  href: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
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
    image: "/images/events/study-circle.jpg",
    objectives: [
      "Weekly reading circles anchored by student facilitators and peer discussions.",
      "Close readings of South Asian literature, regional historiography, and global thought.",
      "An unhurried space for intellectual inquiry without pedagogical hierarchy.",
    ],
  },
  {
    title: "Workshop",
    slug: "workshops-seminars",
    href: "/events/workshops-seminars",
    eyebrow: "Practical Skills & Academic Readiness",
    summary: "Hands-on masterclasses covering academic writing, research methodology, and digital literacy.",
    description:
      "Bridging classroom learning with practical execution. GBSC workshops equip students with concrete competencies—from formatting thesis manuscripts and analyzing qualitative datasets to public discourse and professional career navigation.",
    image: "/images/events/book-fair.jpg",
    objectives: [
      "Technical thesis writing and literature review formatting workshops.",
      "Fellowship and scholarship application clinics for higher studies.",
      "Digital research methodologies, citation ethics, and academic integrity.",
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
    image: "/images/events/cultural-night.jpg",
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
    title: "Gilgit-Baltistan Independence Day Celebration",
    category: "Cultural Event",
    summary:
      "Marking the 79th anniversary of Gilgit-Baltistan's historic independence on November 1st, 1947 — a tribute to the scouts, soldiers, and people who shaped our identity.",
    description:
      "On November 1st, 1947, the people and scouts of Gilgit revolted against the Dogra rule in a bloodless revolution that would define the destiny of the region. GBSC-QAU invites all students to gather in commemoration — with cultural performances, historical recitations, traditional music, and community iftar.",
    status: "confirmed",
    date: "Saturday, 1 November 2026",
    time: "4:00 PM – 9:00 PM",
    venue: "QAU Student Activity Centre",
    image: "/images/events/cultural-night.jpg",
    isFeatured: true,
    isHighlighted: true,
  },
  {
    id: "gbsc-ce-2026",
    slug: "cultural-evening-harmonies-2026",
    title: "Cultural Evening: Harmonies of the Northern Valleys",
    category: "Cultural Event",
    summary:
      "Annual cultural evening featuring Rubab recitals, Shina and Balti poetry, traditional attire, and student performances.",
    description:
      "An annual gathering bringing together students from across Quaid-i-Azam University to experience the acoustic heritage of the Rubab, Suranai, and Daf, alongside multilingual poetry recitations.",
    status: "confirmed",
    date: "November 2026",
    venue: "QAU Auditorium",
    image: "/images/events/cultural-night.jpg",
    isFeatured: false,
  },
  {
    id: "gbsc-sc-2026",
    slug: "study-circle-mountain-ecology-2026",
    title: "Study Circle: Climate & the Karakoram Cryosphere",
    category: "Study Circle",
    summary:
      "A peer reading session exploring glaciology, climate change impacts, and indigenous ecological knowledge across the Hindu Kush–Himalayan range.",
    description:
      "Students gather to critically engage with research papers and field reports on glacier retreat, water security, and how mountain communities adapt to climate disruption.",
    status: "confirmed",
    date: "Late November 2026",
    venue: "Central Library Seminar Room, QAU",
    image: "/images/events/study-circle.jpg",
    isFeatured: false,
  },
  {
    id: "gbsc-sc-01",
    slug: "inaugural-study-circle-mountain-histories",
    title: "Study Circle: Decolonizing Mountain Historiography",
    category: "Study Circle",
    summary: "A peer discussion on early 20th-century travelogues and indigenous narratives of the Karakoram.",
    description:
      "This session reviews archival texts and oral histories from the northern valleys. We contrast colonial British geopolitical accounts with indigenous poetry, songs, and historical recollections from Gilgit and Baltistan.",
    status: "past",
    date: "Semester Archive",
    venue: "Central Library Quadrangle, QAU",
    image: "/images/events/study-circle.jpg",
    facilitator: "Student Academic Forum",
    isFeatured: true,
  },
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
