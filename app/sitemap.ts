import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const featuredProjects = projects.filter((project) => project.featured);

  const projectRoutes = featuredProjects.map((project) => ({
    url: `https://mayanksaraswal.com/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://mayanksaraswal.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
