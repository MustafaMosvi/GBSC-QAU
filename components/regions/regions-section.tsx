import Image from "next/image";
import { MapPin } from "lucide-react";
import { gbDivisions, gbRegionsMeta } from "@/content/regions";

export function RegionsStats({ className = "" }: { className?: string }) {
  return (
    <div
      className={`regions-stats ${className}`.trim()}
      aria-label={`${gbRegionsMeta.totalDistricts} districts across ${gbRegionsMeta.totalDivisions} divisions`}
    >
      <div className="regions-stat">
        <strong>{gbRegionsMeta.totalDistricts}</strong>
        <span>Districts</span>
      </div>
      <span className="regions-stat-divider" aria-hidden="true" />
      <div className="regions-stat">
        <strong>{gbRegionsMeta.totalDivisions}</strong>
        <span>Divisions</span>
      </div>
    </div>
  );
}

interface RegionsSectionProps {
  showHeader?: boolean;
}

export function RegionsSection({ showHeader = true }: RegionsSectionProps) {
  return (
    <section
      id="regions"
      className="regions-section section-dark"
      aria-labelledby="regions-heading"
    >
      <div className="wrap">
        {showHeader ? (
          <div className="regions-header">
            <div className="regions-header-copy">
              <p className="eyebrow light">
                <span className="archive-tag tag-dark">OUR REGIONS</span>
                <span aria-hidden="true">·</span>
                <span>Gilgit-Baltistan</span>
              </p>
              <h2 id="regions-heading">
                Fourteen districts. One student community.
              </h2>
              <p className="regions-intro">
                Our members come from every corner of Gilgit-Baltistan — from the
                alpine valleys of Gilgit Division to the high Karakoram of
                Baltistan and the western Indus corridor of Diamer.
              </p>
            </div>

            <RegionsStats />
          </div>
        ) : (
          <h2 id="regions-heading" className="sr-only">
            Gilgit-Baltistan regions and districts
          </h2>
        )}

        <div className="regions-layout">
          <figure className="regions-map-card">
            <div className="regions-map-frame">
              <Image
                src={gbRegionsMeta.mapImage}
                alt={gbRegionsMeta.mapAlt}
                width={693}
                height={412}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="regions-map-img"
              />
              <span className="regions-map-badge">
                <MapPin size={13} strokeWidth={2.2} aria-hidden="true" />
                GB // {gbRegionsMeta.totalDistricts} Districts
              </span>
            </div>
            <figcaption className="regions-map-caption">
              <span className="regions-map-caption-title">
                GILGIT-BALTISTAN // DISTRICT MAP
              </span>
              <span>{gbRegionsMeta.mapNote}</span>
            </figcaption>
          </figure>

          <div className="regions-divisions">
            {gbDivisions.map((division, divisionIndex) => (
              <article key={division.id} className="regions-division">
                <div className="regions-division-head">
                  <span className="regions-division-index" aria-hidden="true">
                    {String(divisionIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="regions-division-copy">
                    <h3>{division.name}</h3>
                    <p>{division.description}</p>
                  </div>
                  <span className="regions-division-count">
                    {division.districts.length} districts
                  </span>
                </div>

                <ul
                  className="regions-district-list"
                  aria-label={`${division.name} districts`}
                >
                  {division.districts.map((district, districtIndex) => (
                    <li key={district} className="regions-district">
                      <span
                        className="regions-district-index"
                        aria-hidden="true"
                      >
                        {String(districtIndex + 1).padStart(2, "0")}
                      </span>
                      {district}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
