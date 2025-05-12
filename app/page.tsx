import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Education from "@/components/sections/Education"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
