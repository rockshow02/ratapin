'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Coverflow({
  items,
  currentIndex,
  isPlaying,
  onNavigate,        // (dir: -1 | +1)
  onGoToIndex,       // (idx: number)
  onSelectActive,    // buka popup utk index aktif
  onUserInteract,    // stop autoplay saat user interaksi
  toggleAutoplay,
}) {
  const containerRef = useRef(null);

  const getItemStyle = (index) => {
    let offset = index - currentIndex;
    if (offset > items.length / 2) offset -= items.length;
    else if (offset < -items.length / 2) offset += items.length;

    const abs = Math.abs(offset);
    const sign = Math.sign(offset);

    let translateX = offset * 220;
    let translateZ = -abs * 200;
    let rotateY = -sign * Math.min(abs * 60, 60);
    let opacity = 1 - abs * 0.2;
    let scale = 1 - abs * 0.1;

    if (abs > 3) {
      opacity = 0;
      translateX = sign * 800;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 100 - abs,
    };
  };

  // keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') { onUserInteract(); onNavigate(-1); }
      if (e.key === 'ArrowRight') { onUserInteract(); onNavigate(1); }
    };
    const el = containerRef.current;
    el?.addEventListener('keydown', handleKeyDown);
    return () => el?.removeEventListener('keydown', handleKeyDown);
  }, [onNavigate, onUserInteract]);

  // touch/swipe
  useEffect(() => {
    let startX = 0, startY = 0, swiping = false;

    const handleStart = (e) => { startX = e.changedTouches[0].screenX; startY = e.changedTouches[0].screenY; swiping = true; };
    const handleMove = (e) => {
      if (!swiping) return;
      const diff = e.changedTouches[0].screenX - startX;
      if (Math.abs(diff) > 10) e.preventDefault();
    };
    const handleEnd = (e) => {
      if (!swiping) return;
      const dx = startX - e.changedTouches[0].screenX;
      const dy = startY - e.changedTouches[0].screenY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
        onUserInteract();
        onNavigate(dx > 0 ? 1 : -1);
      }
      swiping = false;
    };

    const el = containerRef.current;
    el?.addEventListener('touchstart', handleStart, { passive: true });
    el?.addEventListener('touchmove', handleMove, { passive: false });
    el?.addEventListener('touchend', handleEnd, { passive: true });
    return () => {
      el?.removeEventListener('touchstart', handleStart);
      el?.removeEventListener('touchmove', handleMove);
      el?.removeEventListener('touchend', handleEnd);
    };
  }, [onNavigate, onUserInteract]);

  return (
    <div className="coverflow-container" tabIndex="0" ref={containerRef}>
      <div className="coverflow">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`coverflow-item ${idx === currentIndex ? 'active' : ''}`}
            style={getItemStyle(idx)}
            onClick={() => {
              if (idx === currentIndex) onSelectActive(idx);
              else { onUserInteract(); onGoToIndex(idx); }
            }}
          >
            <div className="cover">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="300px"
                style={{ objectFit: 'cover' }}
                priority={idx === currentIndex}
              />
            </div>
            <div className="reflection" />
          </div>
        ))}
      </div>

      <button className="nav-button prev" onClick={() => { onUserInteract(); onNavigate(-1); }}>‹</button>
      <button className="nav-button next" onClick={() => { onUserInteract(); onNavigate(1); }}>›</button>

      <div className="dots-container">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => { onUserInteract(); onGoToIndex(idx); }}
          />
        ))}
      </div>

      <button className="play-pause-button" onClick={toggleAutoplay}>
        <span className="play-icon" style={{ display: isPlaying ? 'none' : 'block' }}>▶</span>
        <span className="pause-icon" style={{ display: isPlaying ? 'block' : 'none' }}>❚❚</span>
      </button>
    </div>
  );
}
