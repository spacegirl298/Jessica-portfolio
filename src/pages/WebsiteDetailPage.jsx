import { websites } from "../data/portfolioData"; // ← add this

export default function WebsiteDetailPage({ siteId, navigate }) {
  const site = websites.find((s) => s.id === siteId);

  if (!site || !site.detail) {
    return (
      <>
        <button
          className="back-btn"
          onClick={() => navigate("portfolio", "websites")}
        >
          ← Back to Websites
        </button>

        <div className="page-hero">
          <h1>Not Found</h1>
        </div>

        <Footer />
      </>
    );
  }

  const { detail } = site;

  return (
    <>
      <button
        className="back-btn"
        onClick={() => navigate("portfolio", "websites")}
      >
        ← Back to Websites
      </button>

      <div className="page-hero">
        <h1>{site.title.toUpperCase()}</h1>
      </div>

      <div className="detail-page">

        {/* SCREENSHOTS */}
        {detail.screenshots && detail.screenshots.length > 0 && (
          <>
            <p className="detail-section-title">Website Screenshots</p>
            <div className="screenshots-grid">
              {detail.screenshots.map((item, idx) => (
                <div className="screenshot-box" key={idx}>
                  <img src={item.image} alt={item.label} />
                  <span>FIGURE {idx + 1}: {item.label}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* WIREFRAMES */}
        {detail.wireframes && detail.wireframes.length > 0 && (
          <>
            <p className="detail-section-title">Figma Wireframes</p>
            <div className="screenshots-grid">
              {detail.wireframes.map((item, idx) => (
                <div className="screenshot-box" key={idx}>
                  <img src={item.image} alt={item.label} />
                  <span>FIGURE {detail.screenshots?.length + idx + 1}: {item.label}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* OVERVIEW */}
        {detail.executiveSummary && (
          <>
            <p className="detail-section-title">Project Overview</p>
            <div className="design-decisions">
              <div className="decision-col">
                <h3>Executive Summary</h3>
                <p>{detail.executiveSummary}</p>

                {detail.keySections && (
                  <>
                    <h4>Key Sections</h4>
                    <ul>
                      {detail.keySections.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {detail.successCriteria && (
                <div className="decision-col">
                  <h3>Success Criteria</h3>
                  <ul>
                    {detail.successCriteria.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}

        {/* DESIGN */}
        {(detail.customerBackground || detail.challenges || detail.goals || detail.mood) && (
          <>
            <p className="detail-section-title">Design Decisions</p>
            <div className="design-decisions">
              <div className="decision-col">
                {detail.customerBackground && (
                  <>
                    <h3>Customer Perspective</h3>
                    <p>{detail.customerBackground}</p>
                  </>
                )}

                {detail.challenges && (
                  <>
                    <h4>Challenges</h4>
                    <ul>
                      {detail.challenges.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="decision-col">
                {detail.goals && (
                  <>
                    <h3>Product Goals</h3>
                    <ul>
                      {detail.goals.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                  </>
                )}

                {detail.mood && (
                  <>
                    <h4>Visual Mood</h4>
                    <p>{detail.mood}</p>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {/* FEATURE BREAKDOWN - THIS IS WHERE THE ERROR WAS */}
        {detail.features && detail.features.length > 0 && (
          <>
            <p className="detail-section-title">Feature Breakdown</p>
            <div className="feature-breakdown">
              {detail.features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* BUTTONS */}
        <div className="detail-links">
          {site.links?.website && (
            <a href={site.links.website} target="_blank" rel="noreferrer">
              <button className="btn-view">WEBSITE</button>
            </a>
          )}
          {site.links?.figma && (
            <a href={site.links.figma} target="_blank" rel="noreferrer">
              <button className="btn-view">FIGMA</button>
            </a>
          )}
        </div>

      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}