'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { imageData } from '@/data/Products';
import Coverflow from './Coverflow';
import ProductPopup from './ProductPopup';

export default function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const autoplayRef = useRef(null);

  const updateCoverflow = useCallback((newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const navigate = useCallback((dir) => {
    if (isAnimating) return;
    let idx = currentIndex + dir;
    if (idx < 0) idx = imageData.length - 1;
    if (idx >= imageData.length) idx = 0;
    updateCoverflow(idx);
  }, [currentIndex, isAnimating, updateCoverflow]);

  const goToIndex = useCallback((idx) => {
    if (isAnimating || idx === currentIndex) return;
    updateCoverflow(idx);
  }, [isAnimating, currentIndex, updateCoverflow]);

  const startAutoplay = useCallback(() => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % imageData.length);
      }, 4000);
    }
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const toggleAutoplay = useCallback(() => {
    if (isPlaying) { stopAutoplay(); setIsPlaying(false); }
    else { startAutoplay(); setIsPlaying(true); }
  }, [isPlaying, startAutoplay, stopAutoplay]);

  const handleUserInteraction = useCallback(() => {
    stopAutoplay();
    setIsPlaying(false);
  }, [stopAutoplay]);

  const openPopup = useCallback((idx) => {
    setActiveProduct(imageData[idx]);
    setShowPopup(true);
    stopAutoplay();
    setIsPlaying(false);
  }, [stopAutoplay]);

  useEffect(() => { startAutoplay(); return () => stopAutoplay(); }, [startAutoplay, stopAutoplay]);

  return (
    <section id="home" className="section">
      <div className="coverflow-wrapper">
        <div className="info">
          <h2 key={`title-${currentIndex}`}>{imageData[currentIndex].title}</h2>
          <p key={`desc-${currentIndex}`}>{imageData[currentIndex].description}</p>
        </div>

        <Coverflow
          items={imageData}
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          onNavigate={navigate}
          onGoToIndex={goToIndex}
          onSelectActive={openPopup}
          onUserInteract={handleUserInteraction}
          toggleAutoplay={toggleAutoplay}
        />
      </div>

      {showPopup && activeProduct && (
        <ProductPopup product={activeProduct} onClose={() => { setShowPopup(false); setActiveProduct(null); }} />
      )}
    </section>
  );
}
