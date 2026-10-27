"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Exploring", "#exploring"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

const projectItems = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Websites & Digital Experiences",
    description:
      "A collection of website concepts and builds focused on clear structure, thoughtful details, and useful experiences.",
    tags: ["Web", "UI/UX", "Responsive"],
    symbol: "↗",
  },
  {
    number: "02",
    category: "DATA & INSIGHTS",
    title: "Dashboards & Data Projects",
    description:
      "Exploring how dashboards can turn information into clear, practical insights that support better decisions.",
    tags: ["Dashboards", "Data", "Insights"],
    symbol: "▥",
  },
  {
    number: "03",
    category: "SYSTEMS & OPERATIONS",
    title: "Inventory & Internal Applications",
    description:
      "Ideas around internal tools, inventory workflows, and making operational processes easier to understand and manage.",
    tags: ["Inventory", "Workflow", "Automation"],
    symbol: "⌘",
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Maurisha home">
          M<span>.</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-topline">
          <span className="eyebrow"><span className="status-dot" /> PERSONAL PORTFOLIO</span>
          <span className="hero-index">INDONESIA · OPEN TO WHAT&apos;S NEXT</span>
        </div>
        <div className="hero-content">
          <p className="hero-kicker">A LITTLE ABOUT ME</p>
          <h1>
            Maurisha
            <br />
            <span>Fannani</span> Saragih<span className="accent-dot">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-statement">Always learning.<br />Always building.</p>
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
            Stay curious. <span>Build with intention.</span> Make things a little better.
          </p>
          <Sparkles className="strip-sparkle" size={20} strokeWidth={1.4} />
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT ME</span>
          <h2>A work in<br /><em>progress.</em></h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I believe growth happens when curiosity meets action.
          </p>
          <p>
            I&apos;m Maurisha Fannani Saragih. I enjoy learning how things work,
            connecting ideas, and exploring how technology can make everyday
            processes more useful and efficient.
          </p>
          <p>
            This portfolio is a living snapshot of my journey: the work I do,
            the things I build, the skills I develop, and the questions I&apos;m
            still figuring out. There&apos;s always more to learn—and something
            new to try.
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
            <h2>Where I&apos;ve<br /><em>been.</em></h2>
          </div>
          <div className="experience-card">
            <div className="experience-icon"><BriefcaseBusiness size={21} strokeWidth={1.4} /></div>
            <div>
              <span className="card-overline">PROFESSIONAL JOURNEY</span>
              <h3>Experience, in progress.</h3>
              <p>
                I&apos;m shaping this section to share my roles, responsibilities,
                and the lessons I&apos;ve picked up along the way.
              </p>
              <span className="small-hint">Role, company, dates, and key contributions can be added here.</span>
            </div>
            <span className="experience-arrow">↗</span>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <span className="section-number">03 / SELECTED WORK</span>
            <h2>Things I&apos;ve<br /><em>been building.</em></h2>
          </div>
          <p className="heading-aside">
            Different ideas, one common thread: making things useful, thoughtful,
            and easier to understand.
          </p>
        </div>
        <div className="project-grid">
          {projectItems.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span className="project-visual-index">{project.number} — / PORTFOLIO</span>
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
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="section-footnote">These are portfolio categories for now. Specific project details and live links can be added as you share them.</p>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="section-number">04 / SKILLS & EXPERTISE</span>
            <h2>Tools, ideas &<br /><em>ways of thinking.</em></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.label}>
                <span className="skill-index">0{index + 1}</span>
                <span className="card-overline">{group.label}</span>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="section-footnote">A starting point—not a claim of mastery. We can refine this list to match your actual skills.</p>
        </div>
      </section>

      <section className="content-section section-wrap exploring-section" id="exploring">
        <div className="section-heading">
          <span className="section-number">05 / CURRENT CURIOSITIES</span>
          <h2>Currently<br /><em>exploring.</em></h2>
        </div>
        <div className="exploring-content">
          <p className="large-copy">The best ideas often start with a question.</p>
          <div className="explore-list">
            <div><span>01</span><p>How can technology simplify everyday work?</p><ArrowUpRight size={17} /></div>
            <div><span>02</span><p>How can data tell a clearer story?</p><ArrowUpRight size={17} /></div>
            <div><span>03</span><p>What small tool could solve a real problem?</p><ArrowUpRight size={17} /></div>
            <div><span>04</span><p>What can I learn by building something new?</p><ArrowUpRight size={17} /></div>
          </div>
        </div>
      </section>

      <section className="content-section achievements-section" id="achievements">
        <div className="section-wrap achievement-inner">
          <div className="section-heading">
            <span className="section-number">06 / MILESTONES</span>
            <h2>Small steps.<br /><em>Real growth.</em></h2>
          </div>
          <div className="achievement-copy">
            <div className="achievement-icon"><Compass size={24} strokeWidth={1.4} /></div>
            <p>
              Every project, new skill, and unexpected challenge can become a
              milestone. This space will highlight the moments, results, and
              achievements that matter along the way.
            </p>
            <span className="small-hint">Add certifications, launches, recognitions, or meaningful wins here.</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="section-number">07 / CONTACT & SOCIAL</span>
          <p className="contact-pretitle">HAVE A GOOD IDEA?</p>
          <h2>Let&apos;s make<br /><em>something happen.</em></h2>
          <p className="contact-description">
            Always happy to connect, exchange ideas, and learn from people building interesting things.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/maurisha-fannani-saragih/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> <span>LinkedIn</span> <ArrowUpRight size={16} />
            </a>
            <a href="https://www.instagram.com/maurishasaragih/" target="_blank" rel="noreferrer">
              <Instagram size={18} /> <span>Instagram</span> <ArrowUpRight size={16} />
            </a>
            <a href="mailto:">
              <Code2 size={18} /> <span>Email — add your address</span> <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home">M<span>.</span></a>
        <p>Made with curiosity by Maurisha Fannani Saragih.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
