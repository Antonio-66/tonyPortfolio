import { useContext } from 'react';
import { Mail } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export default function Contact() {
  const { content } = useContext(LanguageContext);
  const { contact } = content;

  const links = [
    { href: `mailto:${contact.email}`, label: 'Email', text: contact.email, icon: <Mail size={20} aria-hidden="true" /> },
    { href: contact.linkedin, label: 'LinkedIn', text: 'linkedin.com/in/antonio-trinidad-6b16891a2', icon: <LinkedinIcon size={20} />, external: true },
    { href: contact.github, label: 'GitHub', text: 'github.com/Antonio-66', icon: <GithubIcon size={20} />, external: true }
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="section__container contact__grid">
        <div className="contact__intro">
          <h2 id="contact-title" className="section__title">{contact.title}</h2>
          <p className="contact__message">{contact.message}</p>
          <p className="contact__subtitle">{contact.subtitle}</p>
        </div>
        <ul className="contact__info">
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="contact__item"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact__icon">{link.icon}</span>
                <span className="contact__label">{link.label}</span>
                <span className="contact__text">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
