import { personalData } from '../data/content.js';

export default function Contact() {
  const { name, contact, navLinks } = personalData;

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Let's Connect & Collaborate
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            I am always open to discussing new projects, internship and full-time opportunities, or tech in general.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Email Card */}
          <a
            href={`mailto:${contact.email}`}
            className="group p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
              Email
            </span>
            <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mt-1 break-all">
              {contact.email}
            </span>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="group p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
              Phone
            </span>
            <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mt-1">
              {contact.phone}
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
              GitHub Profile
            </span>
            <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mt-1">
              github.com/FEROZ130405
            </span>
          </a>
        </div>

        {/* Location pill */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 shadow-xs">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Based in {contact.location}</span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} {name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#hero"
              className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Back to top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
