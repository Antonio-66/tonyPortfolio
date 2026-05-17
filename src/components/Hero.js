import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Hero() {
  const { content } = useContext(LanguageContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-headline">
      <div className="hero__container">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true"></span>
          QA Automation Engineer
        </div>
        <h1 id="hero-headline" className="hero__headline">
          {content.hero.headline}
        </h1>
        <p className="hero__sub">{content.hero.sub}</p>
        <div className="hero__ctas">
          <button
            className="btn btn--primary"
            onClick={() => scrollToSection('projects')}
          >
            {content.hero.ctaProjects}
          </button>
          <button
            className="btn btn--secondary"
            onClick={() => scrollToSection('contact')}
          >
            {content.hero.ctaContact}
          </button>
        </div>
        <div className="hero__stats" aria-label="Key statistics">
          <div className="hero__stat">
            <span className="hero__stat-value">5+</span>
            <span className="hero__stat-label">Years QA</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">3</span>
            <span className="hero__stat-label">Companies</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">150+</span>
            <span className="hero__stat-label">Test Cases</span>
          </div>
        </div>
      </div>
    </section>
  );
}