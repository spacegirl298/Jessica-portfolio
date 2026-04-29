import Footer from "../components/Footer";
import "../styles/Contact.css";
import ContactImg from "../assets/ContactProfileIMg.jpeg";

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-ornament"></div>
        <h1 className="large-title">CONTACT ME</h1>
        <div className="hero-line"></div>
      </div>

      <div className="contact-card">
        <div className="contact-photo-area">
          <div className="photo-frame">
            <img
              src={ContactImg}
              alt="Jessica Jardim"
              className="contact-photo-img"
            />
          </div>
          <div className="photo-decoration"></div>
        </div>

        <div className="contact-info">
          <div className="info-header">
            <span className="small-ornament">✦</span>
            <h2>JESSICA JARDIM</h2>
          </div>
          
          <p className="artist-tagline">visual artist & designer</p>
          
          <div className="info-divider"></div>

          <div className="contact-row">
            <span className="contact-label">Email</span>
            <a href="mailto:jessicajardim2004@gmail.com" className="contact-value">
              jessicajardim2004@gmail.com
            </a>
          </div>

          <div className="contact-row">
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/jessica-jardim/" target="_blank" rel="noreferrer" className="contact-value">
              linkedin.com/in/jessica-jardim
            </a>
          </div>

          <div className="contact-row">
            <span className="contact-label">Instagram</span>
            <a href="https://www.instagram.com/_arte_da_jardim?igsh=MWw2NHBxMXIrNWsxdQ%3D" target="_blank" rel="noreferrer" className="contact-value">
              @_arte_da_jardim
            </a>
          </div>
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}