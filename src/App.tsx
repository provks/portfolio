import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
function App() {

  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      {/* <h1 className="text-5xl font-bold text-center pt-32">
        Portfolio Coming Soon
      </h1> */}
    </main>
  )
}

export default App
