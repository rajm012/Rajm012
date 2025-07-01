const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-indigo-900 dark:text-indigo-100">About Me</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none text-indigo-900 dark:text-indigo-100">
              <p className="lead text-xl mb-6 text-indigo-900 dark:text-indigo-100">
                I'm Raj, a BTech undergrad who loves exploring how tech can solve real problems. Lately, I've been diving deep into deep learning and math behind it — but I also enjoy building practical web apps that just work. Whether it's a model, a website, or a small tool, I like making things that matter.
              </p>

              <h2 className="text-indigo-900 dark:text-indigo-100">My Journey</h2>
              <p className="text-indigo-900 dark:text-indigo-100">
                I started coding during my first year of college, and what began with small curiosity turned into a consistent passion. Over time, I explored different areas like DSA, web development, machine learning, and system design, learning how tech can help solve problems both big and small.
              </p>
              <p className="text-indigo-900 dark:text-indigo-100">
                In the beginning, my projects were more hands-on and offline — like solving structural issues or basic mechanical setups around me. But soon, I started building software that could extend those ideas into usable tools and platforms.
              </p>

              <h2 className="text-indigo-900 dark:text-indigo-100">What I Do Now</h2>
              <p className="text-indigo-900 dark:text-indigo-100">
                Right now, I'm exploring the depths of deep learning and mathematical foundations behind it. After recently building a model from scratch to classify real vs. fake videos, I've become more interested in understanding how models actually learn — beyond just using libraries. This has led me to dive deeper into neural networks, optimization, and linear algebra.
              </p>

              <p className="text-indigo-900 dark:text-indigo-100">
                On the side, I keep sharpening my full-stack development skills. I've built self-driven projects like a ticket booking system and a space quiz platform — I enjoy crafting clean UIs and connecting them to powerful backend logic. And honestly, when I need a break from math-heavy concepts, building web apps is my way to recharge.
              </p>

              <p className="text-indigo-900 dark:text-indigo-100">
                Whether it's writing an API, debugging a training loop, or just making a button feel right — I believe each small detail matters and adds up to something meaningful.
              </p>


              <h2 className="text-indigo-900 dark:text-indigo-100">Beyond Tech</h2>
              <p className="text-indigo-900 dark:text-indigo-100">
                When I'm not writing code, I immerse myself in ideas that go beyond the digital world. I'm deeply interested in movies and web series — not just for entertainment, but for the way they reflect human nature, culture, and unsaid truths. My curiosity also extends into philosophy, psychology, and Hindi Sahitya, where I find perspectives that challenge the way we think and live.
              </p>

              <p className="text-indigo-900 dark:text-indigo-100">
                I often explore themes of social injustice, inequality, and identity through reading, discussion, and writing. I believe that technology alone can't change the world — the ideas behind it must come from empathy, awareness, and the courage to question norms. Whether it's expressing thoughts on societal issues or simplifying a broken process around me, I strive to make a difference, however small.
              </p>

              <h2 className="text-indigo-900 dark:text-indigo-100">My Belief</h2>
              <p className="text-indigo-900 dark:text-indigo-100">
                I believe in building things that work — simple, functional, and meaningful. For me, learning to code was never just about syntax or frameworks, but about using technology to solve the right problems in the right way.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">Quick Check</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block mr-3 text-violet-500 dark:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Location</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">IIT Mandi, Himachal Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 text-violet-500 dark:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Email</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">rajmahimaurya@gmail.com  b23406@students.iitmandi.ac.in</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 text-violet-500 dark:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Education</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">BTech in Mathematics and Computing, IIT Mandi</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 text-violet-500 dark:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Languages</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">English, Hindi</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card mt-6">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[ 'Movies-Series', 'Reading', 'Travel', 'Running', 'Music', 'Cycling','Philosophy'].map((hobby, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
