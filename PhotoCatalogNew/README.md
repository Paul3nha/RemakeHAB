# Photo Catalog

Se trata de una App básica con dos rutas:

    - Una para buscar fotos --> SearchPhotos.jsx. Esta es la ruta que se mostrará por defecto en nuestra página web.

    - Otra para ver las fotos marcadas como favoritas --> MyPhotos.jsx. Para acceder a esta ruta, habrá que pulsar un botón.

Vamos a usar una disposición mediante Layout, fijando un Header que conformará un menú en la parte superior de la pantalla, precediento a lo que el Outlet albergue en cada momento.

-SearchPhotos es nuestro componente principal, porque representa el index de nuestra pequeña aplicación. Le vamos a pasar los props de los estados que definimos en App.jsx y vamos a renderizar un formulario de búsqueda de imágenes (SearchForm.jsx) y una lista de fotos (PhotoList.jsx).

    - SearchForm -->formulario que consiste en un único input en el que se captura una palabra de no menos de 3 caracteres que usamos para construir una URL nueva que nos devuelva los resultados esperados. Actualiza el setPhotoList.

    - PhotoList --> renderiza una lista de photos con un corazon para añadirla a fav o quitarlas. Usa el estado de photoList para renderizar la lista de fotos.

        - Photo --> foto concreta a renderizar a la que añadimos un corazon que funciona como un boton que al pulsarse se colorea.
            -HearthIcon --> svg de un corazon

-MyPhotos es la segunda ruta que podemos ver en nuestra app y que nos redirige a las fotos que hemos marcado como favoritas pulsando en el corazon que las acompañan (son guardadas en localStorage). MyPhotos renderiza PhotoList:

- PhotoList --> renderiza una lista de photos con un corazon para añadirla a fav o quitarlas. Usa el estado de photoList para renderizar la lista de fotos.

        - Photo --> foto concreta a renderizar a la que añadimos un corazon que funciona como un boton que al pulsarse se colorea.

            -HearthIcon --> svg de un corazon
