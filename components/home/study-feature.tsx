import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

export function StudyFeature() {
  const readingList = [
    {
      code: "TRACK // 01",
      title: "Mountain Historiography & Indigenous Memory",
      author: "Decolonizing regional accounts across the Karakoram & Himalayas",
      status: "Archived Discussion",
    },
    {
      code: "TRACK // 02",
      title: "Cryosphere, Ecology & Mountain Commons",
      author: "Critical inquiries into water security, glacial shifts, and local adaptation",
      status: "Archived Discussion",
    },
    {
      code: "TRACK // 03",
      title: "Multilingual Poetry & South Asian Literary Modernity",
      author: "Comparative readings in Balti, Shina, Urdu, and Persian classical verses",
      status: "Archived Discussion",
    },
  ];

  return (
    <section className="section-padding study-circle-band" aria-labelledby="study-heading">
      <div className="wrap">
        <div className="editorial-grid-2">
          {/* Left Column: Visual & Reading List */}
          <div>
            <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "24px", border: "1px solid var(--line)" }}>
              <Image
                src="/images/events/study-circle.jpg"
                alt="University students engaged in a serious intellectual study circle discussion"
                width={700}
                height={440}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(6, 18, 29, 0.88)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--surface)",
                  fontFamily: "var(--mono)",
                  fontSize: "0.72rem",
                }}
              >
                GBSC ACADEMIC FORUM // SEMINAR ROOM ARCHIVE
              </div>
            </div>

            {/* Reading List Card */}
            <div className="study-reading-list">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span className="eyebrow" style={{ margin: 0 }}>
                  <BookOpen size={14} /> Curated Reading Themes
                </span>
                <span className="archive-tag tag-dark">STUDENT SEMINAR</span>
              </div>

              {readingList.map((item, idx) => (
                <div key={idx} className="study-reading-item">
                  <span className="study-reading-code">{item.code}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.author}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontFamily: "var(--mono)" }}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div style={{ paddingLeft: "clamp(0px, 3vw, 24px)" }}>
            <p className="eyebrow">
              <span className="archive-tag tag-teal">INTELLECTUAL LIFE</span>
              <span>·</span>
              <span>The Study Circle</span>
            </p>
            <h2 id="study-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", marginBottom: "20px" }}>
              Curiosity grows when it is shared without pretense.
            </h2>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "18px" }}>
              In an era dominated by rapid digital soundbites, the GBSC Study Circle offers an unhurried,
              deliberate space for university students to sit together, read deeply, and interrogate ideas
              that shape our world.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "32px" }}>
              Sessions are facilitated by students, for students. We read across disciplines—from mountain
              environmental history and political philosophy to multilingual poetry and scientific ethics.
              No pre-existing expertise is required, only the willingness to ask genuine questions and listen
              attentively to peers.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/events/study-circles" className="button button-primary">
                Explore Study Circles <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="button button-secondary">
                Propose a Reading Topic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
