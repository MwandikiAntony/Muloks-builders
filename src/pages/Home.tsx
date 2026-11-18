import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Img from '../components/Img'
import { advantages, services } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center bg-charcoal">
        <Img name="hero" alt="Modern construction project with tower crane" eager className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <p className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">Construction, Engineering and Property Development</p>
          <h1 className="reveal max-w-3xl font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Building Excellence. Delivering Lasting Value.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Muloks Builders delivers comprehensive construction and building solutions tailored to meet the evolving needs of residential, commercial, and industrial clients. From concept development to project completion, we combine technical expertise, quality craftsmanship, and reliable project management to bring your vision to life.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-primary">Request a Quote</Link>
            <Link to="/projects" className="btn-outline">Explore Our Projects</Link>
          </div>
        </div>
        <a href="#intro" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown />
        </a>
      </section>

      <section id="intro" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
        <h2 className="heading">Your Trusted Partner in Construction</h2>
        <div className="space-y-4 leading-relaxed text-neutral-600">
          <p>Muloks Builders delivers construction solutions that combine quality, functionality and long-term value. Every project is approached with professional standards, efficient execution and a clear commitment to client satisfaction.</p>
          <p>We turn development ideas into durable, functional and well-finished structures through reliable workmanship, strategic planning and rigorous attention to detail, for individuals, businesses, developers and institutions.</p>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="heading">Core Construction Services</h2>
            <Link to="/services" className="hidden items-center gap-2 text-sm font-semibold text-brand md:flex">View all services <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} to={`/services#${s.slug}`} className="group overflow-hidden bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Img name={s.slug} alt={s.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">View service details <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="heading mb-12">Why Choose Muloks Builders?</h2>
        <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <div key={a.title} className="bg-white p-8">
              <p className="font-display text-4xl font-semibold text-brand">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">Have a Project in Mind? Let's Build It Together.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-neutral-300">
            Whether you are planning a new development, upgrading an existing property, or seeking a reliable construction partner, Muloks Builders is ready to support your next project.
          </p>
          <Link to="/quote" className="btn-primary mt-8">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
