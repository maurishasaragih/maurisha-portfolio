"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

// GANTI YOUR_EMAIL@example.com dengan alamat email asli agar tombol Email berfungsi.
const CONTACT_EMAIL = "maurishasaragih@gmail.com";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Exploring", href: "#exploring" },
  { label: "Milestones", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const projectItems = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio & Web Experiments",
    description:
      "Building my personal portfolio while exploring modern web technologies, AI-assisted development, and responsive design.",
    tags: ["Web Development", "AI Tools", "Learning"],
    symbol: "↗",
  },
  {
    number: "02",
    category: "DATA & INSIGHTS",
    title: "Internal Dashboards & Operational Insights",
    description:
      "Exploring how internal dashboards can improve operational visibility, monitoring, and decision-making.",
    tags: ["Dashboards", "Reporting", "Operations"],
    symbol: "▥",
  },
  {
    number: "03",
    category: "SYSTEMS & OPERATIONS",
    title: "Inventory Management & Operational Workflows",
    description:
      "Exploring inventory processes, cycle counting, stock adjustments, and opportunities to improve operational workflows through clearer system requirements.",
    tags: ["Inventory", "Cycle Count", "Workflow"],
    symbol: "⌘",
  },
  {
    number: "04",
    category: "PERSONAL PRODUCT · IN PROGRESS",
    title: "Personal Finance Dashboard",
    description:
      "A personal project concept for tracking income, expenses, monthly budgets, and cash flow in one clear dashboard.",
    tags: ["Dashboard", "Finance", "Automation"],
    symbol: "↗",
  },
  {
    number: "05",
    category: "PROCESS DESIGN · CONCEPT",
    title: "Warehouse Operations Case Study",
    description:
      "A portfolio case-study concept mapping inbound, outbound, inventory monitoring, and cycle-count workflows using sample data.",
    tags: ["System Analysis", "Warehouse", "Process Flow"],
    symbol: "⌘",
  },
];

const projectFilters = ["All", "System Analysis", "Dashboards", "Web Development", "Automation"];

const caseStudies = [
  {
    id: "warehouse",
    number: "01",
    type: "PROCESS ANALYSIS · CONCEPT CASE STUDY",
    title: "Making warehouse workflows easier to monitor",
    status: "Concept case study — illustrative, not a claim of a completed client deliverable.",
    problem: "Warehouse workflows can involve several connected steps. When status visibility is fragmented, it can be harder to identify where an order or inventory task needs attention.",
    approach: "Map the process from start to finish, identify key status changes and handoffs, document validation points, and define the operational information a monitoring view should surface.",
    solution: "A proposed workflow map and dashboard concept covering inbound, outbound, cycle count, stock adjustment, and exception monitoring using dummy data.",
    skills: ["Requirements analysis", "Process mapping", "Functional thinking", "Dashboard design"],
  },
  {
    id: "finance",
    number: "02",
    type: "PERSONAL PROJECT · IN PROGRESS",
    title: "A clearer view of personal cash flow",
    status: "Personal project concept — features may change during development.",
    problem: "Recording transactions alone does not always make it easy to understand spending patterns or whether monthly budgets are on track.",
    approach: "Organize transactions, categories, accounts, and monthly budgets into a consistent data model, then define summary metrics and useful filters.",
    solution: "A planned dashboard for income, expenses, transfers, category breakdowns, monthly budget comparison, and cash-flow trends.",
    skills: ["Data modeling", "Dashboard design", "Business logic", "Automation"],
  },
];

const skillGroups = [
  {
    label: "DIGITAL & TECHNOLOGY",
    title: "Building digital things",
    items: ["Websites", "Digital products", "Internal applications"],
  },
  {
    label: "DATA & OPERATIONS",
    title: "Making work clearer",
    items: ["Dashboards & reporting", "Inventory workflows", "Process improvement"],
  },
  {
    label: "HOW I WORK",
    title: "Staying curious",
    items: ["Problem-solving", "Learning by doing", "Cross-functional thinking"],
  },
];

