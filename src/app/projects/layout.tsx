import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore EASE's extensive portfolio of construction projects across Ethiopia. From government buildings and residential complexes to commercial developments, discover our expertise in post-tensioning technology and structural engineering solutions.",
  keywords: [
    "construction projects",
    "Ethiopia projects",
    "post-tensioning projects",
    "government buildings",
    "residential construction",
    "commercial buildings",
    "structural engineering",
    "EASE portfolio",
    "construction portfolio",
    "building projects",
  ],
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}