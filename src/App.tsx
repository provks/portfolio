import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Service from "./components/layout/Service";
import Projects from "./components/layout/Projects";
import Results from "./components/layout/Results";
import CTA from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";
import Industries from "./components/layout/Industries";
import Process from "./components/layout/Process";
function App() {

  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Industries />
      <Process />
      <Projects /> 
      <Results /> 
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
