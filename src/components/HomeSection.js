'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const imageData = [
  { 
    title: "MAXXI Shingles", 
    description: "Atap MAXXI Shingles heksagonal, tahan lama, estetis, dan fungsional.", 
    src: "/images/MAXXI-Shingles.png",
    price: "Rp 125.000/m²",
    features: [
      "Desain heksagonal modern",
      "Tahan cuaca ekstrem",
      "Garansi 25 tahun",
      "Mudah dipasang"
    ],
    specs: {
      material: "Bitumen berkualitas tinggi",
      ketebalan: "3mm",
      berat: "12 kg/m²",
      warna: "Berbagai pilihan"
    }
  },
  { 
    title: "Baja Ringan", 
    description: "Baja ringan kuat, tahan lama, efisien, dan mudah dipasang.", 
    src: "/images/Baja-ringan.png",
    price: "Rp 45.000/meter",
    features: [
      "Anti karat dan korosi",
      "Ringan namun kuat",
      "Ramah lingkungan",
      "Pemasangan cepat"
    ],
    specs: {
      material: "Galvanis berkualitas",
      ketebalan: "0.75mm - 1mm",
      berat: "Sangat ringan",
      finishing: "Galvanis/Zincalume"
    }
  },
  { 
    title: "Tamco Shingles", 
    description: "Tamco Shingles, atap elegan, tahan lama, dengan variasi warna menarik.", 
    src: "/images/Tamco-Shingles.png",
    price: "Rp 135.000/m²",
    features: [
      "Elegan dan premium",
      "Variasi warna lengkap",
      "Tahan UV dan panas",
      "Instalasi profesional"
    ],
    specs: {
      material: "Bitumen premium",
      ketebalan: "3.2mm",
      berat: "13 kg/m²",
      garansi: "30 tahun"
    }
  },
  { 
    title: "Genteng Metal", 
    description: "Genteng metal kuat, ringan, tahan lama, dan mudah perawatannya.", 
    src: "/images/Genteng-Metal.png",
    price: "Rp 85.000/lembar",
    features: [
      "Anti bocor 100%",
      "Tahan lama 15+ tahun",
      "Berbagai pilihan warna",
      "Perawatan minimal"
    ],
    specs: {
      material: "Metal berlapis pasir",
      ketebalan: "0.3mm - 0.4mm",
      berat: "7 kg/m²",
      dimensi: "Customizable"
    }
  },
  { 
    title: "Victory Shingles", 
    description: "Victory Shingles: Atap estetis, tahan lama, penuhi impian desain klasik Anda.", 
    src: "/images/Victory-Shingles.png",
    price: "Rp 115.000/m²",
    features: [
      "Desain klasik elegan",
      "Kualitas terjamin",
      "Tahan segala cuaca",
      "Mudah maintenance"
    ],
    specs: {
      material: "Aspal bitumen",
      ketebalan: "3mm",
      berat: "11 kg/m²",
      garansi: "20 tahun"
    }
  },
  { 
    title: "Tegola Shingles", 
    description: "Tegola Shingles: Atap Bitumen kuat, estetis modern, lindungi rumah elegan Anda.", 
    src: "/images/Tegola-Shingles.png",
    price: "Rp 145.000/m²",
    features: [
      "Premium quality",
      "Estetika modern",
      "Proteksi maksimal",
      "Brand terpercaya"
    ],
    specs: {
      material: "Bitumen Italia",
      ketebalan: "3.5mm",
      berat: "14 kg/m²",
      garansi: "35 tahun"
    }
  },
]

