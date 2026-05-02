import { useState, useEffect, useCallback } from "react";
import { websites } from "../data/portfolioData";
import Footer from "../components/Footer";

export default function WebsiteDetailPage({ siteId, navigate }) {
  const site = websites.find((s) => s.id === siteId);

  // Lightbox state
  const [lightbox, setLightbox] = useState(null); // { images: [], index: 0 }

  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };

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

  // Keyboard navigation
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

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!site || !site.detail) {
    return (
      <>
        <button className="back-btn" onClick={() => navigate("portfolio", "websites")}>
          ← Back to Websites
        </button>
        <div className="page-hero"><h1>Not Found</h1></div>
        <Footer />
      </>
    );
  }

  const { detail } = site;

  // Build a combined images array for cross-section navigation
  const screenshotImages = (detail.screenshots || []).map((item, idx) => ({
    image: item.image,
    label: item.label,
    figureNumber: idx + 1,
    sectionLabel: "Screenshot",
  }));

  const wireframeImages = (detail.wireframes || []).map((item, idx) => ({
    image: item.image,
    label: item.label,
    figureNumber: (detail.screenshots?.length || 0) + idx + 1,
    sectionLabel: "Wireframe",
  }));

  const allImages = [...screenshotImages, ...wireframeImages];

  const currentItem = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      <button className="back-btn" onClick={() => navigate("portfolio", "websites")}>
        ← Back to Websites
      </button>

      <div className="page-hero">
        <h1>{site.title.toUpperCase()}</h1>
      </div>

      <div className="detail-page">

        {/* SCREENSHOTS */}
        {screenshotImages.length > 0 && (
          <>
            <p className="detail-section-title">Website Screenshots</p>
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
          </>
        )}

        {/* WIREFRAMES */}
        {wireframeImages.length > 0 && (
          <>
            <p className="detail-section-title">Figma Wireframes</p>
            <div className="screenshots-grid">
              {wireframeImages.map((item, idx) => {
                const globalIdx = screenshotImages.length + idx;
                return (
                  <div
                    className="screenshot-box"
                    key={idx}
                    onClick={() => openLightbox(allImages, globalIdx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(allImages, globalIdx)}
                  >
                    <img src={item.image} alt={item.label} />
                    <span>FIGURE {item.figureNumber}: {item.label}</span>
                    <div className="screenshot-hover-hint">🔍 View</div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* OVERVIEW */}
        {detail.executiveSummary && (
          <>
            <p className="detail-section-title">Project Overview</p>
            <div className="design-decisions">
              <div className="decision-col">
                <h3>Executive Summary</h3>
                <p>{detail.executiveSummary}</p>
                {detail.keySections && (
                  <>
                    <h4>Key Sections</h4>
                    <ul>
                      {detail.keySections.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </>
                )}
              </div>
              {detail.successCriteria && (
                <div className="decision-col">
                  <h3>Success Criteria</h3>
                  <ul>
                    {detail.successCriteria.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}

        {/* DESIGN */}
        {(detail.customerBackground || detail.challenges || detail.goals || detail.mood) && (
          <>
            <p className="detail-section-title">Design Decisions</p>
            <div className="design-decisions">
              <div className="decision-col">
                {detail.customerBackground && (
                  <>
                    <h3>Customer Perspective</h3>
                    <p>{detail.customerBackground}</p>
                  </>
                )}
                {detail.challenges && (
                  <>
                    <h4>Challenges</h4>
                    <ul>
                      {detail.challenges.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </>
                )}
              </div>
              <div className="decision-col">
                {detail.goals && (
                  <>
                    <h3>Product Goals</h3>
                    <ul>
                      {detail.goals.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  </>
                )}
                {detail.mood && (
                  <>
                    <h4>Visual Mood</h4>
                    <p>{detail.mood}</p>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {/* FEATURE BREAKDOWN */}
        {detail.features && detail.features.length > 0 && (
          <>
            <p className="detail-section-title">Feature Breakdown</p>
            <div className="feature-breakdown">
              {detail.features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* BUTTONS */}
        <div className="detail-links">
          {site.links?.website && (
            <a href={site.links.website} target="_blank" rel="noreferrer">
              <button className="btn-view">WEBSITE</button>
            </a>
          )}
          {site.links?.figma && (
            <a href={site.links.figma} target="_blank" rel="noreferrer">
              <button className="btn-view">FIGMA</button>
            </a>
          )}
        </div>

      </div>

      <div className="divider" />
      <Footer />

      {/* LIGHTBOX OVERLAY */}
      {lightbox && currentItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>

            {/* Image */}
            <div className="lightbox-img-wrap">
              <img src={currentItem.image} alt={currentItem.label} />
            </div>

            {/* Caption */}
            <div className="lightbox-caption">
              <span className="lightbox-section-tag">{currentItem.sectionLabel}</span>
              <p className="lightbox-label">FIGURE {currentItem.figureNumber}: {currentItem.label}</p>
            </div>

            {/* Navigation */}
            {lightbox.images.length > 1 && (
              <div className="lightbox-nav">
                <button className="lightbox-arrow" onClick={goPrev} aria-label="Previous">←</button>
                <span className="lightbox-counter">
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
                <button className="lightbox-arrow" onClick={goNext} aria-label="Next">→</button>
              </div>
            )}

            {/* Dot indicators */}
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