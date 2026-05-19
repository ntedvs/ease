"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const [hov, setHov] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="container-xl">
        <div className="flex h-16 items-center justify-between">
          {/* EASE Brand */}
          <div className="flex items-center">
            <Link href={"/"} onMouseOver={() => setHov(true)} onMouseOut={() => setHov(false)}>
              <Image
                src={hov ? "/after.png" : "/before.png"}
                alt="EASE Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="/" className={pathname === "/" ? "nav-link nav-link-active" : "nav-link"}>
              Home
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "nav-link nav-link-active" : "nav-link"}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={pathname === "/projects" ? "nav-link nav-link-active" : "nav-link"}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "nav-link nav-link-active" : "nav-link"}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "nav-link nav-link-active" : "nav-link"}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-foreground transition-colors duration-200 hover:text-primary md:hidden"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} border-t border-white/20 bg-white/90 backdrop-blur-md md:hidden`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className={
                pathname === "/" ? "nav-link nav-link-active px-4 py-2" : "nav-link px-4 py-2"
              }
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about" ? "nav-link nav-link-active px-4 py-2" : "nav-link px-4 py-2"
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
