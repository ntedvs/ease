import AnimatedNumber from "@/components/AnimatedNumber"
import CompanyMarquee from "@/components/CompanyMarquee"
import DownloadableResources from "@/components/DownloadableResources"
import ImageCarousel from "@/components/ImageCarousel"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import {
  Anchor,
  Building,
  Building2,
  Calculator,
  DollarSign,
  Lightbulb,
  MapPin,
  Maximize2,
  PenTool,
  Settings,
  Shield,
  TreePine,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  description:
    "EASE - East Africa Specialized Engineering. Ethiopia's insurance-backed construction company specializing in post-tensioning solutions and structural engineering for East Africa's infrastructure needs.",
}

export default function Home() {
  const carouselImages = [
    {
      src: "/rudloff/atlantis.jpg",
      alt: "Atlantis Project - EASE post-tensioning construction featuring modern high-rise building with advanced structural engineering solutions",
    },
    {
      src: "/rudloff/scotland.jpg",
      alt: "Motor Project - Industrial construction showcasing EASE's expertise in heavy-duty structural engineering and post-tensioning technology",
    },
    {
      src: "/rudloff/shiny.jpg",
      alt: "Paramount Project - Commercial building development demonstrating EASE's innovative construction methodologies and precision engineering",
    },
    {
      src: "/rudloff/twist.jpg",
      alt: "",
    },
    {
      src: "/rudloff/windmill.jpg",
      alt: "",
    },
  ]


  const trustedCompanyLogos = [
    {
      src: "/logos/1.png",
      alt: "Ethiopian Airlines - Leading aviation partner",
      name: "Ethiopian Airlines",
    },
    {
      src: "/logos/2.png",
      alt: "Commercial Bank of Ethiopia - Financial services partner",
      name: "Commercial Bank of Ethiopia",
    },
    {
      src: "/logos/3.png",
      alt: "Awash Bank - Banking sector partner",
      name: "Awash Bank",
    },
    {
      src: "/logos/4.png",
      alt: "Ethiopian Electric Power - Energy sector collaboration",
      name: "Ethiopian Electric Power",
    },
    {
      src: "/logos/5.png",
      alt: "Ethio Telecom - Telecommunications infrastructure partner",
      name: "Ethio Telecom",
    },
    {
      src: "/logos/6.png",
      alt: "Ethiopian Railways Corporation - Transportation infrastructure partner",
      name: "Ethiopian Railways Corporation",
    },
    {
      src: "/logos/7.png",
      alt: "Metals & Engineering Corporation - Industrial partner",
      name: "Metals & Engineering Corporation",
    },
    {
      src: "/logos/8.png",
      alt: "Ethiopian Road Authority - Infrastructure development partner",
      name: "Ethiopian Road Authority",
    },
    {
      src: "/logos/9.png",
      alt: "Government and municipal partnership",
      name: "Government Partnership",
    },
    {
      src: "/logos/RSF.png",
      alt: "Rudloff StrongForce International - Global technology partner",
      name: "Rudloff StrongForce International",
    },
  ]

  const testimonials = [
    {
      quote:
        "Throughout the scope of the PT works at the project, the EASE showcased remarkable ingenuity and forward-thinking in proposing and implementing an innovative post-tension slab solution to connect twin towers situated 70 meters above the ground level.",
      name: "Dr. Alemayehu Tekle",
      title: "Director of Infrastructure Development",
      company: "Ministry of Urban Development",
    },
    {
      quote:
        "They exemplified exceptional customer service by providing after sales support three years post-project completion.",
      name: "Sarah Mekonnen",
      title: "Property Developer",
      company: "Addis Properties Ltd.",
    },
    {
      quote:
        "Throughout the duration of their involvement, EASE consistently demonstrated a remarkable level of professionalism, diligence, and quality in their work.",
      name: "Birhanu Tiruneh",
      title: "City Planning Manager",
      company: "Addis Ababa City Administration",
    },
    {
      quote:
        "EASE has consistently delivered excellence and innovation, making them an invaluable partner for any construction project.",
      name: "Mr. Shaka Gurmesa",
      title: "Marketing Spea",
      company: "Golden Star",
    },
    {
      quote:
        "Their proactive approach, coupled with their willingness to take on additional responsibilities, played a pivotal role in overcoming challenges and achieving our project goals.",
      name: "Biruk Tesfaye",
      title: "Project Coordinator",
      company: "Ethiopian Railways Corporation",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg relative flex min-h-screen items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <div className="absolute inset-0 bg-white/60"></div> */}

        {/* Content */}
        <div className="container-xl relative z-10 mt-40 w-full">
          {/* <div className="grid min-h-[80vh] grid-cols-1 items-center gap-12 lg:grid-cols-2"> */}
          <div>
            {/* Left Side - Content */}
            <div className="space-y-2 text-white">
              <h1 className="text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
                <span className="">Engineering Solutions</span>
                {/* <br /> */} for Tomorrow
              </h1>

              <p className="text-xl leading-relaxed text-white">
                Solving East Africa&apos;s most complex construction challenges
                through innovative problem-solving expertise and advanced
                engineering solutions that transform structural performance
                across the region
              </p>

              <div className="my-6 flex gap-4">
                <div className="bg-white/20 p-3 pt-4 leading-none">
                  800,000+ meters of slab
                </div>
                <div className="bg-white/20 p-3 pt-4 leading-none">
                  80+ projects completed
                </div>
                <div className="bg-white/20 p-3 pt-4 leading-none">
                  3+ countries of operation
                </div>
                <div className="bg-white/20 p-3 pt-4 leading-none">
                  10+ years of leadership
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="btn btn-primary btn-lg inline-flex items-center space-x-2"
                >
                  <span>Discover Our Solution-Driven Approach</span>
                </Link>
              </div>
            </div>

            {/* Right Side - Statistics Grid */}
            {/* <AnimatedStats stats={statsData} /> */}
          </div>
        </div>
      </section>

      {/* Why Partner with EASE Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Why Choose Our Solution-Driven Approach?
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Partner with EASE for problem-solving expertise that addresses
              your most pressing construction challenges through innovative
              solutions, proven methodologies, and advanced technology that
              resolves complex structural issues across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: Free Cost Benefit Analysis */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Calculator size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Complimentary Project Analysis
                </h3>
                <p className="leading-relaxed text-muted">
                  Resolve budget uncertainties and financial challenges with
                  comprehensive project evaluations that provide clear
                  solutions. Our detailed cost-benefit analysis helps you
                  overcome financial obstacles and make informed decisions at no
                  charge.
                </p>
              </div>
            </div>

            {/* Card 2: Free Design Services */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <PenTool size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Complimentary Design Solutions
                </h3>
                <p className="leading-relaxed text-muted">
                  Solve design challenges through professional consultation and
                  innovative planning solutions provided at no cost. Our expert
                  team addresses both aesthetic and structural requirements,
                  ensuring your project overcomes design obstacles with optimal
                  results.
                </p>
              </div>
            </div>

            {/* Card 3: Nationwide Experience */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <MapPin size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Regional Problem-Solving Expertise
                </h3>
                <p className="leading-relaxed text-muted">
                  Address regional construction challenges with extensive
                  experience across multiple countries. Our proven
                  problem-solving methodologies combined with local knowledge
                  help overcome site-specific obstacles and deliver successful
                  outcomes for projects of any scale and complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Meet Our Team Button */}
          <div className="mt-12 text-center">
            <Link
              href="/EASE Profile.pdf"
              target="_blank"
              className="btn btn-primary btn-lg btn-pulse"
            >
              View Our Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Post-Tensioning Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              How Post-Tensioning Solves Your Challenges
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Post-tensioning technology addresses East Africa&apos;s most pressing
              construction challenges—from seismic concerns to rapid urban
              development demands. Our solutions overcome structural
              limitations, resolve material efficiency problems, and tackle
              Ethiopia&apos;s diverse climate and challenging soil conditions with
              proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Reduced Costs */}
            <div className="group bg-secondary p-8 text-center text-white transition-colors duration-300 hover:bg-secondary-light">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                  <DollarSign size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Cost Challenge Solutions
              </h3>
              <p className="text-sm leading-relaxed text-neutral">
                Overcome budget constraints with significant cost reductions
                through innovative material optimization and accelerated
                construction methods that solve financial pressures.
              </p>
            </div>

            {/* Card 2: Increased Span */}
            <div className="group bg-secondary p-8 text-center text-white transition-colors duration-300 hover:bg-secondary-light">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                  <Maximize2 size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Space Limitation Solutions
              </h3>
              <p className="text-sm leading-relaxed text-neutral">
                Solve spatial constraints with longer spans and fewer columns,
                delivering flexible design solutions that overcome traditional
                structural limitations for innovative open layouts.
              </p>
            </div>

            {/* Card 3: More Floors */}
            <div className="group bg-secondary p-8 text-center text-white transition-colors duration-300 hover:bg-secondary-light">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                  <Building2 size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Height Restriction Solutions
              </h3>
              <p className="text-sm leading-relaxed text-neutral">
                Address height limitations through thinner slab technology that
                enables additional floors within existing building envelopes,
                solving space maximization challenges effectively.
              </p>
            </div>

            {/* Card 4: Faster Construction */}
            <div className="group bg-secondary p-8 text-center text-white transition-colors duration-300 hover:bg-secondary-light">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                  <Zap size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Timeline Challenge Solutions
              </h3>
              <p className="text-sm leading-relaxed text-neutral">
                Resolve schedule pressures through efficient installation
                techniques and streamlined construction methodologies that
                overcome time constraints and delivery challenges.
              </p>
            </div>
          </div>

          {/* Learn More About Post-Tensioning Button */}
          <div className="mt-12 text-center">
            <Link
              href="/post-tensioning"
              className="btn btn-primary btn-lg btn-pulse"
            >
              Learn More About Post-Tensioning
            </Link>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Services Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Complete Problem-Solving Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              From specialized post-tensioning solutions to complete project
              management, EASE addresses construction challenges through
              comprehensive engineering services. Our decades of proven
              problem-solving expertise and innovative methodologies tackle
              complex issues across all construction disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Post-tensioning */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Anchor size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Post-Tensioning Solutions
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Address structural challenges with advanced concrete
                  strengthening technology that resolves performance issues and
                  overcomes cost constraints through innovative engineering
                  approaches.
                </p>
              </div>
            </div>

            {/* Card 2: Design Services */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <PenTool size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Design Problem-Solving
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Resolve design challenges through comprehensive structural
                  engineering consultation that addresses complex requirements.
                  Our solution-focused approach is provided complimentary with
                  construction projects.
                </p>
              </div>
            </div>

            {/* Card 3: Repair & Strengthening */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Shield size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Structural Rehabilitation Solutions
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Solve structural deterioration problems with specialized
                  rehabilitation techniques that overcome aging infrastructure
                  challenges, extend building lifespan, and enhance capacity
                  through proven methodologies.
                </p>
              </div>
            </div>

            {/* Card 4: Project Management */}
            <div className="card group transition-all duration-300 hover:shadow-lg">
              <div className="card-body space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Settings size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Project Complexity Solutions
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Address project management challenges through professional
                  end-to-end coordination that resolves complexity issues,
                  ensuring on-time, on-budget delivery with superior quality
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More About Our Services Button */}
          <div className="mt-12 text-center">
            <Link href="/services" className="btn btn-primary btn-lg btn-pulse">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <DownloadableResources />

      {/* Insurance Backed Section */}
      <section className="section bg-primary">
        <div className="container-xl">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <Shield size={40} className="text-white" />
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Solving Risk Challenges:{" "}
              <span className="text-white/90">
                Ethiopia&apos;s Only Insurance-Backed
              </span>{" "}
              Construction Company
            </h2>

            <p className="mb-12 text-xl leading-relaxed text-white/90">
              EASE addresses project risk concerns as Ethiopia&apos;s only
              construction company with comprehensive insurance coverage,
              solving security challenges and providing unmatched protection and
              peace of mind for our clients.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <AnimatedNumber
                  value={10}
                  prefix="$"
                  suffix="M"
                  className="mb-4 text-4xl font-black text-white"
                />
                <h3 className="mb-2 text-xl font-bold text-white">
                  Product Liability Coverage
                </h3>
                <p className="mb-4 text-white/80">
                  Comprehensive protection for all construction materials and
                  workmanship
                </p>
                <Link
                  href="/insurance/Product Liability.pdf"
                  target="_blank"
                  className="btn btn-secondary text-sm"
                >
                  View Coverage Details
                </Link>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <AnimatedNumber
                  value={5.5}
                  prefix="$"
                  suffix="M"
                  className="mb-4 text-4xl font-black text-white"
                />
                <h3 className="mb-2 text-xl font-bold text-white">
                  Professional Liability Coverage
                </h3>
                <p className="mb-4 text-white/80">
                  Complete coverage for engineering design and professional
                  services
                </p>
                <Link
                  href="/insurance/Professional Liability.pdf"
                  target="_blank"
                  className="btn btn-secondary text-sm"
                >
                  View Coverage Details
                </Link>
              </div>
            </div>

            <div className="mt-12 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-lg font-medium text-white">
                <Lightbulb size={20} className="mr-2 inline text-white" />{" "}
                <strong>Risk Solution:</strong> Our insurance backing solves
                project protection concerns by eliminating risks from unforeseen
                circumstances, addressing security challenges and giving you
                complete confidence in our commitment to quality and
                accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Partner Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Our Global Partner
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Strengthening our commitment to excellence through strategic
              partnerships with industry-leading specialists in post-tensioning
              technology and manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Rudloff Content */}
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/partnership.png"
                  alt="Rudloff StrongForce International - EASE's strategic partner specializing in post-tensioning systems and prestressed concrete solutions"
                  width={500}
                  height={200}
                  className="shadow-lg"
                />
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <p className="text-lg leading-relaxed text-foreground">
                  Our strategic partnership with Rudloff StrongForce
                  International brings together over 60 years of specialized
                  expertise in post-tensioning and manufacturing. Founded in
                  1960, Rudloff Industrial has established itself as a leading
                  specialist in prestressed concrete systems, providing
                  innovative solutions that have shaped construction projects
                  across five continents.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  This collaboration brings Rudloff&apos;s proven international
                  expertise directly to Ethiopia&apos;s construction industry,
                  offering EOTA-certified post-tension kits and products that
                  comply with all major international codes and standards.
                  Together, we deliver comprehensive structural solutions that
                  advance building and civil infrastructure projects throughout
                  Ethiopia and the broader East African region.
                </p>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Trusted by Leading Companies
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              We are proud to have partnered with some of Ethiopia&apos;s most
              respected organizations, delivering excellence across diverse
              industries and sectors throughout our decade of service.
            </p>
          </div>

          {/* Company Marquee */}
          <CompanyMarquee logos={trustedCompanyLogos} />
        </div>
      </section>


      {/* Nationwide Coverage Section */}
      <section className="section bg-secondary">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Solving Regional Construction Challenges
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral">
              From bustling urban centers to remote rural communities, EASE
              addresses diverse construction challenges and delivers
              comprehensive engineering solutions across all regions of
              Ethiopia.
            </p>
          </div>

          {/* Coverage Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Addis Ababa Card */}
            <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video w-full">
                <Image
                  src="/addis.png"
                  alt="Addis Ababa cityscape - EASE's primary operational base featuring modern urban development and construction projects throughout Ethiopia's capital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="card-body space-y-3 py-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Building size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Addis Ababa
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Addressing urban construction challenges in Ethiopia&apos;s capital
                  through cutting-edge solutions for commercial, residential,
                  and infrastructure projects.
                </p>
              </div>
            </div>

            {/* Rural Areas Card */}
            <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video w-full">
                <Image
                  src="/ethiopia.png"
                  alt="Ethiopian rural landscape - EASE extends modern construction and infrastructure development to remote communities across all regions of Ethiopia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="card-body space-y-3 py-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <TreePine size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Rural Areas
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Solving rural construction challenges by bringing modern
                  techniques and infrastructure solutions to remote communities
                  across all regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-neutral">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Discover some of our most notable construction achievements that
              showcase our expertise in delivering innovative solutions across
              diverse project types and scales.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Yeka Parking Project */}
            <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/projects/elilta.png"
                  alt="Elilta RE Building - Modern multi-level apartement featuring 35 meter spans, with advanced infrastructure design and efficient space optimization for urban solutions."
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-body space-y-4">
                <h3 className="text-xl font-bold text-secondary">
                  Elilta RE Building
                </h3>
                <p className="leading-relaxed text-muted">
                  Modern multi-level apartement featuring 35 meter spans, with
                  advanced infrastructure design and efficient space
                  optimization for urban solutions.
                </p>
              </div>
            </div>

            {/* Foreign Affairs Building Project */}
            <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/projects/ppq.png"
                  alt="Prosperity Party HQ - Sophisticated government building construction showcasing architectural excellence and precision engineering for critical institutional infrastructure."
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-body space-y-4">
                <h3 className="text-xl font-bold text-secondary">
                  Prosperity Party HQ
                </h3>
                <p className="leading-relaxed text-muted">
                  Sophisticated government building construction showcasing
                  architectural excellence and precision engineering for
                  critical institutional infrastructure.
                </p>
              </div>
            </div>

            {/* Private Residence Project */}
            <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/projects/omo.png"
                  alt="Omo River Bridge - Lifting and repairing a collapsed bridge, and proceeding to enhance the bridge&apos;s capacity via external post-tensioning. In collaboration with VSL."
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-body space-y-4">
                <h3 className="text-xl font-bold text-secondary">
                  Omo River Bridge
                </h3>
                <p className="leading-relaxed text-muted">
                  Lifting and repairing a collapsed bridge, and proceeding to
                  enhance the bridge&apos;s capacity via external
                  post-tensioning. In collaboration with VSL.
                </p>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link href="/projects" className="btn btn-primary btn-lg btn-pulse">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Client Testimonials
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Hear from our valued clients who have experienced the quality,
              reliability, and innovation that EASE brings to every construction
              and engineering project.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </>
  )
}