export default function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const containerRef = useRef(null)
  const autoplayRef = useRef(null)

  const updateCoverflow = (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const navigate = (direction) => {
    if (isAnimating) return
    let newIndex = currentIndex + direction
    if (newIndex < 0) newIndex = imageData.length - 1
    if (newIndex >= imageData.length) newIndex = 0
    updateCoverflow(newIndex)
  }

  const goToIndex = (index) => {
    if (isAnimating || index === currentIndex) return
    updateCoverflow(index)
  }

  const openPopup = (index) => {
    setSelectedProduct(imageData[index])
    setShowPopup(true)
    stopAutoplay()
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedProduct(null)
  }

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length)
    }, 4000)
    setIsPlaying(true)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
    setIsPlaying(false)
  }

  const toggleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay()
    } else {
      startAutoplay()
    }
  }

  const handleUserInteraction = () => {
    stopAutoplay()
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showPopup && e.key === 'Escape') {
        closePopup()
        return
      }
      if (e.key === 'ArrowLeft') {
        handleUserInteraction()
        navigate(-1)
      }
      if (e.key === 'ArrowRight') {
        handleUserInteraction()
        navigate(1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [currentIndex, isAnimating, showPopup])

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let isSwiping = false

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
      touchStartY = e.changedTouches[0].screenY
      isSwiping = true
    }

    const handleTouchMove = (e) => {
      if (!isSwiping) return
      const currentX = e.changedTouches[0].screenX
      const diff = currentX - touchStartX
      if (Math.abs(diff) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e) => {
      if (!isSwiping) return
      const touchEndX = e.changedTouches[0].screenX
      const touchEndY = e.changedTouches[0].screenY
      const diffX = touchStartX - touchEndX
      const diffY = touchStartY - touchEndY
      
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        handleUserInteraction()
        if (diffX > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
      isSwiping = false
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
      container.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [currentIndex, isAnimating])

  const getItemStyle = (index) => {
    let offset = index - currentIndex
    
    if (offset > imageData.length / 2) {
      offset = offset - imageData.length
    } else if (offset < -imageData.length / 2) {
      offset = offset + imageData.length
    }
    
    const absOffset = Math.abs(offset)
    const sign = Math.sign(offset)
    
    let translateX = offset * 220
    let translateZ = -absOffset * 200
    let rotateY = -sign * Math.min(absOffset * 60, 60)
    let opacity = 1 - (absOffset * 0.2)
    let scale = 1 - (absOffset * 0.1)

    if (absOffset > 3) {
      opacity = 0
      translateX = sign * 800
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 100 - absOffset
    }
  }

  return (
    <section id="home" className="section">
      <div className="coverflow-wrapper">
        <div className="info">
          <h2 key={`title-${currentIndex}`}>{imageData[currentIndex].title}</h2>
          <p key={`desc-${currentIndex}`}>{imageData[currentIndex].description}</p>
        </div>

        <div className="coverflow-container" tabIndex="0" ref={containerRef}>
          <div className="coverflow">
            {imageData.map((item, index) => (
              <div
                key={index}
                className={`coverflow-item ${index === currentIndex ? 'active' : ''}`}
                style={getItemStyle(index)}
                onClick={() => {
                  if (index === currentIndex) {
                    openPopup(index)
                  } else {
                    handleUserInteraction()
                    goToIndex(index)
                  }
                }}
              >
                <div className="cover">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover' }}
                    priority={index === currentIndex}
                  />
                </div>
                <div className="reflection"></div>
              </div>
            ))}
          </div>

          <button className="nav-button prev" onClick={() => { handleUserInteraction(); navigate(-1); }}>‹</button>
          <button className="nav-button next" onClick={() => { handleUserInteraction(); navigate(1); }}>›</button>

          <div className="dots-container">
            {imageData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  handleUserInteraction()
                  goToIndex(index)
                }}
              />
            ))}
          </div>
          
          <button className="play-pause-button" onClick={toggleAutoplay}>
            <span className="play-icon" style={{ display: isPlaying ? 'none' : 'block' }}>▶</span>
            <span className="pause-icon" style={{ display: isPlaying ? 'block' : 'none' }}>❚❚</span>
          </button>
        </div>
      </div>

      {/* Product Detail Popup */}
      {showPopup && selectedProduct && (
        <div className="product-popup-overlay" onClick={closePopup}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            
            <div className="popup-content">
              <div className="popup-image">
                <Image
                  src={selectedProduct.src}
                  alt={selectedProduct.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="popup-details">
                <h3>{selectedProduct.title}</h3>
                <p className="popup-description">{selectedProduct.description}</p>
                <div className="popup-price">{selectedProduct.price}</div>
                
                <div className="popup-section">
                  <h4>Keunggulan Produk</h4>
                  <ul className="popup-features">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="popup-section">
                  <h4>Spesifikasi</h4>
                  <div className="popup-specs">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="popup-actions">
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Ratapin,%20saya%20tertarik%20dengan%20${encodeURIComponent(selectedProduct.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-cta primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.52 3.449C18.297 1.233 15.322 0 12.214 0 5.56 0 .146 5.414.146 12.068c0 2.127.553 4.206 1.605 6.041L.057 24l6.054-1.588a12.054 12.054 0 005.102 1.095h.005c6.653 0 12.067-5.414 12.067-12.068 0-3.226-1.258-6.258-3.763-8.99zm-8.306 18.55h-.004a9.976 9.976 0 01-5.087-1.393l-.365-.217-3.782.992.99-3.629-.239-.379a9.944 9.944 0 01-1.525-5.311c0-5.498 4.474-9.971 9.979-9.971 2.664 0 5.167 1.039 7.053 2.925a9.909 9.909 0 012.919 7.053c-.001 5.498-4.475 9.971-9.979 9.971z"/>
                    </svg>
                    Pesan via WhatsApp
                  </a>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Ratapin,%20saya%20ingin%20menanyakan%20detail%20${encodeURIComponent(selectedProduct.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-cta secondary"
                  >
                    Tanya Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}