"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">
          ABC Plumber
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                pathname === item.href ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Book a Service
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-md px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium hover:text-blue-600 transition ${
                pathname === item.href ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Book a Service
          </Link>
        </div>
      )}
    </header>
  )
}
