import AnimatedNumber from "@/components/AnimatedNumber"
import DownloadableResources from "@/components/DownloadableResources"
import FAQSection from "@/components/FAQSection"
import ProcessStepsDropdown from "@/components/ProcessStepsDropdown"
import SlabThicknessCalculator from "@/components/SlabThicknessCalculator"
import { Building2, DollarSign, Leaf, Maximize2, Shield, Timer, TreePine } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Post-Tensioning Solutions",
  description:
    "Advanced post-tensioning solutions by EASE, Ethiopia's only insurance-backed construction company. Comprehensive $15M coverage for all post-tensioning projects with proven expertise across East Africa.",
  keywords: [
    "post-tensioning",
    "concrete construction",
    "structural engineering",
    "Ethiopia",
    "construction technology",
    "building innovation",
    "prestressed concrete",
    "insurance-backed construction",
    "insured post-tensioning",
    "reliable construction",
  ],
}

export default function PostTensioning() {
  const allAdvantages = [
    {
      icon: Maximize2,
      title: "Longer Spans",
      description:
        "Achieve spans up to 35m, enabling open floor plans without intermediate columns.",
      category: "Structural",
    },
    {
      icon: Building2,
      title: "Thinner Slabs",
      description:
        "Reduce slab thickness by 20-30%, allowing for additional floors within the same building height.",
      category: "Structural",
    },
    {
      icon: DollarSign,
      title: "Material Cost Savings",
      description:
        "Reduce concrete usage by up to 30% and steel reinforcement by up to 70% compared to traditional construction.",
      category: "Economic",
    },
    {
      icon: Timer,
      title: "Faster Construction",
      description:
        "Accelerated construction schedules with reduced construction time by up to 50%.",
      category: "Economic",
    },
    {
      icon: TreePine,
      title: "Lower Carbon Footprint",
      description:
        "Reduce concrete consumption by up to 30%, significantly decreasing CO2 emissions.",
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
              Discover why post-tensioning technology delivers superior performance, economic
              benefits, and sustainability over traditional concrete construction.
            </p>
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
              Discover the comprehensive benefits of post-tensioning technology across structural
              performance, economics, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allAdvantages.map((advantage, index) => (
              <div key={index} className="card group transition-all duration-300 hover:shadow-lg">
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
                  <h3 className="text-lg font-bold text-secondary">{advantage.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary p-8 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">Key Performance Metrics</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">35</div>
                  <p className="text-sm text-white/90">Meters Spans</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">70%</div>
                  <p className="text-sm text-white/90">Less Steel</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-black text-white">30%</div>
                  <p className="text-sm text-white/90">Thinner Slabs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Tensioning Process Section */}
      <ProcessStepsDropdown />

      {/* Downloadable Resources Section */}
      <DownloadableResources />

      {/* Slab Thickness Calculator Section */}
      <SlabThicknessCalculator />

      {/* Professional Assurance Section */}
      <section className="section bg-secondary">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Shield size={32} className="text-primary" />
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Fully Insured Post-Tensioning Projects
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-neutral">
              As Ethiopia&apos;s only insurance-backed construction company, EASE provides
              comprehensive coverage for all post-tensioning projects, ensuring complete protection
              and peace of mind.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-primary/10 p-6">
                <AnimatedNumber
                  value={10}
                  prefix="$"
                  suffix=" Million"
                  className="mb-3 text-3xl font-black text-primary"
                />
                <h3 className="mb-2 text-lg font-bold text-white">Product Liability</h3>
                <p className="text-sm text-neutral">
                  Full coverage for post-tensioning materials and installation quality
                </p>
              </div>

              <div className="bg-primary/10 p-6">
                <AnimatedNumber
                  value={5.5}
                  prefix="$"
                  suffix=" Million"
                  className="mb-3 text-3xl font-black text-primary"
                />
                <h3 className="mb-2 text-lg font-bold text-white">Professional Liability</h3>
                <p className="text-sm text-neutral">
                  Complete protection for engineering design and technical services
                </p>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 p-4">
              <p className="text-white">
                <strong>Risk-Free Post-Tensioning:</strong> Our comprehensive insurance coverage
                eliminates project risks, ensuring your investment is protected throughout the
                entire construction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action Section */}
      <section className="section bg-primary">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Let&apos;s Discuss Your Post-Tensioning Needs
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Whether you&apos;re facing spanning challenges or seeking construction efficiencies,
              we&apos;ll evaluate how post-tensioning can work for your specific project.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn btn-secondary btn-lg w-full sm:w-auto">
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
