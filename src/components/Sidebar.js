import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import avatar from '../assets/profile-avatar.jpg';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
const NAV_KEYS = { hero: 'home', about: 'about', skills: 'skills', projects: 'projects', experience: 'experience', contact: 'contact' };

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang, content } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <div className="sidebar__header">
          <img className="sidebar__avatar" src={avatar} alt="" width="72" height="72" />
          <div>
            <div className="sidebar__name">Antonio Trinidad</div>
            <div className="sidebar__badge">QA Automation Engineer</div>
          </div>
        </div>

        <nav className="sidebar__nav">
          {SECTION_IDS.map(id => (
            <button
              key={id}
              className={`sidebar__link ${activeSection === id ? 'active' : ''}`}
              aria-current={activeSection === id ? 'true' : undefined}
              onClick={() => handleNavClick(id)}
            >
              {content.nav[NAV_KEYS[id]]}
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar-socials">
            <a href={content.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${content.contact.email}`} aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="sidebar__actions">
            <button
              className="sidebar__toggle"
              onClick={toggleLang}
              aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              className="sidebar__toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            >
              {theme === 'light' ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
