/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}", // Sesuaikan dengan lokasi file Vue Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Tambahkan konfigurasi Poppins
      },
    },
  },
  plugins: [],
};
