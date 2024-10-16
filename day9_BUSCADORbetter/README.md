# Buscador con filtros

- Sobre la API de rick & morty
- Inhabilitamos las prop types con "'react/prop-types': 'off'"
- <ErrorBoundary fallback={< ErrorPage />}>
  {/_ Componente que captura errores en sus componentes hijos y permite mostrar una IU alternativa (fallback) en caso de error. _/}
  <Outlet />
  </ErrorBoundary> - Hay que importar: import { ErrorBoundary } from "react-error-boundary"; - Para lo que habrá que instalar: npm i react-error-boundary

## TailwindCSS

        1. npm install -D tailwindcss postcss autoprefixer
        2. npx tailwindcss init -p
        3. vas a tailwind.config.js --> content: ["./src/**/*.{js,jsx,ts,tsx}"]
        4. vas a index.css --> pegas las directivas de tailwind (@tailwind base, @tailwind components, @tailwind utilities)
        5. En tu archivo vite.config.js, asegúrate de que no estás especificando un archivo de salida CSS, ya que Vite se encargará de eso automáticamente.
        6. Extensiones: PostCSS Language Support y Tailwind CSS IntelliSense.
        7. Importar tu index.css en el App.jsx

Vite procesará automáticamente el CSS y aplicará los estilos de Tailwind en tu aplicación. Así que no necesitas preocuparte por un archivo output.css, por eso no usamos el comando (npx tailwindcss -i ./src/input.css -o ./src/output.css --watch)

## useNavigate()

- Para usar esto: navigate("/image/" + json.date);
- Hay que importar esto: import { useNavigate } from "react-router-dom";
- y poner esto: const navigate = useNavigate();
