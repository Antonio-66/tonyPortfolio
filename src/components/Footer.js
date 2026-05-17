import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <p className="footer__copyright">
          © {year} Antonio Bernardo Trinidad Da Silva. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
        <p className="footer__made">
          {lang === 'es' ? 'Construido con React + CSS puro' : 'Built with React + pure CSS'}
        </p>
      </div>
    </footer>
  );
}