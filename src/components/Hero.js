import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import portrait from '../assets/profile-portrait.jpg';

export default function Hero() {
  const { content } = useContext(LanguageContext);
  const { hero } = content;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 id="hero-title" className="hero__name">Antonio Trinidad</h1>
          <p className="hero__role">{hero.role}</p>
          <p className="hero__intro">{hero.intro}</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              {hero.ctaProjects}
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>
              {hero.ctaContact}
            </button>
          </div>
        </div>

        <figure className="hero__visual">
          <img
            className="hero__photo"
            src={portrait}
            alt={hero.photoAlt}
            width="800"
            height="1000"
          />
          <div className="test-run" role="img" aria-label={`${hero.runLabel}: ${hero.run.join(', ')}. ${hero.runSummary}`}>
            <div className="test-run__cmd" aria-hidden="true">
              <span className="test-run__prompt">$</span> npx playwright test
            </div>
            <ul className="test-run__list" aria-hidden="true">
              {hero.run.map((line, i) => (
                <li key={line} className="test-run__line" style={{ '--i': i }}>
                  <span className="test-run__check">✓</span> {line}
                </li>
              ))}
            </ul>
            <div className="test-run__summary" aria-hidden="true" style={{ '--i': hero.run.length }}>
              {hero.runSummary}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
