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
function App() {

  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects /> 
      <Results /> 
      <CTA />
      <Contact />
      <Footer />
      {/* <h1 className="text-5xl font-bold text-center pt-32">
        Portfolio Coming Soon
      </h1> */}
    </main>
  )
}

export default App
