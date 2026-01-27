'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useApp } from '@/context/app-context'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  const { t } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(t.contact.form.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-slide-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder={t.contact.form.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {submitted && (
                <div className="rounded-lg bg-green-500/20 border border-green-500/50 p-4 text-green-400 text-sm animate-fade-in">
                  {t.contact.form.success}
                </div>
              )}

              {error && (
                <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-4 text-red-400 text-sm animate-fade-in">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {loading ? t.contact.form.sending : t.contact.form.send}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">{t.contact.info.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground">{t.contact.info.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">{t.contact.info.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
