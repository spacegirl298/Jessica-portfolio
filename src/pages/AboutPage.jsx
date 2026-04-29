import Footer from "../components/Footer";
import "../styles/About.css";
import ProfileImg from "../assets/ProfileImg.png";

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <h1>ABOUT</h1>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <h2 className="about-name">Jessica Jardim</h2>

          <p className="about-bio">
            I'm a multidisciplinary designer driven by one core belief:
            creativity and functionality should always work together. Whether
            I'm designing a UI for a website, shaping the user experience of a
            game, sketching a logo, or bringing a 3D model to life, I'm always
            thinking about how people interact with what I make. My process
            blends digital art, traditional crafts like crochet, and even 3D
            modelling, because creativity flows through everything, not just one
            medium.
            <br />
            <br />
            Psychology is at the heart of my design decisions. Understanding how
            people think, feel, and behave helps me create experiences that
            aren't just beautiful, but intuitive and meaningful.
            <br />
            <br />
            I'm endlessly curious and always open to learning something new. If
            it involves creativity, I want to explore it.
          </p>

          <div className="skills-section">
            <h3>My Skills</h3>

            <div className="skill-group">
              <h4>Design &amp; Branding</h4>
              <p>
                Logo Design, UI design, Canva, Figma, Procreate, Procreate
                Dreams, Krita.
              </p>
            </div>

            <div className="skill-group">
              <h4>Frontend Development</h4>
              <p>HTML, CSS, JavaScript, JSX</p>
            </div>

            <div className="skill-group">
              <h4>Soft Skills</h4>
              <p>
                Communication, leadership, adaptability, problem-solving,
                collaboration, attention to detail
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img
            src={ProfileImg}
            alt="Jessica Jardim"
            className="about-photo-placeholder"
          />
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}
