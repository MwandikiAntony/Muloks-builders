import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { company, services } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
]

export const waLink = (text = 'Hello Muloks Builders, I would like to discuss a project.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition hover:text-brand ${isActive ? 'text-brand' : 'text-charcoal'}`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="font-display text-2xl font-semibold text-charcoal">
            Muloks<span className="text-brand"> Builders</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/quote" className="btn-primary">Request a Quote</Link>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-neutral-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/quote" className="btn-primary">Request a Quote</Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-neutral-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold text-white">Muloks<span className="text-brand"> Builders</span></p>
            <p className="mt-3 text-sm leading-relaxed">Quality construction, engineering and property development solutions for residential, commercial and infrastructure clients.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Services</p>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link to={`/services#${s.slug}`} className="hover:text-brand">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-brand">{l.label}</Link></li>
              ))}
              <li><Link to="/quote" className="hover:text-brand">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-brand" />{company.phone}</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-brand" />{company.email}</li>
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" />{company.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs">
          &copy; {new Date().getFullYear()} Muloks Builders. All rights reserved.
        </div>
      </footer>

      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle />
      </a>
    </div>
  )
}
