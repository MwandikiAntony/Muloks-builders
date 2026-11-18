import { Link } from 'react-router-dom'
import { Target, Eye } from 'lucide-react'

const values = ['Integrity', 'Quality', 'Professionalism', 'Safety', 'Accountability', 'Innovation', 'Client Satisfaction']

export default function About() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand">About Us</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold text-white md:text-6xl">Building with Purpose. Constructing with Integrity.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-neutral-600">
          <p>Muloks Builders is a construction solutions company dedicated to delivering quality building projects and dependable construction services. We work with clients across residential, commercial, and infrastructure sectors to provide solutions that meet functional requirements, development objectives, and budget considerations.</p>
          <p>Our approach is founded on professional integrity, quality workmanship, efficient project coordination, and a commitment to delivering lasting value.</p>
        </div>
        <div className="grid gap-6">
          <div className="border-l-4 border-brand bg-mist p-8">
            <Target className="text-brand" />
            <h2 className="mt-3 font-display text-2xl font-semibold text-charcoal">Our Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">To deliver reliable, high-quality, and cost-effective construction solutions that transform client visions into durable and functional built environments.</p>
          </div>
          <div className="border-l-4 border-brand bg-mist p-8">
            <Eye className="text-brand" />
            <h2 className="mt-3 font-display text-2xl font-semibold text-charcoal">Our Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">To become a trusted and recognized construction partner known for quality, professionalism, innovation, and excellence in project delivery.</p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="heading mb-10">Core Values</h2>
          <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v} className="bg-white p-8">
                <p className="font-display text-3xl font-semibold text-brand">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 font-display text-xl font-semibold text-charcoal">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">Discuss your next project with our team</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">Request a Quote</Link>
            <Link to="/projects" className="btn-outline">View Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}
