'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useApp } from '@/context/app-context';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/schemas/contact';

export function ContactSection() {
  const { t } = useApp();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    setSubmitError('');
    setSubmitted(false);

    try {
      // Remplace par TES vraies valeurs (de ton dashboard EmailJS)
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          // Optionnel : reply_to: data.email,
        },
        publicKey,
      );

      console.log('EmailJS Success:', response.status, response.text);

      form.reset();
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      const errMsg =
        err?.text || 'Échec de l’envoi. Vérifie ta connexion ou réessaie.';
      setSubmitError(t?.contact?.form?.error || errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            {t?.contact?.title || 'Contactez-moi'}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t?.contact?.description ||
              'Envoyez-moi un message, je vous répondrai rapidement.'}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* ================= FORMULAIRE ================= */}
          <div className="animate-slide-left">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t?.contact?.form?.name || 'Nom'}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre nom"
                          className="bg-secondary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t?.contact?.form?.email || 'Email'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          className="bg-secondary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t?.contact?.form?.subject || 'Sujet'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Le sujet de votre message"
                          className="bg-secondary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t?.contact?.form?.message || 'Message'}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Votre message ici..."
                          className="bg-secondary resize-none"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitted && (
                  <div className="rounded-lg bg-green-500/20 border border-green-500/50 p-4 flex gap-3 items-center animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-700 text-sm">
                      {t?.contact?.form?.success ||
                        'Message envoyé avec succès ! Merci 😊'}
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-4 text-red-700 text-sm animate-fade-in">
                    {submitError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading || form.formState.isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Form>
          </div>

          {/* ================= INFOS CONTACT (inchangé) ================= */}
          <div className="space-y-8 animate-slide-right">
            <div className="flex gap-4 p-6 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t.contact?.info?.email_label || 'Email'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t.contact?.info?.email || 'your-email@example.com'}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t.contact?.info?.phone_label || 'Phone'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t.contact?.info?.phone || '+1 (555) 000-0000'}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t.contact?.info?.location_label || 'Location'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t.contact?.info?.location || 'City, Country'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
