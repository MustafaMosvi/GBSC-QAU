# Cabinet Portrait — Image Naming Checklist

The `CabinetSection` component reads portraits from **`public/GBSC_Cabinet_Pics/`** using the exact public URLs below. File names are lowercase, hyphenated, and use the `.jpg` extension. Renaming a portrait without updating `content/cabinet.ts` will trigger the built-in initials fallback on the card.

- **Public directory:** `public/GBSC_Cabinet_Pics/`
- **URL prefix:** `/GBSC_Cabinet_Pics/`
- **Recommended source size:** 800 × 1000 px (4:5 portrait)
- **Crop focus:** face in the upper third; cards use `object-position: center 28%`
- **Accepted format:** JPEG (`.jpg`)

## Checklist

| ✓ | Display name | Position | Tier | Required file | Public URL |
|---|---|---|---|---|---|
| [x] | Adnan Jaffary | Chairman | 1 — Executive Leadership | `adnan-jaffary.jpg` | `/GBSC_Cabinet_Pics/adnan-jaffary.jpg` |
| [x] | Kamran Haider | Senior Vice Chairman | 1 — Executive Leadership | `kamran-haider.jpg` | `/GBSC_Cabinet_Pics/kamran-haider.jpg` |
| [x] | Tahar Zafar | Vice Chairman | 1 — Executive Leadership | `tahar-zafar.jpg` | `/GBSC_Cabinet_Pics/tahar-zafar.jpg` |
| [x] | Mubashir Shimshali | General Secretary | 1 — Executive Leadership | `mubashir-shimshali.jpg` | `/GBSC_Cabinet_Pics/mubashir-shimshali.jpg` |
| [x] | Zahir Aman | Joint Secretary | 2 — Core Secretariat | `zahir-aman.jpg` | `/GBSC_Cabinet_Pics/zahir-aman.jpg` |
| [x] | Shazad Ali | Finance Secretary | 2 — Core Secretariat | `shazad-ali.jpg` | `/GBSC_Cabinet_Pics/shazad-ali.jpg` |
| [x] | Shabbir Ahmed | Spokesperson | 2 — Core Secretariat | `shabbir-ahmed.jpg` | `/GBSC_Cabinet_Pics/shabbir-ahmed.jpg` |
| [x] | Vijdan | Legal Advisor | 2 — Core Secretariat | `vijdan.jpg` | `/GBSC_Cabinet_Pics/vijdan.jpg` |
| [x] | Karar Ali | Information Secretary | 3 — Wing & Departmental Secretaries | `karar-ali.jpg` | `/GBSC_Cabinet_Pics/karar-ali.jpg` |
| [x] | Zeeshan | Media Secretary | 3 — Wing & Departmental Secretaries | `zeeshan.jpg` | `/GBSC_Cabinet_Pics/zeeshan.jpg` |
| [x] | Wasi Ul Hassan | Education Secretary | 3 — Wing & Departmental Secretaries | `wasi-ul-hassan.jpg` | `/GBSC_Cabinet_Pics/wasi-ul-hassan.jpg` |
| [x] | Muhammad Amin | Cultural Secretary | 3 — Wing & Departmental Secretaries | `muhammad-amin.jpg` | `/GBSC_Cabinet_Pics/muhammad-amin.jpg` |
| [x] | Saif Ullah Baig | Sports Secretary | 3 — Wing & Departmental Secretaries | `saif-ullah-baig.jpg` | `/GBSC_Cabinet_Pics/saif-ullah-baig.jpg` |
| [x] | M Huzaifa | BS President | 4 — Student Body & Executive Members | `m-huzaifa.jpg` | `/GBSC_Cabinet_Pics/m-huzaifa.jpg` |
| [x] | Sartaj Ali | MSc Representative | 4 — Student Body & Executive Members | `sartaj-ali.jpg` | `/GBSC_Cabinet_Pics/sartaj-ali.jpg` |
| [x] | Musavir Hussain | CC / Executive Member | 4 — Student Body & Executive Members | `musavir-hussain.jpg` | `/GBSC_Cabinet_Pics/musavir-hussain.jpg` |

> **Media coordinator:** the Media Secretary, Zeeshan, also serves as media coordinator. The single portrait `zeeshan.jpg` covers both references; no duplicate file is required.

## Adding or replacing a portrait

1. Export the photo as a JPEG at 4:5 (for example 800 × 1000 px).
2. Name it exactly as listed in the table and place it in `public/GBSC_Cabinet_Pics/`.
3. If the member's name or portfolio changes, update `currentCabinetTiers` in `content/cabinet.ts`.
4. If a file is missing or fails to load, the card automatically shows a gradient initials avatar instead of a broken image.
