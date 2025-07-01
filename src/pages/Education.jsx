import { education } from '../data/education';

const Education = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Education</h1>
        
        <div className="relative border-l-2 border-violet-500 dark:border-violet-300 pl-8 ml-4">
          {education.map((item, index) => (
            <div 
              key={item.id}
              className="mb-12 relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-violet-500 dark:bg-violet-300 rounded-full -left-11 border-4 border-white dark:border-indigo-900"></div>
              
              <div className="card">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                      {item.degree}
                    </h2>
                    <h3 className="text-xl text-violet-500 dark:text-violet-300">
                      {item.institution}
                    </h3>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 dark:text-indigo-300">
                    <p className="text-right">{item.duration}</p>
                    <p className="text-right">{item.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-indigo-300 mb-4">
                  {item.description}
                </p>
                
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                      Achievements
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-indigo-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.courses && item.courses.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.certifications && item.certifications.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                      Certifications
                    </h4>
                    <div className="space-y-3">
                      {item.certifications.map((cert, i) => (
                        <div 
                          key={i}
                          className="p-3 border border-indigo-100 dark:border-indigo-700 rounded-lg bg-white/50 dark:bg-indigo-800/50"
                        >
                          <h5 className="font-medium text-indigo-900 dark:text-indigo-100">
                            {cert.name}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-indigo-300">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
            Continuous Learning
          </h2>
          <p className="text-gray-600 dark:text-indigo-300 mb-6 max-w-2xl mx-auto">
            Learning is a lifelong journey. I'm constantly expanding my knowledge through online resources, 
            technical books, and hands-on projects. I believe in staying updated with the latest technologies and industry trends.
          </p>
          <a 
            href="/assets/rajm012-1.pdf" 
            download="Raj_Maurya_Resume.pdf" 
            className="btn-primary inline-block"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
