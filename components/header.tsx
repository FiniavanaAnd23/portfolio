'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About Me', href: '#about' },
    { label: 'My Blog', href: '#blog' },
    { label: 'Services', href: '#services' },
    { label: 'Contact me', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <span className="text-xs font-bold text-accent-foreground">W</span>
          </div>
          <span className="font-semibold text-foreground">Wilkerson</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button className="hidden bg-accent hover:bg-accent/90 sm:inline-flex">
            Contact
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full bg-accent hover:bg-accent/90">
              Contact
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
