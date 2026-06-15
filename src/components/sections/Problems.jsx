const problems = [
  { label: 'Morosos que no pagan', desc: 'Inquilinos que acumulan deuda y se niegan a salir.' },
  { label: 'Retrasos en el pago', desc: 'Incertidumbre cada mes sobre cuándo cobrarás.' },
  { label: 'Miedo a la ocupación', desc: 'Terror a que tu vivienda quede tomada ilegalmente.' },
  { label: 'Daños en la propiedad', desc: 'Desperfectos que nadie quiere asumir.' },
  { label: 'Reparaciones urgentes', desc: 'Llamadas a cualquier hora por averías y problemas.' },
  { label: 'Quejas de vecinos', desc: 'Conflictos de convivencia que recaen sobre ti.' },
  { label: 'Gestión de suministros', desc: 'Contratos, facturas y cambios de titular infinitos.' },
  { label: 'Desprotección legal', desc: 'No saber qué puedes hacer cuando algo sale mal.' },
]

export default function Problems() {
  return (
    <section id="adios-problemas" className="bg-[#080c13] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline + problems list */}
          <div>
            <div className="w-10 h-[3px] bg-[#ffc800] rounded-full mb-5" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
              ¿Te suena algo de esto?
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-10">
              Ser propietario no debería ser un segundo trabajo. Estos son los problemas que resolvemos para ti.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <li key={p.label} className="flex items-start gap-3">
                  {/* X icon */}
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/15 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">{p.label}</p>
                    <p className="text-white/40 text-xs mt-0.5 leading-snug">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: solution card */}
          <div className="relative">
            {/* Glow background */}
            <div className="absolute inset-0 bg-[#154360]/20 rounded-3xl blur-3xl scale-95" aria-hidden="true" />

            <div className="relative bg-white/4 border border-white/10 rounded-3xl p-8 xl:p-10">

              <div className="w-12 h-12 rounded-2xl bg-[#ffc800]/15 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#ffc800]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>

              <h3 className="text-white text-xl font-bold mb-3">
                Con Atencia Homes, olvídate de todo eso.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Firmamos un contrato contigo y nos convertimos en tu inquilino. Tu cobras cada mes, nosotros gestionamos absolutamente todo.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-white/8 pt-6">
                {[
                  { value: '+120', label: 'Propietarios satisfechos' },
                  { value: '100%', label: 'Pago garantizado' },
                  { value: '3-7', label: 'Años de contrato' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-[#ffc800] font-extrabold text-xl xl:text-2xl">{stat.value}</p>
                    <p className="text-white/40 text-xs mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/34642429362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#ffc800] hover:bg-yellow-400 text-[#0d1117] font-bold text-sm py-3.5 rounded-xl transition-colors duration-200"
              >
                Quiero dejar de preocuparme
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
