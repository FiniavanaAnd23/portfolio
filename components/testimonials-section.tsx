'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at Tech Startup',
    image: '👩‍💼',
    text: 'Wilkerson is a fantastic developer with an eye for detail. His work transformed our digital presence completely.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    image: '👨‍💼',
    text: 'Working with Wilkerson was a pleasure. He delivered high-quality code and great communication throughout the project.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    image: '👩‍🎨',
    text: 'Exceptional developer who understands both design and functionality. Highly recommended for any project!',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          What My <span className="text-accent">Clients Says</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6"
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
                <div className="text-3xl">{testimonial.image}</div>
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
