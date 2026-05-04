import { useState, useEffect, useCallback } from "react";
import Footer from "../components/Footer";
import { gameUIs } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function GameDetailPage({ gameId, navigate }) {
  const gameui = gameUIs.find((g) => g.id === gameId);

    const [lightbox, setLightbox] = useState(null);
  
    const openLightbox = (images, index) => setLightbox({ images, index });
    const closeLightbox = () => setLightbox(null);
  
    const goPrev = useCallback(() => {
      setLightbox((lb) => ({
        ...lb,
        index: (lb.index - 1 + lb.images.length) % lb.images.length,
      }));
    }, []);
  
    const goNext = useCallback(() => {
      setLightbox((lb) => ({
        ...lb,
        index: (lb.index + 1) % lb.images.length,
      }));
    }, []);
  
    useEffect(() => {
      if (!lightbox) return;
      const handleKey = (e) => {
        if (e.key === "ArrowLeft") goPrev();
        else if (e.key === "ArrowRight") goNext();
        else if (e.key === "Escape") closeLightbox();
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [lightbox, goPrev, goNext]);
  
    useEffect(() => {
      document.body.style.overflow = lightbox ? "hidden" : "";
      return () => { document.body.style.overflow = ""; };
    }, [lightbox]);
  
    if (!gameui || !gameui.detail) {
      return (
        <>
          <button className="back-btn" onClick={() => navigate("portfolio", "gameUIs")}>
            ← Back to Games
          </button>
          <div className="page-hero"><h1>Not Found</h1></div>
          <Footer />
        </>
      );
    }
  
    const { detail } = gameui;
  
    const screenshotImages = (detail.screenshots || []).map((item, idx) => ({
      image: item.image,
      label: item.label,
      figureNumber: idx + 1,
      sectionLabel: "Screenshot",
    }));
  
  
  
    const allImages = [...screenshotImages];
    const currentItem = lightbox ? lightbox.images[lightbox.index] : null;
  
    let sectionIdx = 0;
    const nextSection = () => String(++sectionIdx).padStart(2, "0");
  
    return (
      <>
        <button className="back-btn" onClick={() => navigate("portfolio", "gamui")}>
          ← Back to Games
        </button>
  
        <div className="page-hero">
          <h1>{gameui.title.toUpperCase()}</h1>
        </div>
  
        <div className="detail-page">
  
          {/* ── SCREENSHOTS ── */}
          {screenshotImages.length > 0 && (
            <section className="detail-section">
              <div className="section-label-row">
                <span className="section-eyebrow">{nextSection()}</span>
                <p className="detail-section-title">Game UI Screenshots</p>
              </div>
              <div className="screenshots-grid">
                {screenshotImages.map((item, idx) => (
                  <div
                    className="screenshot-box"
                    key={idx}
                    onClick={() => openLightbox(allImages, idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(allImages, idx)}
                  >
                    <img src={item.image} alt={item.label} />
                    <span>FIGURE {item.figureNumber}: {item.label}</span>
                    <div className="screenshot-hover-hint">🔍 View</div>
                  </div>
                ))}
              </div>
            </section>
          )}
  
          
  
          {/* ── PROJECT OVERVIEW ── */}
          {detail.executiveSummary && (
            <section className="detail-section">
              <div className="section-label-row">
                <span className="section-eyebrow">{nextSection()}</span>
                <p className="detail-section-title">Project Overview</p>
              </div>
  
              {/* Top row: Website Details | Executive Summary */}
              <div className="overview-cols">
                {detail.details && detail.details.length > 0 && (
                  <div className="overview-col">
                    <h4 className="overview-col-heading">Game UI Details</h4>
                    <ul className="overview-list">
                      {detail.details.map((s, i) => (
                        <li key={i}>
                          <span className="list-bullet">—</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
  
                <div className="overview-col">
                  <h4 className="overview-col-heading">Executive Summary</h4>
                  <p className="overview-summary-text">{detail.executiveSummary}</p>
                </div>
              </div>
  
              {/* Key Sections below, full width */}
              {detail.keySections && (
                <div className="key-sections-block">
                  <h4 className="overview-col-heading">Key Sections</h4>
                  <ul className="key-sections-list">
                    {detail.keySections.map((s, i) => (
                      <li key={i}>
                        <span className="list-bullet">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {detail.userFlow && (
                <div className="user-flow-block">
                  <h4 className="overview-col-heading">User Flow</h4>
                  <ul className="user-flow-list">
                    {detail.userFlow.map((s, i) => (
                      <li key={i}>
                        <span className="list-bullet">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
  
          {/* ── DESIGN DECISIONS ── */}
          {(detail.playerBackground  || detail.goals || detail.mood) && (
            <section className="detail-section">
              <div className="section-label-row">
                <span className="section-eyebrow">{nextSection()}</span>
                <p className="detail-section-title">Design Decisions</p>
              </div>
  
              {detail.mood && (
                <blockquote className="mood-quote">
                  <span className="mood-label">Visual Mood</span>
                  {detail.mood}
                </blockquote>
              )}
  
              <div className="design-cols">
                {(detail.playerBackground ) && (
                  <div className="design-col">
                    {detail.playerBackground && (
                      <>
                        <h4 className="design-col-heading">Player Perspective</h4>
                        <p className="design-col-body">{detail.playerBackground}</p>
                      </>
                    )}
                  </div>
                )}
  
                {detail.goals && (
                  <div className="design-col">
                    <h4 className="design-col-heading">Games Goals</h4>
                    <ul className="overview-list">
                      {detail.goals.map((g, i) => (
                        <li key={i}><span className="list-bullet">—</span>{g}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}
  
          {/* ── FEATURE BREAKDOWN ── */}
          {detail.features && detail.features.length > 0 && (
            <section className="detail-section">
              <div className="section-label-row">
                <span className="section-eyebrow">{nextSection()}</span>
                <p className="detail-section-title">UI Design Breakdown</p>
              </div>
  
              <div className="features-grid">
                {detail.features.map((feature, i) => (
                  <div className="feature-card" key={i}>
                    <span className="feature-number">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="feature-card-title">{feature.title}</h3>
                    <p className="feature-card-body">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
  
          {/* ── CTA BUTTONS ── */}
          <div className="detail-links">
            {gameui.links?.gameui && (
              <a href={gameui.links.gameui} target="_blank" rel="noreferrer">
                <button className="btn-view">Game</button>
              </a>
            )}
            
          </div>
  
        </div>
  
        <div className="divider" />
        <Footer />
  
        {/* ── LIGHTBOX ── */}
        {lightbox && currentItem && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
              <div className="lightbox-img-wrap">
                <img src={currentItem.image} alt={currentItem.label} />
              </div>
              <div className="lightbox-caption">
                <span className="lightbox-section-tag">{currentItem.sectionLabel}</span>
                <p className="lightbox-label">FIGURE {currentItem.figureNumber}: {currentItem.label}</p>
              </div>
              {lightbox.images.length > 1 && (
                <div className="lightbox-nav">
                  <button className="lightbox-arrow" onClick={goPrev} aria-label="Previous">←</button>
                  <span className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</span>
                  <button className="lightbox-arrow" onClick={goNext} aria-label="Next">→</button>
                </div>
              )}
              {lightbox.images.length > 1 && (
                <div className="lightbox-dots">
                  {lightbox.images.map((_, i) => (
                    <button
                      key={i}
                      className={`lightbox-dot${i === lightbox.index ? " active" : ""}`}
                      onClick={() => setLightbox((lb) => ({ ...lb, index: i }))}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
}
