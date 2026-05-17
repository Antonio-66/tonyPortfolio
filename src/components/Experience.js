import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Experience() {
  const { content } = useContext(LanguageContext);

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="experience-title" className="section__title">{content.experience.title}</h2>
        </div>
        <div className="timeline">
          {content.experience.items.map((item, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true">
                <div className="timeline__dot"></div>
                {index < content.experience.items.length - 1 && (
                  <div className="timeline__line"></div>
                )}
              </div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <div className="timeline__company-info">
                    <h3 className="timeline__company">{item.company}</h3>
                    <span className="timeline__role">{item.role}</span>
                  </div>
                  <span className="timeline__period">{item.period}</span>
                </div>
                {item.context && (
                  <p className="timeline__context">{item.context}</p>
                )}
                <ul className="timeline__responsibilities">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="timeline__responsibility">
                      <span className="timeline__bullet" aria-hidden="true">→</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}