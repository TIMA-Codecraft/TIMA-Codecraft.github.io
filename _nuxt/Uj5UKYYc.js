const a=`---
title: Desain UI/UX yang Meningkatkan Konversi Bisnis
date: 2026-05-03
excerpt: Desain yang baik bukan hanya soal estetika. Pelajari prinsip desain UI/UX yang terbukti meningkatkan konversi dan retensi pengguna.
---

## Desain sebagai Investasi Bisnis

Banyak pemilik bisnis menganggap desain sebagai "biaya tambahan". Padahal, desain UI/UX yang baik adalah **investasi** yang memberikan ROI nyata — setiap $1 yang diinvestasikan dalam UX menghasilkan return hingga $100 (Forbes).

## Prinsip Dasar Desain untuk Konversi

### 1. Hierarki Visual yang Jelas

Atur elemen berdasarkan prioritas. Gunakan ukuran, warna, dan posisi untuk memandu mata pengguna ke Call-to-Action utama. Pengguna harus langsung tahu apa yang harus mereka lakukan saat pertama kali melihat halaman.

### 2. Konsistensi

Konsistensi dalam tata letak, warna, tipografi, dan interaksi membuat pengguna merasa familiar. Ini mengurangi beban kognitif dan mempercepat pengambilan keputusan.

### 3. Loading State yang Baik

Tidak ada yang lebih buruk dari pengguna yang menekan tombol dan tidak tahu apa yang terjadi. Tampilkan loading state, progress bar, atau skeleton screen untuk memberi umpan balik instan.

### 4. Mobile-First

Dengan lebih dari 60% trafik web berasal dari perangkat mobile, desain yang dioptimalkan untuk layar kecil bukan lagi opsional. Mulailah desain dari ukuran layar terkecil, kemudian tingkatkan.

## Kesimpulan

Desain UI/UX yang baik adalah perpaduan antara estetika dan fungsionalitas. Fokus pada kebutuhan pengguna, kurangi friksi, dan ukur setiap perubahan dengan data. Di TIMA Codecraft, kami menerapkan prinsip-prinsip ini di setiap proyek untuk memastikan hasil yang optimal bagi klien.
`,n=`---
title: Mengenal Vue 3 — Framework Modern untuk Web Development
date: 2026-05-17
excerpt: Vue 3 hadir dengan Composition API, performa lebih cepat, dan TypeScript support yang lebih baik. Simak kenapa kami memilih Vue 3 untuk proyek klien.
---

## Apa itu Vue 3?

Vue 3 adalah versi terbaru dari framework JavaScript progresif Vue.js. Dirilis dengan perubahan fundamental pada arsitektur internalnya, Vue 3 menawarkan performa yang lebih cepat, bundle size yang lebih kecil, dan API yang lebih fleksibel.

## Composition API

Salah satu fitur unggulan Vue 3 adalah **Composition API**. Berbeda dengan Options API yang memisahkan kode berdasarkan tipe (data, methods, computed), Composition API memungkinkan kita mengelompokkan logika berdasarkan fitur.

\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('Komponen telah dimuat!')
})
<\/script>
\`\`\`

## Performa Lebih Cepat

Vue 3 menggunakan **Proxy-based reactivity system** yang lebih cepat dibandingkan Object.defineProperty di Vue 2. Hasilnya, rendering dan reaktivitas berjalan jauh lebih efisien.

## Kenapa Kami Memilih Vue 3?

Di TIMA Codecraft, kami memilih Vue 3 untuk proyek klien karena:

1. **Ringan** — Bundle size minimal, cocok untuk aplikasi dengan performa tinggi
2. **Fleksibel** — Bisa digunakan untuk SPA sederhana hingga aplikasi kompleks
3. **Ekosistem matang** — Vue Router, Pinia, Vite — semuanya terintegrasi dengan baik
4. **TypeScript support** — Developer experience yang lebih baik dengan type safety

Kesimpulannya, Vue 3 adalah pilihan tepat untuk membangun aplikasi web modern yang cepat, skalabel, dan mudah dipelihara.
`,e=`---
title: 5 Cara Optimalisasi Kecepatan Website untuk SEO & Konversi
date: 2026-05-10
excerpt: Kecepatan website mempengaruhi ranking SEO dan tingkat konversi. Pelajari 5 cara praktis mengoptimalkan performa website Anda.
---

## Kenapa Kecepatan Website Penting?

Google menjadikan **Core Web Vitals** sebagai faktor ranking sejak 2021. Website yang lambat tidak hanya kehilangan posisi di hasil pencarian, tetapi juga kehilangan pengunjung — 53% pengguna akan meninggalkan website yang memuat lebih dari 3 detik.

## 1. Optimasi Gambar

Gambar adalah penyebab terbesar website lambat. Gunakan format modern seperti **WebP** atau **AVIF** yang menawarkan kualitas setara dengan ukuran file jauh lebih kecil dibandingkan JPEG atau PNG.

## 2. Gunakan Lazy Loading

Terapkan lazy loading pada gambar dan iframe agar konten di luar layar tidak dimuat sampai pengguna menggulir ke bagian tersebut.

\`\`\`html
<img src="hero.webp" loading="lazy" alt="Hero Image" />
\`\`\`

## 3. Minimalisir CSS & JavaScript

Bundling dan minifikasi kode CSS/JavaScript secara otomatis mengurangi jumlah request HTTP. Tools seperti Vite dan Webpack sudah menyediakan fitur ini secara bawaan.

## 4. Manfaatkan Caching Browser

Dengan caching yang tepat, pengunjung yang kembali tidak perlu mengunduh ulang aset statis. Setel header \`Cache-Control\` untuk aset yang jarang berubah.

## 5. Pilih Hosting yang Tepat

Hosting dengan CDN (Content Delivery Network) mendistribusikan konten website ke server di berbagai lokasi geografis, mengurangi latency bagi pengguna di seluruh dunia.

Dengan menerapkan kelima langkah ini, Anda bisa meningkatkan skor performa website secara signifikan — dan pada akhirnya meningkatkan kepuasan pengguna serta konversi bisnis.
`;export{e as _,n as a,a as b};
