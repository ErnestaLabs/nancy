import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Star, Play } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-left relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                NOW ACCEPTING NEW CLIENTS
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                <span className="text-red-600">STOP</span> Working <br className="hidden md:block" /> 60-Hour Weeks <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">While Your Business Suffers</span>
              </h1>

              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Finally, a virtual assistant who actually understands your business. What if you could get <strong className="text-slate-900">15+ hours back every week</strong> without hiring full-time staff?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="border border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center">
                  View Our Packages
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
                <p>Trusted by 500+ Founders</p>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative animate-float md:mt-0 mt-12">
              <div className="bg-slate-100 aspect-square w-full relative sm:max-w-md mx-auto shadow-2xl" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', overflow: 'hidden' }}>
                <Image
                  src="/nancy-hero.jpg"
                  alt="Nancy Monaco - Professional Virtual Assistant"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Glassmorphic Card */}
              <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-12 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-2xl max-w-[240px] z-20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Productivity</span>
                  <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">+24%</div>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">15+ Hours</div>
                <div className="text-sm text-slate-500 mb-2">Saved weekly per client</div>
                <svg className="w-full h-10" viewBox="0 0 100 40" aria-hidden="true">
                  <path d="M0,35 Q10,35 20,20 T40,25 T60,10 T80,30 T100,5" fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </div>

              {/* Premium Badge */}
              <div className="absolute -top-4 right-0 md:right-10 bg-slate-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl border border-slate-700 z-20">
                <span className="text-amber-400 text-lg">✦</span>
                <span className="text-sm font-bold tracking-wide">Premium VA Services</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 w-[120%] h-[120%] bg-gradient-radial from-amber-400/20 to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Guestly</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Your Business Deserves Better Support
            </h2>
            <p className="text-xl text-slate-600">
              We don't just handle tasks—we become an extension of your team, invested in your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Planning',
                description: 'Get expert guidance on scaling your business with data-driven strategies and proven frameworks that deliver results.'
              },
              {
                icon: CheckCircle,
                title: 'Ops & Systems',
                description: 'Streamline your operations with efficient systems and processes that save time and reduce costs.'
              },
              {
                icon: Users,
                title: 'Customer Success',
                description: 'Delight your customers with responsive, professional support that builds loyalty and drives repeat business.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Businesses Helped' },
              { value: '15+', label: 'Hours Saved Weekly' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Wall of Love */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              The Wall of Love
            </h2>
            <p className="text-xl text-slate-600">
              See what our clients say about working with Guestly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nancy transformed how we handle customer support. Our response time dropped from 24 hours to under 2 hours, and customer satisfaction is at an all-time high.",
                author: "Sarah Mitchell",
                role: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "I was working 80-hour weeks before Guestly. Now I have time to focus on strategy and growth. Best investment I've made for my business.",
                author: "James Rodriguez",
                role: "Founder, ScaleUp Co.",
                rating: 5
              },
              {
                quote: "The systems Nancy put in place saved us thousands in operational costs. She's not just a VA—she's a true business partner.",
                author: "Emily Chen",
                role: "Director, Growth Labs",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Getting started is easy. Three simple steps to reclaim your time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We start with a free 30-minute call to understand your business needs, pain points, and goals.'
              },
              {
                step: '02',
                title: 'Custom Plan',
                description: 'Based on our discussion, I create a tailored support plan designed specifically for your business.'
              },
              {
                step: '03',
                title: 'Start Saving Time',
                description: 'Once approved, we onboard quickly and you start seeing results within the first week.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
                  <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-amber-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-slate-900"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join 500+ business owners who have transformed their operations with Guestly. Book your free discovery call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all">
              Book Your Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/pricing" className="border-2 border-slate-600 text-white hover:bg-slate-800 px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
