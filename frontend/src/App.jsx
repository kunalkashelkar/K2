import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Agency from './components/Agency'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Agency />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
