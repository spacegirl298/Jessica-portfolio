import Footer from "../components/Footer";
import { gameUIs } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function GameDetailPage({ gameId, navigate }) {
  const game = gameUIs.find((g) => g.id === gameId);

  if (!game) {
    return (
      <>
        <button
          className="back-btn"
          onClick={() => navigate("portfolio", "gameui")}
        >
          ← Back to Game UI
        </button>

        <div className="page-hero">
          <h1>Not Found</h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate("portfolio", "gameui")}
      >
        ← Back to Game UI
      </button>

      {/* TITLE */}
      <div className="page-hero">
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
          {game.title.toUpperCase()}
        </h1>
        
      </div>

      {/* MAIN CONTENT */}
      <div className="detail-page">
        <div className="game-detail-grid">
          {/* LEFT SIDE - INFO */}
          <div>
            <p
              className="detail-section-title"
              style={{ textAlign: "left", marginTop: 0 }}
            >
              About This Project
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "var(--text)",
                marginBottom: 20,
              }}
            >
              {game.desc}
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "var(--muted)",
              }}
            >
              {game.detail}
            </p>
          </div>

          {/* RIGHT SIDE - SCREENSHOTS */}
          <div>
            <p
              className="detail-section-title"
              style={{ textAlign: "left", marginTop: 0 }}
            >
              Screenshots
            </p>

            <div className="game-screenshots-mini">
              {game.screenshots.map((shot, i) => (
                <div className="game-screenshot" key={i}>
                  <img src={shot.image} alt={shot.label} />
                  <span>{shot.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER + FOOTER */}
      <div className="divider" />
      <Footer />
    </>
  );
}
