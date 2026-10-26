export type EventCategory =
  | "Study Circle"
  | "Literary Society"
  | "Workshop"
  | "Seminar"
  | "Cultural Event"
  | "Book Fair"
  | "Community Activity";

export type EventStatus = "confirmed" | "tentative" | "past" | "archived";

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  summary: string;
  description: string;
  date?: string;
  startsAt?: string;
  time?: string;
  venue?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  status: EventStatus;
  facilitator?: string;
  registrationUrl?: string;
  isFeatured?: boolean;
  isHighlighted?: boolean;
}

export type AnnouncementCategory =
  | "Council Notice"
  | "Academic Update"
  | "Cultural News"
  | "Admissions Guidance"
  | "Event Announcement"
  | "Community Bulletin";

export interface AnnouncementItem {
  id: string;
  slug: string;
  title: string;
  category: AnnouncementCategory;
  date?: string;
  summary: string;
  content: string[];
  isVerified: boolean;
  priority?: "normal" | "featured" | "high";
  externalLink?: { label: string; url: string };
}

export interface CabinetMember {
  id: string;
  role: string;
  name?: string;
  department?: string;
  tenure: string;
  bio?: string;
  image?: string;
  isConfirmed: boolean;
  duties: string[];
}

export type GalleryCategory =
  | "All"
  | "Campus Life"
  | "Study Circles"
  | "Literary Society"
  | "Cultural Gatherings"
  | "Heritage & Landscapes"
  | "Book Fairs";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  imageFit?: "cover" | "contain";
  date?: string;
  location?: string;
  photographer?: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  era: string;
  description: string;
  significance: string;
  isVerified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  field: "Academic & Research" | "Community Service" | "Cultural Preservation" | "Student Leadership";
  personOrGroup: string;
  context: string;
  description: string;
  year?: string;
  isVerified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Participation & Membership" | "Events & Activities" | "Student Support" | "Contact & Office";
}

export interface HelpDeskTopic {
  id: string;
  title: string;
  description: string;
  iconName: string;
  guidelines: string[];
  universityOffice?: string;
  disclaimer?: string;
}
