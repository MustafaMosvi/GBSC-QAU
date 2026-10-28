export const siteConfig = {
  name: "Gilgit-Baltistan Student Council",
  acronym: "GBSC-QAU",
  institution: "Quaid-i-Azam University, Islamabad",
  tagline: "Rooted in the mountains. United in purpose.",
  missionStatement:
    "A student-led community at Quaid-i-Azam University bringing together the people, cultures, ideas, and aspirations of Gilgit-Baltistan.",
  shortDescription:
    "The institutional platform and digital archive for students of Gilgit-Baltistan at Quaid-i-Azam University, Islamabad. Dedicated to academic curiosity, cultural preservation, and student welfare.",
  // Production URL fallback: set NEXT_PUBLIC_SITE_URL in production environment
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://gbsc-qau.org",
  canonicalOrigin: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "",
  
  // Editorial and Brand Design Tokens
  curatorialTheme: "The Mountain Archive — Heritage in Motion",

  // Verified Institutional Contact Details (Unverified details are flagged and not fabricated)
  contact: {
    campusLocation: "Quaid-i-Azam University Campus, Islamabad, 45320, Pakistan",
    emailNote: "Official council email will be activated following cabinet induction.",
    helpDeskEmail: "helpdesk@gbsc-qau.org",
    email: "contact@gbsc-qau.org",
    meetingVenue: "Student Activity Centre / QAU Central Library Lawns",
    isVerified: false, // Flag indicating contact endpoints are pending final council verification
    socials: [
      { name: "Twitter / X", handle: "@gbsc_qau", url: "https://x.com/gbsc_qau", isVerified: false },
      { name: "Instagram", handle: "@gbsc.qau", url: "https://instagram.com/gbsc.qau", isVerified: false },
      { name: "Facebook", handle: "GBSC.QAU", url: "https://facebook.com/GBSC.QAU", isVerified: false },
    ],
  },

  // Disclaimers upholding data integrity
  disclaimers: {
    governance:
      "GBSC-QAU is an independent student representative body at Quaid-i-Azam University, Islamabad. It does not replace university administrative departments, legal bodies, or professional counseling services.",
    cabinetNotice:
      "Current cabinet portfolios are structured according to council constitutional convention. Individual officer names and official portraits are updated following constitutional induction.",
    eventDates:
      "All dates, venues, and registration links are published solely upon formal ratification by the council executive committee.",
  },

  primaryNav: [
    { label: "Home", href: "/" },
    { label: "About & Cabinet", href: "/about" },
    { label: "Our Regions", href: "/regions" },
    { label: "Technical Team", href: "/technical-team" },
    { label: "Events & Programs", href: "/events" },
    { label: "Archive Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  secondaryNav: [
    { label: "Announcements", href: "/announcements" },
    { label: "Student Help Desk", href: "/help-desk" },
    { label: "Council History", href: "/history" },
    { label: "Our Pride", href: "/our-pride" },
    { label: "FAQs", href: "/faq" },
  ],

  programLinks: [
    { label: "Study Circles", href: "/events/study-circles" },
    { label: "Literary Society", href: "/events/literary-society" },
    { label: "Workshops & Seminars", href: "/events/workshops-seminars" },
    { label: "Cultural Gatherings", href: "/events/cultural" },
    { label: "Campus Book Fairs", href: "/events/book-fairs" },
  ],
};
