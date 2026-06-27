
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Calendar, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-premium ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-premium-lg border-b border-slate-200' 
          : 'bg-white/92 backdrop-blur-sm'
      }`} role="navigation" aria-label="Main navigation">
        <div className="container-grid">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover-scale" aria-label="Guestly home page">
              <div className="w-8 h-8 bg-gradient-to-r from-guestly-gold-light to-guestly-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Guestly</span>
              <span className="hidden md:block text-xs font-medium text-slate-400 uppercase tracking-widest ml-4 border-l border-slate-200 pl-4">
                Your Remote Partner
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8" role="menubar">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href || '/'}
                  className="nav-link"
                  role="menuitem"
                  aria-label={`Go to ${link?.label} page`}
                >
                  {link?.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact" className="btn-primary hover-lift" aria-label="Schedule your free discovery call">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book Free Discovery Call</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="btn-ghost p-2 focus-visible"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div 
              className="lg:hidden py-6 border-t border-slate-200 animate-slide-up"
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col space-y-4">
                {navLinks?.map((link) => (
                  <Link
                    key={link?.href}
                    href={link?.href || '/'}
                    className="nav-link py-3 text-center"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Go to ${link?.label} page`}
                  >
                    {link?.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full hover-lift"
                    onClick={() => setIsOpen(false)}
                    aria-label="Schedule your free discovery call"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>Book Free Discovery Call</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
