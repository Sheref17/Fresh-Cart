/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    container:{
      center:true ,
      padding:"1rem"
    }
    
  },
  plugins: [
    require("flowbite/plugin")
  ],
}