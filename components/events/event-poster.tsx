import Image from "next/image";
import type { EventItem } from "@/lib/types";

export function EventPoster({ event }: { event: EventItem }) {
  if (!event.image || event.imageFit !== "contain") return null;

  return (
    <a
      href={event.image}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View the full poster for ${event.title} (opens in a new tab)`}
      style={{ position: "relative", display: "block", width: "100%", height: "260px", marginBottom: "20px", borderRadius: "var(--radius-sm)", overflow: "hidden", background: "var(--paper)" }}
    >
      <Image
        src={event.image}
        alt={event.imageAlt ?? event.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "contain" }}
      />
    </a>
  );
}
