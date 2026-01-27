'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Code,
  Zap,
  Palette,
  Settings,
  Database,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
} from 'lucide-react';
import { useApp } from '@/context/app-context';

export function ServicesSection() {
  const { t } = useApp();
  const [showAll, setShowAll] = useState(false);

  // Mapping icons pour chaque service
  const iconsMap: Record<string, any> = {
    'Développement Frontend': Code,
    'Frontend Development': Code,
    'Développement Backend': Zap,
    'Backend Development': Zap,
    'Administration de Base de Données': Database,
    'Database Administration': Database,
    'Développement Mobile': Smartphone,
    'Mobile App Development': Smartphone,
    'Gestion de Projet': Settings,
    'Project Management': Settings,
    'Développement de Site Web': Globe,
    'Website Development': Globe,
    'Solutions E-commerce': ShoppingCart,
    'E-commerce Solutions': ShoppingCart,
    'Développement SaaS & Logiciel': Cloud,
    'SaaS & Software Development': Cloud,
    'Design UI/UX': Palette,
    'UI/UX Design': Palette,
  };

  const servicesToShow = showAll
    ? t.services.items
    : t.services.items.slice(0, 4);

  return (
    <section id="services" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-slide-down">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t.services.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-accent">
              {t.services.title.split(' ').pop()}
            </span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesToShow.map((service, index) => {
            const Icon = iconsMap[service.title] || Code;
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:border-accent hover:bg-secondary hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 text-center animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            className="bg-accent hover:bg-accent/90"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? t.services.viewLess || 'Voir Moins'
              : t.services.viewMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
