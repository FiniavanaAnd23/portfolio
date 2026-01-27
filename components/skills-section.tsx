'use client'

import { useApp } from '@/context/app-context'

export function SkillsSection() {
  const { t } = useApp()

  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <div className="animate-slide-left">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              {t.education.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-accent">{t.education.title.split(' ').pop()}</span>
            </h2>
            <div className="space-y-8">
              {t.education.items.map((item, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-sm font-semibold text-accent">{item.year}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-right">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              {t.skills.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-accent">{t.skills.title.split(' ').pop()}</span>
            </h2>
            <div className="space-y-6">
              {t.skills.items.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-accent">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
