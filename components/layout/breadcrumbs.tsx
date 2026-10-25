import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs-bar wrap" aria-label="Breadcrumbs">
      <Link href="/">Home</Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <ChevronRight size={13} style={{ opacity: 0.4 }} aria-hidden="true" />
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page" style={{ color: "var(--ink)", fontWeight: 600 }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
