'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useApp } from '@/context/app-context'

export function NewsletterSection() {
  const { t } = useApp()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validate email
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setError('Please enter a valid email')
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setEmail('')
      setSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to subscribe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border-b border-border py-20 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          {t.newsletter.title}
        </h2>
        <p className="mb-8 text-muted-foreground">
          {t.newsletter.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="flex-1 border-border bg-background text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
            >
              {loading ? 'Subscribing...' : t.newsletter.subscribe}
            </Button>
          </div>

          {submitted && (
            <div className="rounded-lg bg-green-500/20 border border-green-500/50 p-3 text-green-400 text-sm animate-fade-in">
              {t.newsletter.success}
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-3 text-red-400 text-sm animate-fade-in">
              {error}
            </div>
          )}
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
