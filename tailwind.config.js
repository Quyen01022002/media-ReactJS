// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo Tailwind quét các file trong src
  ],
  theme: {
    extend: {
      backgroundImage: {
        login:
          "url('https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/Nam%202021/Nen%20clip.jpg')",
      },
    },
  },
  plugins: [],
};
