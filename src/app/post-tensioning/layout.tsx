import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Post-Tensioning Technology",
  description:
    "Discover the superior advantages of post-tensioning over traditional concrete construction. Learn about enhanced structural performance, economic benefits, and sustainability advantages that make post-tensioning the preferred choice for modern construction projects in Ethiopia.",
  keywords: [
    "post-tensioning",
    "concrete construction",
    "structural engineering",
    "Ethiopia",
    "construction technology",
    "building innovation",
    "prestressed concrete",
  ],
}

export default function PostTensioningLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}