'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const imageData = [
  { 
    title: "Membrane & Underlayer", 
    description: "Membrane & Underlayer melindungi atap dari bocor, panas, dan lembap", 
    src: "/images/Membraneunder.png",
    gallery: [
      { 
        src: "/images/Tourching.png", 
        label: "Tourching",
        price: "Rp 700.000",
        features: [
          "Melindungi alas atap GRC atau multiplek dari kelembapan dan kebocoran",
          "Memberikan proteksi waterproofing maksimal untuk atap bitumen dan genteng aspal",
          "Membrane bakar (Torching) dipasang dengan metode pembakaran pada atap bersudut di bawah 15°",
          "Underlayer (Underlayment) mudah dipasang tanpa memerlukan peralatan khusus",
          "Menambah daya tahan atap terhadap air dan cuaca ekstrem, sehingga hasil pemasangan lebih awet dan aman"
        ],
        specs: {
          Ukuran: "1m x 10m",
          Ketebalan: "3mm"
        }
      },
      { 
        src: "/images/TourchingSanded.png", 
        label: "Tourching Sanded",
        price: "Rp 750.000",
        features: [
          "Melindungi alas atap GRC atau multiplek dari kelembapan dan kebocoran",
          "Memberikan proteksi waterproofing maksimal untuk atap bitumen dan genteng aspal",
          "Membrane bakar (Torching) dipasang dengan metode pembakaran pada atap bersudut di bawah 15°",
          "Underlayer (Underlayment) mudah dipasang tanpa memerlukan peralatan khusus",
          "Menambah daya tahan atap terhadap air dan cuaca ekstrem, sehingga hasil pemasangan lebih awet dan aman"
        ],
        specs: {
          Ukuran: "1m x 10m",
          Ketebalan: "3mm"
        }
      },
      { 
        src: "/images/SAD10.png", 
        label: "S-AD 10",
        price: "Rp 600.000",
        features: [
          "Melindungi alas atap GRC atau multiplek dari kelembapan dan kebocoran",
          "Memberikan proteksi waterproofing maksimal untuk atap bitumen dan genteng aspal",
          "Membrane bakar (Torching) dipasang dengan metode pembakaran pada atap bersudut di bawah 15°",
          "Underlayer (Underlayment) mudah dipasang tanpa memerlukan peralatan khusus",
          "Menambah daya tahan atap terhadap air dan cuaca ekstrem, sehingga hasil pemasangan lebih awet dan aman"
        ],
        specs: {
          Ukuran: "1m x 10m",
          Ketebalan: "1mm"
        }
      },
      { 
        src: "/images/SAD20.png", 
        label: "S-AD 20",
        price: "Rp 1.200.000",
        features: [
          "Melindungi alas atap GRC atau multiplek dari kelembapan dan kebocoran",
          "Memberikan proteksi waterproofing maksimal untuk atap bitumen dan genteng aspal",
          "Membrane bakar (Torching) dipasang dengan metode pembakaran pada atap bersudut di bawah 15°",
          "Underlayer (Underlayment) mudah dipasang tanpa memerlukan peralatan khusus",
          "Menambah daya tahan atap terhadap air dan cuaca ekstrem, sehingga hasil pemasangan lebih awet dan aman"
        ],
        specs: {
          Ukuran: "1m x 20m",
          Ketebalan: "1mm"
        }
      },
    ]
  },
  { 
    title: "Baud", 
    description: "Baud berkualitas tinggi untuk sambungan kokoh, tahan lama, dan presisi.", 
    src: "/images/Baud.png",
    gallery: [
      { 
        src: "/images/BaudHilti.png", 
        label: "Dynabolt",
        price: "Rp 8.500",
        features: [
          "Cocok untuk rangka baja ringan, baik pada bagian reng maupun trus",
          "Dapat dicabut dan dipasang berulang kali tanpa menjadi tumpul",
          "Mutu baut tinggi, mampu menembus baja CNP hingga ketebalan 1.8mm",
          "Self Drilling Screw (Baut Roofing) berfungsi mengebor dan mengencangkan tanpa lubang terlebih dahulu",
          "Desain kepala berflens memberikan kekuatan ekstra seperti penggunaan washer, dengan material berkualitas dari besi hingga baja hitam"
        ],
        specs: {
          Ukuran: "10 x 55"
        }
      },
      { 
        src: "/images/ScrewRengTaso.png", 
        label: "Screw reng",
        price: "Rp 500",
        features: [
          "Cocok untuk rangka baja ringan, baik pada bagian reng maupun trus",
          "Dapat dicabut dan dipasang berulang kali tanpa menjadi tumpul",
          "Mutu baut tinggi, mampu menembus baja CNP hingga ketebalan 1.8mm",
          "Self Drilling Screw (Baut Roofing) berfungsi mengebor dan mengencangkan tanpa lubang terlebih dahulu",
          "Desain kepala berflens memberikan kekuatan ekstra seperti penggunaan washer, dengan material berkualitas dari besi hingga baja hitam"
        ],
        specs: {
          Ukuran: "10 - 16 x 16"
        }
      },
      { 
        src: "/images/ScrewTruss.png", 
        label: "Screw Truss",
        price: "Rp 700",
        features: [
          "Cocok untuk rangka baja ringan, baik pada bagian reng maupun trus",
          "Dapat dicabut dan dipasang berulang kali tanpa menjadi tumpul",
          "Mutu baut tinggi, mampu menembus baja CNP hingga ketebalan 1.8mm",
          "Self Drilling Screw (Baut Roofing) berfungsi mengebor dan mengencangkan tanpa lubang terlebih dahulu",
          "Desain kepala berflens memberikan kekuatan ekstra seperti penggunaan washer, dengan material berkualitas dari besi hingga baja hitam"
        ],
        specs: {
          Ukuran: "12 - 14 x 20"
        }
      },
      { 
        src: "/images/ScrewRoofingWaterhead.png", 
        label: "Screw Roofing Waterhead",
        price: "Rp 700",
        features: [
          "Cocok untuk rangka baja ringan, baik pada bagian reng maupun trus",
          "Dapat dicabut dan dipasang berulang kali tanpa menjadi tumpul",
          "Mutu baut tinggi, mampu menembus baja CNP hingga ketebalan 1.8mm",
          "Self Drilling Screw (Baut Roofing) berfungsi mengebor dan mengencangkan tanpa lubang terlebih dahulu",
          "Desain kepala berflens memberikan kekuatan ekstra seperti penggunaan washer, dengan material berkualitas dari besi hingga baja hitam"
        ],
        specs: {
          Ukuran: "10 - 24 x 32"
        }
      },
      { 
        src: "/images/ScrewRoofingFlangehead.png", 
        label: "Screw Roofing Flangehead",
        price: "Rp 700",
        features: [
          "Cocok untuk rangka baja ringan, baik pada bagian reng maupun trus",
          "Dapat dicabut dan dipasang berulang kali tanpa menjadi tumpul",
          "Mutu baut tinggi, mampu menembus baja CNP hingga ketebalan 1.8mm",
          "Self Drilling Screw (Baut Roofing) berfungsi mengebor dan mengencangkan tanpa lubang terlebih dahulu",
          "Desain kepala berflens memberikan kekuatan ekstra seperti penggunaan washer, dengan material berkualitas dari besi hingga baja hitam"
        ],
        specs: {
          Ukuran: "12 - 24 x 45"
        }
      },
    ]
  },
  { 
    title: "Gipsum", 
    description: "Gipsum berkualitas tinggi untuk dinding dan plafon halus tahan lama", 
    src: "/images/Gipsum.png",
    gallery: [
      { 
        src: "/images/GipsumJayaBoard.png", 
        label: "Jaya Board",
        price: "Rp 75.000",
        features: [
          "Jayaboard SHEETROCK® adalah papan gipsum pertama dan terbaik di Indonesia",
          "Teknologi SHEETROCK® menjadikan papan lebih tahan lendut, ringan, dan berkualitas konsisten",
          "Jayaboard 9mm cocok untuk pelapis dinding dan plafon dengan daya tahan serta stabilitas tinggi",
          "Ekonomis dan mudah dipasang, hasil akhir rata dan presisi dengan teknologi anti lendut",
          "E’BOARD® ideal untuk plafon dan partisi dinding hunian, memberikan tampilan kuat dan rapi"
        ],
        specs: {
          Ukuran: "2400mm x 1200mm",
          Tebal: "9mm",
          Berat: "14.7",
        }
      },
      { 
        src: "/images/GipsumEboard.png", 
        label: "Elephant Board",
        price: "Rp 65.000",
        features: [
          "Jayaboard SHEETROCK® adalah papan gipsum pertama dan terbaik di Indonesia",
          "Teknologi SHEETROCK® menjadikan papan lebih tahan lendut, ringan, dan berkualitas konsisten",
          "Jayaboard 9mm cocok untuk pelapis dinding dan plafon dengan daya tahan serta stabilitas tinggi",
          "Ekonomis dan mudah dipasang, hasil akhir rata dan presisi dengan teknologi anti lendut",
          "E’BOARD® ideal untuk plafon dan partisi dinding hunian, memberikan tampilan kuat dan rapi"
        ],
        specs: {
          Ukuran: "2400mm x 1200mm",
          Tebal: "9mm",
          Berat: "14.7",
        }
      },
    ]
  },
 
  { 
    title: "Tamco Shingles", 
    description: "Victory Shingles: Tamco Shingles ringan, tahan lama, anti bocor, elegan, dan mudah dipasang.", 
    src: "/images/tamcoHeritage-standard.png",
    gallery: [
      { 
        src: "/images/tamcoHeritage-standard.png", 
        label: "Tamco Heritage - Rectangular",
        price: "Rp 1.050.280/bundle",
        description: "Tamco Heritage Rectangular kuat, elegan, tahan bocor, ringan",
        features: [
          "Produk premium made in USA, kualitas untuk proyek profesional",
          "Jenis genteng aspal / atap bitumen / asphalt shingles",
          "Desain arsitektural dengan sistem laminated double layer",
          "Tahan semua iklim, termasuk tropis & kelembaban tinggi di Indonesia",
          "Bobot sangat ringan, tidak membebani struktur bangunan",
          "Aman untuk daerah rawan gempa & bencana",
          "Double layer system membuat atap lebih kuat & awet",
          "100% waterproofing, mencegah kebocoran",
          "Tahan usia & kerusakan cuaca, lebih durable dibanding atap konvensional",
          "Pilihan ideal untuk proyek yang membutuhkan hasil maksimal"
        ],
        specs: {
          Garansi: "30 Tahun",
          Material: "Algae Relief",
          Dimensi: "1000 mm x 334 mm / Lembar",
          Area: "3.1m2 / Bundle",
          berat: " 10 Kg / m2",
          WindResistance: " 96.5 Km / jam",
          Tebal: "3mm"
        },
        colors: [
          { name: "Rustic Black", hex: "#1B1A16" },
          { name: "Rustic Redwood", hex: "#A45A52" },
          { name: "Rustic Cedar", hex: "#A45A52" },
          { name: "Thunderstorm Grey", hex: "#656C71" }
        ]
      },
      { 
        src: "/images/TamcoElitGlassSela.png", 
        label: "Tamco Elite - Glass Seal",
        price: "Rp. 801.350/bundle",
        description: "Tamko Elite Glass-Seal ringan, kuat, tahan bocor",
        features: [
          "Garansi material 30 tahun untuk perlindungan jangka panjang",
          "Presisi ukuran tinggi toleransi kurang dari 1 mm",
          "NAT atap rapi & lurus tanpa pergeseran garis",
          "Tersedia 5 pilihan warna batuan berkualitas premium",
          "Coating batuan dibakar 2000°C untuk daya tahan maksimal",
          "Dilengkapi algae relief mencegah lumut & jamur",
          "Waterproofing optimal berkat lapisan batuan coating",
          "Batuan warna memantulkan UV, membuat rumah lebih sejuk",
          "Desain classic American style memberi tampilan estetik elegan",
          "TCocok untuk berbagai jenis bangunan yang mengutamakan keindahan arsitektur"
        ],
        specs: {
          Garansi: "20 Tahun",
          Dimensi: "1000 mm x 320 mm / Lembar",
          Area: "3 m2 / Bundle",
          berat: " 8.50 Kg / m2",
          Bundle: "22 Lembar",
          Tebal: "3mm"
        },
        colors: [
          { name: "Rustic Black", hex: "#1B1A16" },
          { name: "Rustic Redwood", hex: "#A45A52" },
          { name: "Weahered Wood", hex: "#B19C86" },
          { name: "Antique Slate", hex: "#455C59" }
        ]
      },
    ]
  },
  { 
    title: "Genteng Metal", 
    description: "Genteng Metal: ringan, kuat, anti karat, tahan lama, pemasangan cepat", 
    src: "/images/Genteng-Metal.png",
    gallery: [
      { 
        src: "/images/Genteng-Metal.png", 
        label: "Genteng Multi Stone - Warna",
        price: "Rp 150.000/bundle",
        description: "Genteng metal ringan, kuat, anti karat, tahan lama",
        features: [
          "Menggunakan bahan dasar Colorbond, warna tahan lama dan tidak mudah pudar",
          "Dilengkapi teknologi cat terbaru, mencegah pengelupasan warna hingga puluhan tahun (TCT 0,40 mm)",
          "Kuat dan anti karat, terbuat dari baja berlapis Zinc & Aluminium, tahan suhu ekstrem",
          "Desain profil bergelombang dinamis, memberikan tampilan atap lebih elegan",
          "Pilihan warna premium, menjadikan atap sebagai elemen estetika utama bangunan."
        ],
        specs: {
          Ukuran: "1 M x 770 mm",
          Ketebalan: "0.40 mm"
          
        },
        colors: [
          { name: "Bart Red", hex: "#2B303E" },
          { name: "Beach Blue", hex: "#5F9CA2" },
          { name: "Pine Green", hex: "#01796F" }
        ]
      },
      { 
        src: "/images/sakuraStone.png", 
        label: "Sakura Stone - Batuan",
        price: "Rp. 77.000/bundle",
        description: "Tamko Elite Glass-Seal ringan, kuat, tahan bocor",
        features: [
          "Lapisan dan struktur reng membantu meredam panas dan suara hujan",
          "Cat teknologi tinggi mencegah perubahan warna, karat, dan lumut",
          "Pemasangan mudah karena bobot genteng sangat ringan",
          "Cukup diposisikan tepat dan dikencangkan dengan skrup agar aman dari angin",
          "Ringan namun kuat, bahkan lebih tahan gempa terutama pada genteng metal pasir"
        ],
        specs: {
          Ukuran: "1 M x 770 mm",
          Ketebalan: "0.40 mm"
        },
        colors: [
          { name: "Diamond Black", hex: "#2B303E" },
          { name: "Jade Green", hex: "#00A86B" },
          { name: "Pretty Maroon", hex: "#800000" },
          { name: "Stone Green", hex: "#595F57" }
        ]
      },
      { 
        src: "/images/NokPutriMultStone.png", 
        label: "Nok Putri Multi Stone - Batuan",
        price: "Rp. 50.000/bundle",
        description: "Nok Putri Multi Stone elegan, kokoh, tahan lama",
        features: [
          "Terbuat dari material terbaik, dibakar hingga 1.100°C",
          "Kuat, tidak retak, tidak bocor, tahan cuaca ekstrem",
          "Meredam panas, tidak menimbulkan suara bising",
          "Glazur permanen, tidak pudar dan tidak luntur",
          "Tidak mudah terbakar, anti korosi, anti karat"
        ],
        specs: {
          Panjang: "109 cm",
          Lebar: "12 cm",
          Tinggi: "8 cm",
          Ketebalan: "0.25 mm",
        },
        colors: [
          { name: "Red", hex: "#C62828" },
          { name: "Brown", hex: "#905E3C" },
          { name: "Green", hex: "#01796F" },
          { name: "Blue", hex: "#0F52BA" },
          { name: "Black", hex: "#000000" },
          { name: "Terracotta Red", hex: "#7C0A02" },
          { name: "Deep Maroon", hex: "#5A1F1F" },
          { name: "Slate Gray", hex: "#2F2F2F" },
        ]
      },
      { 
        src: "/images/NokSms.png", 
        label: "Nok S MS - Batuan",
        price: "Rp. 60.000/bundle",
        description: "Nok S MS elegan, kokoh, tahan lama",
        features: [
          "Terbuat dari material terbaik, dibakar hingga 1.100°C",
          "Kuat, tidak retak, tidak bocor, tahan cuaca ekstrem",
          "Meredam panas, tidak menimbulkan suara bising",
          "Glazur permanen, tidak pudar dan tidak luntur",
          "Tidak mudah terbakar, anti korosi, anti karat"
        ],
        specs: {
          Panjang: "101 cm",
          Lebar: "8 cm",
          Tinggi: "10 cm",
          Ketebalan: "0.40 mm",
        },
        colors: [
          { name: "Textured Black", hex: "#1C1C1C" },
          { name: "Rust Red", hex: "#8B3A3A" }
        ]
      },
    ]
  },
  { 
    title: "Victory Shingles", 
    description: "Victory Shingles: Ringan, elegan, tahan lama, anti bocor, mudah pasang, bergaya modern.", 
    src: "/images/Victory-Standard.png",
    gallery: [
      { 
        src: "/images/Victory-Standard.png", 
        label: "Victory - Standard",
        price: "Rp 559.240/bundle",
        description: "Ringan, elegan, tahan bocor, kuat, modern, praktis.",
        features: [
          "Genteng aspal bitumen ekonomis dengan desain 3-tab persegi.",
          "Dilengkapi fitur Algae Relief (anti lumut & jamur).",
          "Cocok untuk iklim tropis Indonesia dengan kelembaban tinggi.",
          "Tetap bersih seperti baru meski terpapar cuaca ekstrem.",
          "Pemasangan mudah & cepat, tanpa peralatan khusus.",
          "Desain flat dan fleksibel cocok untuk berbagai bentuk atap.",
          "Bobot ringan, aman untuk struktur bangunan dan area rawan gempa.",
          "Tidak membebani konstruksi, berbeda dengan atap konvensional yang lebih berat.",
          "Garansi hingga 20 tahun untuk ketahanan material.",
          "Solusi atap ekonomis namun tetap berkualitas untuk rumah & bangunan modern."
        ],
        specs: {
          Garansi: "20 Tahun",
          Material: "Algae Relief",
          Dimensi: "1000 mm x 334 mm / Lembar",
          Area: "3.1m2 / Bundle",
          berat: " 8.50 Kg / m2",
          WindResistance: " 96.5 Km / jam",
          Tebal: "3mm"
        },
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Red", hex: "#FF0000" },
          { name: "Green", hex: "#00FF00" },
          { name: "Grey", hex: "#808080" }
        ]
      },
      { 
        src: "/images/Victory-Dualtone.png", 
        label: "Victory - Dualtone",
        price: "Rp. 613.800/bundle",
        description: "Elegan, dua warna, tahan bocor, ringan, modern, stylish.",
        features: [
          "Garansi material 20 tahun untuk keamanan investasi jangka panjang.",
          "Coating batuan warna solid dibakar pada suhu 2000°C untuk daya tahan maksimal.",
          "Dilengkapi algae relief untuk mencegah lumut & jamur pada atap.",
          "Waterproofing optimal berkat lapisan batuan coating tahan air.",
          "Batuan warna berfungsi memantulkan UV, membuat rumah lebih sejuk.",
          "Desain 3-tab persegi memberi tampilan rapi & estetis.",
          "Cocok untuk berbagai jenis bangunan yang mengutamakan keindahan tampilan atap",
          "Presisi ukuran tinggi toleransi kurang dari 1 mm.",
          "Hasil pemasangan lebih rapi, NAT lurus tanpa pergeseran garis.",
          "Tetap awet & bersih dalam jangka panjang karena proteksi jamur, UV, dan cuaca."
        ],
        specs: {
          Garansi: "20 Tahun",
          Dimensi: "1000 mm x 320 mm / Lembar",
          Area: "3 m2 / Bundle",
          berat: " 8.50 Kg / m2",
          Bundle: "22 Lembar",
          Tebal: "3mm"
        },
        colors: [
          { name: "Shadow Black", hex: "#1A1A1A" },
          { name: "Garnet Red", hex: "#830E0D" },
          { name: "Siera Brown", hex: "#905E3C" },
          { name: "Shapire Blue", hex: "#0F52BA" }
        ]
      },
    ]
  },
  { 
    title: "Tegola Shingles", 
    description: "Tegola Shingles: Atap Bitumen kuat, estetis modern, lindungi rumah elegan Anda.", 
    src: "/images/Tegola-Shingles.png",
    gallery: [
      { 
        src: "/images/Tegola-Shingles.png", 
        label: "EcoRoof - Hexagonal",
        price: "Rp 786.480/bundle",
        description: "Desain Hexagonal yang elegan dan modern",
        features: [
          "Genteng aspal berbentuk segi enam",
          "Terbuat dari material bitumen dengan kualitas terjamin",
          "Cocok untuk proyek dengan budget terbatas",
          "Diproduksi di Italia dengan standar tinggi",
          "Memberikan jaminan material selama 20 tahun",
          "Bentuk segi enam dengan 3-tab di tiap lembarnya",
          "Dilengkapi lem perekat bergaris di bagian atas genteng",
          "Perekat membantu memudahkan pemasangan atap",
          "Penanda pemasangan paku atap untuk akurasi",
          "Solusi atap bitumen dengan harga terjangkau dan kualitas unggul"
        ],
        specs: {
          Garansi: "20 Tahun",
          Material: "Fiber Glass 100g/m2 & Bitumen 100g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 337 mm / Lembar",
          Area: "2.30m2 / Bundle",
          berat: " 8.30 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Mixed Brown", hex: "#6F4F28" },
          { name: "Mixed Slate", hex: "#5A6D7E" },
          { name: "Mixed Green", hex: "#4C9141" },
          { name: "Mixed Red", hex: "#9E2A2F" }
        ]
      },
      { 
        src: "/images/Tegola-rectangular.png", 
        label: "EcoRoof - Rectangular",
        price: "Rp 707.600/bundle",
        description: "Atap bitumen, desain rectangular, tahan lama.",
        features: [
          "Genteng aspal berbentuk segi enam",
          "Terbuat dari material bitumen dengan kualitas terjamin",
          "Cocok untuk proyek dengan budget terbatas",
          "Diproduksi di Italia dengan standar tinggi",
          "Memberikan jaminan material selama 20 tahun",
          "Bentuk segi enam dengan 3-tab di tiap lembarnya",
          "Dilengkapi lem perekat bergaris di bagian atas genteng",
          "Perekat membantu memudahkan pemasangan atap",
          "Penanda pemasangan paku atap untuk akurasi",
          "Solusi atap bitumen dengan harga terjangkau dan kualitas unggul"
        ],
        specs: {
          Garansi: "20 Tahun",
          Material: "Fiber Glass 100g/m2 & Bitumen 100g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 337 mm / Lembar",
          Area: "2.30m2 / Bundle",
          berat: " 8.30 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Mixed Brown", hex: "#6F4F28" },
          { name: "Mixed Slate", hex: "#5A6D7E" },
          { name: "Mixed Green", hex: "#4C9141" },
          { name: "Mixed Red", hex: "#9E2A2F" }
        ]
      },
      { 
        src: "/images/Tegola-Traditional.png", 
        label: "EcoRoof - Traditional",
        price: "Rp 736.600/bundle",
        description: "Atap bitumen, desain tradisional, awet.",
        features: [
          "Genteng aspal berbentuk segi enam",
          "Terbuat dari material bitumen dengan kualitas terjamin",
          "Cocok untuk proyek dengan budget terbatas",
          "Diproduksi di Italia dengan standar tinggi",
          "Memberikan jaminan material selama 20 tahun",
          "Bentuk segi enam dengan 3-tab di tiap lembarnya",
          "Dilengkapi lem perekat bergaris di bagian atas genteng",
          "Perekat membantu memudahkan pemasangan atap",
          "Penanda pemasangan paku atap untuk akurasi",
          "Solusi atap bitumen dengan harga terjangkau dan kualitas unggul"
        ],
        specs: {
          Garansi: "20 Tahun",
          Material: "Fiber Glass 100g/m2 & Bitumen 100g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 337 mm / Lembar",
          Area: "2.30m2 / Bundle",
          berat: " 8.30 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Mixed Brown", hex: "#6F4F28" },
          { name: "Mixed Slate", hex: "#5A6D7E" },
          { name: "Mixed Green", hex: "#4C9141" },
          { name: "Mixed Red", hex: "#9E2A2F" }
        ]
      },
      { 
        src: "/images/Tegola-Premium-Gothik.png", 
        label: "Premium - Gothik",
        price: "Rp 1.402.425/bundle",
        description: "Atap bitumen, desain gothik, elegan, tahan lama..",
        features: [
          "Genteng aspal dengan kualitas premium",
          "Terbuat dari material bitumen terbaik",
          "Diproduksi di Italia dengan standar tinggi",
          "Garansi material hingga 40 tahun",
          "Dirancang untuk proyek dengan standar internasional",
          "Digunakan di berbagai negara maju berkat kualitasnya",
          "Bentuk fleksibel dengan 3-tab di tiap lembar",
          "Lem perekat bergaris untuk kemudahan pemasangan",
          "Mencegah kesalahan saat memasang atap bitumen",
          "Warna tahan lama, memberikan efek pendinginan dan melindungi dari sinar UV"
        ],
        specs: {
          Garansi: "40 Tahun",
          Material: "Fiber Glass 125g/m2 & Bitumen 1300g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 337 mm / Lembar",
          Area: "3.45m2 / Bundle",
          berat: " 9 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Arabica", hex: "#3E2A47" },
          { name: "Rosso Tizzano", hex: "#9B1B30" },
          { name: "Verde Marino", hex: "#006F5F" },
          { name: "Blue Giaccio", hex: "#A7B8D4" },
          { name: "Legno Wood", hex: "#9E7A4E" },
          { name: "Granite", hex: "#676767" },

        ]
      },
      { 
        src: "/images/Tegola-rectangular.png", 
        label: "Premium - Rectangular",
        price: "Rp 1.207.800/bundle",
        description: "Atap bitumen, desain rectangular, tahan lama.",
        features: [
          "Genteng aspal, atap bitumen, made in Italy",
          "Cocok untuk proyek rumah dan bangunan dengan budget terbatas",
          "Menyediakan atap bitumen berkualitas tinggi dengan harga ekonomis",
          "Dikhususkan untuk proyek yang membutuhkan atap bitumen berkualitas",
          "Menawarkan garansi material hingga 40 tahun",
          "13 pilihan warna batuan yang sudah di-coating untuk hasil maksimal ",
          "Pewarnaan menggunakan tangki bersuhu 900 derajat Celsius untuk daya tahan maksimal",
          "Batu warna berguna untuk menahan sinar ultraviolet, menjaga rumah tetap sejuk",
          "Bentuk persegi dengan 4-tab di tiap lembarnya",
          "Dilengkapi dengan lem perekat bergaris yang memudahkan pemasangan dan penanda pemasangan paku atap"
        ],
        specs: {
          Garansi: "40 Tahun",
          Material: "Fiber Glass 125g/m2 & Bitumen 1300g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 340 mm / Lembar",
          Area: "3.05m2 / Bundle",
          berat: "10.70 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Nero Black", hex: "#1C1C1C" },
          { name: "Slate Grey", hex: "#708090" },
          { name: "Tone Red", hex: "#D14D4D" },
          { name: "Tone Green", hex: "#4C9A2A" },
          { name: "Red", hex: "#FF0000" },
          { name: "Dark Brown", hex: "#3E2B1F" },
          { name: "Dark Grey", hex: "#A9A9A9" },
          { name: "Indigo", hex: "#4B0082" },
          { name: "Wood", hex: "#9E7A4E" },
          { name: "Maroon", hex: "#800000" }
        ]
      },
      { 
        src: "/images/Tegola-Premium-Liberty.png", 
        label: "Premium - Liberty",
        price: "Rp 1.303.875/bundle",
        description: "Atap bitumen, desain Liberty, tahan lama.",
        features: [
          "Genteng aspal, atap bitumen, made in Italy",
          "Dirancang dengan standar internasional untuk proyek yang mementingkan keindahan dan keandalan",
          "Menawarkan garansi material hingga 40 tahun",
          "Digunakan di berbagai negara maju berkat kualitas yang sudah teruji",
          "Menjamin perlindungan terhadap kerusakan atap yang tidak disengaja",
          "Bentuk sirap klasik dengan 3-tab di tiap lembaran",
          "Dilengkapi lem perekat bergaris untuk memudahkan pemasangan dan penanda paku atap",
          "Lem perekat membantu mencegah kesalahan pasang atap bitumen",
          "Warna batu yang sudah di-coating untuk hasil waterproofing yang maksimal",
          "Batuan warna berguna untuk merefleksi sinar ultraviolet, menjadikan rumah lebih sejuk"
        ],
        specs: {
          Garansi: "40 Tahun",
          Material: "Fiber Glass 125g/m2 & Bitumen 1300g/m2",
          Tipe: "Blown Tia-Juana bitumen",
          Dimensi: "1000 mm x 340 mm / Lembar",
          Area: "3.05m2 / Bundle",
          berat: "10.70 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Slate Grey", hex: "#708090" },
          { name: "Leather", hex: "#9E5B40" },
          { name: "Brown", hex: "#8B4513" },
          { name: "Losa", hex: "#C17E61" }
        ]
      },
    ]
  },
  { 
    title: "CTI Shingles", 
    description: "CTI Shingles: Ringan, tahan lama, estetis, anti bocor, fleksibel, tahan cuaca ekstrem.", 
    src: "/images/CT3-Rectangular.png",
    gallery: [
      { 
        src: "/images/CT3-Rectangular.png", 
        label: "CT3 - Rectangular",
        price: "Rp 450.000/bundle",
        description: "Ringkas, kuat, elegan, tahan lama, modern, praktis.",
        features: [
          "Genteng aspal/atap bitumen 3-tab produksi Indonesia",
          "Satu-satunya asphalt shingles buatan anak bangsa",
          "Khusus untuk pasar Indonesia dengan value tinggi",
          "Perlindungan material hingga 20 tahun (lifetime warranty)",
          "Cocok untuk berbagai jenis bangunan",
          "Tahan air total, aman dari kebocoran",
          "Fitur adhesive bitumen di bagian bawah",
          "Cukup cabut plastik film HDPE, tambah paku untuk kekuatan ekstra",
          "Kualitas produksi terkontrol dan terpercaya",
          "Bukti keandalan dan kualitas di lapangan"
        ],
        specs: {
          Garansi: "20 Tahun",
          Bundle: "21 Lembar",
          Dimensi: "1000 mm x 333 mm / Lembar",
          Area: "3m2 / Bundle",
          berat: " 8.50 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Red", hex: "#FF0000" },
          { name: "Green", hex: "#00FF00" },
          { name: "Gold", hex: "#FFD700" }
        ]
      },
      { 
        src: "/images/CT5-Gothik2.png", 
        label: "CT5 - Gothik",
        price: "Rp 450.000/bundle",
        description: "Elegan, kokoh, anti bocor, bergaya klasik.",
        features: [
          "Model irregular bergaya Eropa",
          "Satu-satunya asphalt shingles buatan anak bangsa",
          "Dirancang khusus untuk pasar Indonesia",
          "Cocok untuk berbagai jenis bangunan",
          "mempercepat pemasangan, cukup cabut plastik HDPE",
          "Tahan bocor dan cuaca ekstrem",
          "Lifetime warranty untuk material",
          "Kualitas produksi terjamin",
          "Ideal untuk rumah bergaya klasik/eropa",
          "Bukti kualitas dan kepercayaan pasar"
        ],
        specs: {
          Garansi: "20 Tahun",
          Bundle: "21 Lembar",
          Dimensi: "1000 mm x 333 mm / Lembar",
          Area: "3m2 / Bundle",
          berat: " 8.50 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Red", hex: "#FF0000" },
          { name: "Green", hex: "#00FF00" },
          { name: "Gold", hex: "#FFD700" }
        ]
      },
      { 
        src: "/images/CT6-Hexagonal.png", 
        label: "CT6 - Hexagonal",
        price: "Rp 450.000/bundle",
        description: "Elegan, ringan, anti bocor, bergaya unik.",
        features: [
          "Model hexagonal bergaya Eropa.",
          "Satu-satunya asphalt shingles buatan anak bangsa",
          "Dibuat khusus untuk pasar Indonesia",
          "Cocok untuk berbagai jenis bangunan",
          "Pemasangan cepat, tinggal cabut plastik HDPE",
          "Tahan air dan cuaca ekstrem",
          "Perlindungan jangka panjang (lifetime warranty)",
          "Kualitas kontrol produksi terpercaya",
          "Ideal untuk rumah bergaya classic European",
          "tTerbukti andal dan diterima pasar Indonesia"
        ],
        specs: {
          Garansi: "20 Tahun",
          Bundle: "21 Lembar",
          Dimensi: "1000 mm x 333 mm / Lembar",
          Area: "3m2 / Bundle",
          berat: " 8.50 Kg / m2",
          Tebal: "3mm"
        },
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Red", hex: "#FF0000" },
          { name: "Green", hex: "#00FF00" },
          { name: "Gold", hex: "#FFD700" }
        ]
      }
    ]
  },
   { 
    title: "Baja Ringan", 
    description: "Baja ringan kuat, tahan lama, efisien, dan mudah dipasang.", 
    src: "/images/Baja-ringan.png",
    gallery: [
      { 
        src: "/images/TasoC75.png", 
        label: "Taso C75.65",
        price: "Rp 125.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "0.65mm"
        }
      },
      { 
        src: "/images/TasoC752.png", 
        label: "Taso C75.75",
        price: "Rp 135.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "0.75mm"
        }
      },
      { 
        src: "/images/TasoC80.png", 
        label: "Taso C75.80",
        price: "Rp 150.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "0.80mm"
        }
      },
      { 
        src: "/images/TasoC100.png", 
        label: "Taso C75.100",
        price: "Rp 187.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "1mm"
        }
      },
      { 
        src: "/images/TasoRengMXR32.png", 
        label: "Taso Reng MX R 32.45",
        price: "Rp 65.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "0.45mm"
        }
      },
      { 
        src: "/images/TasoReng40.png", 
        label: "Taso Reng 40.45",
        price: "Rp 90.000",
        features: [
          "Taso model “C” digunakan sebagai rangka utama atap rumah dan gedung",
          "Kuat dan serbaguna, juga cocok untuk baja konvensional",
          "Dua taso “C” dapat digabung menjadi struktur kotak yang lebih kokoh",
          "Reng baja ringan berfungsi sebagai dudukan genting dan pengikat rangka",
          "Kombinasi taso & reng menciptakan rangka atap yang kuat, ringan, dan tahan lama"
        ],
        specs: {
          Panjang: "6m",
          Tebal: "0.45mm"
        }
      },
    ]
  },
]

