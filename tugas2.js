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

// Langkah 3: Tambahkan kemampuan untuk menerima input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nilai: ", (nilai) => {
  // Ubah nilai yang diterima dari string menjadi angka (gunakan parseFloat)
  nilai = parseFloat(nilai);
  // Periksa apakah nilai yang dimasukkan adalah angka
  if (!isNaN(nilai) && nilai >= 0 && nilai <= 100) {
    const kategoriNilai = getKategoriNilai(nilai);
    console.log(`Nilai ${nilai} mendapat kategori: ${kategoriNilai}`);
  } else {
    console.log("Masukkan nilai yang valid (angka antara 0 dan 100).");
  }
  rl.close();
});
