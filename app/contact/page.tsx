import ContactForm from '@/components/contact-form'
import { Mail, Linkedin, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Guestly - Book Your Free Discovery Call',
  description: 'Ready to reclaim your time? Contact Nancy Monaco for a free virtual assistant strategy call.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to reclaim your time? Fill out the form, and I&apos;ll personally review your needs and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Panel: Contact Info (Dark Theme) */}
          <div className="bg-slate-900 p-12 lg:w-2/5 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Let&apos;s Start a <span className="text-amber-400">Conversation</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Have questions about how we can help? I am here to help you find the perfect solution for your business.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:hello@nancymonaco.com" className="text-slate-300 hover:text-white transition-colors">hello@nancymonaco.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Linkedin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com/in/nancymonaco" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">/in/nancymonaco</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-slate-300">UK-based • Serving Global Clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Availability</h3>
                    <p className="text-slate-300">Mon-Fri, 9AM - 6PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">Current Availability</span>
              </div>
              <p className="text-sm text-slate-300">
                Accepting <strong>3 new clients</strong> for February 2026.
              </p>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          </div>

          {/* Right Panel: Form */}
          <div className="p-12 lg:w-3/5 bg-white">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly will you respond to my inquiry?',
                a: 'I personally review all inquiries and aim to respond within 24 hours during business days. For urgent matters, please indicate that in your message.'
              },
              {
                q: 'What happens after I submit the form?',
                a: 'After submission, I will review your needs and reach out to schedule a free 30-minute discovery call where we can discuss your requirements in detail.'
              },
              {
                q: 'Do you work with international clients?',
                a: 'Yes! While I am UK-based, I work with clients globally and can accommodate various time zones for meetings and communications.'
              },
              {
                q: 'Is there a minimum commitment?',
                a: 'My service packages are flexible with month-to-month options. We will find a plan that works for your specific needs and budget.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prefer to Email Directly?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Feel free to reach out at hello@nancymonaco.com. I would love to hear from you.
          </p>
          <a 
            href="mailto:hello@nancymonaco.com"
            className="inline-flex bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl items-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all"
          >
            Send an Email
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}
