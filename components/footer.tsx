import Link from 'next/link'
import { Mail, Linkedin, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 lg:py-24 border-t border-slate-800" data-purpose="footer">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              GUESTLY<span className="text-amber-400">.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your elite remote business partner. We provide professional Virtual Assistant services that help ambitious entrepreneurs reclaim their time and scale their empires.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com/in/nancymonaco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@nancymonaco.com"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                  About Nancy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                  Service Packages
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Admin Support",
                "Customer Service",
                "HR & Recruitment",
                "Social Media",
                "Airbnb Management"
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>hello@nancymonaco.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Mon-Fri, 9AM - 6PM GMT</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>London, United Kingdom<br />(Serving Global Clients)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Guestly. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
