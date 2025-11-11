'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-header">
          <h2>RATAPIN</h2>
          <p>Ratapin: Ahli terpercaya dalam membuat dan memperbaiki atap. Kualitas material premium, pengerjaan rapi, rumah Anda terlindungi sempurna.</p>
        </div>
        
        <div className="about-main">
          <div className="about-visual">
            <div className="showcase-display">
              <div className="showcase-main">
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration bottom-right"></div>
                
                <div className="showcase-logo">
                  <div className="showcase-logo">
                    <Image 
                      src="/images/logo-42a7f0c9.png" 
                      alt="Ratapin Logo" 
                      className="logo-image"
                      width={200}   // Sesuaikan dengan ukuran logo Anda
                      height={200}  // Sesuaikan dengan ukuran logo Anda
                      priority      // Opsional: untuk gambar penting di atas fold
                    />
                  </div>
                </div>
                
                <p className="showcase-subtitle">Tingkatkan Kualitas & Daya Tahan Atap Anda</p>
                
                <div className="showcase-badges">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="badge">Material Premium</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="badge">Instalasi Presisi</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="badge">Garansi Resmi</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="badge">Tahan Cuaca</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-info">
            <h3>Tingkatkan Kualitas & Daya Tahan Atap Anda</h3>
            <p>Ratapin berdedikasi untuk memberikan solusi atap yang komprehensif, mulai dari konsultasi pemilihan material, instalasi atap baru, hingga perbaikan dan perawatan.</p>
            <p>Kami memahami bahwa atap adalah perlindungan utama rumah Anda.</p>
            <p>Oleh karena itu, kami menggabungkan material terbaik di kelasnya dengan tim profesional yang berpegang teguh pada standar presisi tertinggi, memastikan atap Anda kuat, indah, dan tahan lama di segala kondisi cuaca.</p>
            
            <ul className="feature-list">
              <li>Instalasi dengan Standar Presisi Tinggi (Pemasangan yang detail dan akurat)</li>
              <li>Hanya Menggunakan Material Atap Premium (Jaminan mutu dan daya tahan produk)</li>
              <li>Garansi Resmi Pemasangan & Perbaikan (Ketidaknyamanan pikiran setelah proyek selesai)</li>
              <li>Konsultasi Gratis Pemilihan Solusi Terbaik (Bantuan profesional sebelum memulai)</li>
              <li>Pengerjaan Tepat Waktu dan Rapi Sesuai Kontrak (Komitmen profesionalisme)</li>
            </ul>
            
            <a 
              href="https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20ingin%20konsultasi%20tentang%20proyek%20atap" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              Konsultasi
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">10+ Tahun</div>
            <div className="stat-label">Pengalaman & Keandalan</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Kepuasan Pelanggan</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Proyek Terselesaikan</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Garansi</div>
            <div className="stat-label">Dukungan Purna Jual</div>
          </div>
        </div>
      </div>
    </section>
  )
}