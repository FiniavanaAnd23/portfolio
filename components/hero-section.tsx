'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold text-accent">
              I'M DEVELOPER
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
              WILKERSON HARDIN
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences. Welcome to my online abode.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent/90">Hire Me</Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:text-accent bg-transparent"
              >
                <Play className="h-4 w-4" />
                Play Video
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="h-96 w-72 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 shadow-2xl">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-muted-foreground text-sm">Developer Avatar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-accent">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">340+</p>
            <p className="text-sm text-muted-foreground">Project Samples</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">120+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">9+</p>
            <p className="text-sm text-muted-foreground">Award Winner</p>
          </div>
        </div>
      </div>
    </section>
  )
}
