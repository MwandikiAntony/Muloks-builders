import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Info } from 'lucide-react'
import Img from '../components/Img'
import { categories, projects } from '../data/projects'
import type { Category } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState<Category | 'All'>('All')
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand">Projects</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold text-white md:text-6xl">Project Portfolio</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">A view of the residential, commercial, industrial, renovation and infrastructure work we are equipped to deliver.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 flex gap-3 border-l-4 border-brand bg-mist p-4 text-sm text-neutral-600">
          <Info size={18} className="mt-0.5 shrink-0 text-brand" />
          The projects below are illustrative samples. They will be replaced with verified Muloks Builders projects once project details and photographs are supplied.
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {(['All', ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`px-4 py-2 text-sm font-medium transition ${active === c ? 'bg-brand text-white' : 'bg-mist text-charcoal hover:bg-charcoal hover:text-white'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="py-16 text-center text-neutral-500">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <Img name={`${p.slug}-1`} fallback={p.image} alt={p.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">{p.category}</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-charcoal">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.summary}</p>
                  <p className="mt-3 flex items-center gap-1 text-xs text-neutral-500"><MapPin size={14} />{p.location}</p>
                  <Link to={`/projects/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    View Project <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
