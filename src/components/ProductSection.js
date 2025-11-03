'use client'

import { useState } from 'react'

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Genteng Metal Pasir',
      category: 'metal',
      price: 'Rp 85.000/lembar',
      image: '/images/genteng-metal-pasir.jpg',
      description: 'Genteng metal dengan lapisan pasir untuk tampilan estetis dan daya tahan maksimal',
      features: ['Anti karat', 'Tahan lama 15+ tahun', 'Ringan & kuat']
    },
    {
      id: 2,
      name: 'Genteng Keramik',
      category: 'keramik',
      price: 'Rp 12.000/pcs',
      image: '/images/genteng-keramik.jpg',
      description: 'Genteng keramik premium dengan kualitas terbaik dan berbagai pilihan warna',
      features: ['Tahan panas', 'Tidak mudah pecah', 'Ramah lingkungan']
    },
    {
      id: 3,
      name: 'Genteng Beton',
      category: 'beton',
      price: 'Rp 9.500/pcs',
      image: '/images/genteng-beton.jpg',
      description: 'Genteng beton berkualitas tinggi dengan harga terjangkau',
      features: ['Kuat & kokoh', 'Ekonomis', 'Tahan cuaca ekstrem']
    },
    {
      id: 4,
      name: 'Genteng Metal Rainbow',
      category: 'metal',
      price: 'Rp 95.000/lembar',
      image: '/images/genteng-metal-rainbow.jpg',
      description: 'Genteng metal dengan pilihan warna cerah dan modern',
      features: ['Beragam warna', 'Pemasangan cepat', 'Garansi pabrik']
    },
    {
      id: 5,
      name: 'Genteng Aspal',
      category: 'aspal',
      price: 'Rp 125.000/m²',
      image: '/images/genteng-aspal.jpg',
      description: 'Genteng aspal fleksibel cocok untuk desain atap modern',
      features: ['Fleksibel', 'Kedap air 100%', 'Desain modern']
    },
    {
      id: 6,
      name: 'Genteng Tanah Liat',
      category: 'tanah-liat',
      price: 'Rp 7.500/pcs',
      image: '/images/genteng-tanah-liat.jpg',
      description: 'Genteng tradisional dari tanah liat berkualitas premium',
      features: ['Alami', 'Sejuk', 'Klasik & elegan']
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'metal', name: 'Genteng Metal' },
    { id: 'keramik', name: 'Genteng Keramik' },
    { id: 'beton', name: 'Genteng Beton' },
    { id: 'aspal', name: 'Genteng Aspal' },
    { id: 'tanah-liat', name: 'Genteng Tanah Liat' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section id="products" className="section products-section">
      <div className="products-content">
        <div className="products-header">
          <h2>Produk Kami</h2>
          <p>Pilihan lengkap genteng berkualitas untuk setiap kebutuhan rumah Anda</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Ratapin,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-cta"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Ratapin,%20saya%20ingin%20menanyakan%20harga%20untuk%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-contact"
                  >
                    Tanya Harga
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <h3>Tidak Menemukan Produk yang Anda Cari?</h3>
          <p>Hubungi kami untuk konsultasi gratis dan penawaran khusus</p>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Ratapin,%20saya%20ingin%20konsultasi%20tentang%20produk%20atap"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Konsultasi Gratis
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}