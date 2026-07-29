import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <Navbar />
      <Hero />
      <Services />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
