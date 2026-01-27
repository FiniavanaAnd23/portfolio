'use client'

import { useApp } from '@/context/app-context'

export function EducationSection() {
  const { t } = useApp()

  return (
    <section id="about" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl animate-slide-down">
          {t.education.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-accent">{t.education.title.split(' ').pop()}</span>
        </h2>

        <div className="space-y-8">
          {t.education.items.map((item, index) => (
            <div
              key={index}
              className="border-l-2 border-accent py-4 pl-8 animate-slide-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-sm font-semibold text-accent">{item.year}</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
