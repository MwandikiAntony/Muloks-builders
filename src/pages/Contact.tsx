import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, AlertCircle, Facebook, Instagram, Linkedin } from 'lucide-react'
import { company } from '../data/content'
import { supabase } from '../lib/supabase'
import { waLink } from '../components/Layout'

const mapQuery = 'Nairobi, Kenya'

const socials = [
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: Linkedin }
]

const empty = { fullName: '', email: '', phone: '', message: '' }
type Form = typeof empty

export default function Contact() {
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle')

  const set = (k: keyof Form, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e: typeof errors = {}
    if (form.fullName.trim().length < 2) e.fullName = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
    setErrors(e)
    if (Object.keys(e).length) return
    if (!supabase) {
      setStatus('failed')
      return
    }
    setStatus('sending')
    const { error } = await supabase.from('contact_messages').insert({
      full_name: form.fullName,
      email: form.email,
      phone: form.phone || null,
      message: form.message
    })
    if (error) {
      setStatus('failed')
      return
    }
    setStatus('done')
    setForm(empty)
  }

  const err = (k: keyof Form) => (errors[k] ? <p className="mt-1 text-xs text-red-600">{errors[k]}</p> : null)
  const label = 'mb-1 block text-sm font-medium text-charcoal'

  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand">Contact</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold text-white md:text-6xl">Get in touch with our team</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">For project inquiries, site visits or general questions, contact Muloks Builders using any of the options below.</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div className="space-y-8">
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3"><Phone className="shrink-0 text-brand" size={20} /><span><b className="block text-charcoal">Phone</b>{company.phone}</span></li>
            <li className="flex gap-3"><Mail className="shrink-0 text-brand" size={20} /><span><b className="block text-charcoal">Email</b>{company.email}</span></li>
            <li className="flex gap-3"><MapPin className="shrink-0 text-brand" size={20} /><span><b className="block text-charcoal">Office</b>{company.address}</span></li>
            <li className="flex gap-3"><Clock className="shrink-0 text-brand" size={20} /><span><b className="block text-charcoal">Business hours</b>{company.hours}</span></li>
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary"><MessageCircle size={16} />Chat on WhatsApp</a>
            <div className="flex gap-3">
              {socials.map(({ label: l, href, Icon }) => (
                <a key={l} href={href} aria-label={l} className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-charcoal transition hover:border-brand hover:text-brand"><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <iframe
            title="Muloks Builders office location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            loading="lazy"
            className="h-72 w-full border-0"
          />
        </div>

        <div>
          {status === 'done' ? (
            <div className="bg-mist p-10 text-center">
              <CheckCircle2 className="mx-auto text-brand" size={44} />
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal">Message sent</h2>
              <p className="mt-2 text-sm text-neutral-600">Thank you for contacting Muloks Builders. We will respond as soon as possible.</p>
              <button className="btn-primary mt-6" onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5 bg-mist p-8">
              <h2 className="font-display text-3xl font-semibold text-charcoal">Send us a message</h2>
              {status === 'failed' && (
                <div role="alert" className="flex gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle size={18} className="shrink-0" />
                  {supabase ? 'Your message could not be sent. Please try again or contact us on WhatsApp.' : 'The message service is not configured yet. Please contact us on WhatsApp or by phone.'}
                </div>
              )}
              <div>
                <label className={label} htmlFor="c-name">Full Name</label>
                <input id="c-name" className="field" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} />
                {err('fullName')}
              </div>
              <div>
                <label className={label} htmlFor="c-email">Email Address</label>
                <input id="c-email" type="email" className="field" value={form.email} onChange={(e) => set('email', e.target.value)} />
                {err('email')}
              </div>
              <div>
                <label className={label} htmlFor="c-phone">Phone Number (optional)</label>
                <input id="c-phone" type="tel" className="field" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
              </div>
              <div>
                <label className={label} htmlFor="c-msg">Message</label>
                <textarea id="c-msg" rows={5} className="field" value={form.message} onChange={(e) => set('message', e.target.value)} />
                {err('message')}
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
