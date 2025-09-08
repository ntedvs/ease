"use client"

import { Download, FileText, Users, Shield, Wrench, Book } from "lucide-react"

interface DownloadItem {
  title: string
  description: string
  fileSize: string
  icon: React.ReactNode
  href: string
  available: boolean
}

export default function DownloadableResources() {
  const downloadItems: DownloadItem[] = [
    {
      title: "Company Profile",
      description: "Comprehensive overview of EASE's capabilities and problem-solving approach",
      fileSize: "6.3 MB",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/EaseProfile.pdf",
      available: true,
    },
    {
      title: "Project Portfolio",
      description: "Detailed case studies showcasing our engineering solutions across 75+ projects",
      fileSize: "TBD",
      icon: <FileText className="h-8 w-8 text-primary" />,
      href: "/downloads/ease-project-portfolio.pdf",
      available: false,
    },
    {
      title: "Post-Tensioning Guidelines",
      description: "Technical resource addressing common structural challenges and solutions",
      fileSize: "5.9 MB",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      href: "/RSFBooklet.pdf",
      available: true,
    },
    {
      title: "Safety Standards Manual",
      description: "Comprehensive safety protocols solving workplace hazard challenges",
      fileSize: "TBD",
      icon: <Shield className="h-8 w-8 text-primary" />,
      href: "/downloads/safety-standards-manual.pdf",
      available: false,
    },
    {
      title: "Technical Specifications",
      description: "Engineering standards and specifications for problem-free project execution",
      fileSize: "TBD",
      icon: <Book className="h-8 w-8 text-primary" />,
      href: "/downloads/technical-specifications.pdf",
      available: false,
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
          {downloadItems.map((item, index) => {
            const Component = item.available ? 'a' : 'div'
            const baseClasses = "card card-body transition-all duration-200"
            const availableClasses = "group hover-lift hover-shadow hover:border-primary cursor-pointer"
            const disabledClasses = "opacity-50 cursor-not-allowed bg-neutral/50"
            
            return (
              <Component
                key={index}
                {...(item.available ? { href: item.href, download: true } : {})}
                className={`${baseClasses} ${item.available ? availableClasses : disabledClasses}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center transition-colors duration-200 ${
                    item.available 
                      ? "bg-primary/10 group-hover:bg-primary/20" 
                      : "bg-neutral/30"
                  }`}>
                    {item.available ? item.icon : <div className="opacity-50">{item.icon}</div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold transition-colors duration-200 ${
                      item.available 
                        ? "text-secondary group-hover:text-primary" 
                        : "text-muted"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`text-xs font-medium ${
                        item.available ? "text-primary" : "text-muted"
                      }`}>
                        {item.fileSize}
                      </span>
                      <div className={`flex items-center space-x-1 ${
                        item.available ? "text-primary" : "text-muted"
                      }`}>
                        <Download className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {item.available ? "Download" : "Coming Soon"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Component>
            )
          })}
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