import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Contact() {
  const { content } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="contact-title" className="section__title">{content.contact.title}</h2>
          <p className="contact__subtitle">{content.contact.subtitle}</p>
        </div>
        <div className="contact__content">
          <div className="contact__info">
            <a
              href={`mailto:${content.contact.email}`}
              className="contact__item"
              aria-label={`Email: ${content.contact.email}`}
            >
              <span className="contact__icon" aria-hidden="true">📧</span>
              <span className="contact__text">{content.contact.email}</span>
            </a>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
              aria-label={`LinkedIn: ${content.contact.linkedin}`}
            >
              <span className="contact__icon" aria-hidden="true">💼</span>
              <span className="contact__text">linkedin.com/in/antonio-trinidad-6b16891a2</span>
            </a>
            <a
              href={content.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
              aria-label={`GitHub: ${content.contact.github}`}
            >
              <span className="contact__icon" aria-hidden="true">💻</span>
              <span className="contact__text">github.com/Antonio-66</span>
            </a>
          </div>
          <p className="contact__message">{content.contact.message}</p>
        </div>
      </div>
    </section>
  );
}