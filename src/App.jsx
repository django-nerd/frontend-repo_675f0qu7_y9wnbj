import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-pink-500/30 selection:text-white">
      {/* atmospheric bg */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(236,72,153,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6)_30%,rgba(2,6,23,1))]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} נועה - טיפולי פנים. כל הזכויות שמורות.
      </footer>
    </div>
  );
}

export default App;
