import { personalData } from '../data/content.js';

export default function Hero() {
  const { name, profileImage, title, summary, contact, education } = personalData;

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
      {/* Decorative gradient blur background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Picture */}
          {profileImage && (
            <div className="relative inline-block mb-6">
              <div className="relative">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-xl ring-4 ring-blue-100 mx-auto"
                />
                <span
                  className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-white shadow-xs"
                  title="Available for opportunities"
                />
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open for Software Development Roles</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
            {title}
          </p>

          {/* Summary */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
            {summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-300 shadow-xs transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold border border-gray-300 transition-all duration-200 inline-flex items-center gap-2"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick stats / metadata cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-gray-200 text-left">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Specialization</span>
              <p className="mt-1 text-base font-bold text-gray-900">Full Stack & UI Dev</p>
              <p className="text-xs text-blue-600 font-medium mt-0.5">React.js · Spring Boot</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Education</span>
              <p className="mt-1 text-base font-bold text-gray-900">{education.institution}</p>
              <p className="text-xs text-blue-600 font-medium mt-0.5">{education.degree} ({education.cgpa})</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Location</span>
              <p className="mt-1 text-base font-bold text-gray-900">{contact.location}</p>
              <p className="text-xs text-emerald-700 font-medium mt-0.5">Available for relocation / remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
