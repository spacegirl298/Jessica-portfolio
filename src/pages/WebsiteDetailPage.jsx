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

        <div className="screenshots-grid">
          {detail.screenshots.map((item, idx) => (
            <div className="screenshot-box" key={idx}>
              <img
                src={item.image}
                alt={item.label}
              />
              <span>
                FIGURE {idx + 1}: {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* WIREFRAMES */}
        <p className="detail-section-title">Figma Wireframes</p>

        <div className="screenshots-grid">
          {detail.wireframes.map((item, idx) => (
            <div className="screenshot-box" key={idx}>
              <img
                src={item.image}
                alt={item.label}
              />
              <span>
                FIGURE {detail.screenshots.length + idx + 1}: {item.label}
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
          < a href = "https://github.com/spacegirl298/nextgen_wealth_studio" target = "_blank"><button className="btn-view">WEBSITE</button></a>
          <a href = "https://www.figma.com/design/MrsMHkPHUhok1AzhASbtmk/IM-website?node-id=169-2&t=uEVfiEuHN4R234MK-1" target = "_blank"><button className="btn-view">FIGMA</button></a>
        </div>

      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}