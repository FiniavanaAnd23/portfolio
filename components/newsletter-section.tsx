'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Newsletter
        </h2>
        <p className="mb-8 text-muted-foreground">
          Subscribe to my newsletter to get the latest updates and insights delivered straight to your inbox.
        </p>

        <form className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1 border-border bg-card text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
