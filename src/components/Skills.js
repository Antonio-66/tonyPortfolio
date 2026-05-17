import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const skillsData = {
  automation: ['playwright', 'selenium', 'appium'],
  api: ['postman', 'newman'],
  performance: ['artillery'],
  databases: ['db2', 'mysql', 'postgresql'],
  cicd: ['jenkins', 'git'],
  qaCore: ['functionalTesting', 'regressionTesting', 'testPlanning'],
  languages: ['javascript', 'typescript', 'java']
};

const skillLevels = {
  playwright: 'advanced',
  selenium: 'intermediate',
  appium: 'intermediate',
  postman: 'advanced',
  newman: 'intermediate',
  artillery: 'intermediate',
  db2: 'intermediate',
  mysql: 'intermediate',
  postgresql: 'intermediate',
  jenkins: 'intermediate',
  git: 'advanced',
  functionalTesting: 'advanced',
  regressionTesting: 'advanced',
  testPlanning: 'advanced',
  javascript: 'advanced',
  typescript: 'intermediate',
  java: 'intermediate'
};

export default function Skills() {
  const { content } = useContext(LanguageContext);

  const getLevelLabel = (level) => {
    return level === 'advanced' ? content.skills.levels.advanced : content.skills.levels.intermediate;
  };

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="skills-title" className="section__title">{content.skills.title}</h2>
        </div>
        <div className="skills__grid">
          {Object.entries(skillsData).map(([category, skillKeys]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__category-title">
                {content.skills.categories[category] || category}
              </h3>
              <div className="skills__list">
                {skillKeys.map(skillKey => {
                  const level = skillLevels[skillKey];
                  return (
                    <div key={skillKey} className="skill-card">
                      <div className="skill-card__header">
                        <span className="skill-card__name">{content.skills.items[skillKey]}</span>
                        <span className={`skill-card__level skill-card__level--${level}`}>
                          {getLevelLabel(level)}
                        </span>
                      </div>
                      <div className="skill-card__bar">
                        <div
                          className={`skill-card__bar-fill skill-card__bar-fill--${level}`}
                          style={{
                            width: level === 'advanced' ? '85%' : '55%'
                          }}
                          role="progressbar"
                          aria-valuenow={level === 'advanced' ? 85 : 55}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}