import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function SampleTestCases() {
  const { content } = useContext(LanguageContext);

  return (
    <section id="testcases" className="testcases" aria-labelledby="testcases-title">
      <div className="section__container">
        <div className="section__header">
          <h2 id="testcases-title" className="section__title">{content.sampleTestCases.title}</h2>
          <span className="section__badge">{content.sampleTestCases.badge}</span>
        </div>
        <div className="testcases__grid">
          {content.sampleTestCases.cases.map(tc => (
            <article key={tc.id} className="tc-card">
              <div className="tc-card__header">
                <span className="tc-card__id">{tc.id}</span>
                <span className={`tc-card__priority tc-card__priority--${tc.priority.toLowerCase()}`}>
                  {tc.priority}
                </span>
              </div>
              <h3 className="tc-card__title">{tc.title}</h3>
              <p className="tc-card__module">{tc.module}</p>
              <p className="tc-card__description">{tc.description}</p>

              <div className="tc-card__section">
                <h4 className="tc-card__section-title">Preconditions</h4>
                <ul className="tc-card__list">
                  {tc.preconditions.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="tc-card__section">
                <h4 className="tc-card__section-title">Steps</h4>
                <ol className="tc-card__list tc-card__list--ordered">
                  {tc.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>

              <div className="tc-card__section">
                <h4 className="tc-card__section-title">Test Data</h4>
                <div className="tc-card__data">
                  {Object.entries(tc.testData).map(([key, value]) => (
                    <div key={key} className="tc-card__data-row">
                      <span className="tc-card__data-key">{key}:</span>
                      <span className="tc-card__data-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tc-card__section">
                <h4 className="tc-card__section-title">Expected Result</h4>
                <p className="tc-card__expected">{tc.expectedResult}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}