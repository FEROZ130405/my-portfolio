import { personalData } from '../data/content.js';

export default function Experience() {
  const { experience, education } = personalData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-950 border-t border-red-500/20 shadow-[0_-4px_20px_-2px_rgba(239,68,68,0.12)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-blue-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
              // 02. ACADEMIC TIMELINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans">
            <span className="text-zinc-100">Academic Timeline </span>
            <span className="text-red-500 font-mono">& Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">
            Hands-on professional engineering experience and formal academic credentials.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-6 md:pl-8 space-y-12">
            {/* Experience Items */}
            {experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Cyber Timeline Node Dot (Blue Diamond) */}
                <span className="absolute -left-[30px] md:-left-[38px] top-2 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="relative h-2.5 w-2.5 bg-blue-500 rotate-45 ring-4 ring-zinc-950 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                </span>

                {/* Experience Big Card with subtle red glow border */}
                <div className="p-6 rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-l-2 hover:border-l-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-none text-xs font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {item.type || 'Internship'}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      // {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors font-sans mt-2">
                    {item.role}
                  </h3>

                  <p className="text-sm font-semibold text-zinc-300 mt-1 font-sans">
                    {item.company}
                  </p>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  {item.achievements && (
                    <ul className="mt-4 space-y-2 text-sm text-zinc-300 font-sans">
                      {item.achievements.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 font-mono text-xs mt-0.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack badges */}
                  {item.technologies && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-none text-xs font-mono bg-zinc-950 text-blue-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Education Node */}
            <div className="relative group">
              {/* Cyber Timeline Node Dot (Red Diamond) */}
              <span className="absolute -left-[30px] md:-left-[38px] top-2 flex h-3.5 w-3.5 items-center justify-center">
                <span className="relative h-2.5 w-2.5 bg-red-500 rotate-45 ring-4 ring-zinc-950 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
              </span>

              {/* Education Big Card with subtle red glow border */}
              <div className="p-6 rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-l-2 hover:border-l-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-none text-xs font-mono uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/30">
                    ACADEMIC DEGREE
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    // {education.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-red-400 transition-colors font-sans mt-2">
                  {education.degree}
                </h3>

                <p className="text-sm font-semibold text-zinc-300 mt-1 font-sans">
                  {education.institution}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-none text-xs font-mono font-semibold bg-zinc-950 text-blue-400 border border-zinc-800">
                    CGPA // {education.cgpa}
                  </span>
                </div>

                {education.highlights && (
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-sans">
                    {education.highlights}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
