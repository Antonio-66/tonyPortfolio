import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang, content } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: content.nav.home },
    { id: 'about', label: content.nav.about },
    { id: 'skills', label: content.nav.skills },
    { id: 'projects', label: content.nav.projects },
    { id: 'experience', label: content.nav.experience },
    { id: 'contact', label: content.nav.contact }
  ];

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <nav className="navbar__inner" aria-label="Main navigation">
        <div className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true">AB</span>
          <span className="navbar__name">Antonio Trinidad</span>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          aria-controls="nav-menu"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul id="nav-menu" className={`navbar__menu ${menuOpen ? 'open' : ''}`} role="menubar">
          {navItems.map(item => (
            <li key={item.id} role="none">
              <button
                className="navbar__link"
                onClick={() => handleNavClick(item.id)}
                role="menuitem"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'es' ? 'English' : 'Español'}`}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
}