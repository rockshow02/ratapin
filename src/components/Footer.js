'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © 2025 Rockshow. All rights reserved. | Designed by <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="footer-links">
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy page would go here'); }}>Privacy Policy</a>
          <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service page would go here'); }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}