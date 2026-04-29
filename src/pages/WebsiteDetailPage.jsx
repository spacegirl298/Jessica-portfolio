import Footer from "../components/Footer";
import { websites } from "../data/portfolioData";
import "../styles/Portfolio.css";

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

  const screenshotRows = [];
  for (let i = 0; i < detail.screenshots.length; i += 3) {
    screenshotRows.push(detail.screenshots.slice(i, i + 3));
  }

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
        <p className="detail-section-title">Website Screenshots</p>

        {screenshotRows.map((row, ri) => (
          <div
            key={ri}
            className="screenshots-grid"
            style={{
              gridTemplateColumns: `repeat(${row.length}, 1fr)`,
            }}
          >
            {row.map((item, si) => (
              <div className="screenshot-box" key={si}>
                <img
                  src={item.image}
                  alt={item.label}
                  className="about-photo-placeholder"
                />
                <span>
                  FIGURE {ri * 3 + si + 1}: {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}

        {/* WIREFRAMES */}
        <p className="detail-section-title">Figma Wireframes</p>

        <div
          className="screenshots-grid"
          style={{
            gridTemplateColumns: `repeat(${Math.min(
              detail.wireframes.length,
              3
            )}, 1fr)`,
          }}
        >
          {detail.wireframes.map((item, i) => (
            <div className="screenshot-box" key={i}>
              <img
                src={item.image}
                alt={item.label}
                className="about-photo-placeholder"
              />
              <span>
                FIGURE {detail.screenshots.length + i + 1}: {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* DESIGN */}
        <p className="detail-section-title">Design Decisions</p>

        <div className="design-decisions">
          <div className="decision-col">
            <h3>Customer Perspective</h3>
            <p>{detail.customerBackground}</p>

            <h4>Challenges</h4>
            <ul>
              {detail.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="decision-col">
            <h3>Product Goals</h3>
            <ul>
              {detail.goals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>

            <h4>Visual Mood</h4>
            <p>{detail.mood}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="detail-links">
          <button className="btn-view">WEBSITE</button>
          <button className="btn-view">FIGMA</button>
        </div>

      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}