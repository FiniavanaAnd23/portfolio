'use client';

import { useApp } from '@/context/app-context';

export function SkillsSection() {
  const { t } = useApp();

  // Group skills into 3 columns
  const skillColumns = [
    t.skills.items.slice(0, 4),
    t.skills.items.slice(4, 8),
    t.skills.items.slice(8, 12),
    
  ];

  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Skills Section - Full Width */}
        <div className="mb-20 animate-slide-down">
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
            {t.skills.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-accent">
              {t.skills.title.split(' ').pop()}
            </span>
          </h2>

          {/* 3 Column Layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {skillColumns.map((columnSkills, colIndex) => (
              <div
                key={colIndex}
                className="space-y-6 animate-slide-left"
                style={{ animationDelay: `${colIndex * 0.1}s` }}
              >
                {columnSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${(colIndex * 2 + index) * 0.1}s`,
                    }}
                  >
                    <div className="mb-3 flex justify-between items-center">
                      <span className="font-semibold text-foreground text-sm">
                        {skill.name}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-accent to-accent/70 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section - Separated */}
        <div className="pt-12 border-t border-border">
          <div className="animate-slide-down">
            <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
              {t.education.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-accent">
                {t.education.title.split(' ').pop()}
              </span>
            </h2>

            {/* Timeline Layout */}
            <div className="space-y-6">
              {t.education.items.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0 animate-slide-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-accent border-4 border-background -translate-x-2.5" />

                  {/* Content */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
