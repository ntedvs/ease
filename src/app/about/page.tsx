import AnimatedNumber from "@/components/AnimatedNumber"
import {
  Award,
  Building,
  Calendar,
  Download,
  Eye,
  Flag,
  Leaf,
  Lightbulb,
  MapPin,
  Shield,
  Target,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EASE - East Africa Specialized Engineering. Ethiopia's only insurance-backed construction company with $15M coverage. Discover our trusted expertise in innovative construction solutions.",
}

export default function About() {
  const coreValues = [
    {
      icon: Leaf,
      title: "Environmental Accountability",
      description:
        "We prioritize sustainable practices and environmental stewardship in all our projects, ensuring a greener future for Ethiopia.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in every aspect of our work, delivering superior quality and exceeding expectations consistently.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative problem-solving approaches to pioneer new solutions in construction and engineering.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership, working closely with clients, communities, and stakeholders to achieve shared success.",
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
              About <span className="text-primary">EASE</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Building icons that inspire future generations through innovative
              post-tensioning construction solutions and advanced structural
              engineering across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-secondary md:text-5xl">
                  Company Overview
                </h2>
                <p className="text-lg leading-relaxed text-foreground">
                  EASE (East Africa Specialized Engineering) was born from a
                  vision to transform Ethiopia&apos;s construction landscape by
                  introducing advanced post-tensioning technology to the region.
                  Our founders recognized the need for innovative structural
                  solutions that could meet the growing demands of
                  Ethiopia&apos;s rapidly developing infrastructure.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Since our establishment in 2015, our journey has been one of
                  continuous growth and learning. Starting with a small team of
                  dedicated engineers, we have grown into a trusted name in
                  Ethiopian construction, building relationships with clients
                  who have become partners in our mission to create lasting
                  landmarks for future generations.
                </p>
              </div>
            </div>

            {/* Right Side - Company Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/construction.jpg"
                  alt="EASE construction site showcasing professional team implementing advanced post-tensioning technology and precision engineering methodologies in Ethiopia"
                  width={400}
                  height={400}
                  // fill
                  className="object-cover"
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Who We Are
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-muted">
              We are a team of dedicated professionals driven by a shared vision
              to transform Ethiopia&apos;s construction landscape through
              innovation, expertise, and unwavering commitment to quality.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Expertise Card */}
              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Building size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Technical Expertise
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Specialized knowledge in post-tensioning technology and
                    advanced structural engineering solutions.
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Calendar size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Proven Experience
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Over a decade of successful project delivery across diverse
                    construction sectors and challenging environments.
                  </p>
                </div>
              </div>

              {/* Coverage Card */}
              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <MapPin size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Regional Coverage
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Comprehensive service delivery across Ethiopia and expanding
                    operations throughout East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Our Promise
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-muted">
              We commit to delivering exceptional construction solutions that
              exceed expectations while maintaining the highest standards of
              quality, safety, and environmental responsibility.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Quality Promise */}
              <div className="rounded-xl bg-secondary p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Quality Excellence
                </h3>
                <p className="text-neutral">
                  Every project we undertake reflects our unwavering commitment
                  to superior craftsmanship, innovative solutions, and attention
                  to detail that sets new industry standards.
                </p>
              </div>

              {/* Partnership Promise */}
              <div className="rounded-xl bg-primary p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  True Partnership
                </h3>
                <p className="text-white/90">
                  We work alongside our clients as trusted partners, providing
                  transparent communication, reliable timelines, and
                  collaborative solutions tailored to unique project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield size={32} className="text-primary" />
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Trust & Reliability
            </h2>

            <p className="mb-12 text-xl leading-relaxed text-muted">
              EASE stands as Ethiopia&apos;s only insurance-backed construction
              company, demonstrating our unwavering commitment to quality,
              accountability, and client protection through comprehensive
              coverage.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-4 text-center">
                  <AnimatedNumber
                    value={10}
                    prefix="$"
                    suffix="M"
                    className="text-4xl font-black text-primary"
                  />
                  <h3 className="text-xl font-bold text-secondary">
                    Product Liability Coverage
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Comprehensive protection covering all construction
                    materials, workmanship, and structural integrity for
                    complete peace of mind.
                  </p>
                </div>
              </div>

              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-4 text-center">
                  <AnimatedNumber
                    value={5}
                    prefix="$"
                    suffix="M"
                    className="text-4xl font-black text-primary"
                  />
                  <h3 className="text-xl font-bold text-secondary">
                    Professional Liability Coverage
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Full coverage for engineering design, technical services,
                    and professional expertise ensuring project success and
                    client confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-primary/5 p-8">
              <h4 className="mb-4 text-xl font-bold text-secondary">
                What This Means for You
              </h4>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">
                    Risk Protection
                  </div>
                  <p className="text-sm text-muted">
                    Your investment is safeguarded against unforeseen
                    circumstances
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">
                    Quality Assurance
                  </div>
                  <p className="text-sm text-muted">
                    Insurance backing validates our commitment to excellence
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">
                    Peace of Mind
                  </div>
                  <p className="text-sm text-muted">
                    Complete confidence in project delivery and outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Our Experience
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              A decade of transformative projects and strategic partnerships
              that have shaped Ethiopia&apos;s construction landscape and
              established our reputation for excellence.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mx-auto max-w-4xl space-y-8">
            {/* 2015 - Foundation */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                  2015
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-secondary">
                  Company Foundation
                </h3>
                <p className="leading-relaxed text-muted">
                  EASE was established with a vision to introduce advanced
                  post-tensioning technology to Ethiopia&apos;s construction
                  industry, bringing international expertise to local projects.
                </p>
              </div>
            </div>

            {/* 2018 - Expansion */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-bold text-white">
                  2018
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-secondary">
                  Strategic Partnership
                </h3>
                <p className="leading-relaxed text-muted">
                  Formed strategic alliance with Rudloff StrongForce
                  International, bringing over 60 years of specialized
                  post-tensioning expertise to Ethiopia.
                </p>
              </div>
            </div>

            {/* 2020 - Growth */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                  2020
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-secondary">
                  Nationwide Expansion
                </h3>
                <p className="leading-relaxed text-muted">
                  Extended operations beyond Addis Ababa, delivering projects
                  across multiple regions and establishing presence in rural
                  communities.
                </p>
              </div>
            </div>

            {/* 2024 - Present */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-bold text-white">
                  2024
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-secondary">
                  Industry Leadership
                </h3>
                <p className="leading-relaxed text-muted">
                  Recognized as Ethiopia&apos;s leading post-tensioning
                  specialist with over 80 completed projects and expanding
                  operations across East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Download Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Company Profile
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-muted">
              Download our comprehensive company profile to learn more about our
              capabilities, past projects, and technical expertise.
            </p>
            <Link
              href="/EASE Profile.pdf"
              target="_blank"
              className="btn btn-primary btn-lg inline-flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Company Profile</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Our Philosophy
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Our guiding principles shape every decision we make and every
              project we undertake, ensuring consistent delivery of exceptional
              value and lasting impact for our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Vision Card */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Eye size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary">Vision</h3>
                <p className="leading-relaxed text-muted">
                  To be East Africa&apos;s leading construction and engineering
                  company, recognized for innovation, quality, and sustainable
                  development that transforms communities and builds lasting
                  landmarks for future generations.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Target size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary">Mission</h3>
                <p className="leading-relaxed text-muted">
                  To deliver exceptional construction solutions through
                  innovative post-tensioning technology, expert craftsmanship,
                  and collaborative partnerships, creating value for our clients
                  while contributing to Ethiopia&apos;s infrastructure
                  development.
                </p>
              </div>
            </div>

            {/* Values Overview Card */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Flag size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary">Values</h3>
                <p className="leading-relaxed text-muted">
                  Environmental accountability, excellence, innovation, and
                  collaboration guide every aspect of our work, ensuring we
                  deliver superior results while maintaining the highest ethical
                  and professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              These fundamental principles guide every project we undertake and
              every relationship we build, ensuring that we deliver not just
              exceptional construction solutions, but lasting value to our
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="card group transition-all duration-300 hover:shadow-lg"
              >
                <div className="card-body space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <value.icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
