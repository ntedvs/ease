"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is post-tensioning more complex than traditional reinforcement?",
      answer:
        "Post-tensioning is a well-established technology we've mastered over 80+ projects. Our certified technicians execute each installation with precision, backed by international standards. The process follows proven methodologies that we've adapted specifically for Ethiopian conditions.",
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

  return (
    <section className="section bg-neutral">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
            Get answers to common technical concerns and myths about post-tensioning technology from
            our engineering experts.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden transition-all duration-300">
              <button
                className="card-body flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-neutral/50"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="pr-4 text-lg font-semibold text-secondary">{faq.question}</h3>
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
                <div className="border-t border-border px-6 pt-4 pb-6">
                  <p className="leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
