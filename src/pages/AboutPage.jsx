import Footer from "../components/Footer";
import "../styles/About.css";
import ProfileImg from "../assets/ProfileImg.png";

const skills = [
  {
    title: "Design & Branding",
    items:
      "Logo Design, UI Design, Brand Identity & Style Guides, Social Media Content Planning, Canva, CapCut, Figma, Procreate, Procreate Dreams, Krita, Photography, Videography",
  },
  {
    title: "Frontend Development",
    items: "HTML, CSS, JavaScript, JSX, React",
  },
  {
    title: "Game Design",
    items: "Environmental Design, Blender, Unity, Godot, C#",
  },
  {
    title: "Soft Skills",
    items:
      "Communication, Leadership, Adaptability, Problem-Solving, Collaboration, Attention to Detail, Creative Thinking, Time Management, User Psychology",
  },
];

const bioParagraphs = [
  `I'm a multidisciplinary designer who believes creativity and functionality should always work together. With all my work, I'm always thinking about how people interact with what I make.`,
  `Design and creativity have blended into every aspect of my life. I've taken on hobbies that allow me to constantly embrace this part of me — I paint, draw, digitally draw, crochet, and create social media content. In my work life, I've taken on many roles: game design, blending 3D assets, UI design, and environmental design. With web design, I've found my passion in designing websites that are creative and unique while blending in functionality.`,
  `I've used this creativity in my university work, and also co-founded a company called Social Proof Marketing Agency. My focus there is on front-end design and social media — working with multiple companies to curate a social media presence, build brands, design logos and style guides, plan social media schedules, and record and edit content.`,
  `Throughout my university degree in BA Digital Arts, I've been building up my experience — not only for my future in the workplace, but out of genuine curiosity. I've balanced multiple jobs alongside full-time study, and fully enjoyed finding that balance.`,
  `I have a passion for psychology, and it has blended into my design decisions. Understanding how people feel and behave helps me create experiences that aren't just beautiful, but intuitive and meaningful. I'm endlessly curious and always open to learning something new.`,
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <h1>ABOUT</h1>
      </div>
      <div className="hero-line"></div>

      {/* ── HERO: large photo left, name + intro right ── */}
      <div className="about-hero">
        <div className="about-hero-image-wrap">
          <img
            src={ProfileImg}
            alt="Jessica Jardim"
            className="about-photo-placeholder"
          />
        </div>

        <div className="about-intro-panel">
          <h2 className="about-name">Jessica<br />Jardim</h2>
          <span className="about-role">
            Multidisciplinary Designer &nbsp;·&nbsp; BA Digital Arts
          </span>

          

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Disciplines</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Curiosity</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY: bio left, skills right ── */}
      <div className="about-body">
        <div className="about-bio">
          <p className="section-label">My Story</p>
          {bioParagraphs.map((para, i) => (
            <p className="bio-paragraph" key={i}>{para}</p>
          ))}
        </div>

        <div className="skills-section">
          <p className="section-label">Skills</p>
          {skills.map((s) => (
            <div className="skill-group" key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}