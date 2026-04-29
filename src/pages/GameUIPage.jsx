// GameUIPage.jsx

import Footer from "../components/Footer";
import { gameUIs } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function GameUIPage({ navigate }) {
  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">GAME UI</h1>
      </div>

      <div className="gameui-list">
        {gameUIs.map((game, i) => (
          <div
            key={game.id}
            className={`gameui-item${i % 2 === 1 ? " reverse" : ""}`}
          >
            <div className="gameui-img">
              <img
                src={game.image}
                alt={game.title}
                className="about-photo-placeholder"
              />
            </div>

            <div className="gameui-text">
              <h2>{game.title}</h2>
              <p>{game.desc}</p>

              <button
                className="btn-view"
                onClick={() => navigate("game-detail", game.id)}
              >
                VIEW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}