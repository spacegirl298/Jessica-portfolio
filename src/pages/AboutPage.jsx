import Footer from "../components/Footer";
import "../styles/About.css";
import ProfileImg from "../assets/ProfileImg.png";

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <h1>ABOUT</h1>
      </div>
      <div className="hero-line"></div>

      <div className="about-grid">
        <div className="about-left">
          <h2 className="about-name">Jessica Jardim</h2>

          <p className="about-bio">
            I'm a multidisciplinary designer who believes creativity and
            functionality should always work together. With all my work, I'm
            always thinking about how people interact with what I make.
            <br />
            <br />
            Design and creativity have blended into every aspect of my life.
            I've taken on hobbies that allow me to constantly embrace this part
            of me - I paint, draw, digitally draw, crochet, and do social media.
            In my work life, I've taken on many roles: doing design in game
            design, blending 3D assets, UI design, and environmental design.
            With web design, I've found my passion in designing websites,
            ensuring they are creative and unique while also blending in
            functionality. I make sure users have a smooth experience using the
            profiles.
            <br />
            <br />
            I've used this creativity in my university work, but also co-founded
            a company called Social Proof Marketing Agency. With this company,
            my focus is on front-end design and social media. Social media is
            one of my other passions. I've worked with multiple companies in
            curating a social media presence, building up their brand. Many of
            the companies I've worked for are start-ups, so I build their logos,
            style guides, planning of social media schedules, and record and
            edit content.
            <br />
            <br />
            Throughout my university degree, I've been working on building up my
            experience - not only for my future in the workplace but also for my
            curiosity of learning and experiencing different work spaces. I've
            balanced working multiple jobs while doing my full-time university
            degree in BA Digital Arts. I've fully enjoyed finding that balance
            and experiencing all these things. Not only have I found a balance
            with my work, hobbies, and university degree, but I also make sure I
            have time to unwind and have a social life. Balance isn't only about
            work—it's also about keeping up with your social life.
            <br />
            <br />
            I have a passion in psychology, and this has blended into my design
            decisions. Understanding how people feel and behave helps me create
            experiences that aren't just beautiful, but intuitive and meaningful
            <br />
            <br />
            I'm endlessly curious and always open to learn something new. If it
            involves creativity and technology, I want to explore it.
          </p>

          <div className="skills-section">
            <h3>My Skills</h3>

            <div className="skill-group">
              <h4>Design &amp; Branding</h4>
              <p>
                Logo Design, UI design, Brand Identity & Style Guides, Social
                Media Content Planning, Canva, Capcut Figma, Procreate,
                Procreate Dreams, Krita, Photography, Videography.
              </p>
            </div>

            <div className="skill-group">
              <h4>Frontend Development</h4>
              <p>HTML, CSS, JavaScript, JSX</p>
            </div>

            <div className="skill-group">
              <h4>Game Desing </h4>
              <p>Environmental Design, Belnder, Unity, Godot, C#</p>
            </div>

            <div className="skill-group">
              <h4>Soft Skills</h4>
              <p>
                Communication, leadership, adaptability, problem-solving,
                collaboration, attention to detail, Imagination & Creative
                Thinking, Time Management, User Psychology
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
