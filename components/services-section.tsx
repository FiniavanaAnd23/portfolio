'use client'

import { Button } from '@/components/ui/button'
import { Code, Palette, Zap } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer',
  },
  {
    icon: Palette,
    title: 'Backend Development',
    description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer',
  },
  {
    icon: Zap,
    title: 'UI/UX Design',
    description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer',
  },
  {
    icon: Code,
    title: 'Project Management',
    description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer',
  },
]

export function ServicesSection() {
  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:border-accent hover:bg-secondary"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-accent hover:bg-accent/90">Read More</Button>
        </div>
      </div>
    </section>
  )
}
