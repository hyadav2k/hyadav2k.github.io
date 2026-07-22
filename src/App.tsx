import { useEffect, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navigation = [
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const research = [
  {
    number: '01',
    title: 'Generative models for multi-step stock-price forecasting',
    supervisor: 'Prof. Geetanjali Panda · Master’s thesis',
    dates: 'Jan–Apr 2023',
    summary:
      'Compared recurrent and adversarial approaches for three-day-ahead equity forecasting across normal and high-volatility market regimes.',
    details: [
      'Engineered financial, macroeconomic, technical-indicator, Fourier, and news-sentiment features for rolling market windows.',
      'Implemented bidirectional LSTM, GRU, GAN, and WGAN-GP models and evaluated their behavior with and without the 2020 regime shift.',
      'Found WGAN-GP most resilient on the 2020-inclusive test set, while GAN performed best outside that period and surpassed the traditional baselines overall.',
    ],
    tags: ['Time-series forecasting', 'GAN', 'WGAN-GP', 'PyTorch'],
    note: 'Presented to the Department of Mathematics, IIT Kharagpur',
  },
  {
    number: '02',
    title: 'Portfolio allocation under asymmetric dependence',
    supervisor: 'Prof. Geetanjali Panda · Master’s thesis',
    dates: 'Aug–Nov 2022',
    summary:
      'Studied how local, non-linear dependence estimates can improve portfolio construction across changing market conditions.',
    details: [
      'Implemented Local Gaussian Correlation estimation in R across six global asset classes and 463 monthly observations.',
      'Built rolling-window portfolio backtests using adaptive local covariance estimates, transaction costs, and allocation constraints.',
      'Compared local minimum-variance strategies with Markowitz and equal-weighted baselines using terminal wealth, Sharpe, Sortino, and Omega ratios.',
    ],
    tags: ['Local Gaussian Correlation', 'Portfolio optimization', 'R', 'Backtesting'],
    note: 'Presented to the Department of Mathematics, IIT Kharagpur',
  },
  {
    number: '03',
    title: 'Crop-yield forecasting from climate and soil properties',
    supervisor: 'Prof. Adway Mitra · Core AI research project',
    dates: 'Dec 2021–Feb 2022',
    summary:
      'Explored multi-task learning for jointly estimating crop yield and related soil properties from climate reanalysis data.',
    details: [
      'Processed ERA5-Land climate variables into spatiotemporal frequency spectrograms and trained a 2D-CNN.',
      'Jointly predicted six soil properties, including organic carbon, pH, total nitrogen, clay, sand, and cation exchange capacity.',
      'Reduced organic-carbon prediction error by almost 50% versus single-target training; the CNN approach also outperformed PLS and Cubist baselines.',
    ],
    tags: ['Multi-task learning', '2D-CNN', 'ERA5-Land', 'Climate data'],
    note: 'Individual implementation within a shared research project',
  },
];

const roles = [
  {
    role: 'Software Development Engineer II · ML Systems',
    company: 'Navi Technologies, Bengaluru',
    dates: 'Sep 2024–Present',
    bullets: [
      'Built a Cython- and Triton-based inference stack for 40+ versioned GPU models, sustaining 10,000 requests per minute at 5 ms service latency while reducing AWS spend by 60%.',
      'Developed a LangGraph incident-analysis system that correlates Kubernetes and Prometheus telemetry with historical incidents; it processes 100+ alerts each week and reduced mean time to resolution by 90%.',
      'Created a research-to-prototype workflow for embedding architectures, cutting evaluation cycle time by 85% and increasing tested-model throughput by 12×.',
      'Engineered a distributed Kotlin feature-aggregation service using dependency-graph execution, gRPC, GraphQL, S3, Parquet, and Airflow.',
    ],
  },
  {
    role: 'Software Development Engineer I',
    company: 'Navi Technologies, Bengaluru',
    dates: 'Jul 2023–Aug 2024',
    bullets: [
      'Architected a Go model-serving orchestrator and self-service onboarding platform, reducing serving latency by 95% and infrastructure cost by 80%.',
      'Built archival and monitoring pipelines with S3, Kafka, PostgreSQL, Redis, and Prometheus; received the Navi Spearhead Award within the data science organization.',
      'Mentored engineers and taught in Navi’s engineering fresher bootcamp.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Samsung Research Institute, Bengaluru',
    dates: 'May–Jun 2022',
    bullets: [
      'Developed a Hindi conversational assistant for Samsung Finance using Rasa NLU, including training data, intents, entities, domains, and multilingual routing.',
      'Mentored an incoming intern and received a pre-placement offer for a full-time software engineering role.',
    ],
  },
];

const selectedWork = [
  {
    kicker: 'Personal system',
    title: 'Deep Researcher',
    description:
      'A cost-aware multi-agent research system with supervisor and specialist agents, hybrid retrieval through Qdrant, and schema-constrained outputs. Parallel delegation reduced cost by 30× and structured generation reduced measured hallucinations by 38%.',
    meta: 'LangChain · Qdrant · RAG · Python',
  },
  {
    kicker: 'Open source',
    title: 'SymPy contributor',
    description:
      'Contributed methods, tests, and documentation across DomainMatrix, polynomial manipulation, core expressions, matrices, derivatives, and integrals. Recognized in SymPy’s official AUTHORS registry.',
    meta: 'Python · Symbolic mathematics · Jan–Apr 2021',
  },
  {
    kicker: 'Navi internal hackathon · 5th place',
    title: 'LLM-assisted underwriting',
    description:
      'Built a LangGraph underwriting prototype with specialist analysis agents, a critic pattern, and retrieval-backed document intelligence. The project explored decision support for higher-throughput credit review.',
    meta: 'LangGraph · Qdrant · Document intelligence',
  },
];

const skillGroups = [
  {
    label: 'Programming',
    value: 'Python, Go, Kotlin, C++, Cython, R, SQL',
  },
  {
    label: 'ML & LLM systems',
    value: 'PyTorch, Triton Inference Server, Ray, BentoML, LangGraph, LangChain, Qdrant, Rasa',
  },
  {
    label: 'Distributed systems',
    value: 'Kubernetes, Docker, gRPC, Kafka, Airflow, Redis, PostgreSQL, Prometheus, AWS S3',
  },
  {
    label: 'Scientific computing',
    value: 'NumPy, pandas, SymPy, Numba, Matplotlib',
  },
];

const coursework = [
  'Machine Learning, Artificial Intelligence, AI for Economics',
  'Algorithms, Data Structures, Graph Theory, Discrete Structures',
  'Probability & Statistics, Regression & Time Series, Operations Research',
  'Linear Algebra, Real Analysis, Optimization Methods in Finance',
  'Operating Systems, Systems Programming, Databases, Computer Architecture',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('research');

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="site-container nav-row">
          <a className="wordmark" href="#top" aria-label="Harshit Yadav, home">
            <span>HY</span>
            <strong>Harshit Yadav</strong>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">ML systems engineer · IIT Kharagpur</p>
              <h1>I build efficient ML systems, grounded in research.</h1>
              <p className="hero-lede">
                I’m Harshit Yadav, a Mathematics and Computing graduate working across high-performance model serving, reliable LLM workflows, and applied machine learning.
              </p>
              <p className="research-interests">
                <strong>Research interests</strong>
                Efficient ML systems, model inference, retrieval-augmented systems, LLM evaluation, and reliable deployment.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#research">
                  View research <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="secondary-button" href="/hyresume.pdf" download>
                  Résumé (PDF) <ArrowDownToLine aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="profile-panel" aria-label="Profile summary">
              <img
                src="/profile.jpg"
                alt="Portrait of Harshit Yadav"
                width="720"
                height="720"
              />
              <div className="profile-caption">
                <p>Based in Bengaluru, India</p>
                <div className="profile-links">
                  <a href="mailto:harshityadav2k@gmail.com" aria-label="Email Harshit Yadav"><Mail aria-hidden="true" /></a>
                  <a href="https://github.com/hyadav2k" target="_blank" rel="noreferrer" aria-label="Harshit Yadav on GitHub"><Github aria-hidden="true" /></a>
                  <a href="https://www.linkedin.com/in/harshit-yadav-ab9626190/" target="_blank" rel="noreferrer" aria-label="Harshit Yadav on LinkedIn"><Linkedin aria-hidden="true" /></a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-index">01</p>
              <div>
                <p className="eyebrow">Supervised research</p>
                <h2>Research experience</h2>
                <p>Three projects spanning financial modelling, deep learning, and climate data.</p>
              </div>
            </div>

            <div className="research-list">
              {research.map((project) => (
                <article className="research-entry" key={project.title}>
                  <p className="entry-number">{project.number}</p>
                  <div className="research-content">
                    <div className="research-title-row">
                      <div>
                        <h3>{project.title}</h3>
                        <p className="entry-meta">{project.supervisor}</p>
                      </div>
                      <time>{project.dates}</time>
                    </div>
                    <p className="research-summary">{project.summary}</p>
                    <ul>
                      {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                    <div className="entry-footer">
                      <p>{project.tags.join(' · ')}</p>
                      <p>{project.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-index">02</p>
              <div>
                <p className="eyebrow">From models to production</p>
                <h2>Professional experience</h2>
                <p>Selected work in inference, distributed systems, and engineering enablement.</p>
              </div>
            </div>

            <div className="role-list">
              {roles.map((role) => (
                <article className="role-entry" key={`${role.company}-${role.role}`}>
                  <div className="role-heading">
                    <div>
                      <h3>{role.role}</h3>
                      <p>{role.company}</p>
                    </div>
                    <time>{role.dates}</time>
                  </div>
                  <ul>
                    {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="skills-grid" aria-label="Technical skills">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-index">03</p>
              <div>
                <p className="eyebrow">Outside the day-to-day</p>
                <h2>Selected work</h2>
                <p>Personal systems, open source, and a bounded hackathon prototype.</p>
              </div>
            </div>

            <div className="work-list">
              {selectedWork.map((item) => (
                <article key={item.title}>
                  <p className="work-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="work-meta">{item.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-index">04</p>
              <div>
                <p className="eyebrow">Academic foundation</p>
                <h2>Education</h2>
              </div>
            </div>

            <div className="education-grid">
              <div className="degree-block">
                <p className="education-date">2018–2023</p>
                <h3>Integrated M.Sc. in Mathematics and Computing</h3>
                <p className="institution">Indian Institute of Technology Kharagpur</p>
                <p>CGPA 8.00/10 · INSPIRE Scholar · JEE Advanced top 1.7%</p>
              </div>

              <div className="coursework-block">
                <h3>Selected coursework</h3>
                <ul>
                  {coursework.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="site-container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s talk about research and reliable ML systems.</h2>
            </div>
            <div className="contact-copy">
              <p>
                I’m happy to discuss graduate study, applied ML research, open-source work, or systems problems at the boundary of models and production.
              </p>
              <a className="contact-email" href="mailto:harshityadav2k@gmail.com">
                harshityadav2k@gmail.com <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-links">
                <a href="https://github.com/hyadav2k" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/harshit-yadav-ab9626190/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-row">
          <p>© {new Date().getFullYear()} Harshit Yadav</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
