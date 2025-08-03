"use client"

import {
  Building,
  CheckCircle,
  Flag,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  side: "left" | "right"
}

interface LegacyTimelineProps {
  title?: string
  subtitle?: string
  showCTA?: boolean
  ctaText?: string
  ctaLink?: string
  variant?: "default" | "compact"
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2015",
    title: "Foundation & Vision",
    description:
      "EASE was established with a clear mission to solve Ethiopia's most complex structural engineering challenges through innovative post-tensioning solutions and precision construction methodologies.",
    icon: Flag,
    side: "left",
  },
  {
    year: "2016-2017",
    title: "First Major Breakthroughs",
    description:
      "Successfully delivered our inaugural post-tensioning projects, solving critical structural challenges and establishing our reputation for innovative problem-solving in Ethiopia's construction industry.",
    icon: Building,
    side: "right",
  },
  {
    year: "2018-2019",
    title: "Strategic Partnership Development",
    description:
      "Forged strategic partnership with Rudloff StrongForce International, bringing 60+ years of global expertise to Ethiopia and enhancing our technical capabilities with EOTA-certified solutions.",
    icon: Users,
    side: "left",
  },
  {
    year: "2020-2021",
    title: "Rapid Growth & Innovation",
    description:
      "Expanded our service portfolio and geographical reach, developing innovative solutions for complex infrastructure challenges while maintaining our commitment to precision and quality.",
    icon: TrendingUp,
    side: "right",
  },
  {
    year: "2022-2023",
    title: "Insurance Leadership Achievement",
    description:
      "Became Ethiopia's first and only insurance-backed construction company with $15.5M in comprehensive coverage, solving the critical problem of project security and client confidence.",
    icon: Shield,
    side: "left",
  },
  {
    year: "2024-Present",
    title: "Engineering Excellence Milestones",
    description:
      "Achieved remarkable milestones: 80+ completed projects, 800,000+ square meters of structural solutions, and multi-country operations, establishing EASE as East Africa's premier engineering solutions provider.",
    icon: CheckCircle,
    side: "right",
  },
]

export default function LegacyTimeline({
  title = "Legacy Timeline",
  subtitle = "Discover the evolution of EASE's capabilities and achievements since our founding, showcasing our commitment to solving complex engineering challenges across East Africa.",
  showCTA = true,
  ctaText = "Learn More About Our Journey",
  ctaLink = "/about",
  variant = "default",
}: LegacyTimelineProps) {
  const isCompact = variant === "compact"
  const sectionPadding = isCompact ? "py-12 md:py-16" : "section"

  return (
    <section className={`${sectionPadding} bg-white`}>
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h2 className={`mb-6 text-4xl font-black text-secondary ${isCompact ? "md:text-4xl" : "md:text-5xl"}`}>
            {title}
          </h2>
          <p className={`mx-auto max-w-3xl leading-relaxed text-muted ${isCompact ? "text-lg" : "text-xl"}`}>
            {subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-0.5 transform bg-secondary/20 lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row lg:items-center group"
              >
                {event.side === "left" ? (
                  <>
                    <div className="lg:w-1/2 lg:pr-12">
                      <div className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-3 top-1 hidden h-6 w-6 lg:left-auto lg:right-[-3.25rem] lg:block">
                          <div className="flex h-6 w-6 items-center justify-center bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                            <event.icon size={12} className="text-white" />
                          </div>
                        </div>

                        <div className="bg-neutral p-8 transition-all duration-300 group-hover:bg-neutral-dark group-hover:shadow-lg lg:text-right">
                          <div className="mb-4 flex items-center gap-3 lg:justify-end">
                            <div className="flex h-12 w-12 items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 lg:hidden">
                              <event.icon size={24} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary transition-colors duration-300 group-hover:text-primary">
                              {event.year}
                            </h3>
                          </div>
                          <h4 className="mb-3 text-xl font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                            {event.title}
                          </h4>
                          <p className="leading-relaxed text-muted">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block lg:w-1/2"></div>
                    <div className="lg:w-1/2 lg:pl-12">
                      <div className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-3 top-1 hidden h-6 w-6 lg:left-[-3.25rem] lg:block">
                          <div className="flex h-6 w-6 items-center justify-center bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                            <event.icon size={12} className="text-white" />
                          </div>
                        </div>

                        <div className="bg-neutral p-8 transition-all duration-300 group-hover:bg-neutral-dark group-hover:shadow-lg">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 lg:hidden">
                              <event.icon size={24} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary transition-colors duration-300 group-hover:text-primary">
                              {event.year}
                            </h3>
                          </div>
                          <h4 className="mb-3 text-xl font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                            {event.title}
                          </h4>
                          <p className="leading-relaxed text-muted">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {showCTA && (
          <div className="mt-16 text-center">
            <Link href={ctaLink} className="btn btn-primary btn-lg btn-pulse">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}