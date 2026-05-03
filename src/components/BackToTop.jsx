import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 300);
      setScrollPct(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress ring
  const size = 44;
  const strokeW = 2;
  const radius = (size - strokeW) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * scrollPct;

  return (
    <button
      className={`btt-btn${visible ? " btt-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {/* Progress ring */}
      <svg
        className="btt-ring"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Track */}
        <circle
          className="btt-ring-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeW}
        />
        {/* Progress */}
        <circle
          className="btt-ring-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeW}
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="butt"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Arrow */}
      <span className="btt-arrow" aria-hidden="true">↑</span>
    </button>
  );
}