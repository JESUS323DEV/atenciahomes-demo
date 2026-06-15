import { useState, useEffect, useCallback } from 'react'
import bgHero from '../../assets/img-demo/bg-img/bg-hero.png'
import hab1 from '../../assets/img-demo/galeria/habitacion1.jpeg'
import hab2 from '../../assets/img-demo/galeria/habitacion2.jpeg'
import hab3 from '../../assets/img-demo/galeria/habitacion8.jpg'
import hab4 from '../../assets/img-demo/galeria/habitacion4.jpeg'
import hab5 from '../../assets/img-demo/galeria/habitacion7.jpg'

const WaIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const trustItems = [
  {
    label: 'Alquiler seguro',
    desc: 'Garantizamos el pago y el cuidado de tu vivienda.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
  },
  {
    label: 'Máxima rentabilidad',
    desc: 'Optimizamos tus ingresos sin que tengas que preocuparte.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
  },
  {
    label: 'Gestión integral',
    desc: 'Nos encargamos de todo, de principio a fin.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
  },
  {
    label: 'Trato personalizado',
    desc: 'Soluciones adaptadas a ti y a tu propiedad.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
  },
]

const mobileSlides = [hab1, hab2, hab3, hab4, hab5]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  const next = useCallback(() => setSlide(s => (s + 1) % mobileSlides.length), [])
  const prev = useCallback(() => setSlide(s => (s - 1 + mobileSlides.length) % mobileSlides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    // lg: altura fija viewport — móvil: crece para acomodar el carrusel debajo
    <section id="hero" aria-label="Inicio" className="relative sm:pt-15 lg:h-screen lg:overflow-hidden">

      {/* Fondo full-width */}
      <img
        src={bgHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08101e]/70 via-[#08101e]/60 to-[#08101e]/45" />

      <div className="relative z-10 lg:h-full flex lg:w-450 lg:mx-auto">

        {/* LEFT: texto + trust bar + carrusel móvil */}
        <div className="w-full lg:w-1/1 flex flex-col xl:items-center pt-[72px]">

          <div className="flex-1 flex flex-col justify-center px-8 lg:px-12 xl:px-16 pb-4">
            <div className="w-10 h-[3px] bg-[#ffc800] rounded-full mb-5" aria-hidden="true" />

            <p className="text-[#ffc800] text-xs sm:text-sm font-bold uppercase tracking-widest leading-relaxed mb-4 max-w-sm">
              Descubre cómo alquilar tu vivienda maximizando tus ingresos.
            </p>

            <h1 className="text-[1.85rem] sm:text-[2.4rem] xl:text-[4rem] font-extrabold text-white leading-[1.15] mb-5 max-w-lg">
              Brindamos soluciones a propietarios que no desean preocuparse por su alquiler.
            </h1>

            <div className="flex items-center gap-2.5 mb-7">
              <svg className="w-5 h-5 text-[#ffc800] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/70 text-sm">Somos tu inquilino perfecto.</span>
            </div>

            <div>
              <a
                href="https://wa.me/34642429362"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 self-start bg-[#154360] hover:bg-[#1e6090] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200"
              >
                <WaIcon /> Solicita tu estudio gratuito
              </a>
            </div>
          </div>

          {/* Trust bar */}
          <div className="border-t border-white/10 grid grid-cols-2 sm:grid-cols-4">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className={`px-5 xl:px-7 py-4 border-white/10
                  ${i < 2 ? 'border-b sm:border-b-0' : ''}
                  ${i % 2 === 0 ? 'border-r' : 'sm:border-r'}
                  ${i === 3 ? 'sm:border-r-0' : ''}
                `}
              >
                <svg className="w-5 h-5 text-[#ffc800] mb-1.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  {item.icon}
                </svg>
                <p className="text-white text-xs font-semibold leading-snug mb-0.5">{item.label}</p>
                <p className="text-white/45 text-xs leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Carrusel móvil (oculto en desktop) */}
          <div className="lg:hidden relative overflow-hidden h-64">
            {/* Track deslizante */}
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {mobileSlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Propiedad Atencia Homes"
                  className="w-full h-full flex-shrink-0 object-cover"
                />
              ))}
            </div>

            {/* Flecha izquierda */}
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {mobileSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === slide ? 'w-4 h-1.5 bg-[#ffc800]' : 'w-1.5 h-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT: galería desktop */}
        <div className="hidden lg:flex lg:w-1/1 h-230 items-center pt-[72px] pb-[140px] px-8 xl:px-10">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full h-full rounded-2xl overflow-hidden">
            <img src={hab3} alt="Propiedad Atencia Homes" className="row-span-2 w-full h-full object-cover object-center" fetchPriority="high" />
            <img src={hab2} alt="Propiedad Atencia Homes" className="w-full h-full object-cover" fetchPriority="high" />
            <img src={hab1} alt="Propiedad Atencia Homes" className="w-full h-full object-cover" />
            <img src={hab4} alt="Propiedad Atencia Homes" className="w-full h-full object-cover" />
            <img src={hab5} alt="Propiedad Atencia Homes" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}
