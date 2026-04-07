import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Agency from './components/Agency'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LogoMarquee } from './components/ui/logo-marquee'

const SECTION_TITLES = {
  home:     'Studio Agency — Home',
  agency:   'Studio Agency — Agency',
  services: 'Studio Agency — Services',
  work:     'Studio Agency — Work',
  contact:  'Studio Agency — Contact',
}

function App() {
  useEffect(() => {
    // Prevent browser scroll restoration and clear hash
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);

    const sections = Object.keys(SECTION_TITLES).map(id => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.title = SECTION_TITLES[entry.target.id] ?? 'Studio Agency'
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(section => observer.observe(section))
    return () => sections.forEach(section => observer.unobserve(section))
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Agency />
        <LogoMarquee />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
