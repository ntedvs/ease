"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ProcessStepsDropdown() {
  const [openStep, setOpenStep] = useState<number | null>(null)

  const processSteps = [
    {
      step: "Design & Planning",
      description:
        "Our expert engineers conduct comprehensive structural analysis, calculating optimal tendon layouts, load requirements, and anchorage details. This critical phase ensures the post-tensioning system meets all project specifications and building codes while maximizing structural efficiency.",
    },
    {
      step: "Concrete Placement",
      description:
        "High-quality concrete is carefully placed around the pre-installed duct system. Our team ensures proper concrete flow and consolidation around tendons, maintaining specified cover requirements and creating the foundation for the post-tensioning system.",
    },
    {
      step: "Tendon Installation",
      description:
        "Post-tensioning tendons (cables or strands) are precisely threaded through the duct system after concrete placement. Each tendon is positioned according to engineering drawings, with proper anchorage preparation at designated stress and dead-end locations.",
    },
    {
      step: "Concrete Curing",
      description:
        "Concrete is allowed to cure and gain the specified minimum strength before tensioning operations begin. This critical waiting period ensures the concrete can safely resist the applied post-tensioning forces without damage or excessive deformation.",
    },
    {
      step: "Tensioning Operation",
      description:
        "Using calibrated hydraulic jacks, tendons are stressed to predetermined force levels according to engineering specifications. Our certified technicians monitor elongation and pressure readings to ensure accurate stress application and proper system performance.",
    },
    {
      step: "Grouting & Finishing",
      description:
        "Finally, the duct system is filled with high-strength grout to bond the tendons to the concrete and provide corrosion protection. Anchorage points are properly finished, and detailed documentation of the completed post-tensioning system is provided to the client.",
    },
  ]

  return (
    <section className="section bg-neutral">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
            Post-Tensioning Process
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
            Our post-tensioning process follows international standards (EN 1992-1-1, ACI 318) 
            with specific adaptations for Ethiopian conditions. Here's exactly how we execute each phase:
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="card overflow-hidden transition-all duration-300">
            <button
              className="card-body flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-neutral/50"
              onClick={() => setOpenStep(openStep === 0 ? null : 0)}
            >
              <h3 className="text-lg font-semibold text-secondary">
                Our 6-Step Post-Tensioning Process
              </h3>
              <ChevronDown
                size={24}
                className={`flex-shrink-0 text-primary transition-transform duration-200 ${
                  openStep === 0 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openStep === 0 ? "max-h-none" : "max-h-0"
              }`}
            >
              <div className="border-t border-border p-6">
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-lg font-semibold text-secondary">
                          {step.step}
                        </h4>
                        <p className="mb-4 leading-relaxed text-muted">
                          {step.description}
                        </p>
                        <div className="aspect-video overflow-hidden rounded-lg bg-neutral-dark flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-lg font-semibold text-secondary mb-2">Coming Soon</p>
                            <p className="text-sm text-muted">Step-specific video demonstration</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}