import { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Typed from 'typed.js';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  const { content, lang } = useContext(LanguageContext);
  const typedRef = useRef(null);

  useEffect(() => {
    const strings = lang === 'es' 
      ? ['QA Automation Engineer', 'QA Analyst', 'SDET Junior']
      : ['QA Automation Engineer', 'QA Analyst', 'SDET Junior'];
    
    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => typed.destroy();
  }, [lang]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Hero section"
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>Antonio Trinidad</h1>
        <p>
          {lang === 'es' ? 'Soy ' : "I'm a "}
          <span ref={typedRef} className="hero-typed" />
        </p>
        <div className="hero-cta">
          <button 
            className="btn-primary" 
            onClick={() => scrollToSection('projects')}
          >
            {content.hero.ctaProjects}
          </button>
          <button 
            className="btn-outline" 
            onClick={() => scrollToSection('contact')}
          >
            {content.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}
