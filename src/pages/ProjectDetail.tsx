import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, MapPin } from 'lucide-react'
import Img from '../components/Img'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [index, setIndex] = useState(0)

  if (!project) {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <h1 className="heading">Project not found</h1>
        <p className="mt-3 text-neutral-600">The project you are looking for is not available.</p>
        <Link to="/projects" className="btn-primary mt-8">Back to Projects</Link>
      </div>
    )
  }

  const gallery = [
    { name: `${project.slug}-1`, fallback: project.image },
    { name: `${project.slug}-2`, fallback: 'hero' },
    { name: `${project.slug}-3`, fallback: 'design' }
  ]
  const current = gallery[index]

  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-brand"><ArrowLeft size={16} />All projects</Link>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">{project.category}</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-white md:text-6xl">{project.name}</h1>
          <p className="mt-4 flex items-center gap-2 text-neutral-300"><MapPin size={16} />{project.location}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Img key={current.name} name={current.name} fallback={current.fallback} alt={project.name} eager className="aspect-[4/3] w-full object-cover" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <button key={g.name} onClick={() => setIndex(i)} aria-label={`Show image ${i + 1}`} aria-pressed={index === i} className={`overflow-hidden border-2 ${index === i ? 'border-brand' : 'border-transparent'}`}>
                <Img name={g.name} fallback={g.fallback} alt="" className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal">Project Overview</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.overview}</p>
          </div>
          <div className="border-l-4 border-brand bg-mist p-4 text-sm text-neutral-600">
            <p className="font-semibold text-charcoal">Completion status</p>
            <p className="mt-1">{project.status}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal">Scope of Work</h2>
            <ul className="mt-3 space-y-2">
              {project.scope.map((s) => <li key={s} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{s}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal">Key Features</h2>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{f}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-mist py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div className="bg-white p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal">Challenge</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.challenge}</p>
          </div>
          <div className="bg-white p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal">Solution</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Planning a similar project?</h2>
        <Link to="/quote" className="btn-primary mt-6">Request a Quote</Link>
      </section>
    </>
  )
}
