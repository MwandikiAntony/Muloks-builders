import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Check } from 'lucide-react'
import { services } from '../data/content'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand">Our Services</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold text-white md:text-6xl">Integrated Construction Services, From Planning to Handover</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">Muloks Builders provides a full range of building, engineering, finishing and project management services, structured to give clients one accountable partner across the entire project lifecycle.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 border-b border-neutral-200 py-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-display text-3xl font-semibold text-brand">{String.fromCharCode(65 + i)}</p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-charcoal">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.summary}</p>
              {(s.slug === 'design' || s.slug === 'qs') && (
                <p className="mt-3 border-l-2 border-brand pl-3 text-xs text-neutral-500">
                  Regulated architectural, engineering and surveying services are delivered through appropriately registered professionals where required.
                </p>
              )}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="pt-12 text-center">
          <Link to="/quote" className="btn-primary">Discuss Your Project Requirements</Link>
        </div>
      </div>
    </>
  )
}
