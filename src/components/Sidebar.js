import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { GitHub, Linkedin, Mail } from 'lucide-react';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang, content } = useContext(LanguageContext);

  const navItems = [
    { id: 'hero', label: content.nav.home },
    { id: 'about', label: content.nav.about },
    { id: 'skills', label: content.nav.skills },
    { id: 'projects', label: content.nav.projects },
    { id: 'experience', label: content.nav.experience },
    { id: 'contact', label: content.nav.contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <div className="sidebar__header">
          <div className="sidebar__avatar" aria-hidden="true">AT</div>
          <div className="sidebar__name">Antonio Trinidad</div>
          <div className="sidebar__badge">QA Automation Engineer</div>
        </div>

        <nav className="sidebar__nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`sidebar__link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar-socials">
            <a
              href="https://github.com/Antonio-66"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-trinidad-6b16891a2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:antoniotrinidad66@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="sidebar__actions">
            <button
              className="sidebar__toggle"
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'es' ? 'English' : 'Español'}`}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              className="sidebar__toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
