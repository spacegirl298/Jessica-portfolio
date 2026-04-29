// LogoPage.jsx

import Footer from "../components/Footer";
import { logoDesigns } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function LogoPage() {
  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">Logo Design</h1>
      </div>

      <div className="logo-list">
        {logoDesigns.map((logo) => (
          <div
            key={logo.id}
            className={`logo-item${logo.reverse ? " reverse" : ""}`}
          >
            <div className="logo-img">
              <img
                src={logo.image}
                alt={logo.title}
                className="about-photo-placeholder"
              />
            </div>

            <div className="logo-text">
              <h2>{logo.title}</h2>
              <p>{logo.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}