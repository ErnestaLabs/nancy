import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Clock, Users, Star, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Case Studies - Guestly Client Success Stories',
  description: 'See how Guestly has helped businesses save time, increase revenue, and scale operations with professional virtual assistant services.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: 'TechStart Inc.',
      industry: 'Technology Startup',
      challenge: 'Founder Sarah Mitchell was working 70-hour weeks, drowning in administrative tasks and unable to focus on strategic growth.',
      solution: 'Implemented comprehensive admin support including inbox management, calendar coordination, and customer service.',
      results: [
        { metric: '25', label: 'Hours Saved Weekly' },
        { metric: '40%', label: 'Faster Response Time' },
        { metric: '99%', label: 'Customer Satisfaction' }
      ],
      quote: 'Nancy transformed how we operate. I finally have time to focus on growing the business instead of just managing it.',
      author: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      client: 'ScaleUp Co.',
      industry: 'E-commerce',
      challenge: 'James Rodriguez was turning away customers due to overwhelmed support channels and missed opportunities.',
      solution: 'Full customer service takeover with 4-hour response guarantee plus social media management.',
      results: [
        { metric: '2x', label: 'Business Growth' },
        { metric: '6', label: 'Months to Scale' },
        { metric: '50+', label: 'Hours Saved Weekly' }
      ],
      quote: 'I doubled my business in 6 months without working more hours. Best investment I have ever made.',
      author: 'James Rodriguez',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      client: 'Growth Labs',
      industry: 'Consulting',
      challenge: 'Emily Chen was a successful consultant maxed out, unable to take on new clients despite high demand.',
      solution: 'Premium executive support including recruitment assistance, process automation, and strategic planning.',
      results: [
        { metric: '£100K', label: 'Yearly Revenue' },
        { metric: '25%', label: 'Fewer Hours Worked' },
        { metric: '3', label: 'New Team Members' }
      ],
      quote: 'The systems Nancy put in place saved us thousands. She is not just a VA—she is a true business partner.',
      author: 'Emily Chen',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    }
  ]

  const stats = [
    { value: '500+', label: 'Businesses Helped' },
    { value: '15+', label: 'Hours Saved Weekly (Avg)' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
            Client Case Studies
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how Guestly has helped businesses like yours save time, increase revenue, and achieve their goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {study.industry}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {study.client}
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-500" />
                      The Challenge
                    </h3>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      The Solution
                    </h3>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-slate-50 rounded-2xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-amber-600">{result.metric}</div>
                      <div className="text-xs text-slate-600 mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border-l-4 border-amber-500">
                  <p className="text-slate-700 italic mb-4">&ldquo;{study.quote}&rdquo;</p>
                  <footer>
                    <p className="font-bold text-slate-900">{study.author}</p>
                    <p className="text-sm text-slate-600">{study.role}</p>
                  </footer>
                </blockquote>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 right-1/2 w-[120%] h-[120%] bg-gradient-radial from-amber-400/20 to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Who We Help
            </h2>
            <p className="text-xl text-slate-600">
              We support businesses across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Startups', desc: 'Scale without the chaos' },
              { icon: Users, title: 'Consultants', desc: 'Focus on client delivery' },
              { icon: Star, title: 'E-commerce', desc: 'Manage growth efficiently' },
              { icon: Clock, title: 'Agencies', desc: 'Deliver on time, every time' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-slate-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The ROI has been incredible. For every hour I save, I can focus on revenue-generating activities.",
                author: "Michael Torres",
                role: "Agency Owner"
              },
              {
                quote: "Nancy understands business. She does not just do tasks—she thinks strategically about everything.",
                author: "Lisa Park",
                role: "Marketing Director"
              },
              {
                quote: "I have worked with many VAs before, but Guestly is on another level. Truly exceptional service.",
                author: "David Chen",
                role: "Founder"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a free discovery call and let us discuss how Guestly can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all">
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="border-2 border-slate-600 text-white hover:bg-slate-800 px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
