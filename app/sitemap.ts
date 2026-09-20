import type { MetadataRoute } from "next"
import { isTeamPageEnabled } from "@/lib/site-features"

const BASE_URL = "https://thewyomingclinic.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/chiropractic", priority: 0.8 },
    { path: "/massage", priority: 0.8 },
    { path: "/medical-care", priority: 0.8 },
  ]

  if (isTeamPageEnabled) {
    routes.push({ path: "/team", priority: 0.6 })
  }

  const lastModified = new Date()

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}
