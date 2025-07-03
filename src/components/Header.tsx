"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="container-xl">
        <div className="flex h-16 items-center justify-between">
          {/* EASE Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-black text-secondary transition-colors duration-200 hover:text-primary"
            >
              <Image
                src="/logo.png"
                alt="EASE Logo"
                width={128}
                height={128}
                className="h-12 w-8 object-contain"
              />
              <span>EASE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className={
                pathname === "/" ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about" ? "nav-link nav-link-active" : "nav-link"
              }
            >
              About
            </Link>
            <Link
              href="/projects"
              className={
                pathname === "/projects"
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
            <Link
              href="/services"
              className={
                pathname === "/services"
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-foreground transition-colors duration-200 hover:text-primary md:hidden"
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} border-t border-border bg-white md:hidden`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "nav-link nav-link-active px-4 py-2"
                  : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "nav-link nav-link-active px-4 py-2"
                  : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={
                pathname === "/projects"
                  ? "nav-link nav-link-active px-4 py-2"
                  : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className={
                pathname === "/services"
                  ? "nav-link nav-link-active px-4 py-2"
                  : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "nav-link nav-link-active px-4 py-2"
                  : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
