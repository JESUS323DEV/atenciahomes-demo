import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img-demo/icons/logo.png'

const ChevronIcon = () => (
  <svg className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const dropdowns = [
  {
    label: 'Soluciones',
    items: [
      { label: 'Adiós a los problemas', href: '/#adios-problemas' },
      { label: '¿Cómo funciona?', href: '/#como-funciona' },
      { label: 'Beneficios', href: '/#propietarios' },
    ],
  },
  {
    label: 'Sobre Nosotros',
    items: [
      { label: 'Quiénes somos', to: '/quienes-somos' },
      { label: 'Preguntas frecuentes', to: '/quienes-somos#preguntas-frecuentes' },
    ],
  },
  {
    label: 'Contacto',
    items: [
      { label: 'WhatsApp', href: 'https://wa.me/34642429362', external: true },
      { label: '+34 642 42 93 62', href: 'tel:+34642429362' },
      { label: 'atenciahomes@gmail.com', href: 'mailto:atenciahomes@gmail.com' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]">
      <nav className="max-w-screen-xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        <Link to="/" aria-label="Atencia Homes - Inicio">
          <img src={logo} alt="Atencia Homes" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium" role="menubar">
          {dropdowns.map((nav) => (
            <li key={nav.label} role="none" className="relative group">
              <button
                role="menuitem"
                aria-haspopup="true"
                className="flex items-center gap-1 text-white/75 hover:text-white transition-colors py-2"
              >
                {nav.label} <ChevronIcon />
              </button>
              <div
                role="menu"
                className="absolute top-full left-0 mt-2 w-52 bg-[#0d1117] border border-white/10 rounded-xl shadow-2xl py-1.5
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-all duration-200 origin-top scale-95 group-hover:scale-100"
              >
                {nav.items.map((item) =>
                  item.to ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          className="lg:hidden p-2 flex flex-col gap-[5px]"
        >
          <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1117] border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-6 py-5 space-y-1 text-sm font-medium">
            <a href="/#adios-problemas" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Adiós a los problemas</a>
            <a href="/#como-funciona" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">¿Cómo funciona?</a>
            <a href="/#propietarios" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Beneficios</a>
            <Link to="/quienes-somos" onClick={() => setMobileOpen(false)} className={`block px-3 py-2.5 rounded-lg transition-colors ${pathname === '/quienes-somos' ? 'text-[#ffc800]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Sobre nosotros</Link>
            <div className="pt-3 border-t border-white/10">
              <a
                href="https://wa.me/34642429362"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#154360] hover:bg-[#1e6090] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <WaIcon /> Solicita tu estudio gratuito
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
