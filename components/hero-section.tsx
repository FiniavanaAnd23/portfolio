'use client';

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useApp } from '@/context/app-context';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const { t } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-w-fit text-sm font-semibold text-accent animate-fade-in">
              {t.hero.title}
            </span>
            <span
              className="mb-6 text-sm font-semibold text-accent animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              {t.hero.subtitle}
            </span>
            <h1
              className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {t.hero.name}
            </h1>
            <p
              className="mb-8 text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.description}
            </p>
            <div
              className="flex gap-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="mailto:finiavanaandrianirina23@gmail.com?subject=Collaboration">
                <Button className="bg-accent hover:bg-accent/90 transition-all transform hover:scale-105">
                  {t.hero.cta1}
                </Button>
              </a>

              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:text-accent bg-transparent"
              >
                <Play className="h-4 w-4" />
                {t.hero.cta2}
              </Button>
            </div>
          </div>

          {/* Image Placeholder with Animation */}
          <div
            className="flex items-center justify-center animate-slide-right"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative h-[28rem] w-[22rem] sm:h-[32rem] sm:w-[26rem]">
              <Image
                src="/image/profile.png"
                alt="Finiavana – Web Developer"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-3xl font-bold text-accent">4+</p>
            <p className="text-sm text-muted-foreground">
              {t.hero.statistics.years}
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-3xl font-bold text-accent">Next.js</p>
            <p className="text-sm text-muted-foreground">{t.hero.statistics.front}</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <p className="text-3xl font-bold text-accent">NestJS</p>
            <p className="text-sm text-muted-foreground">{t.hero.statistics.back}</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-3xl font-bold text-accent">Clean</p>
            <p className="text-sm text-muted-foreground">{t.hero.statistics.code}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
