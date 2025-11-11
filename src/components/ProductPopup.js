// src/components/ProductPopup.js
'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

export default function ProductPopup({ product, onClose, initialIndex = 0 }) {
  const [idx, setIdx] = useState(initialIndex);

  // reset saat product/initialIndex berubah
  useEffect(() => { setIdx(initialIndex); }, [product, initialIndex]);

  const current = product.gallery[idx];
  const [selectedColor, setSelectedColor] = useState(current?.colors?.[0] || null);

  useEffect(() => {
    setSelectedColor(current?.colors?.[0] || null);
  }, [idx]);

  const waBase = 'https://wa.me/628131322833';
  const encoded = (t) => encodeURIComponent(t);

  const waOrderHref = useMemo(() => {
    const base = `Halo Ratapin, saya tertarik dengan ${product.title} - ${current.label}`;
    const withColor = selectedColor ? ` - Warna ${selectedColor.name}` : '';
    return `${waBase}?text=${encoded(base + withColor)}`;
  }, [product.title, current?.label, selectedColor]);

  const waAskHref = useMemo(() => {
    const base = `Halo Ratapin, saya ingin menanyakan detail ${product.title} - ${current.label}`;
    const withColor = selectedColor ? ` - Warna ${selectedColor.name}` : '';
    return `${waBase}?text=${encoded(base + withColor)}`;
  }, [product.title, current?.label, selectedColor]);

  if (!current) return null;

  return (
    <div className="product-popup-overlay" onClick={onClose}>
      <div className="product-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>

        <div className="popup-content">
          <div className="popup-left">
            <div className="popup-image">
              <Image src={current.src} alt={current.label} fill style={{ objectFit: 'cover' }} />
            </div>

            <div className="popup-gallery">
              <h4>Variasi Tipe:</h4>
              <div className="gallery-thumbnails">
                {product.gallery.map((g, i) => (
                  <div
                    key={i}
                    className={`thumbnail ${i === idx ? 'active' : ''}`}
                    onClick={() => setIdx(i)}
                  >
                    <Image src={g.src} alt={g.label} fill style={{ objectFit: 'cover' }} />
                    <span className="thumbnail-label">{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="popup-details">
            <h3>{product.title} - {current.label}</h3>
            {current.description && <p className="popup-description">{current.description}</p>}
            <div className="popup-price">{current.price}</div>

            {!!current.colors?.length && (
              <div className="popup-section">
                <h4>Pilihan Warna</h4>
                <div className="color-picker">
                  {current.colors.map((c, i) => (
                    <div
                      key={i}
                      className={`color-option ${selectedColor?.name === c.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                    >
                      <div className="color-swatch" style={{ backgroundColor: c.hex }} />
                      <span className="color-name">{c.name}</span>
                    </div>
                  ))}
                </div>
                {selectedColor && (
                  <div className="selected-color-info">
                    <span className="selected-color-label">Warna terpilih:</span>
                    <span className="selected-color-name">{selectedColor.name}</span>
                  </div>
                )}
              </div>
            )}

            <div className="popup-section">
              <h4>Keunggulan Produk</h4>
              <ul className="popup-features">
                {current.features?.map((f, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="popup-section">
              <h4>Spesifikasi</h4>
              <div className="popup-specs">
                {Object.entries(current.specs || {}).map(([k, v]) => (
                  <div key={k} className="spec-item">
                    <span className="spec-label">{k.charAt(0).toUpperCase() + k.slice(1)}:</span>
                    <span className="spec-value">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="popup-actions">
              <a href={waOrderHref} target="_blank" rel="noopener noreferrer" className="popup-cta primary">Pesan via WhatsApp</a>
              <a href={waAskHref} target="_blank" rel="noopener noreferrer" className="popup-cta secondary">Tanya Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
