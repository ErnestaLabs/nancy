
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import OptimizedImage from '@/components/optimized-image'

const HeroSection = () => {
  return (
    <section className="pt-20 pb-32 px-6 bg-white overflow-hidden" data-purpose="hero-section">
      <div className="container-grid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="animate-fade-in-left relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-guestly-gold animate-pulse"></span>
              NOW ACCEPTING NEW CLIENTS
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              <span className="text-red-600">STOP</span> Working <br className="hidden md:block" /> 60-Hour Weeks <br />
              <span className="text-gradient-gold">While Your Business Suffers</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Finally, a virtual assistant who actually understands your business. What if you could get <strong className="text-slate-900">15+ hours back every week</strong> without hiring full-time staff?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="gold-gradient-btn text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="border border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center">
                View Our Packages
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <div className="w-full h-full bg-slate-300 animate-pulse"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                  <div className="w-full h-full bg-slate-400 animate-pulse"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden">
                  <div className="w-full h-full bg-slate-500 animate-pulse"></div>
                </div>
              </div>
              <p>Trusted by 500+ Founders</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-float md:mt-0 mt-12" data-purpose="hero-visual">
            <div className="organic-mask bg-slate-100 aspect-square w-full relative sm:max-w-md mx-auto shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                alt="Nancy Monaco"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>

            {/* Floating Glassmorphic Card */}
            <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-12 glass-morphism p-6 rounded-3xl shadow-2xl animate-bounce-subtle max-w-[240px] z-20 bg-white/80 backdrop-blur-md border border-white/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Productivity</span>
                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">+24%</div>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">15+ Hours</div>
              <div className="text-sm text-slate-500 mb-2">Saved weekly per client</div>
              {/* Mini Sparkline SVG */}
              <svg className="w-full h-10" viewBox="0 0 100 40" aria-hidden="true">
                <path d="M0,35 Q10,35 20,20 T40,25 T60,10 T80,30 T100,5" fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
            </div>

            {/* Premium Badge */}
            <div className="absolute -top-4 right-0 md:right-10 bg-slate-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl border border-slate-700 z-20">
              <span className="text-guestly-gold text-lg">✦</span>
              <span className="text-sm font-bold tracking-wide">Premium VA Services</span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 w-[120%] h-[120%] bg-gradient-radial from-guestly-gold/20 to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
