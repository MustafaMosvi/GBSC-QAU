import { GalleryItem } from "@/lib/types";
import { studyCircleHighlights } from "@/content/study-circles";
import { literarySocietyImages, literarySocietyInitiative } from "@/content/literary-society";
import { poetryEvent } from "@/content/cultural-events";

export const galleryItemsData: GalleryItem[] = [
  {
    id: `gal-${poetryEvent.id}`,
    title: poetryEvent.title,
    caption: poetryEvent.summary,
    category: "Cultural Gatherings",
    src: poetryEvent.image,
    alt: poetryEvent.imageAlt,
    imageFit: poetryEvent.imageFit,
    location: poetryEvent.venue,
    date: poetryEvent.date,
  },
  ...studyCircleHighlights.map((record): GalleryItem => ({
    id: `gal-${record.id}`,
    title: record.title,
    caption: record.summary,
    category: "Study Circles",
    src: record.image,
    alt: record.imageAlt,
    imageFit: record.imageFit,
    location: record.venue,
    date: record.date,
  })),
  ...literarySocietyImages.map((image): GalleryItem => ({
    id: `gal-${image.id}`,
    title: image.title,
    caption: literarySocietyInitiative.summary,
    category: "Literary Society",
    src: image.src,
    alt: image.alt,
    imageFit: "contain",
    location: literarySocietyInitiative.venue,
    date: literarySocietyInitiative.date,
  })),
  {
    id: "gal-01",
    title: "The Karakoram Ridge at Dawn",
    caption:
      "Sunrise across the high glaciated ridges of the Karakoram range, Gilgit-Baltistan. A reminder of the rugged terrain and enduring resilience of our home region.",
    category: "Heritage & Landscapes",
    src: "/images/hero/karakoram-hero.jpg",
    alt: "Majestic snow-dusted peaks and winding river valley in the Karakoram range, Gilgit-Baltistan",
    location: "Karakoram Range, Gilgit-Baltistan",
    date: "Landscape Archive",
  },
  {
    id: "gal-03",
    title: "Acoustic Harmony: The Cultural Night",
    caption:
      "A traditional rubab and sitar performance during the annual Gilgit-Baltistan cultural evening, accompanied by students wearing authentic feathered pakols.",
    category: "Cultural Gatherings",
    src: "/images/events/cultural-night.jpg",
    alt: "Musician seated cross-legged playing traditional rubab string instrument surrounded by students in traditional woolen pakol caps",
    location: "Student Activity Center, QAU",
    date: "Cultural Archive",
  },
  {
    id: "gal-04",
    title: "Campus Promenade Book Exhibition",
    caption:
      "Open-air book tables along the campus walkway, featuring curated collections on mountain ecology, regional literature, philosophy, and history.",
    category: "Book Fairs",
    src: "/images/events/book-fair.jpg",
    alt: "Outdoor campus book fair with wooden tables filled with books and students browsing under autumn trees",
    location: "Library Walkway, QAU Islamabad",
    date: "Literary Archive",
  },
  {
    id: "gal-05",
    title: "Baltit Fort: Timber Masonry Heritage",
    caption:
      "Architectural documentation of historic Baltit Fort in Hunza Valley, showcasing traditional cribbage timber-and-stone construction and intricate woodwork.",
    category: "Heritage & Landscapes",
    src: "/images/heritage/hunza-heritage.jpg",
    alt: "Historic stone and carved timber architecture of Baltit Fort in Hunza Valley overlooking Karakoram peaks",
    location: "Karimabad, Hunza, Gilgit-Baltistan",
    date: "Heritage Archive",
  },
  {
    id: "gal-06",
    title: "Glacial Waters of Attabad Lake",
    caption:
      "Turquoise glacial waters winding through the towering rock faces of Gojal, Gilgit-Baltistan—a symbol of the dramatic physical geography that shapes mountain life.",
    category: "Heritage & Landscapes",
    src: "/images/gallery/attabad-lake.jpg",
    alt: "Vibrant turquoise waters of Attabad Lake surrounded by dramatic steep rocky mountain cliffs",
    location: "Attabad Lake, Gojal, Gilgit-Baltistan",
    date: "Landscape Archive",
  },
];
