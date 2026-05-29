import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Service from "./components/layout/Service";
function App() {

  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Service /> 
      {/* <h1 className="text-5xl font-bold text-center pt-32">
        Portfolio Coming Soon
      </h1> */}
    </main>
  )
}

export default App
