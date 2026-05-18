import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ptautorepair.ca";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: `${base}/legacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}
