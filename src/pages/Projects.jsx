import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../index.css'; // Ensure styles are applied

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeTag, setActiveTag] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Load projects from JSON file
  useEffect(() => {
    fetch('/projects/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading projects:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  // Get unique tags
  const allTags = projects.flatMap(project => project.tags);
  const uniqueTags = ['All', ...new Set(allTags)];
  
  useEffect(() => {
    if (activeTag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.includes(activeTag)
      ));
    }
  }, [activeTag, projects]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">My Projects</h1>
        
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
            <p className="mt-4 text-gray-600 dark:text-indigo-300">Loading projects...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-md p-4 max-w-md mx-auto">
              <p className="text-red-700 dark:text-red-200">⚠️ {error}</p>
            </div>
          </div>
        )}
        
        {!loading && !error && (
          <>
            <div className="mb-10 flex flex-wrap gap-3 justify-center">
              {uniqueTags.map((tag, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeTag === tag
                      ? 'bg-violet-500 dark:bg-violet-300 text-white dark:text-indigo-900'
                      : 'bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 hover:bg-violet-100 dark:hover:bg-indigo-700'
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in flex" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    github={project.github}
                    demo={project.demo}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600 dark:text-indigo-300">
                  No projects found with the selected tag.
                </h3>
                <button
                  className="mt-4 btn-secondary"
                  onClick={() => setActiveTag('All')}
                >
                  Show All Projects
                </button>
              </div>
            )}
          </>
        )}
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
            Interested in my work?
          </h2>
          <p className="text-gray-600 dark:text-indigo-300 mb-6 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. Check out my GitHub for more projects or reach out if you'd like to collaborate!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/rajm012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span className="flex items-center">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                More Projects on GitHub
              </span>
            </a>
            <a 
              href="/contact" 
              className="btn-primary"
            >
              <span className="flex items-center">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
