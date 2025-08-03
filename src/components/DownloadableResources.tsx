"use client"

import { Download, FileText, Users, Shield, Wrench, Book } from "lucide-react"

interface DownloadItem {
  title: string
  description: string
  fileSize: string
  icon: React.ReactNode
  href: string
}

export default function DownloadableResources() {
  const downloadItems: DownloadItem[] = [
    {
      title: "Company Profile",
      description: "Comprehensive overview of EASE's capabilities and problem-solving approach",
      fileSize: "2.4 MB",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/downloads/ease-company-profile.pdf",
    },
    {
      title: "Project Portfolio",
      description: "Detailed case studies showcasing our engineering solutions across 75+ projects",
      fileSize: "8.7 MB",
      icon: <FileText className="h-8 w-8 text-primary" />,
      href: "/downloads/ease-project-portfolio.pdf",
    },
    {
      title: "Post-Tensioning Guidelines",
      description: "Technical resource addressing common structural challenges and solutions",
      fileSize: "1.9 MB",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      href: "/downloads/post-tensioning-guidelines.pdf",
    },
    {
      title: "Safety Standards Manual",
      description: "Comprehensive safety protocols solving workplace hazard challenges",
      fileSize: "3.2 MB",
      icon: <Shield className="h-8 w-8 text-primary" />,
      href: "/downloads/safety-standards-manual.pdf",
    },
    {
      title: "Technical Specifications",
      description: "Engineering standards and specifications for problem-free project execution",
      fileSize: "1.7 MB",
      icon: <Book className="h-8 w-8 text-primary" />,
      href: "/downloads/technical-specifications.pdf",
    },
  ]

  return (
    <section className="section bg-neutral/20">
      <div className="container-xl">
        <div className="text-center">
          <h2 className="mb-6">Downloadable Resources</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted">
            Access our comprehensive library of technical resources, guidelines, and documentation designed to solve your construction and engineering challenges.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {downloadItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              download
              className="group card card-body hover-lift hover-shadow transition-all duration-200 hover:border-primary"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">
                      {item.fileSize}
                    </span>
                    <div className="flex items-center space-x-1 text-primary">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">Download</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="border border-border bg-white p-8">
            <h3 className="text-xl font-semibold text-secondary">
              Need Custom Solutions?
            </h3>
            <p className="mt-2 text-muted">
              Our team can develop tailored technical documentation and resources to solve your specific engineering challenges.
            </p>
            <a
              href="/contact"
              className="btn btn-primary mt-4 hover-scale"
            >
              Get Custom Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}