# React + Vite

Se trata de una página sencilla con 3 rutas: una para login, otra para registrarse y otra con productos.
Implementa un buscador de productos a partir del hook useRef y el token del usuario para poder estar logado.

## TailwindCSS

        1. npm install -D tailwindcss postcss autoprefixer
        2. npx tailwindcss init -p
        3. vas a tailwind.config.js --> content: ["./src/**/*.{js,jsx,ts,tsx}"]
        4. vas a index.css --> pegas las directivas de tailwind (@tailwind base, @tailwind components, @tailwind utilities)
        5. En tu archivo vite.config.js, asegúrate de que no estás especificando un archivo de salida CSS, ya que Vite se encargará de eso automáticamente.
        6. Extensiones: PostCSS Language Support y Tailwind CSS IntelliSense.

Vite procesará automáticamente el CSS y aplicará los estilos de Tailwind en tu aplicación. Así que no necesitas preocuparte por un archivo output.css, por eso no usamos el comando (npx tailwindcss -i ./src/input.css -o ./src/output.css --watch)

## Google Font en TailwindCSS

        1. descargas el enlace
        2. lo importas en index.css
        3. modificas el tailwind.config.js -->  extend: {
      fontFamily: {
        'fira': ['Fira Sans Condensed', 'sans-serif'], // Define la fuente
      },},
