import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle,
  Mail,
  Linkedin,
  Target,
  Star,
  Heart,
  Lightbulb,
  Award
} from 'lucide-react'

export const metadata = {
  title: 'About Nancy Monaco - Founder of Guestly Virtual Assistant Services',
  description: 'Meet Nancy Monaco, the remote business partner behind Guestly. Experienced in customer service and guest relations, helping entrepreneurs streamline their operations.',
}

export default function AboutPage() {
  const coreSkills = [
    'Admin Support & Business Operations',
    'Customer Service Excellence',
    'Recruitment & HR Assistance', 
    'Social Media Support & Management',
    'Airbnb Guest Relations (specialized experience)'
  ]

  const toolsPlatforms = [
    'Airbnb Host Platform Expert',
    'Notion, Trello, Asana for Organization',
    'Email Management Systems',
    'Calendar Coordination & Booking Platforms',
    'Social Media Management Tools'
  ]

  const values = [
    {
      icon: Heart,
      title: 'Genuine Care',
      description: 'I treat your business like my own because your success truly matters to me.'
    },
    {
      icon: Lightbulb,
      title: 'Proactive Thinking',
      description: 'I do not just complete tasks—I anticipate needs and suggest improvements.'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'Every interaction is an opportunity to exceed expectations and build trust.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About Guestly</span>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                  Meet <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Nancy Monaco</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  The Remote Business Partner Behind Guestly
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Hi, I'm Nancy Monaco, founder of Guestly – and I understand the struggle of 
                wearing too many hats in your business. After years in customer service and 
                discovering my passion for helping businesses create exceptional customer experiences, 
                I realized entrepreneurs need more than just task completion.
              </p>

              <Link 
                href="/contact" 
                className="inline-flex bg-gradient-to-r from-amber-300 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl items-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Free Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Nancy's Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div 
                  className="relative bg-white shadow-2xl overflow-hidden border-4 border-white"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                    alt="Nancy Monaco - Professional Virtual Assistant and Founder of Guestly"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 right-1/2 w-[120%] h-[120%] bg-gradient-radial from-amber-400/20 to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-slate-600">Clients Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nancy's Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">My Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Why I Started Guestly
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              After years in customer service and discovering my passion for helping businesses 
              create exceptional customer experiences, I realized entrepreneurs need more than 
              just task completion – they need a strategic partner who truly cares about their success.
            </p>

            <p>
              My experience in guest relations and customer service taught me that every interaction 
              shapes your brand reputation. Whether it's responding to a customer inquiry, coordinating 
              with Airbnb guests, managing your overflowing inbox, or helping you find the right talent, 
              I bring the same attention to detail and personal touch that turns everyday tasks into 
              business growth opportunities.
            </p>

            <p>
              That's why I created Guestly – to be the remote business partner that busy entrepreneurs 
              and business owners can truly rely on.
            </p>

            {/* Mission Quote */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 my-12 border-l-4 border-amber-500">
              <blockquote className="text-xl italic text-slate-800 font-medium">
                "There's nothing better than seeing a client finally have time for what matters most – 
                whether that's spending time with family, focusing on business strategy, or simply 
                having a well-organized day. Your success is my success."
              </blockquote>
              <cite className="text-sm text-slate-600 mt-4 block font-semibold">
                — Nancy Monaco, Founder of Guestly
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">My Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              What Drives Me
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              My Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Years of experience in customer service and business operations, 
              specializing in tools and processes that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Core Skills */}
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-6">
                <Target className="w-8 h-8 text-amber-600 mr-3" />
                Core Skills
              </h3>
              <div className="space-y-4">
                {coreSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-6">
                <Star className="w-8 h-8 text-amber-600 mr-3" />
                Tools & Platforms
              </h3>
              <div className="space-y-4">
                {toolsPlatforms.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '500+', label: 'Clients Helped' },
              { value: '15+', label: 'Hours Saved Weekly' },
              { value: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's have a no-pressure conversation about your business needs and see if 
            we're a good fit to work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="inline-flex bg-gradient-to-r from-amber-300 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl items-center gap-2 group hover:brightness-105 hover:shadow-2xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-bold transition-all items-center gap-2"
            >
              View Service Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-slate-600">
            <a 
              href="mailto:hello@nancymonaco.com" 
              className="flex items-center space-x-2 hover:text-amber-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@nancymonaco.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/nancymonaco" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-amber-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
