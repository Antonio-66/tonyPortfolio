import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function About() {
  const { content } = useContext(LanguageContext);

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="about-title" className="section__title">{content.about.title}</h2>
        </div>
        <div className="about__content">
          <div className="about__bio-card">
            <p className="about__bio">{content.about.bio}</p>
            <span className="about__badge">{content.about.badge}</span>
          </div>
          <ul className="about__bullets" aria-label="Value propositions">
            {content.about.bullets.map((bullet, index) => (
              <li key={index} className="about__bullet">
                <span className="about__bullet-icon" aria-hidden="true">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}