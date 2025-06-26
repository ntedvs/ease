"use client"

import {
  Building2,
  ChevronDown,
  DollarSign,
  Download,
  FileText,
  Leaf,
  Maximize2,
  Timer,
  TreePine,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Declare YouTube API types
declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLElement,
        config: {
          height: string
          width: string
          videoId: string
          playerVars: Record<string, unknown>
          events: Record<string, (event: { data: number }) => void>
        }
      ) => YTPlayerInstance
      PlayerState: {
        ENDED: number
      }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayerInstance {
  seekTo: (seconds: number) => void
  playVideo: () => void
  destroy: () => void
}

export default function PostTensioning() {
  const playerRef = useRef<YTPlayerInstance | null>(null)
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const allAdvantages = [
    {
      icon: Maximize2,
      title: "Longer Spans",
      description:
        "Achieve spans up to 30% longer than traditional concrete, enabling open floor plans without intermediate columns.",
      category: "Structural",
    },
    {
      icon: Building2,
      title: "Thinner Slabs",
      description:
        "Reduce slab thickness by 20-25%, allowing for additional floors within the same building height.",
      category: "Structural",
    },
    {
      icon: DollarSign,
      title: "Material Cost Savings",
      description:
        "Reduce concrete usage by 15-20% and steel reinforcement by 35-50% compared to traditional construction.",
      category: "Economic",
    },
    {
      icon: Timer,
      title: "Faster Construction",
      description:
        "Accelerated construction schedules with reduced construction time by 15-30%.",
      category: "Economic",
    },
    {
      icon: TreePine,
      title: "Lower Carbon Footprint",
      description:
        "Reduce concrete consumption by up to 20%, significantly decreasing CO2 emissions.",
      category: "Sustainability",
    },
    {
      icon: Leaf,
      title: "Material Efficiency",
      description:
        "Optimal use of materials through precise engineering, minimizing waste and maximizing performance.",
      category: "Sustainability",
    },
  ]

  const faqs = [
    {
      question: "Is post-tensioning more complex than traditional reinforcement?",
      answer:
        "While post-tensioning requires specialized knowledge, EASE's experienced team makes the process seamless. The technology is well-established with proven systems and clear installation procedures that our certified technicians execute with precision.",
    },
    {
      question: "Are post-tensioned structures safe during earthquakes?",
      answer:
        "Yes, post-tensioned structures often perform better during seismic events. The continuous reinforcement and controlled compression create more resilient structures that can better withstand lateral forces compared to traditional reinforced concrete.",
    },
    {
      question: "Does post-tensioning cost more initially?",
      answer:
        "Initial material costs may be slightly higher, but post-tensioning delivers significant overall savings through reduced concrete volume, faster construction schedules, and the ability to build additional floors in the same height.",
    },
    {
      question: "How long do post-tensioned structures last?",
      answer:
        "Post-tensioned structures typically have a service life of 50+ years with minimal maintenance. The controlled compression reduces cracking and improves durability compared to traditional reinforced concrete.",
    },
    {
      question: "Is special expertise required for post-tensioning?",
      answer:
        "EASE provides comprehensive support including design services, installation supervision, and technical guidance. Our partnership with Rudloff StrongForce International ensures access to 60+ years of specialized expertise.",
    },
    {
      question: "Can post-tensioning be used in all building types?",
      answer:
        "Post-tensioning is suitable for most concrete structures including residential buildings, commercial complexes, parking structures, and infrastructure projects. EASE evaluates each project to optimize the post-tensioning solution.",
    },
  ]

  useEffect(() => {
    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT) {
        initializePlayer()
        return
      }

      const script = document.createElement("script")
      script.src = "https://www.youtube.com/iframe_api"
      script.async = true
      document.body.appendChild(script)

      window.onYouTubeIframeAPIReady = initializePlayer
    }

    const initializePlayer = () => {
      if (playerContainerRef.current && window.YT) {
        playerRef.current = new window.YT.Player(playerContainerRef.current, {
          height: "315",
          width: "560",
          videoId: "1MrQD2NamUE",
          playerVars: {
            autoplay: 0,
            controls: 1,
            start: 69,
            end: 194,
            rel: 0,
            modestbranding: 1,
          },
          events: {
            onStateChange: (event: { data: number }) => {
              // When video ends, seek back to start time to create loop effect
              if (event.data === window.YT.PlayerState.ENDED && playerRef.current) {
                playerRef.current.seekTo(69)
                playerRef.current.playVideo()
              }
            },
          },
        })
      }
    }

    loadYouTubeAPI()

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg relative flex min-h-[70vh] items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              Post-Tensioning <span className="text-primary">Advantages</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Discover why post-tensioning technology delivers superior
              performance, economic benefits, and sustainability over
              traditional concrete construction.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Post-Tensioning in Action
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Watch how post-tensioning technology works and see the precision
              engineering that makes superior structural performance possible.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-lg">
              <div
                ref={playerContainerRef}
                className="h-full w-full"
                style={{ minHeight: "315px" }}
              ></div>
              {/* Fallback iframe for users with JavaScript disabled */}
              <noscript>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/1MrQD2NamUE?start=69&end=194&loop=1&playlist=1MrQD2NamUE&rel=0&modestbranding=1"
                  title="Post-Tensioning Technology Demonstration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </noscript>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Advantages Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Post-Tensioning Advantages
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Discover the comprehensive benefits of post-tensioning technology
              across structural performance, economics, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="card group transition-all duration-300 hover:shadow-lg"
              >
                <div className="card-body space-y-4 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <advantage.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {advantage.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary">
                    {advantage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-primary p-8 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Key Performance Metrics
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">30%</div>
                  <p className="text-sm text-white/90">Longer Spans</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">50%</div>
                  <p className="text-sm text-white/90">Less Steel</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">25%</div>
                  <p className="text-sm text-white/90">Thinner Slabs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Get answers to common technical concerns and myths about
              post-tensioning technology from our engineering experts.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card overflow-hidden transition-all duration-300"
              >
                <button
                  className="card-body flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-neutral/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-secondary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <p className="leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Resources Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Technical Resources
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Access comprehensive technical documentation and engineering
              resources for post-tensioning design and implementation.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <Link
              href="#"
              className="btn btn-primary btn-lg inline-flex w-full items-center space-x-2 sm:w-auto"
            >
              <Download size={20} />
              <span>Post-tensioning Technical Systems Booklet</span>
            </Link>
            <Link
              href="#"
              className="btn btn-secondary btn-lg inline-flex w-full items-center space-x-2 sm:w-auto"
            >
              <FileText size={20} />
              <span>Engineering Note Series</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-primary">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Ready to Build with Post-Tensioning?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Experience the superior advantages of post-tensioning technology
              for your next construction project.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/contact"
                className="btn btn-secondary btn-lg w-full sm:w-auto"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/projects"
                className="btn btn-lg w-full border-2 border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-primary sm:w-auto"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}