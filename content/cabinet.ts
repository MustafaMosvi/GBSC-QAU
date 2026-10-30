import { CabinetMember, CabinetTierGroup } from "@/lib/types";

export const chairmanMessageData = {
  isConfirmed: false, // Flag: Official verified name and photo to be supplied upon constitutional notification
  title: "A Platform of Collective Responsibility & Cultural Dignity",
  eyebrow: "Chairman's Perspective // GBSC-QAU",
  role: "Chairman, Gilgit-Baltistan Student Council",
  institution: "Quaid-i-Azam University, Islamabad",
  namePlaceholder: "Adnan Jaffary",
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

/**
 * @deprecated Legacy portfolio placeholders retained for older editorial
 * surfaces. The current, named cabinet is exported below as
 * `currentCabinetTiers` / `currentCabinetMembers`.
 */
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

/* ============================================================================
   CURRENT CABINET SHOWCASE
   ----------------------------------------------------------------------------
   IMAGE NAMING CHECKLIST — /public/GBSC_Cabinet_Pics/
   Every portrait must use the exact lowercase, hyphenated file name below.
   Keeping this list in sync with `currentCabinetTiers` is the source of truth.

   Chairman                  Adnan Jaffary        adnan-jaffary.jpg
   General Secretary         Mubashir Shimshali   mubashir-shimshali.jpg
   Senior Vice Chairman      Kamran Haider        kamran-haider.jpg
   Vice Chairman             Tahar Zafar          tahar-zafar.jpg
   Joint Secretary           Zahir Aman           zahir-aman.jpg
   Finance Secretary         Shazad Ali           shazad-ali.jpg
   BS President              M Huzaifa            m-huzaifa.jpg
   MSc Representative        Sartaj Ali           sartaj-ali.jpg
   Information Secretary     Karar Ali            karar-ali.jpg
   Media Secretary           Zeeshan              zeeshan.jpg
   Spokesperson              Shabbir Ahmed        shabbir-ahmed.jpg
   Legal Advisor             Vijdan               vijdan.jpg
   Education Secretary       Wasi Ul Hassan       wasi-ul-hassan.jpg
   Cultural Secretary        Muhammad Amin        muhammad-amin.jpg
   Sports Secretary          Saif Ullah Baig      saif-ullah-baig.jpg
   CC / Executive Member     Musavir Hussain      musavir-hussain.jpg

   Note: "Media coordinator" refers to the same officer as the Media Secretary;
   a single portrait (`zeeshan.jpg`) serves both references.
   ========================================================================== */

const CABINET_IMAGE_DIR = "/GBSC_Cabinet_Pics";

export const currentCabinetTiers: CabinetTierGroup[] = [
  {
    id: "executive-leadership",
    label: "Executive Leadership",
    description:
      "The principal offices holding the council's constitutional mandate, institutional voice, and executive direction.",
    members: [
      {
        id: "adnan-jaffary",
        name: "Adnan Jaffary",
        role: "Chairman",
        image: `${CABINET_IMAGE_DIR}/adnan-jaffary.jpg`,
        searchAliases: ["chair"],
        isChair: true,
      },
      {
        id: "mubashir-shimshali",
        name: "Mubashir Shimshali",
        role: "General Secretary",
        image: `${CABINET_IMAGE_DIR}/mubashir-shimshali.jpg`,
        searchAliases: ["gs"],
      },
      {
        id: "kamran-haider",
        name: "Kamran Haider",
        role: "Senior Vice Chairman",
        image: `${CABINET_IMAGE_DIR}/kamran-haider.jpg`,
        searchAliases: ["svc"],
      },
      {
        id: "tahar-zafar",
        name: "Tahar Zafar",
        role: "Vice Chairman",
        image: `${CABINET_IMAGE_DIR}/tahar-zafar.jpg`,
        searchAliases: ["vc"],
      },
    ],
  },
  {
    id: "core-secretariat",
    label: "Core Secretariat",
    description:
      "The administrative core coordinating records, finance, official advocacy, and legal counsel.",
    members: [
      {
        id: "zahir-aman",
        name: "Zahir Aman",
        role: "Joint Secretary",
        image: `${CABINET_IMAGE_DIR}/zahir-aman.jpg`,
        searchAliases: ["js"],
      },
      {
        id: "shazad-ali",
        name: "Shazad Ali",
        role: "Finance Secretary",
        image: `${CABINET_IMAGE_DIR}/shazad-ali.jpg`,
        searchAliases: ["fs", "treasurer"],
      },
      {
        id: "shabbir-ahmed",
        name: "Shabbir Ahmed",
        role: "Spokesperson",
        image: `${CABINET_IMAGE_DIR}/shabbir-ahmed.jpg`,
        searchAliases: ["spokes person", "press"],
      },
      {
        id: "vijdan",
        name: "Vijdan",
        role: "Legal Advisor",
        image: `${CABINET_IMAGE_DIR}/vijdan.jpg`,
        searchAliases: ["legal"],
      },
    ],
  },
  {
    id: "departmental-secretaries",
    label: "Wing & Departmental Secretaries",
    description:
      "Secretaries leading information, media, education, culture, and sports across the student community.",
    members: [
      {
        id: "karar-ali",
        name: "Karar Ali",
        role: "Information Secretary",
        image: `${CABINET_IMAGE_DIR}/karar-ali.jpg`,
        searchAliases: ["info"],
      },
      {
        id: "zeeshan",
        name: "Zeeshan",
        role: "Media Secretary",
        image: `${CABINET_IMAGE_DIR}/zeeshan.jpg`,
        searchAliases: ["media coordinator"],
      },
      {
        id: "wasi-ul-hassan",
        name: "Wasi Ul Hassan",
        role: "Education Secretary",
        image: `${CABINET_IMAGE_DIR}/wasi-ul-hassan.jpg`,
        searchAliases: ["academic"],
      },
      {
        id: "muhammad-amin",
        name: "Muhammad Amin",
        role: "Cultural Secretary",
        image: `${CABINET_IMAGE_DIR}/muhammad-amin.jpg`,
        searchAliases: ["culture", "heritage"],
      },
      {
        id: "saif-ullah-baig",
        name: "Saif Ullah Baig",
        role: "Sports Secretary",
        image: `${CABINET_IMAGE_DIR}/saif-ullah-baig.jpg`,
        searchAliases: ["sport"],
      },
    ],
  },
  {
    id: "student-body",
    label: "Student Body & Executive Members",
    description:
      "Student-body representatives and executive members connecting the cabinet to every academic cohort.",
    members: [
      {
        id: "m-huzaifa",
        name: "M Huzaifa",
        role: "BS President",
        image: `${CABINET_IMAGE_DIR}/m-huzaifa.jpg`,
        searchAliases: ["bachelor", "bs"],
      },
      {
        id: "sartaj-ali",
        name: "Sartaj Ali",
        role: "MSc Representative",
        image: `${CABINET_IMAGE_DIR}/sartaj-ali.jpg`,
        searchAliases: ["msc", "ms", "master"],
      },
      {
        id: "musavir-hussain",
        name: "Musavir Hussain",
        role: "CC / Executive Member",
        image: `${CABINET_IMAGE_DIR}/musavir-hussain.jpg`,
        searchAliases: ["cc", "coordinator", "executive"],
      },
    ],
  },
];

export const currentCabinetMembers = currentCabinetTiers.flatMap((tier) => tier.members);
