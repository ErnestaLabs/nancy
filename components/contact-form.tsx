'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    monthlyRevenue: '',
    biggestTimeWaster: '',
    idealOutcome: '',
    urgency: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const revenueRanges = ['<£10K', '£10-25K', '£25-50K', '£50K+']
  const timeWasters = ['Inbox Management', 'Guest Communication', 'Cleaning Coordination', 'Review Management', 'Pricing Strategy']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target || {}
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!formData?.name || !formData?.email) {
      setStatus('error')
      setMessage('Please fill in all required fields.')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok || !result.success) throw new Error(result.error || 'Failed to submit form')

      setStatus('success')
      setMessage('Application received! Nancy will review and reach out shortly.')
      setFormData({ name: '', email: '', monthlyRevenue: '', biggestTimeWaster: '', idealOutcome: '', urgency: '' })

    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setMessage('Something went wrong. Please email hello@nancymonaco.com directly.')
    }
  }

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">Tell Me About Your Business</h3>
        <p className="text-slate-500 mt-2">I personally review every application to ensure we&apos;re a perfect fit.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all placeholder:text-slate-300"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all placeholder:text-slate-300"
              placeholder="sarah@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Monthly Revenue</label>
            <select
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all bg-white"
            >
              <option value="">Select Range</option>
              {revenueRanges.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Biggest Pain Point</label>
            <select
              name="biggestTimeWaster"
              value={formData.biggestTimeWaster}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all bg-white"
            >
              <option value="">What drains you?</option>
              {timeWasters.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">What does success look like in 90 days?</label>
          <textarea
            name="idealOutcome"
            rows={3}
            value={formData.idealOutcome}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all placeholder:text-slate-300 resize-none"
            placeholder="e.g. I want to add 5 new units without working weekends..."
          />
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">{message}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:brightness-105"
        >
          {status === 'loading' ? 'Processing...' : 'Apply for Strategy Call'}
        </Button>

        <p className="text-xs text-slate-400 text-center mt-4">
          Strictly confidential. No spam, ever.
        </p>
      </form>
    </div>
  )
}

export default ContactForm
