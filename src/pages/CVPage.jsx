import Footer from "../components/Footer";
import "../styles/CV.css";

export default function CVPage() {
  return (
    <>
      <div className="page-hero">
        <h1>CV</h1>
      </div>

      <div className="cv-page">
        <div className="cv-section">
          <h2>Education</h2>
          <div className="cv-entry">
            <h3>Bachelor of Interactive Media Design</h3>
            <p className="cv-meta">IIE Varsity College, Sandton · 2022 – 2024</p>
            <p>
              Majored in UI/UX Design and Web Development. Graduated with distinction in
              design practice modules.
            </p>
          </div>
          <div className="cv-entry">
            <h3>National Senior Certificate</h3>
            <p className="cv-meta">2021</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Experience</h2>
          <div className="cv-entry">
            <h3>Junior UI/UX Designer &amp; Web Developer</h3>
            <p className="cv-meta">Freelance · 2022 – Present</p>
            <p>
              Designed and developed interfaces for clients including vape retail, financial
              advisory, game studios, and hospitality brands. Delivered logo design,
              wireframing, prototyping and front-end development.
            </p>
          </div>
          <div className="cv-entry">
            <h3>Game UI Designer</h3>
            <p className="cv-meta">Safe Dollar Studios · 2023</p>
            <p>
              Designed UI systems and 3D assets for multiple game projects including Broken
              Bonds and Colour Chase. Established cohesive visual languages across platforms.
            </p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Skills</h2>
          <div className="cv-entry">
            <h3>Design Tools</h3>
            <p>Figma, Canva, Procreate, Procreate Dreams, Krita, Adobe Illustrator</p>
          </div>
          <div className="cv-entry">
            <h3>Development</h3>
            <p>HTML, CSS, JavaScript, JSX / React, responsive web design</p>
          </div>
          <div className="cv-entry">
            <h3>Disciplines</h3>
            <p>
              UI/UX Design, Logo Design, Branding, Game UI, Digital Illustration,
              3D Modelling (basic)
            </p>
          </div>
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}
