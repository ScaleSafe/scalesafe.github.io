/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/styles.css"],
  theme: {
    extend: {
        colors: {
            primary: '#3D63DD',
            dark: '#1E1F24',
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
        },
    },
},
  plugins: [],
}

