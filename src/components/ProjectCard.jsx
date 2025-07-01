import { useState } from 'react';

const ProjectCard = ({ title, description, image, techStack, github, demo, tags }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-100 dark:bg-indigo-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="w-full">
            <div className="flex space-x-2 mb-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-violet-500/80 dark:bg-violet-300/80 text-white dark:text-indigo-900"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                  aria-label="GitHub repository"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                  aria-label="Live demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                aria-label="Show project details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-100">{title}</h3>
      <div className="flex flex-wrap gap-1 mt-1 mb-2">
        {techStack.map((tech, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-600 dark:text-indigo-300 text-sm line-clamp-2">
        {description}
      </p>
      
      {/* Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)}>
          <div 
            className="bg-white dark:bg-indigo-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full aspect-video object-cover rounded-t-lg"
              />
              <button 
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">{title}</h2>
              <div className="flex flex-wrap gap-1 mb-4">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-indigo-300 mb-6">
                {description}
              </p>
              <div className="flex space-x-4">
                {github && (
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <span className="flex items-center">
                      <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      View Code
                    </span>
                  </a>
                )}
                {demo && (
                  <a 
                    href={demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span className="flex items-center">
                      <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
