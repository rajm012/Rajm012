import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 1) {
      errors.message = 'Message is too short (minimum 10 characters)';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Get In Touch</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="card h-full">
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 dark:text-green-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-indigo-900 dark:text-indigo-100">Message Sent!</h2>
                  <p className="text-gray-600 dark:text-indigo-300 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    className="btn-secondary"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        formErrors.name 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-indigo-600'
                      } bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-300`}
                      placeholder="Raj Maurya"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        formErrors.email 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-indigo-600'
                      } bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-300`}
                      placeholder="rajmahimaurya@gmail.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-indigo-600 bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-300"
                      placeholder="Hi!, its Good to see you here!"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        formErrors.message 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-indigo-600'
                      } bg-white dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-300`}
                      placeholder="Your message..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn-primary w-full flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-500 dark:text-violet-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Email</h3>
                    <a href="mailto:rajmahimaurya@gmail.com" className="text-violet-500 dark:text-violet-300 hover:underline">rajmahimaurya@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-500 dark:text-violet-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Location</h3>
                    <p className="text-gray-600 dark:text-indigo-300">IIT Mandi, Himachal Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-500 dark:text-violet-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Availability</h3>
                    <p className="text-gray-600 dark:text-indigo-300">Here for you — Wherever, Whenever</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/rajm012" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 hover:bg-gray-200 dark:hover:bg-indigo-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/raj-maurya-271b32237/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 hover:bg-gray-200 dark:hover:bg-indigo-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/rajm012" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 hover:bg-gray-200 dark:hover:bg-indigo-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  Twitter
                </a>
                <a 
                  href="/assets/rajm012-1.pdf"
                  download="Raj_M_Resume.pdf" 
                  className="flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 hover:bg-gray-200 dark:hover:bg-indigo-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
