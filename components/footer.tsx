"use client";

import { Github, Linkedin, Facebook, Mail, Gitlab } from "lucide-react";
import { useApp } from "@/context/app-context";

export function Footer() {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  const links = {
    quickLinks: [
      { label: t.footer.portfolio, href: "#portfolio" },
      { label: t.footer.about, href: "#about" },
      { label: t.footer.blog, href: "#blog" },
      { label: t.footer.contact, href: "#contact" },
    ],
  };

  const socials = [
    {
      Icon: Gitlab,
      label: "GitHub",
      href: "https://gitlab.com/finiavanaandrianirina23",
    },
    {
      Icon: Github,
      label: "GitLab",
      href: "https://github.com/FiniavanaAnd23",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/finiavana-andrianirina-332313234/",
    },
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/finiavana.andrianirina/",
    },
    {
      Icon: Mail,
      label: "Email",
      href: "mailto:finiavanaandrianirina23@gmail.com",
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <span className="text-xs font-bold text-accent-foreground">
                  W
                </span>
              </div>
              <span className="font-semibold text-foreground">Finiavana</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Passionate developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {links.quickLinks.map((item) => (
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
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Finiavana. {t.footer.copyright}
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
  );
}
