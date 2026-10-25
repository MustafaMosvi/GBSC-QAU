import { AnnouncementItem } from "@/lib/types";

// Active ticker announcement displayed on top banner (if active and confirmed)
export const activeTickerAnnouncement: {
  enabled: boolean;
  message: string;
  linkText: string;
  href: string;
  date?: string;
} = {
  enabled: true,
  message: "GBSC-QAU Student Help Desk & Orientation portal is now active for all incoming freshmen.",
  linkText: "Access Help Desk",
  href: "/help-desk",
  date: "Fall Semester",
};

export const announcementsData: AnnouncementItem[] = [
  {
    id: "ann-01",
    slug: "freshmen-onboarding-orientation-desk",
    title: "Student Help Desk & Campus Guidance for New Entrants",
    category: "Admissions Guidance",
    date: "Current Academic Session",
    summary:
      "The GBSC-QAU student help desk is available to assist newly admitted students with hostel applications, departmental navigation, and library registrations.",
    content: [
      "We extend a warm welcome to all students joining Quaid-i-Azam University from across Gilgit, Skardu, Diamer, Ghizer, Hunza, Nagar, Ghanche, Shigar, Kharmang, Astore, and Gupis-Yasin.",
      "The council has established an informational desk to assist incoming students with understanding campus geography, completing hostel verification procedures, obtaining student cards, and connecting with seniors in their respective departments.",
      "Please note: GBSC-QAU offers peer mentorship and administrative guidance. Official fee submissions, hostel allotments, and academic admissions remain the sole jurisdiction of QAU administration.",
    ],
    isVerified: true,
    priority: "featured",
    externalLink: {
      label: "View Help Desk Guide",
      url: "/help-desk",
    },
  },
  {
    id: "ann-02",
    slug: "call-for-volunteers-study-circles",
    title: "Call for Discussion Facilitators: Autumn Study Circles",
    category: "Academic Update",
    date: "Semester Session",
    summary:
      "Students interested in curating reading lists or facilitating peer discussion sessions for the upcoming study circle series are invited to register their proposals.",
    content: [
      "The GBSC Academic Forum is inviting senior undergraduate and graduate students to propose texts and thematic tracks for the upcoming semester study circles.",
      "Proposed focus areas include regional social histories, environmental resilience in mountain communities, critical contemporary literature, and research methodology basics.",
      "To propose a session or volunteer as a co-facilitator, please reach out via the official council contact form.",
    ],
    isVerified: true,
    priority: "normal",
  },
  {
    id: "ann-03",
    slug: "council-digital-archive-initiative",
    title: "The Mountain Archive: Digital Preservation Initiative",
    category: "Council Notice",
    date: "Archive Announcement",
    summary:
      "Launch of the council's digital archive dedicated to documenting student contributions, cultural activities, and institutional memory at QAU.",
    content: [
      "The council is compiling verified photographic records, student publications, and symposium notes dating from previous academic years to preserve our institutional memory.",
      "Students and alumni in possession of historical council photographs, event brochures, or published magazines are invited to contribute high-resolution scans.",
      "All submitted material will be credited and archived with proper editorial care.",
    ],
    isVerified: true,
    priority: "normal",
  },
];
