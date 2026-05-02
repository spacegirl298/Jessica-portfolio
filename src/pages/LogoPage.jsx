// LogoPage.jsx

import { useState, useEffect, useCallback } from "react";
import Footer from "../components/Footer";
import { logoDesigns } from "../data/portfolioData";
import "../styles/Portfolio.css";

export default function LogoPage() {

  // Build a flat images array from all logos for cross-navigation
  const allImages = logoDesigns.map((logo) => ({
    image: logo.image,
    label: logo.title,
    sectionLabel: "Logo Design",
  }));

  // Lightbox state
  const [lightbox, setLightbox] = useState(null); // { images: [], index: 0 }

  const openLightbox = (index) => {
    setLightbox({ images: allImages, index });
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

  const currentItem = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      <div className="page-hero">
        <h1 className="large-title">Logo Design</h1>
      </div>

      <div className="logo-list">
        {logoDesigns.map((logo, idx) => (
          <div
            key={logo.id}
            className={`logo-item${logo.reverse ? " reverse" : ""}`}
          >
            <div
              className="logo-img logo-img--clickable"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
            >
              <img
                src={logo.image}
                alt={logo.title}
              />
              <div className="logo-hover-hint">🔍 View</div>
            </div>

            <div className="logo-text">
              <h2>{logo.title}</h2>
              <p>{logo.desc}</p>
            </div>
          </div>
        ))}
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
              <p className="lightbox-label">{currentItem.label}</p>
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