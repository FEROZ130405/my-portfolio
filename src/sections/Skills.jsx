import { useState } from 'react';
import { personalData } from '../data/content.js';

export default function Skills() {
  const { skills, skillsCategorized } = personalData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsCategorized.map((c) => c.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skillsCategorized.find((c) => c.category === activeCategory)?.items || [];

  // Helper to get category label for any skill
  const getSkillCategory = (skillName) => {
    for (const group of skillsCategorized) {
      if (group.items.includes(skillName)) {
        return group.category;
      }
    }
    return 'Technical Skill';
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-950/90 border-t border-blue-500/20 shadow-[0_-4px_20px_-2px_rgba(59,130,246,0.12)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-blue-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
              // 01. TECHNICAL MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans">
            <span className="text-zinc-100">Skills & </span>
            <span className="text-red-500 font-mono">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">
            Compiled competencies across modern full-stack web architectures, programming languages, and runtime engines.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-500/10 border border-blue-500 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                    : 'bg-[#11141c]/50 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill}
              className="group p-4 rounded-none bg-[#11141c]/45 backdrop-blur-md border border-zinc-800 hover:border-red-500/70 hover:border-l-2 hover:border-l-blue-500 hover:border-b-2 hover:border-b-red-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-1.5 h-1.5 bg-red-400 group-hover:scale-125 transition-transform" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors">
                  {getSkillCategory(skill).split(' ')[0]}
                </span>
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-100 group-hover:text-red-300 transition-colors font-sans">
                  {skill}
                </p>
                <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  &gt; {getSkillCategory(skill)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Summary Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-8 border-t border-blue-500/20 shadow-[0_-2px_15px_rgba(59,130,246,0.08)]">
          {skillsCategorized.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-none bg-[#11141c]/45 backdrop-blur-md border border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.06)] hover:border-blue-500/40 transition-colors"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>{group.category}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono rounded-none bg-zinc-950 border border-zinc-800/90 text-zinc-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
