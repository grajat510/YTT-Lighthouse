import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COURSES } from "@/lib/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/programs", "/privacy", "/terms"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const courseRoutes = COURSES.map((course) => ({
    url: `${SITE_URL}/programs/${course.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...courseRoutes];
}
