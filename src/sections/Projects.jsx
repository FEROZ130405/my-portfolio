import { personalData } from '../data/content.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  const { projects } = personalData;

  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-950/80 border-t border-red-500/20 shadow-[0_-4px_20px_-2px_rgba(239,68,68,0.12)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-red-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              // 03. PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans">
            <span className="text-zinc-100">Featured </span>
            <span className="text-blue-400 font-mono">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">
            Architected full-stack systems, decentralized protocols, and reactive client interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
