import Footer from "../components/Footer";
import "../styles/CV.css";

export default function CVPage() {
  return (
    <>
      <div className="page-hero">
        <h1>CV</h1>
      </div>
       <div className="hero-line"></div>

      <div className="cv-page">
        <div className="cv-section">
          <h2>Experience</h2>

          <div className="cv-entry">
            <h3>Social Media Manager</h3>
            <p className="cv-meta">Safe Dollar Studios · 2025 – present</p>
            <p>
              Managing and growing the company’s social media presence across multiple platforms,
              driving audience engagement and community growth. Assisting with art production,
              including concept design, asset creation and visual consistency across projects.
            </p>
          </div>

          <div className="cv-entry">
            <h3>Social Media Manager</h3>
            <p className="cv-meta">Press Start Mzansi · 2025</p>
            <p>
              Created, scheduled, and managed content calendars ensuring consistent brand messaging.
              Led and managed a team of 3 content creators to deliver social media posts.
            </p>
          </div>

          <div className="cv-entry">
            <h3>Social Media Manager</h3>
            <p className="cv-meta">Joburg Games Fest · 2025</p>
            <p>
              Led a team of four in driving the company’s online presence and engagement.
              Developed and implemented strategic content plans tailored for the upcoming event.
            </p>
          </div>

          <div className="cv-entry">
            <h3>Promotional Model</h3>
            <p className="cv-meta">Volvo</p>
            <p>
              Worked as a promotional brand ambassador for Volvo Cars, where I handled administrative
              tasks and engaged with customers about the vehicles.
            </p>
          </div>

          <div className="cv-entry">
            <h3>Designer</h3>
            <p className="cv-meta">Little Kickers</p>
            <p>
              Designed a calendar, blending functionality with a playful, childlike touch.
            </p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Education</h2>
          <div className="cv-entry">
            <h3>Bachelor of Arts in Digital Arts</h3>
            <p className="cv-meta">University of the Witwatersrand · 2023 – 2026</p>
            <p>Majoring in Game Design and Interactive Media</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Skills</h2>
          <div className="cv-entry">
            <p>Communication, Team Leadership, Creative Problem Solving, Social Media Marketing, Graphic Design, Visual Communication</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Certifications</h2>
          <div className="cv-entry">
            <h3>Udemy Digital Marketing</h3>
            <p>Short course in mastery of market research, branding, funnels, copywriting, SEO, content and social media marketing, ChatGPT</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Languages</h2>
          <div className="cv-entry">
            <p>English</p>
          </div>
        </div>

        
      </div>

      <div className="divider" />
      <Footer />
    </>
  );
}