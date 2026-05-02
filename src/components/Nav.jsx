import { useState, useEffect, useRef } from "react";
import "../styles/Nav.css";

export default function Nav({ currentPage, currentSub, navigate }) {
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function go(page, sub = null) {
    navigate(page, sub);
    setDropOpen(false);
  }

  const portfolioSubs = [
    { key: "websites",  label: "Websites" },
    { key: "gameui",    label: "Game UI" },
    { key: "logo",      label: "Logo Design" },
    { key: "drawings",  label: "Digital Drawings" },
    { key: "social media", label: "Social Media"},
  ];

  const isPortfolioActive = currentPage === "portfolio" || currentPage === "website-detail" || currentPage === "game-detail";

  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => go("home")}>
        Arte Da Jardim
      </button>

      <ul className="nav-links">
        <li>
          <a
            href="#"
            className={currentPage === "home" ? "active" : ""}
            onClick={(e) => { e.preventDefault(); go("home"); }}
          >
            HOME
          </a>
        </li>

        {/* Portfolio dropdown */}
        <li className="dropdown-wrapper" ref={dropRef}>
          <button
            className={isPortfolioActive ? "active" : ""}
            onClick={() => setDropOpen(o => !o)}
          >
            PORTFOLIO ▾
          </button>
          {dropOpen && (
            <ul className="dropdown-menu">
              {portfolioSubs.map(({ key, label }) => (
                <li key={key}>
                  <button onClick={() => go("portfolio", key)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <a
            href="#"
            className={currentPage === "about" ? "active" : ""}
            onClick={(e) => { e.preventDefault(); go("about"); }}
          >
            ABOUT
          </a>
        </li>

        <li>
          <a
            href="#"
            className={currentPage === "cv" ? "active" : ""}
            onClick={(e) => { e.preventDefault(); go("cv"); }}
          >
            CV
          </a>
        </li>

        <li>
          <a
            href="#"
            className={currentPage === "contact" ? "active" : ""}
            onClick={(e) => { e.preventDefault(); go("contact"); }}
          >
            CONTACT
          </a>
        </li>
      </ul>

   
    </nav>
  );
}
