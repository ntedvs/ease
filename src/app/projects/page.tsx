"use client"

import projectsData from "@/../projects.json"
import {
  Briefcase,
  Building,
  Building2,
  Construction,
  CreditCard,
  Filter,
  GraduationCap,
  Home,
  Hospital,
  Hotel,
  Landmark,
  MapPin,
  Maximize2,
  Warehouse,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Project type interface
interface Project {
  name: string
  area: number
  signingDate: string
  category: string
  hasImage: boolean
  imageUrl?: string | null
  year: number
}

// Category mapping for display names
const categoryDisplayNames: Record<string, string> = {
  Government: "Government",
  Apartment: "Apartment",
  Hotel: "Hotel",
  Hospital: "Hospital",
  Warehouse: "Warehouse",
  Commercial: "Commercial",
  Shoring: "Shoring",
  Bank: "Bank",
  School: "School",
  "Mixed Use": "Mixed Use",
  "Personal Residence": "Personal Residence",
}

// Category icon mapping
const getCategoryIcon = (category: string) => {
  const normalizedCategory = category === "Apartement" ? "Apartment" : category

  switch (normalizedCategory) {
    case "Government":
      return <Landmark size={16} className="text-primary" />
    case "Apartment":
      return <Building size={16} className="text-primary" />
    case "Mixed Use":
      return <Building2 size={16} className="text-primary" />
    case "Hotel":
      return <Hotel size={16} className="text-primary" />
    case "Personal Residence":
      return <Home size={16} className="text-primary" />
    case "Hospital":
      return <Hospital size={16} className="text-primary" />
    case "Warehouse":
      return <Warehouse size={16} className="text-primary" />
    case "Commercial":
      return <Briefcase size={16} className="text-primary" />
    case "Shoring":
      return <Construction size={16} className="text-primary" />
    case "Bank":
      return <CreditCard size={16} className="text-primary" />
    case "School":
      return <GraduationCap size={16} className="text-primary" />
    default:
      return <Building size={16} className="text-primary" />
  }
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sort projects to show image projects first
    const sortedProjects = projectsData.projects.sort((a, b) => {
      if (a.hasImage && !b.hasImage) return -1
      if (!a.hasImage && b.hasImage) return 1
      return 0
    })
    setProjects(sortedProjects)
    setFilteredProjects(sortedProjects)
    setLoading(false)
  }, [])

  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter((project) => {
        const normalizedCategory =
          project.category === "Apartement" ? "Apartment" : project.category
        return normalizedCategory === category
      })
      // Sort filtered projects to show image projects first
      const sortedFiltered = filtered.sort((a, b) => {
        if (a.hasImage && !b.hasImage) return -1
        if (!a.hasImage && b.hasImage) return 1
        return 0
      })
      setFilteredProjects(sortedFiltered)
    }
  }

  // Get unique categories for filter buttons
  const getCategories = () => {
    const categories = Array.from(
      new Set(
        projects.map((p) => {
          return p.category === "Apartement" ? "Apartment" : p.category
        }),
      ),
    )
    return ["All", ...categories.sort()]
  }

  // Static statistics as requested
  const stats = {
    government: 40,
    residential: 20,
    commercial: 30,
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-muted">Loading projects...</div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg relative flex min-h-[70vh] items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Discover our extensive portfolio of construction projects across
              Ethiopia. From government buildings to residential complexes, see
              how EASE delivers excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Project Portfolio
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Over a decade of successful project delivery across diverse
              sectors and challenging environments throughout Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Building size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-black text-secondary">
                    {stats.government}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Government Buildings
                  </h3>
                </div>
              </div>
            </div>

            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Building2 size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-black text-secondary">
                    {stats.residential}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Residential Projects
                  </h3>
                </div>
              </div>
            </div>

            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Maximize2 size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-black text-secondary">
                    {stats.commercial}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Commercial Buildings
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Browse by Category
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Filter our projects by category to explore specific types of
              construction and engineering solutions.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {getCategories().map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "border border-border bg-white text-secondary hover:bg-primary hover:text-white hover:shadow-md"
                }`}
              >
                {categoryDisplayNames[category] || category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div key={index}>
                {project.hasImage && project.imageUrl ? (
                  // Card with image
                  <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.name} - EASE construction project showcasing post-tensioning technology and structural engineering`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="card-body space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-bold text-secondary">
                          {project.name}
                        </h3>
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.year}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-muted">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-primary" />
                          <span>{project.area.toLocaleString()} m²</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <span>
                            {categoryDisplayNames[project.category] ||
                              project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Card without image
                  <div className="card transition-all duration-300 hover:shadow-lg">
                    <div className="card-body space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-bold text-secondary">
                          {project.name}
                        </h3>
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.year}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-muted">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-primary" />
                          <span>{project.area.toLocaleString()} m²</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <span>
                            {categoryDisplayNames[project.category] ||
                              project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <Filter size={48} className="mx-auto mb-4 text-muted" />
              <h3 className="mb-2 text-xl font-bold text-secondary">
                No projects found
              </h3>
              <p className="text-muted">
                Try selecting a different category to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
