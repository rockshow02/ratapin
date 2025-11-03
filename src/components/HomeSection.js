'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const imageData = [
  { title: "MAXXI Shingles", description: "Atap MAXXI Shingles heksagonal, tahan lama, estetis, dan fungsional.", src: "/images/MAXXI-Shingles.png" },
  { title: "Baja Ringan", description: "Baja ringan kuat, tahan lama, efisien, dan mudah dipasang.", src: "/images/Baja-ringan.png" },
  { title: "Tamco Shingles", description: "Tamco Shingles, atap elegan, tahan lama, dengan variasi warna menarik.", src: "/images/Tamco-Shingles.png" },
  { title: "Genteng Metal", description: "Genteng metal kuat, ringan, tahan lama, dan mudah perawatannya.", src: "/images/Genteng-Metal.png" },
  { title: "Victory Shingles", description: "Victory Shingles: Atap estetis, tahan lama, penuhi impian desain klasik Anda.", src: "/images/Victory-Shingles.png" },
  { title: "Tegola Shingles", description: "Tegola Shingles: Atap Bitumen kuat, estetis modern, lindungi rumah elegan Anda.", src: "/images/Tegola-Shingles.png" },
]

export default function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
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
  }, [currentIndex, isAnimating])

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
                  handleUserInteraction()
                  goToIndex(index)
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
    </section>
  )
}