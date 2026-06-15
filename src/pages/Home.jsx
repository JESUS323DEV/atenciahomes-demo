import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Problems from '../components/sections/Problems'
import HowItWorks from '../components/sections/HowItWorks'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Atencia Homes | Alquila tu vivienda sin preocupaciones</title>
        <meta name="description" content="Somos tu inquilino perfecto. Gestionamos tu vivienda, te pagamos cada mes y no tienes que preocuparte por nada. Análisis gratuito sin compromiso." />
        <meta name="keywords" content="rent to rent, gestión alquiler, propietarios, coliving, alquiler garantizado, Barcelona, Madrid, Valencia, Málaga, Sevilla, Bilbao" />
        <link rel="canonical" href="https://atenciahomes.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atenciahomes.com/" />
        <meta property="og:title" content="Atencia Homes | Alquila tu vivienda sin preocupaciones" />
        <meta property="og:description" content="Somos tu inquilino perfecto. Te pagamos cada mes, gestionamos todo." />
        <meta property="og:image" content="https://atenciahomes.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <Hero />
        <Problems />
        <HowItWorks />
      </main>
    </>
  )
}
