import { personalData } from '../data/content.js';

export default function Experience() {
  const { experience, education } = personalData;

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Career Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Work Experience & Education
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Hands-on professional internship experience and academic milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8 pl-6 md:pl-8 space-y-12">
            {/* Experience Items */}
            {experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node Dot */}
                <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 ring-4 ring-white" />
                </span>

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      {item.type || 'Internship'}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.role}
                  </h3>

                  <p className="text-base font-semibold text-gray-700 mt-1">
                    {item.company}
                  </p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  {item.achievements && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {item.achievements.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold mt-0.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack badges */}
                  {item.technologies && (
                    <div className="mt-5 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-xs font-medium bg-white text-gray-700 border border-gray-300 shadow-xs"
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
              {/* Timeline Node Dot */}
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-600 ring-4 ring-white" />
              </span>

              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 hover:border-cyan-400 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
                    Academic Degree
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {education.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                  {education.degree}
                </h3>

                <p className="text-base font-semibold text-gray-700 mt-1">
                  {education.institution}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    Academic Score: {education.cgpa}
                  </span>
                </div>

                {education.highlights && (
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
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
