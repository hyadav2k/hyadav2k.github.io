import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, User, Home, ArrowRight, Download, Sparkles } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'projects', label: 'Projects', icon: <ExternalLink size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'glass-effect shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-[var(--text)] flex items-center">
            <span className="mr-2 text-[var(--primary)]">Harshit</span> Yadav
            <Sparkles className="ml-2 text-[var(--accent)]" size={18} />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${activeSection === link.id ? 'active font-medium' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--text)]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center w-full py-3 px-4 ${activeSection === link.id ? 'text-[var(--primary)] font-medium' : 'text-[var(--text)]'} animate-fade-in delay-${index * 100}`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] font-medium mb-6 animate-fade-in">
                <span>Machine Learning Engineer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                Hi, I'm <span className="text-[var(--primary)]">Harshit Yadav</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[var(--text-light)] mb-8 animate-fade-in delay-100">
                Building intelligent systems that solve complex problems
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-10 animate-fade-in delay-200 max-w-2xl mx-auto">
                I specialize in developing scalable machine learning solutions, optimizing model inference services, and creating robust data pipelines that transform ideas into powerful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-300">
                <a href="#contact" className="px-6 py-3 gradient-button text-white rounded-full font-medium flex items-center justify-center">
                  Get in touch <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#" className="px-6 py-3 outline-button rounded-full font-medium flex items-center justify-center">
                  Download CV <Download size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full border border-[var(--border)] bg-white/80"
              aria-label="Scroll down"
            >
              <ArrowRight size={20} className="transform rotate-90 text-[var(--primary)]" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-[var(--secondary)] relative overflow-hidden">
          <div className="animated-bg"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-title">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Harshit Yadav" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-lg">2+ Years</p>
                  <p className="text-sm text-[var(--text-light)]">Experience</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Machine Learning Engineer & Software Developer</h3>
                <p className="text-lg mb-6 text-[var(--text-light)]">
                  I'm a dedicated machine learning engineer with expertise in developing scalable ML services, optimizing model inference, and building 
                  robust data pipelines. I specialize in creating high-performance systems that tackle complex data challenges.
                </p>
                <p className="text-lg mb-6 text-[var(--text-light)]">
                  My approach combines technical expertise with innovative solutions, allowing me to deliver optimized systems that significantly 
                  improve performance and reduce costs. I'm constantly learning and exploring new technologies to stay at the 
                  forefront of the industry.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-white shadow-sm">
                    <p className="font-bold text-xl text-[var(--primary)]">5+</p>
                    <p className="text-sm text-[var(--text-light)]">Projects Completed</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white shadow-sm">
                    <p className="font-bold text-xl text-[var(--primary)]">90%</p>
                    <p className="text-sm text-[var(--text-light)]">Services Coverage</p>
                  </div>
                </div>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="inline-flex items-center font-medium text-[var(--primary)] hover:text-[var(--primary-dark)]">
                  View my experience <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Work Experience</h2>
            <div className="max-w-3xl">
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">Machine Learning Engineer - 2</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] text-sm font-medium">
                    Sept 2024 - Present
                  </span>
                </div>
                <p className="text-[var(--primary)] font-medium mb-2">NAVI Technologies, Bangalore</p>
                <p className="text-[var(--text-light)] mb-4">
                  Software Development, Machine Learning; Instructor in Miyagi - DataScience boot camp for freshers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Built a compliant automated DS workflow, enabling model experimentation, deployment, and monitoring using Temporal and MLflow for orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Engineered a multi-version model inference service supporting 40+ models on GPU infrastructure with 5ms latency and 10,000 RPM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Developed a scalable monitoring and alerting service (MARS) for data science teams, serving 90% of services</span>
                  </li>
                </ul>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">Machine Learning Engineer - 1</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] text-sm font-medium">
                    July 2023 - Aug 2024
                  </span>
                </div>
                <p className="text-[var(--primary)] font-medium mb-2">NAVI Technologies, Bangalore</p>
                <p className="text-[var(--text-light)] mb-4">
                  Software Development, Machine Learning; Awarded performance-based Navi Spearhead out of 40 DS team members.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Re-architected model serving in Golang with the orchestrator pattern, achieving 80% AWS cost reduction and 95% latency drop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Engineered a scalable, generic FastAPI service for hosting ML models, implementing async programming and SOLID principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Developed integrations with multiple feature stores and created self-service model automated onboarding platform</span>
                  </li>
                </ul>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] text-sm font-medium">
                    May 2022 - June 2022
                  </span>
                </div>
                <p className="text-[var(--primary)] font-medium mb-2">Samsung Research Institute, Bangalore</p>
                <p className="text-[var(--text-light)] mb-4">
                  Software Development, Natural Language Understanding, Machine Learning
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Developed a Hindi Chatbot for Samsung Finance Service using RASA with NLU training datasets and domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Created custom actions for multilingual support with language-agnostic core server and Entity Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] mt-2 mr-2"></span>
                    <span className="text-[var(--text-light)]">Received a PPO from SRI Bangalore and mentored an intern during the internship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section bg-[var(--secondary)] relative overflow-hidden">
          <div className="animated-bg"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Code size={20} className="mr-2 text-[var(--primary)]" />
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="skill-tag">Go</span>
                    <span className="skill-tag">Kotlin</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">C/C++</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">HTML/JS</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Briefcase size={20} className="mr-2 text-[var(--primary)]" />
                    Frameworks & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="skill-tag">SpringBoot</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">FastAPI</span>
                    <span className="skill-tag">Ray</span>
                    <span className="skill-tag">BentoML</span>
                    <span className="skill-tag">RASA</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">Kubernetes</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Sparkles size={20} className="mr-2 text-[var(--primary)]" />
                    Libraries & ML Packages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="skill-tag">C++ STL</span>
                    <span className="skill-tag">SymPy</span>
                    <span className="skill-tag">NumPy</span>
                    <span className="skill-tag">Pandas</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">Matplotlib</span>
                    <span className="skill-tag">Numba</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <User size={20} className="mr-2 text-[var(--primary)]" />
                    Cloud & Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="skill-tag">AWS S3</span>
                    <span className="skill-tag">Redis</span>
                    <span className="skill-tag">Kafka</span>
                    <span className="skill-tag">Airflow</span>
                    <span className="skill-tag">CUDA</span>
                    <span className="skill-tag">Azure AI Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Education</h2>
            <div className="max-w-3xl">
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">Integrated Bachelor and Master of Science</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] text-sm font-medium">
                    2018 - 2023
                  </span>
                </div>
                <p className="text-[var(--primary)] font-medium mb-2">Indian Institute of Technology (IIT), Kharagpur</p>
                <div className="p-4 bg-white rounded-lg shadow-sm mt-4">
                  <p className="text-[var(--text-light)]">
                    Department of Mathematics with CGPA of 8.00. Awarded INSPIRE scholarship for Innovation in Science Pursuit.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Mathematics</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">INSPIRE Scholar</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">IIT Kharagpur</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">All India Senior School Certificate Examination (Class 12)</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] text-sm font-medium">
                    2018
                  </span>
                </div>
                <p className="text-[var(--primary)] font-medium mb-2">SR Public Senior Secondary School, CBSE</p>
                <div className="p-4 bg-white rounded-lg shadow-sm mt-4">
                  <p className="text-[var(--text-light)]">
                    Graduated with 94.3% aggregate. Secured top 1.7% rank in IIT-JEE Advanced and top 0.4% rank in IIT-JEE Mains.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">CBSE</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">JEE Top Ranks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-[var(--secondary)] relative overflow-hidden">
          <div className="animated-bg"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-title">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="project-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Deep Researcher" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <a href="#" className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[var(--text)] flex items-center justify-center w-full hover:bg-white transition-colors">
                        View Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Deep Researcher</h3>
                  <p className="text-[var(--text-light)] mb-4">
                    Cost-optimized, iterative web research system with confidential data handling using DeepSeek-R1 model and Azure AI.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Python</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Azure AI</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">LLMs</span>
                  </div>
                </div>
              </div>
              
              <div className="project-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Medbot for Coronavirus" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <a href="#" className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[var(--text)] flex items-center justify-center w-full hover:bg-white transition-colors">
                        View Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Medbot for Coronavirus</h3>
                  <p className="text-[var(--text-light)] mb-4">
                    An interactive chatbot to answer coronavirus-related queries using RDF/OWL, AIML, and SWRLAPI technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">RDF/OWL</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">AIML</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">SWRLAPI</span>
                  </div>
                </div>
              </div>
              
              <div className="project-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="TweeSents" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <a href="#" className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[var(--text)] flex items-center justify-center w-full hover:bg-white transition-colors">
                        View Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">TweeSents</h3>
                  <p className="text-[var(--text-light)] mb-4">
                    Location-based Twitter sentiment analysis service for classifying tweets and analyzing user behavior patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Python</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Twitter API</span>
                    <span className="text-xs bg-[var(--primary-light)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Azure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className="space-y-6">
                      <a href="tel:+918290665684" className="flex items-center text-white hover:text-white/80 transition-colors">
                        <Mail size={20} className="mr-3" />
                        +91-8290665684
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-white/80 transition-colors">
                        <GitHub size={20} className="mr-3" />
                        GitHub
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-white/80 transition-colors">
                        <Linkedin size={20} className="mr-3" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-light)] mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-light)] mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--text-light)] mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full px-6 py-3 gradient-button text-white rounded-lg font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--secondary)] py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <a href="#home" className="text-xl font-bold text-[var(--text)] flex items-center">
              <span className="mr-2 text-[var(--primary)]">Harshit</span> Yadav
              <Sparkles className="ml-2 text-[var(--accent)]" size={18} />
            </a>
          </div>
          <p className="text-[var(--text-light)] mb-4">
            &copy; {new Date().getFullYear()} Harshit Yadav. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <GitHub size={20} className="text-[var(--primary)]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Linkedin size={20} className="text-[var(--primary)]" />
            </a>
            <a href="mailto:example@gmail.com" aria-label="Email" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Mail size={20} className="text-[var(--primary)]" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
