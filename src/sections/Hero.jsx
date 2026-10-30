import { personalData } from '../data/content.js';

export default function Hero() {
  const { name, profileImage, title, summary, contact, education } = personalData;

  return (
    <section id="hero" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-zinc-950">
      {/* Subtle ambient blue/red glow backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Picture with Futuristic Angular Frame */}
          {profileImage && (
            <div className="relative inline-block mb-8 group">
              <div className="relative p-1.5 rounded-none bg-zinc-900/60 backdrop-blur-md border border-zinc-800 group-hover:border-blue-500/80 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                {/* Cyber Corner Brackets in Red on all 4 corners */}
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-red-500" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-red-500" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-500" />
                
                <img
                  src={profileImage}
                  alt={name}
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-none object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Terminal-style Status Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-zinc-900/60 border border-zinc-800 font-mono text-xs uppercase tracking-wider text-blue-400 shadow-xs">
              <span className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
              <span>SYS.STATUS // <span className="text-red-400">OPEN FOR SOFTWARE ROLES</span></span>
            </div>
          </div>

          {/* Heading: "Hi, I'm" in red, Name in blue gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-sans">
            <span
              className="text-red-500 font-sans"
              style={{ color: '#ef4444' }}
            >
              Hi, I'm{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 font-mono">
              {name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-red-500 font-mono text-sm">&gt;</span>
            <p className="font-mono text-lg sm:text-xl text-blue-400 tracking-wide font-medium">
              {title}
              <span className="text-red-500 animate-pulse ml-0.5">_</span>
            </p>
          </div>

          {/* Summary */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            {summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-none bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-mono text-xs uppercase tracking-wider font-semibold border border-zinc-800 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Initialize Contact
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-none bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-blue-400 font-mono text-xs uppercase tracking-wider border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-200 inline-flex items-center gap-2"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick stats / metadata big cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-8 border-t border-red-500/20 text-left">
            <div className="p-4 rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:border-l-2 hover:border-l-red-500 transition-all">
              <span className="font-mono text-[11px] uppercase tracking-widest text-red-400">
                // SPEC.FOCUS
              </span>
              <p className="mt-1 text-base font-bold text-zinc-100 font-sans">Full Stack & UI Dev</p>
              <p className="text-xs font-mono text-blue-400 mt-1">React.js · Spring Boot</p>
            </div>
            <div className="p-4 rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:border-l-2 hover:border-l-red-500 transition-all">
              <span className="font-mono text-[11px] uppercase tracking-widest text-red-400">
                // ACADEMIC.CRED
              </span>
              <p className="mt-1 text-base font-bold text-zinc-100 font-sans">{education.institution}</p>
              <p className="text-xs font-mono text-blue-400 mt-1">{education.degree} ({education.cgpa})</p>
            </div>
            <div className="p-4 rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:border-l-2 hover:border-l-red-500 transition-all">
              <span className="font-mono text-[11px] uppercase tracking-widest text-red-400">
                // GEO.LOC
              </span>
              <p className="mt-1 text-base font-bold text-zinc-100 font-sans">{contact.location}</p>
              <p className="text-xs font-mono text-blue-400 mt-1">Relocation / Remote: Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
