import Footer from "../components/Footer";
import { socialMedia } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function SocialPage({ navigate }) {
  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">Social Media</h1>
      </div>

      <div className="portfolio-list">
        {socialMedia.map((site, i) => (
          <div
            key={site.id}
            className={`portfolio-item${i % 2 === 1 ? " reverse" : ""}`}
          >
            <div className="portfolio-img">
              <img
                src={site.image}
                alt={site.title}
                className="about-photo-placeholder"
              />
            </div>

            <div className="portfolio-text">
              <h2>{site.title}</h2>
              <p>{site.desc}</p>

              {site.hasDetail && (
                <button
                  className="btn-view"
                  onClick={() => navigate("social-detail", site.id)}
                >
                  VIEW
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}