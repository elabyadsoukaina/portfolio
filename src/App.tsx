import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-emerald-400 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
