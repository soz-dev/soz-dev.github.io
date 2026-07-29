import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Process from "./components/Process"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <About />
      <Stack />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
