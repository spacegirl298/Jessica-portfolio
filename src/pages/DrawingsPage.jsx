// DrawingsPage.jsx

import Footer from "../components/Footer";
import { digitalDrawings } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function DrawingsPage() {
  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">Digital Drawings</h1>
      </div>

      <div className="drawing-list">
        {digitalDrawings.map((drawing) => (
          <div
            key={drawing.id}
            className={`drawing-item${drawing.reverse ? " reverse" : ""}`}
          >
            <div className="drawing-img">
              <img
                src={drawing.image}
                alt={drawing.title}
                className="about-photo-placeholder"
              />
            </div>

            <div className="drawing-text">
              <h2>{drawing.title}</h2>
              <p>{drawing.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}