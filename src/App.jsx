import { useState, useEffect } from "react";
import BackToTop from "./components/BackToTop";
import Nav from "./components/Nav";

// Pages
import HomePage        from "./pages/HomePage";
import AboutPage       from "./pages/AboutPage";
import ContactPage     from "./pages/ContactPage";
import CVPage          from "./pages/CVPage";
import WebsitesPage    from "./pages/WebsitesPage";
import WebsiteDetailPage from "./pages/WebsiteDetailPage";
import GameUIPage      from "./pages/GameUIPage";
import GameDetailPage  from "./pages/GameDetailPage";
import LogoPage        from "./pages/LogoPage";
import DrawingsPage    from "./pages/DrawingsPage";


import "./styles/global.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSub,  setCurrentSub]  = useState(null);

  // Scroll to top on every navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, currentSub]);

  function navigate(page, sub = null) {
    setCurrentPage(page);
    setCurrentSub(sub);
  }

  function renderPage() {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} />;

      case "about":
        return <AboutPage />;

      case "contact":
        return <ContactPage />;

      case "cv":
        return <CVPage />;

      case "portfolio":
        switch (currentSub) {
          case "websites":  return <WebsitesPage navigate={navigate} />;
          case "gameui":    return <GameUIPage   navigate={navigate} />;
          case "logo":      return <LogoPage />;
          case "drawings":  return <DrawingsPage />;
          default:          return <WebsitesPage navigate={navigate} />;
        }

      case "website-detail":
        return <WebsiteDetailPage siteId={currentSub} navigate={navigate} />;

      case "game-detail":
        return <GameDetailPage gameId={currentSub} navigate={navigate} />;
        
        
      default:
        return <HomePage navigate={navigate} />;
    }
  }

  return (
    <>
      <Nav
        currentPage={currentPage}
        currentSub={currentSub}
        navigate={navigate}
      />
      <main>{renderPage()}</main>
      <BackToTop /> {/* 👈 Add this line */}
    </>
  );
}