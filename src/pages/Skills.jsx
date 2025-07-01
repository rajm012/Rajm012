import { useState, useEffect } from 'react';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);
  
  // Get unique categories
  const categories = ['all', ...new Set(skills.map(category => category.category.toLowerCase()))];
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(category => 
        category.category.toLowerCase() === activeCategory
      ));
    }
  }, [activeCategory]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">My Skills</h1>
        
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-violet-500 dark:bg-violet-300 text-white dark:text-indigo-900'
                  : 'bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 hover:bg-violet-100 dark:hover:bg-indigo-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="space-y-12">
          {filteredSkills.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <h2 className="text-2xl font-bold mb-6 text-indigo-900 dark:text-indigo-100 border-l-4 border-violet-500 pl-4">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill.name}
                    category={category.category}
                    proficiency={skill.proficiency}
                    lastUsed={skill.lastUsed}
                    icon={
                      <div dangerouslySetInnerHTML={{ __html: skill.icon }} />
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 card p-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
            Currently Learning
          </h2>
          <div className="flex flex-wrap gap-3">
            {['GraphQL', 'AWS Lambda', 'WebAssembly', 'Rust', 'Kubernetes', 'Deep Learning', 'Cybersecurity', 'Generative AI'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
