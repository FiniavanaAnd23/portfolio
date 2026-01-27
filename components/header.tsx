'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarRadioGroup,
  MenubarRadioItem,
} from '@/components/ui/menubar';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useApp } from '@/context/app-context';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, theme, setTheme, t } = useApp();

  const navItems = [
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg transition-all duration-300">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 animate-slide-down"
        style={{ animationDuration: '0.4s' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <span className="text-xs font-bold text-accent-foreground">F</span>
          </div>
          <span className="font-semibold text-foreground">Finiavana</span>
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

        {/* Controls & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg border border-border p-2 hover:bg-secondary"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Language Toggle */}
          <Menubar className="border-none bg-transparent p-0">
            <MenubarMenu>
              <MenubarTrigger
                aria-label="Changer de langue"
                className="
        flex items-center gap-2
        rounded-lg border border-border p-2
        hover:bg-secondary hover:border-accent
        data-[state=open]:bg-secondary
        transition-colors
      "
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">
                  {language.toUpperCase()}
                </span>
              </MenubarTrigger>

              <MenubarContent align="end" className="w-32">
                <MenubarRadioGroup
                  value={language}
                  onValueChange={(value) => setLanguage(value as 'en' | 'fr')}
                >
                  <MenubarRadioItem value="en">English</MenubarRadioItem>

                  <MenubarRadioItem value="fr">Français</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <a href="#contact" className="hidden sm:inline-block">
            <Button className="bg-accent hover:bg-accent/90 transition-all">
              {t.nav.contact}
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            <a
              href="#contact"
              className="mt-2 block"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full bg-accent hover:bg-accent/90">
                {t.nav.contact}
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
