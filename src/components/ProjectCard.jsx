export default function ProjectCard({ project, index }) {
  return (
    <div className="group flex flex-col justify-between rounded-none bg-zinc-900/40 backdrop-blur-md border border-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-l-2 hover:border-l-red-500 hover:border-b-2 hover:border-b-blue-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        {/* Top card header with cyber icon & index */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-none bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <span className="font-mono text-xs tracking-widest text-red-400 group-hover:text-red-300 transition-colors">
            // 0{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors font-sans">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Key Features Bullet points */}
        {project.features && (
          <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              SYS.HIGHLIGHTS
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <span className="text-red-500 font-mono text-xs">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Footer: Tech tags + action */}
      <div className="p-6 pt-0 mt-auto">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-none text-xs font-mono bg-zinc-950 border border-zinc-800/90 text-blue-300 group-hover:border-blue-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-none text-xs font-mono tracking-wider uppercase font-semibold bg-zinc-900/80 hover:bg-blue-600 text-zinc-200 hover:text-white border border-zinc-800 hover:border-blue-500 transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>VIEW ON GITHUB</span>
        </a>
      </div>
    </div>
  );
}
