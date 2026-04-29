import Footer from "../components/Footer";
import "../styles/Contact.css";
import ContactImg from "../assets/ContactProfileIMg.jpeg"

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">CONTACT ME</h1>
      </div>

      <div className="contact-card">
          <div className="contact-photo">
                  <img
                    src={ContactImg}
                    alt="Jessica Jardim"
                    className="about-photo-placeholder"
                  />
                </div>

        <div className="contact-info">
          <h2>Jessica Jardim</h2>

          <span className="contact-label">Email Address:</span>
          <a href="mailto:jessicajardim2004@gmail.com">
            jessicajardim2004@gmail.com
          </a>

          <span className="contact-label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/jessica-jardim/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/jessica-jardim/
          </a>

          <span className="contact-label">Instagram:</span>
          <a
            href="https://www.instagram.com/arte_da_jardim/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.instagram.com/arte_da_jardim/
          </a>
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}
