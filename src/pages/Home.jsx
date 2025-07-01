import { Link } from 'react-router-dom';
import profilePhoto from '../assets/Raj-1.jpg'; // Import your photo
import newprofile from '../assets/w10.png';

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-violet-500/20 dark:bg-violet-300/10 rounded-full blur-3xl top-1/4 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/20 dark:bg-indigo-300/10 rounded-full blur-3xl bottom-1/4 -right-48 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 animate-fade-in">
            <p className="text-violet-500 dark:text-violet-300 font-medium mb-2">
              Hi, I'm Raj –
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
              Creative Developer & Problem Solver
            </h1>
            <p className="text-gray-600 dark:text-indigo-300 text-lg mb-8">
              I'm passionate about crafting elegant solutions to complex problems through code. 
              Specializing in full-stack development, AI/ML, and algorithmic design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/assets/rajm012-1.pdf" 
                download="Raj_M_Resume.pdf" 
                className="btn-primary"
              >
                Download Resume
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in animate-delay-300">
            <div className="relative w-full max-w-md mx-auto">
              {/* Hero image */}
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-indigo-700 shadow-xl">
                <img 
                  src={newprofile} 
                  alt="Raj M" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-500 dark:bg-violet-300 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-500 dark:bg-indigo-300 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 animate-fade-in animate-delay-500">
          <h2 className="text-2xl font-bold text-center text-indigo-900 dark:text-indigo-100 mb-8">
            Featured Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'TailwindCSS'].map((tech, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-white dark:bg-indigo-800 rounded-full shadow-md text-indigo-900 dark:text-indigo-100"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
