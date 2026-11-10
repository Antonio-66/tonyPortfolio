import { useContext } from 'react';
import { Check } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

export default function About() {
  const { content } = useContext(LanguageContext);

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="about-title" className="section__title">{content.about.title}</h2>
        </div>
        <div className="about__grid">
          <p className="about__bio">{content.about.bio}</p>
          <ul className="about__bullets">
            {content.about.bullets.map((bullet, index) => (
              <li key={index} className="about__bullet">
                <span className="about__bullet-icon" aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
