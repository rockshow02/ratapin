'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'products', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => {
    setMenuOpen(false)
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link href="#home" className="logo-container" onClick={scrollToTop}>
        <div className="logo">
          <Image 
            src="/images/logo-42a7f0c9.png" 
            alt="Ratapin Logo" 
            width={50} 
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="logo-text">RATAPIN</div>
      </Link>
      
      <nav className={`main-menu ${menuOpen ? 'active' : ''}`}>
        <Link href="#home" className={`menu-item ${activeSection === 'home' ? 'active' : ''}`} onClick={handleMenuClick}>Home</Link>
        <Link href="#about" className={`menu-item ${activeSection === 'about' ? 'active' : ''}`} onClick={handleMenuClick}>About</Link>
        <Link href="#products" className={`menu-item ${activeSection === 'products' ? 'active' : ''}`} onClick={handleMenuClick}>Products</Link>
        <Link href="#contact" className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleMenuClick}>Contact</Link>
      </nav>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}