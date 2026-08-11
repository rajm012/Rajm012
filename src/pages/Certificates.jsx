import { certificates } from '../data/certificates';

const Certificates = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Certificates</h1>

        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-indigo-300">
            A static gallery of certificates stored in the public folder and served directly by Vite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="card group animate-fade-in overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-indigo-50 dark:bg-indigo-800 mb-4 border border-indigo-100 dark:border-indigo-700">
                {cert.type === 'image' ? (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-indigo-900 shadow-sm flex items-center justify-center mb-4 text-3xl">
                      📄
                    </div>
                    <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">
                      PDF Document
                    </p>
                    <p className="text-xs text-gray-500 dark:text-indigo-300 mt-1 break-all">
                      {cert.file.split('/').pop()}
                    </p>
                  </div>
                )}
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs bg-black/60 text-white uppercase tracking-wide">
                  {cert.type}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                {cert.title}
              </h2>

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500 dark:text-indigo-300">
                  File {String(index + 1).padStart(2, '0')}
                </span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {cert.type === 'pdf' ? 'View PDF' : 'View Image'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
