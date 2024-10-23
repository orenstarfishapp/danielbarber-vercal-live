/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Pastikan mencakup semua file yang menggunakan Tailwind CSS
  theme: {
    extend: {
      // Tambahkan custom styling atau modifikasi breakpoints di sini jika diperlukan
      screens: {
        'mobile': '480px', // Bisa tambahkan custom breakpoint jika dibutuhkan
      },
    },
  },
  plugins: [
    // Jika ingin menambahkan plugin Tailwind (misalnya untuk forms atau typography)
  ],
};
