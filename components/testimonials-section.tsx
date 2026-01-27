'use client'

import { Star } from 'lucide-react'
import { useApp } from '@/context/app-context'

export function TestimonialsSection() {
  const { t } = useApp()

  return (
    <section className="border-b border-border py-20 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl animate-slide-down">
          {t.testimonials.title.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="text-accent">{t.testimonials.title.split(' ').slice(-2).join(' ')}</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t.testimonials.description}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-muted-foreground">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{'👤'}</div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
