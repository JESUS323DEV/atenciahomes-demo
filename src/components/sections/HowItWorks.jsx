const steps = [
  {
    number: '01',
    title: 'Análisis gratuito',
    desc: 'Evaluamos tu vivienda sin compromiso y te presentamos una propuesta personalizada.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z" />
    ),
  },
  {
    number: '02',
    title: 'Firma del contrato',
    desc: 'Formalizamos un contrato claro y seguro con una duración de entre 3 y 7 años.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    ),
  },
  {
    number: '03',
    title: 'Puesta a punto',
    desc: 'Acondicionamos y amueblamos el inmueble para el modelo coliving sin coste para ti.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    ),
  },
  {
    number: '04',
    title: 'Gestión integral',
    desc: 'Gestionamos suministros, limpieza, mantenimiento y la relación con los inquilinos.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    ),
  },
  {
    number: '05',
    title: 'Atención personalizada',
    desc: 'Tienes un gestor dedicado disponible para cualquier consulta sobre tu propiedad.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    ),
  },
  {
    number: '06',
    title: 'Cobramos tu alquiler',
    desc: 'Recibes tu pago mensual garantizado, sin depender de que los inquilinos paguen.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#0d1117] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="w-10 h-[3px] bg-[#ffc800] rounded-full mb-5" aria-hidden="true" />
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Un proceso simple y transparente para que tu vivienda empiece a generar ingresos sin complicaciones.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white/3 hover:bg-white/6 border border-white/8 hover:border-[#ffc800]/30 rounded-2xl p-7 transition-all duration-300"
            >
              {/* Número */}
              <span className="text-[#ffc800]/25 font-black text-5xl leading-none select-none absolute top-5 right-6">
                {step.number}
              </span>

              {/* Icono */}
              <div className="w-11 h-11 rounded-xl bg-[#154360]/60 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#ffc800]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  {step.icon}
                </svg>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="https://wa.me/34642429362"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ffc800] hover:bg-yellow-400 text-[#0d1117] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200"
          >
            Solicita tu análisis gratuito
          </a>
          <p className="text-white/40 text-sm">Sin compromiso. Respuesta en menos de 24h.</p>
        </div>

      </div>
    </section>
  )
}
