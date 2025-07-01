import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import './index.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <a href="/" className="px-4 py-2 bg-violet-500 dark:bg-violet-300 text-white dark:text-indigo-900 rounded-md hover:opacity-90 transition-opacity">
            Back to Home
          </a>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;
