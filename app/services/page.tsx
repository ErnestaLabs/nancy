import Link from 'next/link'
import { 
  ArrowRight, 
  Check,
  FileText,
  Headphones,
  Users,
  MessageSquare,
  Home,
  Calendar,
  Mail,
  Phone,
  BarChart3,
  Briefcase,
  Globe,
  Star,
  Clock
} from 'lucide-react'

export const metadata = {
  title: 'Virtual Assistant Services - Guestly Professional Support',
  description: 'Comprehensive virtual assistant services including admin support, customer service, social media management, Airbnb guest relations, and more.',
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: FileText,
      title: 'Administrative Support',
      description: 'Streamline your daily operations with expert administrative assistance that keeps your business organized and efficient.',
      features: [
        'Email management and filtering',
        'Calendar scheduling and coordination',
        'Document preparation and formatting',
        'Data entry and database management',
        'File organization and cloud storage',
        'Travel arrangements and booking'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Headphones,
      title: 'Customer Service',
      description: 'Professional, empathetic support for your customers that builds loyalty and satisfaction.',
      features: [
        'First-response customer inquiries',
        'Issue resolution and escalation',
        'Live chat support',
        'Phone support management',
        'Ticket system management',
        '4-hour response guarantee'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Social Media Management',
      description: 'Strategic content planning, posting, and engagement to grow your online presence.',
      features: [
        'Content calendar creation',
        'Post scheduling and publishing',
        'Community engagement',
        'Hashtag research and optimization',
        'Analytics tracking and reporting',
        'Brand voice consistency'
      ],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Home,
      title: 'Airbnb & Short-Term Rental Management',
      description: 'End-to-end guest communication and property management for hospitality businesses.',
      features: [
        'Guest inquiry management',
        'Check-in coordination',
        'Listing optimization',
        'Review management',
        'Pricing strategy support',
        '24/7 guest communication'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Users,
      title: 'HR & Recruitment Support',
      description: 'Professional assistance with hiring, onboarding, and HR administration.',
      features: [
        'Job posting and candidate sourcing',
        'CV screening and shortlisting',
        'Interview scheduling',
        'Reference checking',
        'Onboarding coordination',
        'HR documentation'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Business Operations',
      description: 'Strategic support to optimize your business processes and drive growth.',
      features: [
        'Process documentation',
        'Workflow optimization',
        'Project coordination',
        'Vendor management',
        'Expense tracking',
        'Reporting and analytics'
      ],
      color: 'bg-amber-100 text-amber-600'
    }
  ]

  const additionalServices = [
    {
      icon: Calendar,
      title: 'Executive Assistance',
      description: 'High-level support for busy executives including meeting prep, correspondence, and priority management.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Campaign creation, list management, and newsletter design to engage your audience.'
    },
    {
      icon: Globe,
      title: 'Research & Data',
      description: 'Market research, competitor analysis, and data compilation for informed decision-making.'
    },
    {
      icon: Briefcase,
      title: 'Event Coordination',
      description: 'Virtual and in-person event planning, vendor coordination, and logistics management.'
    },
    {
      icon: Phone,
      title: 'Call Handling',
      description: 'Professional phone support, message taking, and call screening services.'
    },
    {
      icon: Clock,
      title: 'Time Zone Management',
      description: 'Global scheduling coordination across multiple time zones for international businesses.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
            Everything Your Business Needs
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive virtual assistant services designed to help you reclaim your time and scale your business.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              How We Work Together
            </h2>
            <p className="text-xl text-slate-600">
              A seamless partnership designed to integrate with your business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', desc: 'We start with understanding your business needs' },
              { step: '2', title: 'Onboarding', desc: 'Quick setup with secure access to tools' },
              { step: '3', title: 'Execution', desc: 'Consistent, high-quality support delivery' },
              { step: '4', title: 'Optimization', desc: 'Continuous improvement and scaling' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">More Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Additional Support
            </h2>
            <p className="text-xl text-slate-600">
              Specialized services to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
            "Guestly has completely transformed how I run my business. I went from working 70-hour weeks to having actual weekends. Nancy doesn't just complete tasks—she anticipates needs and helps me grow."
          </blockquote>
          <div className="text-slate-300">
            <p className="font-bold text-white">Sarah Mitchell</p>
            <p>CEO, TechStart Inc.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Let's discuss which services are right for you. Book a free discovery call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all">
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/pricing" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
