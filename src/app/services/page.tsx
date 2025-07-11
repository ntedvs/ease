import {
  Anchor,
  Building,
  Cog,
  Grid3X3,
  Hammer,
  Layers,
  PenTool,
  Settings,
  Shield,
  TrendingUp,
  Wrench,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive construction and engineering services by EASE. From post-tensioning and precast solutions to structural design and project management across Ethiopia.",
}

export default function ServicesPage() {
  const services = [
    {
      name: "Post-tensioning",
      icon: <Anchor size={40} className="text-primary" />,
      image: "/services/post.jpg",
      description:
        "Post-tensioning that solves your structural challenges—spanning longer distances with less material, accelerating project timelines, and reducing overall construction costs.",
      details: [
        "Flat slab and beam post-tensioning systems",
        "Ground anchor and soil nail installations",
        "Bridge and infrastructure post-tensioning",
        "Quality control and testing services",
      ],
    },
    {
      name: "Pre-cast Solutions",
      icon: <Building size={40} className="text-primary" />,
      image: "/services/pre-cast.jpg",
      description:
        "Complete precast concrete solutions including design, manufacturing, and installation of precast elements for efficient and high-quality construction.",
      details: [
        "Precast concrete design and engineering",
        "Manufacturing quality control and testing",
        "Installation and erection services",
        "Custom precast element fabrication",
      ],
    },
    {
      name: "Repair and Strengthening",
      icon: <Shield size={40} className="text-primary" />,
      image: "/services/repair.webp",
      description:
        "Specialized structural repair and strengthening services to extend the life of existing buildings and infrastructure through proven methodologies.",
      details: [
        "Concrete repair and rehabilitation",
        "Carbon fiber and steel plate strengthening",
        "Foundation underpinning and stabilization",
        "Seismic retrofitting and upgrades",
      ],
    },
    {
      name: "Structural Bearings",
      icon: <Layers size={40} className="text-primary" />,
      image: "/services/structural.png",
      description:
        "High-quality structural bearing solutions for bridges and buildings, ensuring proper load transfer and accommodating structural movements.",
      details: [
        "Elastomeric and steel bearings",
        "Seismic isolation systems",
        "Bearing inspection and replacement",
        "Custom bearing design and manufacturing",
      ],
    },
    {
      name: "Heavy Lifting",
      icon: <TrendingUp size={40} className="text-primary" />,
      image: "/services/heavy.webp",
      description:
        "Specialized heavy lifting and jacking services for construction, renovation, and structural modification projects requiring precise load management.",
      details: [
        "Hydraulic jacking and lifting systems",
        "Load transfer and temporary support",
        "Building raising and relocation",
        "Equipment installation and positioning",
      ],
    },
    {
      name: "Design",
      icon: <PenTool size={40} className="text-primary" />,
      image: "/services/design.jpg",
      description:
        "Comprehensive structural design services combining innovative engineering solutions with practical construction considerations for optimal results.",
      details: [
        "Structural analysis and design",
        "Post-tensioning system design",
        "Construction drawing preparation",
        "Code compliance and permit support",
      ],
    },
    {
      name: "Vertical Post-tensioning",
      icon: <Cog size={40} className="text-primary" />,
      image: "/services/vertical.webp",
      description:
        "Specialized vertical post-tensioning systems for high-rise buildings and towers, providing enhanced structural performance and construction efficiency.",
      details: [
        "High-rise building core walls",
        "Precast concrete connections",
        "Tower and chimney construction",
        "Vertical prestressing systems",
      ],
    },
    {
      name: "Geotechnical Solutions",
      icon: <Hammer size={40} className="text-primary" />,
      image: "/services/geotechnical.jpg",
      description:
        "Complete geotechnical engineering services including soil investigation, foundation design, and ground improvement solutions for challenging sites.",
      details: [
        "Soil investigation and testing",
        "Foundation design and analysis",
        "Ground improvement techniques",
        "Slope stability and retaining structures",
      ],
    },
    {
      name: "Engineering Project Management",
      icon: <Settings size={40} className="text-primary" />,
      image: "/services/engineering.jpg",
      description:
        "Professional project management services ensuring successful delivery of complex engineering projects on time, within budget, and to specification.",
      details: [
        "Project planning and scheduling",
        "Quality assurance and control",
        "Risk management and mitigation",
        "Stakeholder coordination and communication",
      ],
    },
    {
      name: "Consultancy",
      icon: <Wrench size={40} className="text-primary" />,
      image: "/services/consultancy.png",
      description:
        "Expert engineering consultancy services providing technical guidance, project advisory, and specialized expertise for complex construction challenges.",
      details: [
        "Technical consulting and advisory services",
        "Project feasibility and risk assessment",
        "Code interpretation and compliance guidance",
        "Expert witness and technical dispute resolution",
      ],
    },
    {
      name: "Surface Jointless Flooring",
      icon: <Grid3X3 size={40} className="text-primary" />,
      image: "/services/jointless.png",
      description:
        "Advanced jointless flooring systems providing seamless, durable surfaces for industrial, commercial, and specialized applications requiring high performance.",
      details: [
        "Industrial grade jointless floor systems",
        "Chemical resistant and anti-static options",
        "Surface preparation and installation",
        "Maintenance and repair services",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-secondary">
        <div className="container-xl">
          <div className="text-center text-white">
            <h1 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral">
              EASE provides comprehensive construction and engineering services,
              combining decades of expertise with innovative solutions to
              deliver exceptional results across diverse project types and
              scales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`space-y-6 px-12 py-8 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-secondary">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-lg leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`px-12 py-8 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral/50 transition-all duration-300 group-hover:shadow-md">
                      <Image
                        src={service.image}
                        alt={`${service.name} service illustration`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-muted">
              Let&apos;s discuss how EASE can bring your construction vision to
              life with our comprehensive engineering solutions and decades of
              proven expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request Free Consultation
              </Link>
              <Link href="/projects" className="btn btn-secondary btn-lg">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
