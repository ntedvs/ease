"use client";

import FadeIn from "@/components/FadeIn";
import projectsData from "@/../projects.json";
import {
  RailSymbol as Bridge,
  Briefcase,
  Building,
  Building2,
  Construction,
  CreditCard,
  Factory,
  Filter,
  GraduationCap,
  Home,
  Hospital,
  Hotel,
  Landmark,
  MapPin,
  Maximize2,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Project type interface
interface Project {
  name: string;
  area?: number;
  signingDate?: string;
  category: string;
  hasImage: boolean;
  imageUrl?: string | null;
  year: number;
}

// Category mapping for display names
const categoryDisplayNames: Record<string, string> = {
  Government: "Government",
  Apartment: "Apartment",
  Apartement: "Apartment",
  Hotel: "Hotel",
  Hospital: "Hospital",
  Warehouse: "Warehouse",
  Commercial: "Commercial",
  Shoring: "Shoring",
  Bank: "Bank",
  School: "Educational",
  Educational: "Educational",
  Bridge: "Bridge",
  Industrial: "Industrial",
  Office: "Office",
  "Mixed Use": "Mixed Use",
  "Personal Residence": "Personal Residence",
};

// Category icon mapping
const getCategoryIcon = (category: string) => {
  const normalizedCategory = category === "Apartement" ? "Apartment" : category;

  switch (normalizedCategory) {
    case "Government":
      return <Landmark size={16} className="text-primary" />;
    case "Apartment":
      return <Building size={16} className="text-primary" />;
    case "Mixed Use":
      return <Building2 size={16} className="text-primary" />;
    case "Hotel":
      return <Hotel size={16} className="text-primary" />;
    case "Personal Residence":
      return <Home size={16} className="text-primary" />;
    case "Hospital":
      return <Hospital size={16} className="text-primary" />;
    case "Warehouse":
      return <Warehouse size={16} className="text-primary" />;
    case "Commercial":
      return <Briefcase size={16} className="text-primary" />;
    case "Shoring":
      return <Construction size={16} className="text-primary" />;
    case "Bank":
      return <CreditCard size={16} className="text-primary" />;
    case "Educational":
      return <GraduationCap size={16} className="text-primary" />;
    case "Bridge":
      return <Bridge size={16} className="text-primary" />;
    case "Industrial":
      return <Factory size={16} className="text-primary" />;
    case "Office":
      return <Building2 size={16} className="text-primary" />;
    default:
      return <Building size={16} className="text-primary" />;
  }
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sort projects to show image projects first
    const sortedProjects = projectsData.projects.sort((a, b) => {
      if (a.hasImage && !b.hasImage) return -1;
      if (!a.hasImage && b.hasImage) return 1;
      return 0;
    });
    setProjects(sortedProjects);
    setFilteredProjects(sortedProjects);
    setLoading(false);
  }, []);

  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => {
        const normalizedCategory =
          project.category === "Apartement" ? "Apartment" : project.category;
        return normalizedCategory === category;
      });
      // Sort filtered projects to show image projects first
      const sortedFiltered = filtered.sort((a, b) => {
        if (a.hasImage && !b.hasImage) return -1;
        if (!a.hasImage && b.hasImage) return 1;
        return 0;
      });
      setFilteredProjects(sortedFiltered);
    }
  };

  // Get unique categories for filter buttons
  const getCategories = () => {
    const categories = Array.from(
      new Set(
        projects.map((p) => {
          return p.category === "Apartement" ? "Apartment" : p.category;
        }),
      ),
    );
    return ["All", ...categories.sort()];
  };

  // Static statistics as requested
  const stats = {
    government: 14,
    residential: 20,
    commercial: 8,
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-muted">Loading projects...</div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/projects/cultural-market-center.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Discover our extensive portfolio of construction projects across East Africa. From
              government buildings to residential complexes, see how EASE delivers excellence in
              every project.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
                Project Portfolio
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
                Over a decade of successful project delivery across diverse sectors and challenging
                environments throughout East Africa.
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
                    <h3 className="text-xl font-bold text-secondary">Government Buildings</h3>
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
                    <h3 className="text-xl font-bold text-secondary">Residential Projects</h3>
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
                    <h3 className="text-xl font-bold text-secondary">Commercial Buildings</h3>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Case Studies</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Explore how EASE tackles complex engineering challenges with innovative
              post-tensioning solutions and structural expertise.
            </p>
          </div>

          <div className="space-y-24">
            {/* Foreign Affairs Building Case Study */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Landmark size={24} className="text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">
                      Government Complex
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-secondary">Foreign Affairs Building</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Challenge</h4>
                    <p className="leading-relaxed text-muted">
                      Constructing a large-scale government facility with 48,850 m² of floor area
                      requiring exceptional structural integrity, seismic resistance, and long-term
                      durability while meeting strict governmental security and safety standards.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">EASE Solution</h4>
                    <p className="leading-relaxed text-muted">
                      Implemented advanced post-tensioning systems throughout the structure,
                      enabling large column-free spaces for flexible office layouts. Our engineering
                      team designed custom reinforcement solutions to handle complex loading
                      conditions and ensure optimal structural performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Key Outcomes</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>48,850 m² of premium government office space</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Enhanced structural efficiency through post-tensioning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Delivered on schedule within budget constraints</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Achieved superior seismic performance standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="relative h-96 w-full overflow-hidden bg-neutral">
                  <Image
                    src="/projects/foreign-affairs.png"
                    alt="Foreign Affairs Building - EASE post-tensioning construction project showcasing government facility structural engineering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Cultural Market Center Case Study */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building2 size={24} className="text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">
                      Commercial Complex
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-secondary">Cultural Market Center</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Challenge</h4>
                    <p className="leading-relaxed text-muted">
                      Developing a 38,000 m² mixed-use commercial center that balances cultural
                      preservation with modern retail functionality, requiring innovative structural
                      solutions for large open spaces and varying load requirements.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">EASE Solution</h4>
                    <p className="leading-relaxed text-muted">
                      Deployed selective post-tensioning techniques to create expansive retail
                      spaces while maintaining structural integrity. Our team integrated traditional
                      architectural elements with modern engineering principles, ensuring cultural
                      sensitivity without compromising performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Key Outcomes</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>38,000 m² of versatile commercial space</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Preserved cultural architectural aesthetics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Optimized for diverse commercial usage patterns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Enhanced structural durability and longevity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative h-96 w-full overflow-hidden bg-neutral">
                  <Image
                    src="/projects/cultural.png"
                    alt="Cultural Market Center - EASE mixed-use commercial construction showcasing post-tensioning technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Omo River Bridge Case Study */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Bridge size={24} className="text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">
                      Infrastructure Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-secondary">Omo River Bridge</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Challenge</h4>
                    <p className="leading-relaxed text-muted">
                      Constructing a critical river crossing in challenging terrain with seasonal
                      flooding, requiring precise engineering to withstand dynamic water loads while
                      ensuring long-term structural stability in harsh environmental conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">EASE Solution</h4>
                    <p className="leading-relaxed text-muted">
                      Utilized specialized post-tensioning cable systems designed for bridge
                      applications, incorporating advanced foundation techniques and water-resistant
                      materials. Our engineers conducted extensive hydraulic analysis to ensure
                      optimal span configuration and pier placement.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Key Outcomes</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Established critical regional transportation link</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Engineered for 100-year flood resistance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Minimal environmental impact during construction</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Advanced post-tensioning ensures structural longevity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="relative h-96 w-full overflow-hidden bg-neutral">
                  <Image
                    src="/projects/omo.png"
                    alt="Omo River Bridge - EASE infrastructure construction showcasing bridge engineering and post-tensioning expertise"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Fedengua Phase 1 Case Study */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building2 size={24} className="text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">
                      Mixed Use Development
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-secondary">Fedengua Phase 1</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Challenge</h4>
                    <p className="leading-relaxed text-muted">
                      Developing a complex 33,520 m² mixed-use project with diverse structural
                      requirements, integrating residential, commercial, and office spaces while
                      optimizing space efficiency and ensuring consistent structural performance
                      across varying usage patterns.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">EASE Solution</h4>
                    <p className="leading-relaxed text-muted">
                      Implemented comprehensive post-tensioning systems throughout the multi-use
                      structure, enabling flexible floor plans and optimized load distribution. Our
                      team coordinated complex mechanical and structural integration while
                      maintaining cost-effective construction timelines.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-secondary">Key Outcomes</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>33,520 m² of premium mixed-use space</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Achieved optimal space utilization efficiency</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Integrated multiple usage types seamlessly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary"></span>
                        <span>Delivered phased construction ahead of schedule</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative h-96 w-full overflow-hidden bg-neutral">
                  <Image
                    src="/projects/fedengua.png"
                    alt="Fedengua Phase 1 - EASE mixed-use development showcasing integrated post-tensioning construction solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
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
              Filter our projects by category to explore specific types of construction and
              engineering solutions.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {getCategories().map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
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
                        <h3 className="text-lg font-bold text-secondary">{project.name}</h3>
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.year}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-muted">
                        {project.area && (
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-primary" />
                            <span>{project.area.toLocaleString()} m²</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <span>{categoryDisplayNames[project.category] || project.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Card without image
                  <div className="card transition-all duration-300 hover:shadow-lg">
                    <div className="card-body space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-bold text-secondary">{project.name}</h3>
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.year}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-muted">
                        {project.area && (
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-primary" />
                            <span>{project.area.toLocaleString()} m²</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <span>{categoryDisplayNames[project.category] || project.category}</span>
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
              <h3 className="mb-2 text-xl font-bold text-secondary">No projects found</h3>
              <p className="text-muted">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
