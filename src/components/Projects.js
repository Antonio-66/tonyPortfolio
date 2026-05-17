import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Projects() {
  const { content } = useContext(LanguageContext);

  const getStatusLabel = (status) => {
    return content.projects.status[status] || status;
  };

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="projects-title" className="section__title">{content.projects.title}</h2>
        </div>
        <div className="projects__grid">
          {content.projects.items.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <span className={`project-card__status project-card__status--${project.status}`}>
                  {getStatusLabel(project.status)}
                </span>
              </div>
              <p className="project-card__description">{project.description}</p>

              {project.context && (
                <p className="project-card__meta">
                  <strong>Context:</strong> {project.context}
                </p>
              )}
              {project.testingType && (
                <p className="project-card__meta">
                  <strong>Testing:</strong> {project.testingType}
                </p>
              )}
              {project.value && (
                <p className="project-card__meta project-card__meta--value">
                  <strong>Value:</strong> {project.value}
                </p>
              )}

              <div className="project-card__stack">
                {project.stack.map(tech => (
                  <span key={tech} className="project-card__tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${content.projects.viewOnGithub} - ${project.title}`}
              >
                {content.projects.viewOnGithub}
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}