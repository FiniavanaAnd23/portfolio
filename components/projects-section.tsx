'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/app-context'
import { ChevronDown } from 'lucide-react'

export function ProjectsSection() {
  const { t } = useApp()
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects = selectedFilter === 'All' || selectedFilter === 'Tous'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === selectedFilter)

  return (
    <section id="portfolio" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-slide-down">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t.projects.title.replace(/Latest|Derniers/, (match) => `${match} `)}
            <span className="text-accent">
              {t.projects.title.split(' ').slice(-1).join(' ')}
            </span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {t.projects.description}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3 animate-slide-up">
          {t.projects.filters.map((filter, index) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? 'default' : 'outline'}
              className={
                selectedFilter === filter
                  ? 'bg-accent hover:bg-accent/90'
                  : 'border-border text-foreground hover:bg-secondary'
              }
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="w-full flex items-center justify-between pt-3 border-t border-border text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  {expandedProject === index ? 'Hide Details' : 'View Details'}
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedProject === index ? 'rotate-180' : ''}`} />
                </button>

                {/* Expanded Details */}
                {expandedProject === index && (
                  <div className="space-y-4 border-t border-border pt-4 animate-slide-down" style={{ animationDuration: '0.2s' }}>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">All Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Key Tasks</p>
                      <ul className="space-y-1">
                        {project.tasks.map((task, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent">✓</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <Button className="bg-accent hover:bg-accent/90">{t.projects.viewMore}</Button>
        </div>
      </div>
    </section>
  )
}
