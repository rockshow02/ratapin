'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-header">
          <h2>Discover 3D Coverflow</h2>
          <p>A revolutionary way to showcase your visual content with stunning 3D effects and seamless interactions</p>
        </div>
        
        <div className="about-main">
          <div className="about-visual">
            <div className="showcase-display">
              <div className="showcase-main">
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration bottom-right"></div>
                
                <div className="showcase-logo">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="25" width="15" height="50" fill="white" transform="rotate(-15 17.5 50)" opacity="0.9" />
                    <rect x="35" y="15" width="15" height="70" fill="white" />
                    <rect x="60" y="25" width="15" height="50" fill="white" transform="rotate(15 67.5 50)" opacity="0.9" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                  </svg>
                </div>
                
                <h3 className="showcase-title">3D Coverflow</h3>
                <p className="showcase-subtitle">Transform your image galleries into immersive 3D experiences</p>
                
                <div className="showcase-badges">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="badge">HTML5</a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="badge">CSS3</a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="badge">JavaScript</a>
                  <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer" className="badge">Responsive</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-info">
            <h3>Elevate Your Gallery Experience</h3>
            <p>3D Coverflow is brought to you by TemplateMo. Transform the way you present images with our cutting-edge 3D coverflow technology. Create immersive, interactive galleries that captivate your audience and leave a lasting impression.</p>
            <p>Whether you&apos;re showcasing portfolio pieces, product images, or creating an interactive story, our 3D coverflow brings your content to life with fluid animations and intuitive controls.</p>
            
            <ul className="feature-list">
              <li>Smooth 3D transitions with hardware acceleration</li>
              <li>Touch-enabled navigation for mobile devices</li>
              <li>Customizable autoplay and timing controls</li>
              <li>Keyboard navigation support</li>
              <li>Reflection effects for added depth</li>
            </ul>
            
            <Link href="#contact" className="cta-button">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">60fps</div>
            <div className="stat-label">Smooth Performance</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Responsive Design</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3D</div>
            <div className="stat-label">Visual Effects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Customization</div>
          </div>
        </div>
      </div>
    </section>
  )
}