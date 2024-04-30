// Langkah 1: Tentukan kategori nilai berdasarkan rentang nilai
const nilaiKategori = [
  { kategori: "A", rentang: [86, 100] },
  { kategori: "B", rentang: [71, 85] },
  { kategori: "C", rentang: [56, 70] },
  { kategori: "D", rentang: [41, 55] },
  { kategori: "E", rentang: [0, 40] },
];

// Langkah 2: Buat fungsi untuk mengembalikan kategori nilai berdasarkan input
function getKategoriNilai(nilai) {
  // Loop melalui setiap kategori nilai
  for (let i = 0; i < nilaiKategori.length; i++) {
    const kategori = nilaiKategori[i];
    // Periksa jika nilai berada dalam rentang kategori saat ini
    if (nilai >= kategori.rentang[0] && nilai <= kategori.rentang[1]) {
      return kategori.kategori; // Kembalikan kategori nilai
    }
  }
  return "Nilai tidak valid"; // Jika nilai di luar rentang 0-100
}

// Contoh pengujian
const contohInput = [95, 80, 65, 50, 20, 110];

contohInput.forEach((nilai) => {
  const kategoriNilai = getKategoriNilai(nilai);
  console.log(`Nilai ${nilai} mendapat kategori: ${kategoriNilai}`);
});
