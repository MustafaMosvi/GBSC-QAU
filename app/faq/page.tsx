import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { faqData } from "@/content/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions // GBSC-QAU Knowledge Base",
  description:
    "Plain, factual answers concerning the Gilgit-Baltistan Student Council at QAU, activity access, freshmen orientation, and contacting the cabinet.",
};

export default function FAQPage() {
  const categories = [
    "General",
    "Participation & Membership",
    "Events & Activities",
    "Student Support",
    "Contact & Office",
  ] as const;

  return (
    <>
      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">KNOWLEDGE BASE</span>
            <span>·</span>
            <span>Questions & Answers</span>
          </p>
          <h1>Questions, answered plainly.</h1>
          <p className="lead">
            Direct, factual answers concerning council membership, activity access, study circles,
            and student help desk guidance at Quaid-i-Azam University.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          {categories.map((category) => {
            const items = faqData.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category} style={{ marginBottom: "56px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span className="archive-tag tag-teal">{category}</span>
                  <h2 style={{ margin: 0, fontSize: "1.55rem" }}>{category} Questions</h2>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", padding: "0 24px" }}>
                  <FAQAccordion items={items} />
                </div>
              </div>
            );
          })}

          <div
            style={{
              marginTop: "48px",
              padding: "28px 32px",
              background: "var(--surface)",
              border: "1px dashed var(--line)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem" }}>Have a question not listed here?</h3>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)" }}>
                Our student delegates are glad to provide guidance and direct you to the appropriate resources.
              </p>
            </div>
            <Link href="/contact" className="button button-primary">
              Reach Out Directly <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
