import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/global.css";
import ProfileImg from "../assets/ProfileImg.png"

export default function HomePage({ navigate }) {
  return (
    <>
      <div className="home-hero">
        {/* Full-width PORTFOLIO label at top - the image will go OVER this */}
        <div className="portfolio-label">PORTFOLIO</div>

        {/* Three-column row: tags | photo | DESIGNER */}
        <div className="home-hero-row">
          {/* Left: UI UX Web tags stacked - NOW BIGGER & MORE TO THE RIGHT */}
          <div className="home-tags">
            <span>UI</span>
            <span>UX</span>
            <span>Web</span>
          </div>

          {/* Center: Profile photo - THIS GOES OVER the PORTFOLIO text with more overlap */}
          <div className="home-photo">
            <img
              src={ProfileImg}
              alt="Jessica Jardim"
            />
          </div>

        
            <h1 className="home-big-title">
              <div className="behind">DESI</div>
              <div className="front">GNER</div>
            </h1>
         
        </div>
      </div>

      <div className="home-about">
        <h2>A Little Bit About Me</h2>
        <p>
          Hi, I'm Jessica Jardim, a Junior Web Developer with a deep passion for UI design.
          I love working where functionality meets creativity: building interfaces that aren't
          just usable, but feel intuitive, thoughtful, and visually compelling. As a developer
          who thinks like a designer, I bridge the gap between logic and emotion in digital
          products. I love exploring design across different mediums. Whether I'm designing a
          logo, prototyping a user flow, or bringing a layout to life with code, my goal is
          always the same: create experiences that look beautiful and work seamlessly.
        </p>
        <div className="btn-row">
          <button className="btn-gold" onClick={() => navigate("portfolio", "websites")}>
            VIEW MY WORK
          </button>
          <button className="btn-dark" onClick={() => navigate("contact")}>
            GET IN CONTACT
          </button>
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}