const questions = [
  "How can technology simplify everyday work?",
  "How can data tell a clearer story?",
  "What small tool could solve a real problem?",
  "What can I learn by building something new?",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maurisha-fannani-saragih/",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maurishasaragih/",
    Icon: Instagram,
    external: true,
  },
  ...(CONTACT_EMAIL
    ? [
        {
          label: "Email",
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=maurishasaragih@gmail.com",
          Icon: Mail,
          external: true,
        },
      ]
    : []),
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Maurisha home">
          M<span>.</span>
        </a>
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-topline">
          <span className="eyebrow">
            <span className="status-dot" /> PERSONAL PORTFOLIO
          </span>
          <span className="hero-index">INDONESIA · OPEN TO WHAT&apos;S NEXT</span>
        </div>
        <div className="hero-content">
          <p className="hero-kicker">HELLO, I&apos;M</p>
          <h1>
            Maurisha
            <br />
            <span>Fannani</span> Saragih<span className="accent-dot">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-statement">
              Always learning.
              <br />
              Always building.
            </p>
            <div className="hero-intro">
              <p>
                Curious by nature. Interested in the intersection of technology,
                business, and better ways of working. This is where I share what
                I&apos;m learning, building, and exploring.
              </p>
              <a className="text-link" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>INDEPENDENT THINKING / CONTINUOUS LEARNING</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner">
          <span className="strip-label">MY POINT OF VIEW</span>
          <p>
            Stay curious. <span>Build with intention.</span> Make things a little
            better.
          </p>
          <Sparkles className="strip-sparkle" size={20} strokeWidth={1.4} />
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT ME</span>
          <h2>
            A work in
            <br />
            <em>progress.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I believe growth happens when curiosity meets action.
          </p>
          <p>
            I enjoy learning how things work, connecting ideas, and exploring how
            technology can make everyday processes more useful and efficient.
          </p>
          <p>
            This portfolio is a living snapshot of my journey: the work I do, the
            things I build, the skills I develop, and the questions I&apos;m still
            figuring out. There&apos;s always more to learn, and something new to
            try.
          </p>
          <div className="about-note">
            <span className="note-mark">✳</span>
            <span>Curiosity first. Progress always.</span>
          </div>
        </div>
      </section>

      <section className="content-section experience-section" id="experience">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="section-number">02 / EXPERIENCE</span>
            <h2>
              Where I&apos;ve
              <br />
              <em>been.</em>
            </h2>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={21} strokeWidth={1.4} />
            </div>
            <div>
              <span className="card-overline">FEB 2022 — PRESENT · JAKARTA, INDONESIA</span>
              <h3>System Analyst</h3>
              <p className="experience-company">PT. Kamadjaja Logistics · Full-time / Independent</p>
              <p>
                Support system analysis and implementation activities, including
                Business Requirements Documents (BRD), User Acceptance Testing
                (UAT), and go-live processes. Work with Warehouse Management
                Systems (WMS) and B2B2C operational processes.
              </p>
              <div className="tag-row">
                <span>Warehouse Management Systems</span>
                <span>B2B2C</span>
                <span>BRD</span>
                <span>UAT</span>
                <span>Go-Live</span>
              </div>
            </div>
            <span className="experience-arrow">↗</span>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={21} strokeWidth={1.4} />
            </div>
            <div>
              <span className="card-overline">APR 2021 — FEB 2022 · INDONESIA</span>
              <h3>Functional Consultant</h3>
              <p className="experience-company">BISA Indonesia · Contract</p>
              <p>
                Contributed to functional consulting activities, including
                Business Requirements Documents (BRD), User Acceptance Testing
                (UAT), and go-live support. Applied data analysis while working
                with Odoo.
              </p>
              <div className="tag-row">
                <span>Data Analysis</span>
                <span>Odoo</span>
                <span>BRD</span>
                <span>UAT</span>
                <span>Go-Live</span>
              </div>
            </div>
            <span className="experience-arrow">↗</span>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={21} strokeWidth={1.4} />
            </div>
            <div>
              <span className="card-overline">AUG 2019 — AUG 2020 · TANGERANG, INDONESIA</span>
              <h3>Admin Warehouse</h3>
              <p className="experience-company">Blibli.com · Contract</p>
              <p>
                Handled outsourced manpower administration, managed warehouse
                assets, and supported day-to-day warehouse operations.
              </p>
              <div className="tag-row">
                <span>Warehouse Administration</span>
                <span>Asset Management</span>
                <span>Operations Support</span>
              </div>
            </div>
            <span className="experience-arrow">↗</span>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <span className="section-number">03 / SELECTED WORK</span>
            <h2>
              Things I&apos;ve
              <br />
              <em>been building.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Different ideas, one common thread: making things useful, thoughtful,
            and easier to understand.
          </p>
        </div>
        <div className="portfolio-filters" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={projectFilter === filter ? "filter-chip active" : "filter-chip"}
              aria-pressed={projectFilter === filter}
              onClick={() => setProjectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {projectItems
            .filter((project) => {
              if (projectFilter === "All") return true;
              if (projectFilter === "System Analysis") return project.tags.some((tag) => ["System Analysis", "Inventory", "Cycle Count", "Workflow", "Process Flow"].includes(tag));
              if (projectFilter === "Dashboards") return project.tags.some((tag) => ["Dashboards", "Dashboard", "Reporting"].includes(tag));
              if (projectFilter === "Web Development") return project.tags.includes("Web Development");
              if (projectFilter === "Automation") return project.tags.includes("Automation");
              return true;
            })
            .map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span className="project-visual-index">
                  {project.number} — / PORTFOLIO
                </span>
                <span className="project-symbol">{project.symbol}</span>
                <span className="visual-orbit orbit-one" />
                <span className="visual-orbit orbit-two" />
                <span className="visual-cross">✳</span>
              </div>
              <div className="project-info">
                <span className="card-overline">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="case-studies-block">
          <div className="case-studies-heading">
            <span className="card-overline">GO BEYOND THE PROJECT CARD</span>
            <h3>Case studies</h3>
            <p>See how I approach a problem, structure the analysis, and shape a possible solution.</p>
          </div>
          <div className="case-study-list">
            {caseStudies.map((study) => {
              const isOpen = openCaseStudy === study.id;
              return (
                <article className={`case-study-card ${isOpen ? "case-study-open" : ""}`} key={study.id}>
                  <button
                    className="case-study-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenCaseStudy(isOpen ? null : study.id)}
                  >
                    <span className="case-study-number">{study.number}</span>
                    <span className="case-study-title-wrap">
                      <span className="card-overline">{study.type}</span>
                      <strong>{study.title}</strong>
                    </span>
                    <span className="case-study-plus">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="case-study-detail">
                      <p className="case-study-status">{study.status}</p>
                      <div className="case-study-columns">
                        <div><span>01 / PROBLEM</span><p>{study.problem}</p></div>
                        <div><span>02 / APPROACH</span><p>{study.approach}</p></div>
                        <div><span>03 / PROPOSED SOLUTION</span><p>{study.solution}</p></div>
                      </div>
                      <div className="tag-row">
                        {study.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
        <p className="section-footnote">
          Personal concepts and illustrative case studies are clearly labelled. Add live demos when each project is ready to share.
        </p>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="section-number">04 / SKILLS & EXPERTISE</span>
            <h2>
              Tools, ideas &
              <br />
              <em>ways of thinking.</em>
            </h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.label}>
                <span className="skill-index">0{index + 1}</span>
                <span className="card-overline">{group.label}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="content-section section-wrap exploring-section"
        id="exploring"
      >
        <div className="section-heading">
          <span className="section-number">05 / CURRENT CURIOSITIES</span>
          <h2>
            Currently
            <br />
            <em>exploring.</em>
          </h2>
        </div>
        <div className="exploring-content">
          <p className="large-copy">The best ideas often start with a question.</p>
          <div className="explore-list">
            {questions.map((question, index) => (
              <div key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section achievements-section" id="achievements">
        <div className="section-wrap achievement-inner">
          <div className="section-heading">
            <span className="section-number">06 / MILESTONES</span>
            <h2>
              Small steps.
              <br />
              <em>Real growth.</em>
            </h2>
          </div>
          <div className="achievement-copy">
            <div className="achievement-icon">
              <Compass size={24} strokeWidth={1.4} />
            </div>
            <p>
              Every project, new skill, and unexpected challenge becomes a
              milestone. Certifications, launches, and meaningful wins will be
              highlighted here as the journey continues.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="section-number">07 / CONTACT & SOCIAL</span>
          <p className="contact-pretitle">HAVE A GOOD IDEA?</p>
          <h2>
            Let&apos;s make
            <br />
            <em>something happen.</em>
          </h2>
          <p className="contact-description">
            Always happy to connect, exchange ideas, and learn from people
            building interesting things.
          </p>
          <div className="social-links">
            {socialLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={18} /> <span>{label}</span> <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home" aria-label="Back to top">
          M<span>.</span>
        </a>
        <p>Made with curiosity by Maurisha Fannani Saragih.</p>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>

      <style jsx global>{`
        .portfolio-filters { display:flex; flex-wrap:wrap; gap:10px; margin: 0 0 26px; }
        .filter-chip { border:1px solid var(--line, rgba(255,255,255,.18)); background:transparent; color:inherit; padding:10px 14px; border-radius:999px; font:inherit; font-size:12px; cursor:pointer; transition:background .2s ease, color .2s ease, border-color .2s ease; }
        .filter-chip:hover, .filter-chip.active { background:var(--accent, #d2fa79); color:#111; border-color:var(--accent, #d2fa79); }
        .case-studies-block { margin-top:76px; display:grid; grid-template-columns:minmax(220px,.7fr) minmax(0,1.3fr); gap:40px; align-items:start; }
        .case-studies-heading h3 { font-size:clamp(30px,4vw,44px); letter-spacing:-1.8px; margin:14px 0; }
        .case-studies-heading p { color:var(--muted, #9a9896); font-size:14px; line-height:1.8; max-width:320px; }
        .case-study-list { border-top:1px solid var(--line, rgba(255,255,255,.15)); }
        .case-study-card { border-bottom:1px solid var(--line, rgba(255,255,255,.15)); }
        .case-study-toggle { display:grid; grid-template-columns:42px 1fr 28px; gap:15px; align-items:center; width:100%; padding:22px 0; text-align:left; color:inherit; background:none; border:0; cursor:pointer; }
        .case-study-number { color:var(--accent, #d2fa79); font:12px monospace; }
        .case-study-title-wrap { display:flex; flex-direction:column; gap:8px; }
        .case-study-title-wrap strong { font-size:clamp(16px,2vw,21px); font-weight:500; line-height:1.35; }
        .case-study-plus { font-size:24px; text-align:right; color:var(--accent, #d2fa79); }
        .case-study-detail { padding:0 0 25px 57px; animation:caseStudyIn .2s ease-out; }
        .case-study-status { color:var(--accent, #d2fa79); font-size:12px; line-height:1.6; margin:0 0 20px; }
        .case-study-columns { display:grid; grid-template-columns:1fr; gap:18px; }
        .case-study-columns span { color:var(--muted, #9a9896); font:10px monospace; letter-spacing:1px; }
        .case-study-columns p { color:var(--muted, #b7b4b0); font-size:13px; line-height:1.8; margin:8px 0 0; }
        .case-study-detail .tag-row { margin-top:20px; }
        @keyframes caseStudyIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width:760px) { .case-studies-block { grid-template-columns:1fr; gap:22px; margin-top:55px; } .case-studies-heading p { max-width:520px; } .case-study-detail { padding-left:0; } .case-study-toggle { grid-template-columns:30px 1fr 24px; gap:10px; } }
        @media (prefers-reduced-motion: reduce) { .case-study-detail { animation:none; } .filter-chip { transition:none; } }
      `}</style>
    </main>
  );
}
