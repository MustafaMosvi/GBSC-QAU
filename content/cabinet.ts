import { CabinetMember } from "@/lib/types";

export const chairmanMessageData = {
  isConfirmed: false, // Flag: Official verified name and photo to be supplied upon constitutional notification
  title: "A Platform of Collective Responsibility & Cultural Dignity",
  eyebrow: "Chairman's Perspective // GBSC-QAU",
  role: "Chairman, Gilgit-Baltistan Student Council",
  institution: "Quaid-i-Azam University, Islamabad",
  namePlaceholder: "Office of the Council Chairman",
  imagePlaceholder: "/images/branding/gbsc-logo.png",
  tenure: "Current Academic Session",
  quote:
    "We come to Quaid-i-Azam University carrying the enduring spirit, patience, and dignity of the northern valleys. Here in the capital, our duty is to learn rigorously, support one another without reservation, and celebrate the rich diversity that binds us together.",
  body: [
    "The Gilgit-Baltistan Student Council at Quaid-i-Azam University was founded on an elemental premise: that no student who makes the journey from our mountains should feel unguided or alone in their pursuit of higher learning.",
    "Our university is Pakistan's premier federal academic institution, bringing together students from every province and region. Within this vibrant intellectual milieu, GBSC-QAU stands as a bridge—fostering cultural brotherhood, encouraging serious academic inquiry, and advocating for the welfare and dignity of our student body.",
    "Whether through our weekly study circles, cultural evenings, academic workshops, or day-to-day peer assistance at the student help desk, the council remains a living community shaped by every member's participation.",
    "I invite every student—newly arrived or nearing graduation—to make this council their home, contribute their ideas, and uphold the highest standards of integrity and academic excellence.",
  ],
  editorialNote:
    "The official signed message and portrait of the elected council chairman will be updated upon formal executive ratification.",
};

export const cabinetMembersData: CabinetMember[] = [
  {
    id: "chair",
    role: "Chairman",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Principal representation of the student council across university forums.",
      "Executive coordination of council initiatives, assemblies, and official delegations.",
      "Oversight of council constitutional adherence and institutional liaison.",
    ],
  },
  {
    id: "vice-chair",
    role: "Vice Chairman",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Assisting the chairman in executive affairs and institutional representation.",
      "Coordination of inter-council relations with other student bodies at QAU.",
      "Supervision of internal working committees and grievance resolution.",
    ],
  },
  {
    id: "gen-sec",
    role: "General Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Executive documentation, official correspondence, and council secretariat management.",
      "Convening general body meetings and maintaining meeting minutes.",
      "Liaison between the cabinet and departmental student representatives.",
    ],
  },
  {
    id: "acad-sec",
    role: "Academic & Literary Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Curating weekly student study circles and academic reading lists.",
      "Organizing campus workshops, research seminars, and book fair initiatives.",
      "Facilitating peer tutoring, thesis support, and academic guidance.",
    ],
  },
  {
    id: "cult-sec",
    role: "Cultural & Heritage Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Organizing the annual Gilgit-Baltistan Cultural Evening and heritage exhibitions.",
      "Preserving and showcasing the linguistic diversity (Balti, Shina, Burushaski, Wakhi, Khowar).",
      "Curating traditional musical, poetic, and artisanal presentations.",
    ],
  },
  {
    id: "welfare-sec",
    role: "Student Welfare & Help Desk Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Managing the GBSC-QAU Student Help Desk for incoming freshmen.",
      "Assisting with hostel accommodation guidance and administrative navigation.",
      "Coordinating emergency assistance, blood donation networks, and student support.",
    ],
  },
  {
    id: "info-sec",
    role: "Information & Media Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Management of council official digital publications, notices, and archival records.",
      "Public announcements, photography documentation, and media relations.",
      "Design and circulation of editorial bulletins and event notices.",
    ],
  },
  {
    id: "fin-sec",
    role: "Finance Secretary",
    tenure: "Current Executive Tenure",
    isConfirmed: false,
    duties: [
      "Maintenance of transparent financial accounts for council activities and events.",
      "Preparation of semester budget reports for executive committee audit.",
      "Oversight of event expenditure and community contribution receipts.",
    ],
  },
];
