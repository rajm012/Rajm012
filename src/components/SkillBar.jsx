import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill, category, proficiency, lastUsed, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  
  // Calculate the circle values
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={skillRef}
      className="card relative p-6 overflow-hidden group transition-all hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle 
              cx="60" 
              cy="60" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth="7" 
              fill="none" 
              className="text-gray-200 dark:text-indigo-700"
            />
            
            {/* Progress circle */}
            <circle 
              cx="60" 
              cy="60" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth="7" 
              fill="none" 
              strokeLinecap="round"
              className="text-violet-500 dark:text-violet-300 transform -rotate-90 origin-center"
              strokeDasharray={circumference}
              strokeDashoffset={isVisible ? strokeDashoffset : circumference}
              style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
            />
            
            {/* Skill percentage */}
            <text 
              x="60" 
              y="55" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="font-bold text-xl fill-indigo-900 dark:fill-indigo-100"
            >
              {proficiency}%
            </text>
            
            {/* Last used label */}
            <text 
              x="60" 
              y="75" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-xs fill-gray-500 dark:fill-indigo-300"
            >
              {lastUsed}
            </text>
          </svg>
          
          {/* Icon overlay */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30 pointer-events-none">
            <div className="text-3xl text-violet-500 dark:text-violet-300">
              {icon}
            </div>
          </div>
        </div>
        
        <h3 className="font-medium text-lg text-indigo-900 dark:text-indigo-100">{skill}</h3>
        <p className="text-sm text-gray-600 dark:text-indigo-300">{category}</p>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/90 dark:bg-indigo-800/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
          <div className="text-center p-4 text-white">
            <p className="text-lg font-medium">{skill}</p>
            <p className="text-sm text-indigo-200">Last used: {lastUsed}</p>
            <p className="text-2xl font-bold mt-2">{proficiency}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBar;
