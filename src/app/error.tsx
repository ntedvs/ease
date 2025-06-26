"use client"

import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="section bg-neutral">
      <div className="container-md">
        <div className="mx-auto max-w-2xl text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-error/10">
              <AlertTriangle size={48} className="text-error" />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
              Something went wrong
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-muted">
              We encountered an unexpected error while processing your request.
              Our team has been notified and is working to resolve the issue.
            </p>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 rounded-lg bg-error/5 p-4 text-left">
                <summary className="cursor-pointer font-medium text-error">
                  Error Details (Development Mode)
                </summary>
                <pre className="mt-2 text-sm whitespace-pre-wrap text-error">
                  {error.message}
                </pre>
                {error.digest && (
                  <p className="mt-2 text-sm text-muted">
                    Error ID: {error.digest}
                  </p>
                )}
              </details>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              onClick={reset}
              className="btn btn-primary btn-lg inline-flex items-center space-x-2"
            >
              <RefreshCw size={20} />
              <span>Try Again</span>
            </button>
            <Link
              href="/"
              className="btn btn-secondary btn-lg inline-flex items-center space-x-2"
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-12 rounded-xl bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-secondary">
              Need Immediate Assistance?
            </h3>
            <p className="mb-4 text-muted">
              If this error persists, please contact our support team with the
              details above.
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

          {/* Quick Navigation */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-secondary">
              Continue Exploring
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Link
                href="/about"
                className="rounded-lg border border-border bg-white p-3 text-center text-sm transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border border-border bg-white p-3 text-center text-sm transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-border bg-white p-3 text-center text-sm transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border bg-white p-3 text-center text-sm transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
