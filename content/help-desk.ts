import { HelpDeskTopic } from "@/lib/types";

export const helpDeskGuide = {
  eyebrow: "Peer Guidance & Student Support // GBSC-QAU",
  title: "A Shared Starting Point for Every Student",
  intro:
    "Leaving home to pursue university studies in the capital can feel daunting. The GBSC-QAU Student Help Desk exists as an informal, friendly peer-support space where students from Gilgit-Baltistan can find guidance, ask practical questions, and connect with experienced seniors.",
  disclaimer:
    "Important Notice: The GBSC-QAU Student Help Desk is a student-run volunteer mentorship and peer-guidance platform. It is NOT an official administrative office of Quaid-i-Azam University, nor does it provide legal counsel, certified emergency medical aid, or formal psychological therapy. For official administrative matters, hostel fee disputes, admissions verification, or medical emergencies, students should directly contact the designated QAU university authorities.",
};

export const helpDeskTopicsData: HelpDeskTopic[] = [
  {
    id: "freshmen-onboarding",
    title: "Freshmen Onboarding & Campus Navigation",
    description:
      "Understanding the layout of Quaid-i-Azam University, locating academic departments, administrative blocks, and student transport points.",
    iconName: "Compass",
    guidelines: [
      "Departmental mapping: locating your specific faculty, lecture halls, and dean's offices across QAU's natural campus terrain.",
      "Student registration and ID card issuance verification steps.",
      "Transport schedule: points and timings for QAU student bus services across Rawalpindi and Islamabad.",
    ],
    universityOffice: "QAU Directorate of Student Affairs (DSA)",
  },
  {
    id: "hostel-guidance",
    title: "Hostel Accommodation Guidance",
    description:
      "Assistance in navigating university hostel application procedures, allotment verification, and essential campus living preparations.",
    iconName: "Home",
    guidelines: [
      "Information on required documentation for university hostel application submission.",
      "Understanding the allotment verification process managed by the provost office.",
      "Temporary peer accommodation coordination for students arriving during initial admissions week.",
    ],
    universityOffice: "Office of the Provost (Boys & Girls Hostels), QAU",
    disclaimer: "Official hostel room allotments are solely granted by the QAU Provost Office.",
  },
  {
    id: "academic-support",
    title: "Academic Mentorship & Library Access",
    description:
      "Connecting with senior students in your subject discipline for course advice, study circles, syllabus guidance, and research library access.",
    iconName: "BookOpen",
    guidelines: [
      "Connecting with senior student mentors in natural sciences, social sciences, and computing.",
      "Orienting new students with the QAU Central Library catalog, digital research repositories, and reading rooms.",
      "Joining departmental study circles to discuss coursework and exam preparation techniques.",
    ],
    universityOffice: "Chief Librarian, QAU Central Library & Departmental Chairpersons",
  },
  {
    id: "administrative-referrals",
    title: "Administrative Directives & Fee Guidance",
    description:
      "Directing students to relevant university offices for scholarships, transcripts, fee challans, and administrative inquiries.",
    iconName: "HelpCircle",
    guidelines: [
      "Locating the official QAU Treasurer Office for fee voucher verification and bank submissions.",
      "Information on HEC and regional scholarship notice boards and verification guidelines.",
      "Clarifying procedure for semester deferrals, course registration deadlines, and examination forms.",
    ],
    universityOffice: "QAU Examination Branch, Treasurer Office & Financial Aid Office",
  },
];
