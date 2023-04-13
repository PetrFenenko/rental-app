/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    
  ],
  theme: {
    extend: {
       backgroundImage: {
         'form-pattern': "url('/images/booking/formal-invitation.svg')",
       },
       screens:{
        'modal':'53rem',
       },
    },
  },
  plugins: [],
}