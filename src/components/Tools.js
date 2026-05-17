import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const iconMap = {
  playwright: '🎭',
  selenium: '🌐',
  appium: '📱',
  postman: '📬',
  newman: '📦',
  artillery: '🚀',
  db2: '🗄️',
  mysql: '🐬',
  postgresql: '🐘',
  jenkins: '🔧',
  git: '📋',
  jira: '📊',
  javascript: 'JS',
  typescript: 'TS',
  java: '☕'
};

export default function Tools() {
  const { content } = useContext(LanguageContext);

  const groupedTools = content.tools.items.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool.name);
    return acc;
  }, {});

  return (
    <section id="tools" className="tools" aria-labelledby="tools-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="tools-title" className="section__title">{content.tools.title}</h2>
        </div>
        <div className="tools__grid">
          {Object.entries(groupedTools).map(([category, tools]) => (
            <div key={category} className="tools__category">
              <h3 className="tools__category-title">
                {content.tools.categories[category] || category}
              </h3>
              <div className="tools__list">
                {tools.map(toolName => (
                  <div key={toolName} className="tool-item">
                    <span className="tool-item__icon" aria-hidden="true">
                      {iconMap[toolName.toLowerCase()] || toolName.charAt(0)}
                    </span>
                    <span className="tool-item__name">{toolName}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}