'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductSection() {
  const [showAll, setShowAll] = useState(false)

  const products = [
    {
      id: 5,
      name: 'Tamco Shingles',
      category: 'shingles',
      image: '/images/tamcoHeritage-standard.png',
      description: 'Tamco Shingles ringan, tahan lama, anti bocor, elegan, dan mudah dipasang',
      features: ['Made in USA', 'Double layer system', '100% waterproofing'],
      variants: 2
    },
    {
      id: 6,
      name: 'Genteng Metal',
      category: 'metal',
      image: '/images/Genteng-Metal.png',
      description: 'Genteng Metal: ringan, kuat, anti karat, tahan lama, pemasangan cepat',
      features: ['Anti karat', 'Warna tahan lama', 'Tahan suhu ekstrem'],
      variants: 4
    },
    {
      id: 7,
      name: 'Victory Shingles',
      category: 'shingles',
      image: '/images/Victory-Standard.png',
      description: 'Victory Shingles: Ringan, elegan, tahan lama, anti bocor, mudah pasang',
      features: ['Algae Relief', 'Garansi 20 tahun', 'Ringan & fleksibel'],
      variants: 2
    },
    {
      id: 8,
      name: 'Tegola Shingles',
      category: 'shingles',
      image: '/images/Tegola-Shingles.png',
      description: 'Tegola Shingles: Atap Bitumen kuat, estetis modern, lindungi rumah elegan',
      features: ['Made in Italy', 'Garansi 20-40 tahun', 'Premium quality'],
      variants: 6
    },
    {
      id: 9,
      name: 'CTI Shingles',
      category: 'shingles',
      image: '/images/CT3-Rectangular.png',
      description: 'CTI Shingles: Ringan, tahan lama, estetis, anti bocor, fleksibel',
      features: ['Produk lokal Indonesia', 'Lifetime warranty', 'Value tinggi'],
      variants: 3
    },
    {
      id: 1,
      name: 'Membrane & Underlayer',
      category: 'accessories',
      image: '/images/Membraneunder.png',
      description: 'Membrane & Underlayer melindungi atap dari bocor, panas, dan lembap',
      features: ['Waterproofing maksimal', 'Tahan cuaca ekstrem', 'Mudah dipasang'],
      variants: 4
    },
    {
      id: 2,
      name: 'Baud',
      category: 'accessories',
      image: '/images/Baud.png',
      description: 'Baud berkualitas tinggi untuk sambungan kokoh, tahan lama, dan presisi',
      features: ['Mutu tinggi', 'Tahan karat', 'Berbagai ukuran'],
      variants: 5
    },
    {
      id: 3,
      name: 'Gipsum',
      category: 'interior',
      image: '/images/Gipsum.png',
      description: 'Gipsum berkualitas tinggi untuk dinding dan plafon halus tahan lama',
      features: ['Anti lendut', 'Ringan & kuat', 'Hasil rata & presisi'],
      variants: 2
    },
    {
      id: 4,
      name: 'Baja Ringan',
      category: 'structure',
      image: '/images/Baja-ringan.png',
      description: 'Baja ringan kuat, tahan lama, efisien, dan mudah dipasang',
      features: ['Anti karat & korosi', 'Ringan namun kuat', 'Pemasangan cepat'],
      variants: 6
    },
    
  ]

  const displayedProducts = showAll ? products : products.slice(0, 6)

  return (
    <section id="products" className="section products-section">
      <div className="products-content">
        <div className="products-header">
          <h2>Produk Kami</h2>
          <p>Pilihan lengkap material atap dan bangunan berkualitas untuk setiap kebutuhan Anda</p>
        </div>

        <div className="products-grid">
          {displayedProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="product-badge">{product.variants} Varian</div>
                <div className="product-overlay">
                  <a 
                    href={`https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-cta"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="product-footer">
                  <a 
                    href={`https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20ingin%20menanyakan%20detail%20tentang%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-contact"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M20.52 3.449C18.297 1.233 15.322 0 12.214 0 5.56 0 .146 5.414.146 12.068c0 2.127.553 4.206 1.605 6.041L.057 24l6.054-1.588a12.054 12.054 0 005.102 1.095h.005c6.653 0 12.067-5.414 12.067-12.068 0-3.226-1.258-6.258-3.763-8.99zm-8.306 18.55h-.004a9.976 9.976 0 01-5.087-1.393l-.365-.217-3.782.992.99-3.629-.239-.379a9.944 9.944 0 01-1.525-5.311c0-5.498 4.474-9.971 9.979-9.971 2.664 0 5.167 1.039 7.053 2.925a9.909 9.909 0 012.919 7.053c-.001 5.498-4.475 9.971-9.979 9.971z"/>
                    </svg>
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && products.length > 6 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(true)}
            >
              Lihat Semua Produk ({products.length - 6} lainnya)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        )}

        {showAll && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(false)}
            >
              Tampilkan Lebih Sedikit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 15l7-7 7 7"/>
              </svg>
            </button>
          </div>
        )}

        <div className="products-cta">
          <h3>Butuh Konsultasi untuk Proyek Anda?</h3>
          <p>Hubungi kami untuk konsultasi gratis dan penawaran khusus</p>
          <a 
            href="https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20ingin%20konsultasi%20tentang%20produk%20atap%20dan%20bangunan"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.52 3.449C18.297 1.233 15.322 0 12.214 0 5.56 0 .146 5.414.146 12.068c0 2.127.553 4.206 1.605 6.041L.057 24l6.054-1.588a12.054 12.054 0 005.102 1.095h.005c6.653 0 12.067-5.414 12.067-12.068 0-3.226-1.258-6.258-3.763-8.99zm-8.306 18.55h-.004a9.976 9.976 0 01-5.087-1.393l-.365-.217-3.782.992.99-3.629-.239-.379a9.944 9.944 0 01-1.525-5.311c0-5.498 4.474-9.971 9.979-9.971 2.664 0 5.167 1.039 7.053 2.925a9.909 9.909 0 012.919 7.053c-.001 5.498-4.475 9.971-9.979 9.971z"/>
            </svg>
            Konsultasi Gratis
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .products-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
          padding: 80px 20px;
        }

        .products-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .products-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .products-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .products-header p {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .product-image {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .product-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .product-cta {
          background: white;
          color: #333;
          padding: 12px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          transform: translateY(20px);
        }

        .product-card:hover .product-cta {
          transform: translateY(0);
        }

        .product-cta:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .product-info {
          padding: 24px;
        }

        .product-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .product-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .product-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .product-features li svg {
          color: #4CAF50;
          flex-shrink: 0;
        }

        .product-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #eee;
        }

        .product-contact {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .product-contact:hover {
          background: #22c55e;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        .show-more-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }

        .show-more-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #333;
          border: 2px solid #ddd;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .show-more-btn:hover {
          background: #f8f8f8;
          border-color: #bbb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .show-more-btn svg {
          transition: transform 0.3s ease;
        }

        .show-more-btn:hover svg {
          transform: translateY(3px);
        }

        .products-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          color: white;
          margin-top: 60px;
        }

        .products-cta h3 {
          font-size: 2rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .products-cta p {
          font-size: 1.1rem;
          margin-bottom: 32px;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #667eea;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          background: #f8f8f8;
        }

        @media (max-width: 768px) {
          .products-section {
            padding: 60px 16px;
          }

          .products-header h2 {
            font-size: 2rem;
          }

          .products-header p {
            font-size: 1rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .product-image {
            height: 220px;
          }

          .products-cta {
            padding: 40px 24px;
          }

          .products-cta h3 {
            font-size: 1.5rem;
          }

          .products-cta p {
            font-size: 1rem;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}