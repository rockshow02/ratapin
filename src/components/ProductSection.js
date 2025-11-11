// src/components/ProductSection.js
'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { imageData } from '@/data/Products'
import ProductPopup from './ProductPopup'

export default function ProductSection() {
  const [showAll, setShowAll] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)
  const [initialVariantIndex, setInitialVariantIndex] = useState(0)

  const products = useMemo(() => {
    return (imageData || []).map((p, idx) => {
      const firstVariant = p.gallery?.[0] ?? {}
      const img = p.src ?? firstVariant.src ?? '/images/placeholder.png'
      const features = (firstVariant.features ?? p.features ?? []).slice(0, 3)
      const variantsCount = p.gallery?.length ?? p.variants ?? 1

      return {
        raw: p, // simpan objek asli untuk popup
        id: p.id ?? idx + 1,
        name: p.title ?? p.name ?? `Produk ${idx + 1}`,
        category: p.category ?? 'general',
        image: img,
        description: p.description ?? firstVariant.description ?? '',
        features,
        variants: variantsCount,
        gallery: p.gallery ?? [],
      }
    })
  }, [])

  const openPopup = (prodRaw, variantIndex = 0) => {
    setActiveProduct(prodRaw)
    setInitialVariantIndex(variantIndex)
    setShowPopup(true)
  }

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
              <div className="product-image" onClick={() => openPopup(product.raw, 0)} role="button">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="product-badge">{product.variants} Varian</div>
                <div className="product-overlay">
                  <button className="product-cta" onClick={(e)=>{ e.stopPropagation(); openPopup(product.raw, 0); }}>
                    Lihat Detail
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>

                {/* daftar varian sebagai chip/thumbnail kecil */}
                {!!product.gallery.length && (
                  <div className="variant-bar">
                    {product.gallery.slice(0, 6).map((v, i) => (
                      <button
                        key={i}
                        className="variant-chip"
                        title={v.label}
                        onClick={() => openPopup(product.raw, i)}
                      >
                        <span className="variant-dot" />
                        <span className="variant-label">{v.label}</span>
                      </button>
                    ))}
                    {product.gallery.length > 6 && (
                      <button className="variant-chip more" onClick={() => openPopup(product.raw, 0)}>
                        +{product.gallery.length - 6} lagi
                      </button>
                    )}
                  </div>
                )}

                {!!product.features?.length && (
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
                )}

                <div className="product-footer">
                  <a
                    href={`https://wa.me/628131322833?text=${encodeURIComponent(
                      `Halo Ratapin, saya ingin menanyakan detail tentang ${product.name}`
                    )}`}
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
              type="button"
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
            <button className="show-more-btn" onClick={() => setShowAll(false)}>
              Tampilkan Lebih Sedikit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 15l7-7 7 7"/>
              </svg>
            </button>
          </div>
        )}

        {/* Popup */}
        {showPopup && activeProduct && (
          <ProductPopup
            product={activeProduct}
            initialIndex={initialVariantIndex}
            onClose={() => { setShowPopup(false); setActiveProduct(null); }}
          />
        )}
      </div>

      <style jsx>{`
        /* ...seluruh style sebelumnya tetap... */
        .variant-bar { display:flex; flex-wrap:wrap; gap:8px; margin:10px 0 16px; }
        .variant-chip { display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border:1px solid #e5e7eb; border-radius:999px; background:#fff; font-size:.85rem; color:#374151; cursor:pointer; transition:all .2s ease; }
        .variant-chip:hover { background:#f9fafb; border-color:#d1d5db; transform:translateY(-1px); }
        .variant-chip.more { background:#eef2ff; border-color:#c7d2fe; color:#4338ca; }
        .variant-dot { width:8px; height:8px; border-radius:50%; background:#9ca3af; }
        .variant-label { white-space:nowrap; max-width:140px; overflow:hidden; text-overflow:ellipsis; }
      `}</style>
    </section>
  )
}
