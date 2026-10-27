import type { RegionDivision } from "@/lib/types";

/**
 * The fourteen districts of Gilgit-Baltistan, grouped by the three
 * administrative divisions used by the council.
 */
export const gbDivisions: RegionDivision[] = [
  {
    id: "gilgit",
    name: "Gilgit Division",
    description:
      "The northern gateway, following the Gilgit, Hunza, and Ghizer river valleys.",
    districts: ["Ghizer", "Gilgit", "Hunza", "Nagar", "Gupis-Yasin"],
  },
  {
    id: "baltistan",
    name: "Baltistan Division",
    description:
      "The high Karakoram east, from the Shigar and Skardu valleys to the borders of Ghanche.",
    districts: ["Skardu", "Shigar", "Ghanche", "Kharmang", "Roundu"],
  },
  {
    id: "diamer",
    name: "Diamer Division",
    description:
      "The western Indus corridor, spanning Diamer, Astore, Darel, and Tangir.",
    districts: ["Diamer", "Astore", "Darel", "Tangir"],
  },
];

export const gbRegionsMeta = {
  totalDistricts: gbDivisions.reduce(
    (total, division) => total + division.districts.length,
    0
  ),
  totalDivisions: gbDivisions.length,
  mapImage: "/images/GB_Map/GBmap.jpeg",
  mapAlt:
    "District map of Gilgit-Baltistan showing Ghizer, Hunza, Nagar, Gilgit, Diamer, Astore, Skardu, Shigar, Ghanche, and Kharmang",
  mapNote:
    "The map is illustrative; some newly notified districts may not be individually labelled.",
} as const;
