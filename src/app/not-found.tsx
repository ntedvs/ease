"use client"

import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="section bg-neutral">
      <div className="container-md">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Display */}
          <div className="mb-8">
            <h1 className="mb-4 text-8xl font-black text-primary md:text-9xl">
              404
            </h1>
            <h2 className="mb-6 text-3xl font-bold text-secondary md:text-4xl">
              Page Not Found
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Oops! The page you&apos;re looking for seems to have been moved,
              deleted, or doesn&apos;t exist. Let&apos;s get you back to
              building landmarks of tomorrow.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/"
              className="btn btn-primary btn-lg inline-flex items-center space-x-2"
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary btn-lg inline-flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-secondary">
              Explore Our Services
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Link
                href="/about"
                className="rounded-lg border border-border bg-white p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                <span className="font-medium text-secondary">About Us</span>
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border border-border bg-white p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                <span className="font-medium text-secondary">Projects</span>
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-border bg-white p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                <span className="font-medium text-secondary">Services</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border bg-white p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                <span className="font-medium text-secondary">Contact</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 rounded-xl bg-white p-6 text-center">
            <h3 className="mb-4 text-lg font-semibold text-secondary">
              Need Help?
            </h3>
            <p className="mb-4 text-muted">
              Contact our team for assistance with your construction and
              engineering needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
              <Link
                href="tel:+251116671615"
                className="text-primary transition-colors duration-200 hover:text-primary-dark"
              >
                +251 11 667 1615
              </Link>
              <Link
                href="mailto:info@ease-int.com"
                className="text-primary transition-colors duration-200 hover:text-primary-dark"
              >
                info@ease-int.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
