"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Portfolio<span className="text-primary">.</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 p-4">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
