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
    <section id="skills" className="py-16 md:py-24 bg-gray-50/80 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Technical Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Skills & Technologies
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Core programming languages, libraries, frameworks, and developer tools in my stack.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300'
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
              className="group p-4 rounded-xl bg-white hover:bg-blue-50/40 border border-gray-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 group-hover:text-blue-600 transition-colors">
                  {getSkillCategory(skill).split(' ')[0]}
                </span>
              </div>
              <div>
                <p className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {skill}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {getSkillCategory(skill)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Summary Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          {skillsCategorized.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs"
            >
              <h3 className="text-sm font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-blue-600 rounded-sm" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 border border-gray-200"
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
