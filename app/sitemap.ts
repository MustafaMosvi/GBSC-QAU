import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/regions", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/events", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/events/study-circles", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/events/literary-society", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/events/workshops-seminars", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/events/cultural", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/events/book-fairs", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/announcements", changeFrequency: "daily" as const, priority: 0.85 },
    { path: "/help-desk", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/history", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/our-pride", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
