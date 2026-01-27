'use client'

import { Header } from '@/components/header'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <div className="min-h-screen pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
