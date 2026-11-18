import { useState } from 'react'
import type { FormEvent } from 'react'
import { MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react'
import { company, services } from '../data/content'
import { supabase } from '../lib/supabase'
import { waLink } from '../components/Layout'

const projectTypes = ['Residential', 'Commercial', 'Industrial', 'Renovation', 'Infrastructure']
const budgets = ['Under KES 5M', 'KES 5M to 20M', 'KES 20M to 50M', 'Above KES 50M', 'Not sure yet']
const timelines = ['Immediately', 'Within 3 months', '3 to 6 months', '6 to 12 months', 'Flexible']

const empty = { fullName: '', company: '', email: '', phone: '', service: '', location: '', projectType: '', budget: '', timeline: '', description: '', consent: false }
type Form = typeof empty
type Errors = Partial<Record<keyof Form, string>>

function validate(f: Form): Errors {
  const e: Errors = {}
  if (f.fullName.trim().length < 2) e.fullName = 'Enter your full name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (f.phone.replace(/\D/g, '').length < 9) e.phone = 'Enter a valid phone number.'
  if (!f.service) e.service = 'Select a service.'
  if (!f.location.trim()) e.location = 'Enter the project location.'
  if (!f.projectType) e.projectType = 'Select a project type.'
  if (f.description.trim().length < 20) e.description = 'Describe the project in at least 20 characters.'
  if (!f.consent) e.consent = 'Consent is required to submit.'
  return e
}

export default function Quote() {
  const [form, setForm] = useState<Form>(empty)
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle')

  const set = (k: keyof Form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }))

  const onFile = (f: File | null) => {
    if (f && f.size > 10 * 1024 * 1024) {
      setErrors((p) => ({ ...p, description: 'Attachment must be under 10 MB.' }))
      return
    }
    setFile(f)
  }

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length) return
    if (!supabase) {
      setStatus('failed')
      return
    }
    setStatus('sending')
    try {
      let fileUrl: string | null = null
      if (file) {
        const path = `${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`
        const up = await supabase.storage.from('quote-files').upload(path, file)
        if (up.error) throw up.error
        fileUrl = path
      }
      const { error } = await supabase.from('inquiries').insert({
        full_name: form.fullName,
        company: form.company || null,
        email: form.email,
        phone: form.phone,
        service: form.service,
        location: form.location,
        project_type: form.projectType,
        budget: form.budget || null,
        timeline: form.timeline || null,
        description: form.description,
        file_url: fileUrl
      })
      if (error) throw error
      setStatus('done')
      setForm(empty)
      setFile(null)
    } catch {
      setStatus('failed')
    }
  }

  const err = (k: keyof Form) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1 text-xs text-red-600">{errors[k]}</p> : null

  const label = 'mb-1 block text-sm font-medium text-charcoal'

  if (status === 'done') {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <CheckCircle2 className="mx-auto text-brand" size={48} />
        <h1 className="heading mt-4">Inquiry received</h1>
        <p className="mt-3 text-neutral-600">Thank you for your inquiry. Our team will review your project details and contact you with the next steps.</p>
        <button className="btn-primary mt-8" onClick={() => setStatus('idle')}>Submit another inquiry</button>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.6fr_1fr]">
      <form onSubmit={submit} noValidate className="space-y-5">
        <div>
          <h1 className="heading">Request a Quote</h1>
          <p className="mt-3 text-neutral-600">Provide the key details of your project and our team will review your requirements and respond with proposed next steps.</p>
        </div>

        {status === 'failed' && (
          <div role="alert" className="flex gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <AlertCircle size={18} className="shrink-0" />
            {supabase ? 'Your inquiry could not be submitted. Please try again or contact our team directly on WhatsApp.' : 'The inquiry service is not configured yet. Please contact us on WhatsApp or by phone.'}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="fullName">Full Name</label>
            <input id="fullName" className="field" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} aria-describedby="fullName-err" />
            {err('fullName')}
          </div>
          <div>
            <label className={label} htmlFor="company">Company Name (optional)</label>
            <input id="company" className="field" value={form.company} onChange={(e) => set('company', e.target.value)} />
          </div>
          <div>
            <label className={label} htmlFor="email">Email Address</label>
            <input id="email" type="email" className="field" value={form.email} onChange={(e) => set('email', e.target.value)} aria-describedby="email-err" />
            {err('email')}
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" className="field" value={form.phone} onChange={(e) => set('phone', e.target.value)} aria-describedby="phone-err" />
            {err('phone')}
          </div>
          <div>
            <label className={label} htmlFor="service">Service Required</label>
            <select id="service" className="field" value={form.service} onChange={(e) => set('service', e.target.value)}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            {err('service')}
          </div>
          <div>
            <label className={label} htmlFor="location">Project Location</label>
            <input id="location" className="field" value={form.location} onChange={(e) => set('location', e.target.value)} />
            {err('location')}
          </div>
          <div>
            <label className={label} htmlFor="projectType">Project Type</label>
            <select id="projectType" className="field" value={form.projectType} onChange={(e) => set('projectType', e.target.value)}>
              <option value="">Select a type</option>
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
            {err('projectType')}
          </div>
          <div>
            <label className={label} htmlFor="budget">Estimated Budget</label>
            <select id="budget" className="field" value={form.budget} onChange={(e) => set('budget', e.target.value)}>
              <option value="">Select a range</option>
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="timeline">Project Timeline</label>
            <select id="timeline" className="field" value={form.timeline} onChange={(e) => set('timeline', e.target.value)}>
              <option value="">Select a timeline</option>
              {timelines.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="description">Project Description</label>
          <textarea id="description" rows={5} className="field" value={form.description} onChange={(e) => set('description', e.target.value)} aria-describedby="description-err" />
          {err('description')}
        </div>

        <div>
          <label className={label} htmlFor="file">Architectural drawings or project documents (optional)</label>
          <input id="file" type="file" accept=".pdf,.dwg,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx" className="field" onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
        </div>

        <div>
          <label className="flex gap-3 text-sm text-neutral-600">
            <input type="checkbox" className="mt-1 accent-[#f26b1d]" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} />
            I agree that Muloks Builders may store and use the information I submit to respond to this inquiry.
          </label>
          {err('consent')}
        </div>

        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
          {status === 'sending' ? 'Sending...' : 'Submit Project Inquiry'}
        </button>
      </form>

      <aside className="h-fit space-y-4 bg-mist p-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Speak With Our Team</h2>
        <p className="text-sm text-neutral-600">Discuss your project requirements directly with a member of our team.</p>
        <a href={waLink('Hello Muloks Builders, I would like a quote for a project.')} target="_blank" rel="noreferrer" className="btn-primary w-full"><MessageCircle size={16} />WhatsApp us</a>
        <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn w-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"><Phone size={16} />{company.phone}</a>
      </aside>
    </div>
  )
}
