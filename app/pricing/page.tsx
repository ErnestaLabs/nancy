import Link from 'next/link'
import { Check, ArrowRight, Sparkles, Briefcase, Building2 } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for solopreneurs and small businesses just getting started.',
      icon: Sparkles,
      features: [
        '20 hours of VA support',
        'Email & calendar management',
        'Customer service support',
        'Basic admin tasks',
        'Weekly check-ins',
        '48-hour response time'
      ],
      cta: 'Get Started',
      featured: false
    },
    {
      name: 'Business Growth',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive support.',
      icon: Briefcase,
      features: [
        '60 hours of VA support',
        'Everything in Starter, plus:',
        'Social media management',
        'Project coordination',
        'Travel & event planning',
        'Priority support (24-hour)',
        'Monthly strategy calls',
        'Dedicated account manager'
      ],
      cta: 'Start Growing',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for established businesses with complex needs.',
      icon: Building2,
      features: [
        'Full-time dedicated VA',
        'Everything in Growth, plus:',
        'Team management',
        'Process automation',
        'Advanced reporting',
        'Same-day response',
        'Weekly strategy calls',
        'Custom integrations'
      ],
      cta: 'Contact Us',
      featured: false
    }
  ]

  const services = [
    {
      title: 'Operations & Admin',
      description: 'Comprehensive administrative support including inbox management, calendar scheduling, data entry, document preparation, and travel coordination.',
      size: 'large',
      icon: Briefcase
    },
    {
      title: 'Guest Support',
      description: '24/7 guest communication, inquiry management, check-in coordination, and issue resolution for hospitality businesses.',
      size: 'small',
      icon: Check
    },
    {
      title: 'Listing Optimization',
      description: 'Professional listing creation, photo curation, pricing strategy, and platform management to maximize bookings.',
      size: 'small',
      icon: Sparkles
    },
    {
      title: 'Review Strategy',
      description: 'Proactive review management, response crafting, reputation monitoring, and guest satisfaction optimization.',
      size: 'small',
      icon: Building2
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, no surprises—just results.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.featured
                    ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                    : 'bg-white border border-slate-200 shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-300 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    plan.featured ? 'bg-amber-500' : 'bg-amber-100'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.featured ? 'text-white' : 'text-amber-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.featured ? 'text-amber-400' : 'text-amber-500'
                      }`} />
                      <span className={plan.featured ? 'text-slate-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-amber-300 to-amber-500 text-white hover:brightness-105'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive support across all areas of your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large tile - Operations & Admin */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Operations & Admin</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Comprehensive administrative support that keeps your business running smoothly. From inbox zero to calendar mastery, we handle the details so you can focus on growth.
                </p>
                <ul className="space-y-3">
                  {[
                    'Inbox & calendar management',
                    'Data entry & organization',
                    'Document preparation',
                    'Travel & event coordination',
                    'Expense tracking & reporting'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-400" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Guest Support */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Guest Support</h3>
              <p className="text-slate-600 leading-relaxed">
                24/7 guest communication, inquiry management, check-in coordination, and issue resolution for hospitality businesses.
              </p>
            </div>

            {/* Listing Optimization */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Listing Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                Professional listing creation, photo curation, pricing strategy, and platform management to maximize bookings.
              </p>
            </div>

            {/* Review Strategy - spans bottom row */}
            <div className="md:col-span-3 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-3xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Review Strategy & Reputation Management</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Proactive review management, response crafting, reputation monitoring, and guest satisfaction optimization. Build a 5-star reputation that drives more bookings.
                  </p>
                </div>
                <Link href="/services" className="shrink-0 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
                q: 'How quickly can we get started?',
                a: 'We can typically begin within 48-72 hours of our discovery call. The onboarding process is streamlined to get you up and running fast.'
              },
              {
                q: 'Can I change plans if my needs change?',
                a: 'Absolutely! You can upgrade or downgrade your plan at any time. We recommend starting with the plan that fits your current needs and adjusting as you grow.'
              },
              {
                q: 'What if I need more hours than my plan includes?',
                a: 'Additional hours can be purchased at a pro-rated rate. We also offer flexible add-ons for specific projects or seasonal peaks.'
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No long-term contracts required. All plans are month-to-month with a 30-day notice period for cancellations.'
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a free discovery call and let's discuss how Guestly can help your business.
          </p>
          <Link href="/contact" className="inline-flex bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl items-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all">
            Book Free Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
