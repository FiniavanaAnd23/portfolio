'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { EducationSection } from '@/components/education-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