export default function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(null)
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
    setSelectedImageIndex(0)
    setSelectedColor(imageData[index].gallery[0].colors?.[0] || null)
    setShowPopup(true)
    stopAutoplay()
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedProduct(null)
    setSelectedImageIndex(0)
    setSelectedColor(null)
  }

  const handleThumbnailChange = (idx) => {
    setSelectedImageIndex(idx)
    setSelectedColor(selectedProduct.gallery[idx].colors?.[0] || null)
  }

  const startAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageData.length)
      }, 4000)
    }
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const toggleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay()
      setIsPlaying(false)
    } else {
      startAutoplay()
      setIsPlaying(true)
    }
  }

  const handleUserInteraction = () => {
    stopAutoplay()
    setIsPlaying(false)
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

  // Get current variant data
  const currentVariant = selectedProduct?.gallery[selectedImageIndex]

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
      {showPopup && selectedProduct && currentVariant && (
        <div className="product-popup-overlay" onClick={closePopup}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            
            <div className="popup-content">
              <div className="popup-left">
                <div className="popup-image">
                  <Image
                    src={currentVariant.src}
                    alt={currentVariant.label}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="popup-gallery">
                  <h4>Variasi Tipe:</h4>
                  <div className="gallery-thumbnails">
                    {selectedProduct.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumbnail ${idx === selectedImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailChange(idx)}
                      >
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <span className="thumbnail-label">{img.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="popup-details">
                <h3>{selectedProduct.title} - {currentVariant.label}</h3>
                <p className="popup-description">{currentVariant.description}</p>
                <div className="popup-price">{currentVariant.price}</div>
                
                {/* Color Picker */}
                {currentVariant.colors && currentVariant.colors.length > 0 && (
                  <div className="popup-section">
                    <h4>Pilihan Warna</h4>
                    <div className="color-picker">
                      {currentVariant.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className={`color-option ${selectedColor?.name === color.name ? 'active' : ''}`}
                          onClick={() => setSelectedColor(color)}
                          title={color.name}
                        >
                          <div 
                            className="color-swatch" 
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="color-name">{color.name}</span>
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
                    {currentVariant.features.map((feature, idx) => (
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
                    {Object.entries(currentVariant.specs).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="popup-actions">
                  <a 
                    href={`https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20tertarik%20dengan%20${encodeURIComponent(selectedProduct.title)}%20-%20${encodeURIComponent(currentVariant.label)}${selectedColor ? `%20-%20Warna%20${encodeURIComponent(selectedColor.name)}` : ''}`}
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
                    href={`https://wa.me/628131322833?text=Halo%20Ratapin,%20saya%20ingin%20menanyakan%20detail%20${encodeURIComponent(selectedProduct.title)}%20-%20${encodeURIComponent(currentVariant.label)}${selectedColor ? `%20-%20Warna%20${encodeURIComponent(selectedColor.name)}` : ''}`}
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