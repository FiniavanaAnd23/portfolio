'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    portfolios: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Github', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Email', href: '#' },
    ],
    resources: [
      { label: 'Home', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    company: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Copyright', href: '#' },
    ],
  }

  const socials = [
    { Icon: Github, label: 'GitHub', href: '#' },
    { Icon: Linkedin, label: 'LinkedIn', href: '#' },
    { Icon: Twitter, label: 'Twitter', href: '#' },
    { Icon: Mail, label: 'Email', href: '#' },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <span className="text-xs font-bold text-accent-foreground">W</span>
              </div>
              <span className="font-semibold text-foreground">Wilkerson</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Passionate developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(links).map(([key, items]) => (
            <div key={key}>
              <h3 className="mb-4 font-semibold capitalize text-foreground">
                {key}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Wilkerson. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
