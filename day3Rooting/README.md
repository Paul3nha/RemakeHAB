# React Router con Vite

Este proyecto es una aplicación creada con **React** y **React Router**, usando **Vite** como herramienta de construcción y empaquetado. Es un proyecto básico para demostrar el uso de la navegación en una SPA (Single Page Application).

## Características

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas para crear una SPA y cambiar entre vistas sin recargar la página.
- **Vite**: Herramienta rápida de desarrollo que ofrece un entorno de desarrollo más rápido y eficiente que alternativas tradicionales como Webpack.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (Versión 14 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

### Clona este repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

## Metiendo Tailwind.css

        1. npm install -D tailwindcss postcss autoprefixer
        2. npx tailwindcss init -p
        3. vas a tailwind.config.js --> content: ["./src/**/*.{js,jsx,ts,tsx}"]
        4. vas a index.css --> pegas las directivas de tailwind (@tailwind base, @tailwind components, @tailwind utilities)
        5. En tu archivo vite.config.js, asegúrate de que no estás especificando un archivo de salida CSS, ya que Vite se encargará de eso automáticamente.
        6. Extensiones: PostCSS Language Support y Tailwind CSS IntelliSense

Vite procesará automáticamente el CSS y aplicará los estilos de Tailwind en tu aplicación. Así que no necesitas preocuparte por un archivo output.css, por eso no usamos el comando (npx tailwindcss -i ./src/input.css -o ./src/output.css --watch)
