import Header from "@/components/Header";
import "@/styles/base.css";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import local from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const inter = local({ src: "../../public/hel.woff2" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ease-int.com"),
  title: { default: "EASE - Landmarks of Tomorrow", template: "%s - EASE" },
  description:
    "EASE - East Africa Specialized Engineering. Ethiopia's only insurance-backed construction company specializing in post-tensioning solutions, structural engineering, and innovative building technologies across East Africa.",
  keywords: [
    "construction",
    "engineering",
    "post-tensioning",
    "Ethiopia",
    "East Africa",
    "structural engineering",
    "concrete",
    "building",
    "infrastructure",
    "Addis Ababa",
    "insurance-backed construction",
    "insured construction company",
    "liability coverage",
    "bonded contractor",
    "reliable construction",
    "trusted engineering",
  ],
  authors: [{ name: "EASE - East Africa Specialized Engineering" }],
  creator: "EASE - East Africa Specialized Engineering",
  publisher: "EASE - East Africa Specialized Engineering",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ease-int.com",
    siteName: "EASE - East Africa Specialized Engineering",
    title: "EASE - Landmarks of Tomorrow",
    description:
      "Ethiopia's only insurance-backed construction company specializing in post-tensioning solutions, structural engineering, and innovative building technologies across East Africa.",
    images: [
      {
        url: "/construction.jpg",
        width: 1200,
        height: 630,
        alt: "EASE construction project showcasing post-tensioning expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EASE - Landmarks of Tomorrow",
    description:
      "Ethiopia's only insurance-backed construction company specializing in post-tensioning solutions, structural engineering, and innovative building technologies.",
    images: ["/construction.jpg"],
    creator: "@easeengineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* EASE Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/after.png" alt="EASE Logo" width={128} height={128} />
            </div>
            <p className="text-lg leading-relaxed text-neutral">Landmarks of Tomorrow</p>
            <p className="text-sm leading-relaxed text-neutral/80">
              Building icons that inspire future generations through innovation, strength, and
              vision.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="https://www.facebook.com/ease.engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral/80 transition-colors duration-200 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ease-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral/80 transition-colors duration-200 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/easeengineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral/80 transition-colors duration-200 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@ease.engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral/80 transition-colors duration-200 hover:text-primary"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col items-start space-y-3">
              <Link
                href="/"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <Link
                  href="mailto:info@ease-int.com"
                  className="text-neutral transition-colors duration-200 hover:text-primary"
                >
                  info@ease-int.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <Link
                    href="tel:+251116671615"
                    className="text-neutral transition-colors duration-200 hover:text-primary"
                  >
                    +251 116 671 615
                  </Link>
                  <Link
                    href="tel:+251968601177"
                    className="text-neutral transition-colors duration-200 hover:text-primary"
                  >
                    +251 968 601 177
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <address className="text-neutral not-italic">
                  Bole Sub-City, Woreda 06
                  <br />
                  Jacros-Salitemehret RD
                  <br />
                  Addis Ababa, Ethiopia
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-secondary-light py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-neutral/60">
              © {new Date().getFullYear()} EASE. All rights reserved.
            </p>
            <p className="text-sm text-neutral/60">
              Made by{" "}
              <Link
                href="https://briggsdavis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral transition-colors duration-200 hover:text-primary"
              >
                Briggs Davis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EASE - East Africa Specialized Engineering",
    alternateName: "EASE",
    description:
      "Ethiopia's only insurance-backed construction company specializing in post-tensioning solutions, structural engineering, and innovative building technologies with comprehensive liability coverage.",
    url: "https://ease-int.com",
    logo: "https://ease-int.com/logo.png",
    image: "https://ease-int.com/construction.jpg",
    sameAs: [
      "https://www.facebook.com/ease.engineering",
      "https://www.linkedin.com/company/ease-engineering",
      "https://www.instagram.com/easeengineering",
      "https://www.tiktok.com/@ease.engineering",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bole Sub-City, Woreda 06, Jacros-Salitemehret RD",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251-11-667-1615",
      contactType: "customer service",
      email: "info@ease-int.com",
      availableLanguage: ["English", "Amharic"],
    },
    foundingDate: "2015",
    numberOfEmployees: "50-100",
    industry: "Construction and Engineering",
    serviceArea: {
      "@type": "Country",
      name: "Ethiopia",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Product Liability Insurance Coverage",
        description: "$10 Million product liability insurance coverage",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Professional Liability Insurance Coverage",
        description: "$5 Million professional liability insurance coverage",
      },
    ],
    award: {
      "@type": "Thing",
      name: "Ethiopia's Only Insurance-Backed Construction Company",
      description:
        "Recognized as the only construction company in Ethiopia with comprehensive insurance backing",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction and Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post-tensioning Solutions",
            description: "Advanced post-tensioning solutions for concrete structures",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structural Engineering",
            description: "Comprehensive structural design and engineering services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Management",
            description: "Professional project management for construction projects",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className={`flex min-h-screen flex-col bg-background text-foreground ${inter.className}`}
      >
        <Header />
        {/* <BounceLoader /> */}
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
