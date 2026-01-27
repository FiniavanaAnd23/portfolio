'use client'

import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Web Development',
    category: 'Web Development',
    image: '🌐',
  },
  {
    id: 2,
    title: 'Frontend Development',
    category: 'Frontend',
    image: '⚡',
  },
  {
    id: 3,
    title: 'Backend Development',
    category: 'Backend',
    image: '🔧',
  },
  {
    id: 4,
    title: 'Mobile App',
    category: 'Mobile',
    image: '📱',
  },
]

const filters = ['All', 'Web Development', 'Mobile App', 'Frontend', 'Backend']

export function ProjectsSection() {
  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-accent">Latest</span> Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={filter === 'All' ? 'default' : 'outline'}
              className={
                filter === 'All'
                  ? 'bg-accent hover:bg-accent/90'
                  : 'border-border text-foreground hover:bg-secondary'
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent"
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

        <div className="mt-12 text-center">
          <Button className="bg-accent hover:bg-accent/90">See More</Button>
        </div>
      </div>
    </section>
  )
}
