import type { TechnicalTeamMember, TechArchitectureItem } from "@/lib/types";

export const technicalTeamMembers: TechnicalTeamMember[] = [
  {
    id: "shayan-danish",
    name: "Shayan Danish",
    role: "Lead Full-Stack Architect & UI/UX Designer",
    badge: "Creator & Lead Architect",
    image: "/images/Technical_team/shayan.jpeg",
    affiliation: "Quaid-i-Azam University, Islamabad",
    department: "Computer Science",
    bio: "Full-stack developer and UI/UX designer who architected and built the official GBSC-QAU web application from the ground up. Driven by a deep commitment to the Gilgit-Baltistan student fraternity, he crafted the platform to combine modern digital engineering with timeless cultural preservation.",
    contributions: [
      "Engineered the complete Next.js App Router architecture and server-rendered structure",
      "Designed the bespoke 'Mountain Archive' editorial aesthetic, color palettes, and fluid typography",
      "Built the interactive Executive Cabinet directory, 14-Districts Regions portal, and live Event Countdown banner",
      "Implemented comprehensive SEO metadata, structured OpenGraph archives, and responsive breakpoints",
    ],
    skills: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "UI/UX Design",
      "CSS Architecture",
      "Full-Stack Web Dev",
      "System Architecture",
      "Vercel & CI/CD",
    ],
    isLead: true,
    socials: {
      github: "https://github.com/shayandanish",
      email: "shayandanish2002@gmail.com",
    },
  },
  {
    id: "basid-ali",
    name: "Basid Ali",
    role: "Frontend Engineer & Technical Contributor",
    badge: "Core Developer",
    image: "/images/Technical_team/Basid.JPEG",
    affiliation: "Quaid-i-Azam University, Islamabad",
    department: "Information Technology",
    bio: "Frontend engineer and technical contributor dedicated to building responsive interfaces, streamlining components, and ensuring seamless user experiences for students and visitors of the council.",
    contributions: [
      "Contributed to core UI components, page layouts, and content modularity",
      "Conducted extensive multi-device responsive testing across smartphones, tablets, and desktop displays",
      "Curated and formatted digital assets, event rosters, and council media integration",
      "Assisted in ongoing code reviews, quality assurance, and user experience enhancements",
    ],
    skills: [
      "Frontend Development",
      "JavaScript & ES6+",
      "TypeScript",
      "React Components",
      "Responsive UI/UX",
      "Content Architecture",
      "Quality Assurance",
      "Git & GitHub",
    ],
    isLead: false,
  },
];

export const platformArchitecture: TechArchitectureItem[] = [
  {
    title: "Next.js App Router",
    category: "Framework & SSR",
    description:
      "Powered by modern React Server Components for instantaneous page transitions, high security, and minimal client-side JavaScript overhead.",
    iconName: "Cpu",
  },
  {
    title: "Mountain Archive Design System",
    category: "Design & Styling",
    description:
      "A tailored design system inspired by the Karakoram and Himalayan peaks, utilizing warm earth tones, deep slate, and fluid responsive tokens with zero CSS bloat.",
    iconName: "Palette",
  },
  {
    title: "100% Student-Crafted",
    category: "Community & Pride",
    description:
      "Conceived, engineered, and maintained entirely by Gilgit-Baltistan students at Quaid-i-Azam University, exemplifying student innovation and collaborative excellence.",
    iconName: "Code2",
  },
  {
    title: "Accessibility & Performance",
    category: "Web Standards",
    description:
      "Optimized for universal accessibility (WCAG), lightning-fast mobile loading on campus networks, structured schema markups, and responsive multi-touch navigation.",
    iconName: "Sparkles",
  },
];

export const techHighlights = [
  { label: "100%", detail: "Student-Led Engineering" },
  { label: "14", detail: "Districts Represented in Archive" },
  { label: "0kb", detail: "Unnecessary CSS Runtime Bloat" },
  { label: "<1s", detail: "Average First Contentful Paint" },
];
