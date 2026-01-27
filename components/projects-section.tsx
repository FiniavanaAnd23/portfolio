'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/app-context'

export function ProjectsSection() {
  const { t } = useApp()
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProjects = selectedFilter === 'All'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === selectedFilter)

  return (
    <section id="portfolio" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-slide-down">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t.projects.title.replace(/Latest/, (match) => `${match.split(' ')[0]} `)}
            <span className="text-accent">
              {t.projects.title.split(' ').slice(-2).join(' ')}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10">
                <span className="text-5xl">{project.image}</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-accent">{project.category}</p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {project.title}
                </h3>
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
