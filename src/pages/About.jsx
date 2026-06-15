import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Atencia Homes</title>
        <meta name="description" content="Conoce a Atencia Homes. Somos especialistas en gestión de alquileres rent to rent. Ayudamos a propietarios a maximizar sus ingresos sin preocupaciones." />
        <link rel="canonical" href="https://atenciahomes.com/quienes-somos" />
      </Helmet>

      <main className="pt-[72px] bg-[#0d1117] min-h-screen text-white">
        {/* Secciones de Sobre Nosotros aquí */}
        <div id="quienes-somos" />
        <div id="preguntas-frecuentes" />
      </main>
    </>
  )
}
