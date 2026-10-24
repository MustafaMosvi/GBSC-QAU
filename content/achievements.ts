import { AchievementItem } from "@/lib/types";

export const achievementsNarrative = {
  eyebrow: "Student Contributions // Our Pride",
  title: "Effort, Curiosity & Community Impact",
  intro:
    "This archive honors the verified contributions of students and alumni from Gilgit-Baltistan at Quaid-i-Azam University. Rather than cataloging unverified corporate accolades, we celebrate genuine academic excellence, community service, cultural preservation, and campus leadership.",
  note:
    "Entries in Our Pride are verified through council review. Students and alumni are invited to submit verified records of peer-reviewed research, public service initiatives, or literary publications.",
};

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-01",
    title: "Glaciological Research on Karakoram Cryosphere",
    field: "Academic & Research",
    personOrGroup: "QAU Earth & Environmental Sciences Scholars",
    context: "Department of Earth Sciences, Quaid-i-Azam University",
    description:
      "Student researchers from Gilgit-Baltistan conducting field monitoring of glacial lake outburst flood (GLOF) risks and permafrost dynamics across the Karakoram range, contributing baseline data for mountain community safety.",
    year: "Recent Academic Session",
    isVerified: true,
  },
  {
    id: "ach-02",
    title: "Multilingual Oral History Documentation",
    field: "Cultural Preservation",
    personOrGroup: "GBSC Cultural & Literary Committee",
    context: "Student-Led Oral History Archive",
    description:
      "A collective documentation project recording oral folklore, songs, and historical narratives from elders across Balti, Shina, Burushaski, Wakhi, and Khowar linguistic traditions to safeguard endangered heritage.",
    year: "Cultural Archive Initiative",
    isVerified: true,
  },
  {
    id: "ach-03",
    title: "Freshmen Campus Orientation & Welfare Network",
    field: "Student Leadership",
    personOrGroup: "GBSC Student Help Desk Volunteers",
    context: "Annual Orientation Service, QAU Campus",
    description:
      "A volunteer-led orientation drive that has guided hundreds of newly arrived mountain students through hostel allocation logistics, departmental enrollment, and university library systems without administrative delay.",
    year: "Ongoing Welfare Program",
    isVerified: true,
  },
  {
    id: "ach-04",
    title: "Mountain Community Relief & Winter Donation Drives",
    field: "Community Service",
    personOrGroup: "QAU Student Volunteer Coalition",
    context: "Emergency Response & Winterization Efforts",
    description:
      "Mobilization of university-wide winter clothing collections, medical camps, and disaster relief aid for remote villages impacted by seasonal avalanches, road closures, and flash floods in northern Pakistan.",
    year: "Community Solidarity Initiative",
    isVerified: true,
  },
];
