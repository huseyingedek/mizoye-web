import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/cozumler", priority: 0.9, changeFrequency: "monthly" },
    { path: "/yapay-zeka", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hakkimizda", priority: 0.7, changeFrequency: "monthly" },
    { path: "/misyon-vizyon", priority: 0.6, changeFrequency: "yearly" },
    { path: "/iletisim", priority: 0.8, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
