import AnimatedNumber from "@/components/AnimatedNumber"
import FadeIn from "@/components/FadeIn"
import LegacyTimeline from "@/components/LegacyTimeline"
import {
  Award,
  Building,
  Building2,
  Calendar,
  Eye,
  Flag,
  Globe,
  Layers,
  Leaf,
  Lightbulb,
  MapPin,
  Shield,
  Target,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

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
        "We embrace cutting-edge technologies and innovative problem-solving methodologies to pioneer breakthrough solutions for complex construction and engineering challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in collaborative problem-solving, working closely with clients, communities, and stakeholders to tackle challenges together and achieve shared success.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/projects/refenti.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              About <span className="text-primary">EASE</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Solving construction challenges to build icons that inspire future generations through
              innovative post-tensioning solutions and advanced problem-solving engineering
              methodologies across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-secondary md:text-5xl">
                    Company Overview
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    EASE started with a clear mission: solve Ethiopia&apos;s construction challenges
                    by bringing proven post-tensioning technology to the growing sector. Our
                    founders identified critical problems—limitations in spanning distances,
                    material inefficiencies, and the need to adapt international standards to
                    address local conditions.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Since our establishment in 2015, our journey has been one of continuous
                    problem-solving innovation and learning. Starting with a small team of dedicated
                    engineers, we have grown into a trusted solution provider in Ethiopian
                    construction, building collaborative partnerships with clients who share our
                    mission to overcome challenges and create lasting landmarks for future
                    generations.
                  </p>
                </div>
              </div>

              {/* Right Side - Company Image */}
              <div className="relative hidden lg:block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/construction.jpg"
                    alt="EASE construction site showcasing professional team implementing advanced post-tensioning technology and precision engineering methodologies in Ethiopia"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company Heritage Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Our Heritage</h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
                Building on four decades of structural excellence, we&apos;ve evolved our
                problem-solving approach to meet modern East Africa&apos;s infrastructure needs.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Side - Heritage Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary">
                    From PACE to Regional Leadership
                  </h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Our foundation rests on the remarkable legacy of PACE (Pan Africa Construction
                    Engineers), Ethiopia&apos;s former structural powerhouse with over four decades
                    of proven expertise. This rich heritage provides the deep understanding of local
                    conditions and challenges that shapes our innovative solutions today.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    As part of the ASE (Africa Specialized Engineering) network headquartered in
                    Dubai, we combine this invaluable local knowledge with international best
                    practices, creating a unique capability to solve complex structural challenges
                    across East Africa.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Legacy Experience */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Building size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">40+</div>
                    <div className="text-sm font-medium text-secondary">Years</div>
                    <div className="text-xs text-muted">Legacy Experience</div>
                  </div>

                  {/* Regional Network */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Globe size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">ASE</div>
                    <div className="text-sm font-medium text-secondary">Network</div>
                    <div className="text-xs text-muted">Regional Expertise</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Bridge Recovery Showcase */}
              <div className="space-y-6">
                <div className="card overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/omo.png"
                      alt="Omo River Bridge Recovery - EASE's defining project showcasing engineering precision under extreme pressure and our commitment to nationally critical infrastructure"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="card-body space-y-4">
                    <h3 className="text-xl font-bold text-secondary">Omo River Bridge Recovery</h3>
                    <p className="leading-relaxed text-muted">
                      One of our most defining moments—a bold, nationally critical intervention that
                      demanded engineering precision under extreme pressure. The restored bridge
                      stands as both a physical landmark and a lasting symbol of our problem-solving
                      approach.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="text-muted">Southern Ethiopia</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield size={16} className="text-primary" />
                        <span className="text-muted">Critical Infrastructure</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6">
                  <h4 className="mb-3 text-lg font-bold text-secondary">
                    What This Heritage Means Today
                  </h4>
                  <ul className="space-y-2 text-sm text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Deep understanding of local structural challenges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Proven problem-solving methodologies tested over decades</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>International network bringing global expertise locally</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Legacy of reliability in the most challenging conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Strategic Partnership with RSF Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Strategic Partnership with RSF
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Our partnership with Rudloff StrongForce International brings unparalleled technical
              credibility and global expertise to every EASE project, ensuring world-class standards
              and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Partnership Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary">
                  Technical Credibility Through Partnership
                </h3>
                <p className="text-lg leading-relaxed text-foreground">
                  This strategic alliance provides EASE with direct access to RSF&apos;s extensive
                  research and development capabilities, proven methodologies, and innovative
                  solutions that have been successfully implemented across diverse global markets
                  and challenging construction environments.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary">
                  Materials & Equipment Supply Partnership
                </h3>
                <p className="text-lg leading-relaxed text-foreground">
                  RSF serves as our primary supplier of specialized materials and cutting-edge
                  equipment, ensuring that every EASE project benefits from the highest quality
                  post-tensioning systems and innovative construction technologies available in the
                  global market.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Global Experience */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Globe size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">7</div>
                    <div className="text-sm font-medium text-secondary">Continents</div>
                    <div className="text-xs text-muted">Global Experience</div>
                  </div>

                  {/* Years of Expertise */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Award size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">60+</div>
                    <div className="text-sm font-medium text-secondary">Years</div>
                    <div className="text-xs text-muted">Specialized Expertise</div>
                  </div>

                  {/* Major Projects */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Building2 size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">500+</div>
                    <div className="text-sm font-medium text-secondary">Projects</div>
                    <div className="text-xs text-muted">Worldwide</div>
                  </div>

                  {/* Concrete Slabs */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Layers size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary">38M</div>
                    <div className="text-sm font-medium text-secondary">Slabs of Concrete</div>
                    <div className="text-xs text-muted">Constructed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Atlantis Project Showcase */}
            <div className="space-y-6">
              <div className="card overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/rudloff/atlantis.jpg"
                    alt="Atlantis Hotel on the Palm - RSF's flagship project showcasing world-class post-tensioning expertise and innovative construction solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="card-body space-y-4">
                  <h3 className="text-xl font-bold text-secondary">Atlantis Hotel on the Palm</h3>
                  <p className="leading-relaxed text-muted">
                    One of RSF&apos;s most prestigious projects, the iconic Atlantis Hotel
                    demonstrates the technical excellence and innovative capabilities that our
                    partnership brings to every EASE construction project.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-primary" />
                      <span className="text-muted">Dubai, UAE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building size={16} className="text-primary" />
                      <span className="text-muted">Luxury Resort</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6">
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  What This Partnership Means for Ethiopia
                </h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start space-x-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Access to cutting-edge post-tensioning technology</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>International quality standards and methodologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Proven solutions tested on world&apos;s most challenging projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Enhanced technical credibility for local construction industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Who We Are</h2>
            <p className="mb-8 text-xl leading-relaxed text-muted">
              We are a team of dedicated professionals driven by a shared vision to transform
              Ethiopia&apos;s construction landscape through innovation, expertise, and unwavering
              commitment to quality.
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
                  <h3 className="text-xl font-bold text-secondary">Problem-Solving Expertise</h3>
                  <p className="leading-relaxed text-muted">
                    Specialized problem-solving methodologies in post-tensioning technology and
                    advanced structural engineering challenges.
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
                  <h3 className="text-xl font-bold text-secondary">Proven Experience</h3>
                  <p className="leading-relaxed text-muted">
                    Over a decade of successfully overcoming construction challenges and delivering
                    solutions across diverse sectors and demanding environments.
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
                  <h3 className="text-xl font-bold text-secondary">Regional Coverage</h3>
                  <p className="leading-relaxed text-muted">
                    Comprehensive service delivery across Ethiopia and expanding operations
                    throughout East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Our Promise</h2>
            <p className="mb-12 text-xl leading-relaxed text-muted">
              We deliver reliable construction solutions with consistent quality, safety practices,
              and environmental consideration built into every project.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Quality Promise */}
              <div className="bg-secondary p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold text-white">Quality Excellence</h3>
                <p className="text-neutral">
                  Every project we undertake reflects our unwavering commitment to superior
                  craftsmanship, innovative solutions, and attention to detail that sets new
                  industry standards.
                </p>
              </div>

              {/* Partnership Promise */}
              <div className="bg-primary p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold text-white">True Partnership</h3>
                <p className="text-white/90">
                  We work alongside our clients as trusted partners, providing transparent
                  communication, reliable timelines, and collaborative solutions tailored to unique
                  project needs.
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
              EASE stands as Ethiopia&apos;s only insurance-backed construction company,
              demonstrating our unwavering commitment to quality, accountability, and client
              protection through comprehensive coverage.
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
                  <h3 className="text-xl font-bold text-secondary">Product Liability Coverage</h3>
                  <p className="leading-relaxed text-muted">
                    Comprehensive protection covering all construction materials, workmanship, and
                    structural integrity for complete peace of mind.
                  </p>
                </div>
              </div>

              <div className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-4 text-center">
                  <AnimatedNumber
                    value={5.5}
                    prefix="$"
                    suffix="M"
                    className="text-4xl font-black text-primary"
                  />
                  <h3 className="text-xl font-bold text-secondary">
                    Professional Liability Coverage
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Full coverage for engineering design, technical services, and professional
                    expertise ensuring project success and client confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 p-8">
              <h4 className="mb-4 text-xl font-bold text-secondary">What This Means for You</h4>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">Risk Protection</div>
                  <p className="text-sm text-muted">
                    Your investment is safeguarded against unforeseen circumstances
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">Quality Assurance</div>
                  <p className="text-sm text-muted">
                    Insurance backing validates our commitment to excellence
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">Peace of Mind</div>
                  <p className="text-sm text-muted">
                    Complete confidence in project delivery and outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline Section */}
      <LegacyTimeline
        title="Our Legacy & Heritage"
        subtitle="A decade of transformative projects and strategic partnerships that have shaped Ethiopia's construction landscape, honoring our heritage while building towards the future."
        ctaText="View Our Complete Journey"
        ctaLink="/projects"
      />

      {/* Philosophy Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Our Philosophy</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Our guiding principles shape every decision we make and every project we undertake,
              ensuring consistent delivery of exceptional value and lasting impact for our
              communities.
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
                  To solve East Africa&apos;s most pressing infrastructure challenges through
                  innovative post-tensioning expertise—enabling developers to overcome limitations,
                  build higher, span farther, and complete projects faster while meeting
                  international standards.
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
                  To solve construction challenges through innovative post-tensioning technology,
                  expert problem-solving approaches, and collaborative partnerships, creating value
                  for our clients while addressing Ethiopia&apos;s infrastructure development needs.
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
                  Environmental accountability, excellence in problem-solving, innovative approaches
                  to challenges, and collaborative solutions guide every aspect of our work,
                  ensuring we deliver superior results while maintaining the highest ethical and
                  professional standards.
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
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">Our Core Values</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              These fundamental principles guide every project we undertake and every relationship
              we build, ensuring that we deliver not just exceptional construction solutions, but
              lasting value to our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <div key={index} className="card group transition-all duration-300 hover:shadow-lg">
                <div className="card-body space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <value.icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{value.title}</h3>
                  <p className="leading-relaxed text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
