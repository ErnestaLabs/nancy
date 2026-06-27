
import Link from 'next/link'
import {
  FileText,
  Headphones,
  Sparkles,
  Star,
  ArrowRight
} from 'lucide-react'

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="services-preview">
      <div className="container-grid">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-slate-900 mb-4">
            Comprehensive Solutions
          </h2>
          <p className="body-large text-slate-500">
            Specialized services for every stage of the guest journey. Everything you need to scale your rental portfolio with zero effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]" data-purpose="bento-grid">

          {/* Large Tile: Operations & Admin */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-between text-white bento-hover shadow-2xl relative overflow-hidden group">
            <div className="z-10 relative">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4 block">Core Service</span>
              <div className="p-3 bg-white/10 rounded-2xl w-fit mb-6 backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Operations & Admin</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                We handle the backbone of your business—from calendar syncing and invoice tracking to coordinating with local maintenance teams.
              </p>
            </div>
            <div className="z-10 flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/10">Calendar Sync</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/10">Invoicing</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/10">Maintenance</span>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          </div>

          {/* Medium Tile: Customer Service */}
          <div className="md:col-span-2 md:row-span-1 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-center bento-hover relative group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 text-guestly-gold" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">24/7 Guest Support</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Immediate response times (under 5 mins) for booking inquiries and in-stay support to maintain your Superhost status.
            </p>
          </div>

          {/* Small Tile: Listing Optimization */}
          <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between bento-hover group">
            <div>
              <div className="mb-4 text-guestly-gold">
                <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-slate-900">Listing Optimization</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">SEO-focused titles to rank higher.</p>
            </div>
            <div className="mt-4 text-emerald-600 font-bold text-lg flex items-center gap-1">
              +24% <span className="text-xs text-slate-400 font-normal">avg. CTR</span>
            </div>
          </div>

          {/* Small Tile: Review Management */}
          <div className="md:col-span-1 md:row-span-1 bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 flex flex-col justify-between bento-hover group">
            <div>
              <div className="mb-4 text-emerald-600">
                <Star className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 fill-current" />
              </div>
              <h3 className="font-bold text-emerald-900">Review Strategy</h3>
              <p className="text-sm text-emerald-800 mt-2 leading-relaxed">Proactive follow-ups for 5-star ratings.</p>
            </div>
            <div className="mt-4 flex -space-x-2 opacity-80">
              <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-emerald-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/services" className="btn-secondary rounded-full px-8 py-4 text-lg group">
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
