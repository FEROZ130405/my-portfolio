import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col font-sans text-left selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
