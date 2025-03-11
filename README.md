# Café Premium - Landing Page

## Descripción del Proyecto
Este proyecto es un prototipo de landing page para "Café Premium", una cafetería que busca resaltar su marca y mostrar una selección de sus productos. Se ha desarrollado de manera individual y cumple con los requisitos de un prototipado web básico y responsivo.

## Tecnologías Utilizadas
- **HTML5:** Estructura la página usando etiquetas semánticas (header, main, section, footer, article, nav) para organizar el contenido.
- **CSS:** Define el estilo visual del sitio, incluyendo:
  - Estilos generales (fuente, márgenes, padding, box-sizing).
  - Diseño del header (fondo, disposición de logo y navegación, posición fija).
  - Sección hero en el main (imagen de fondo, contenido centrado).
  - Estilos para la sección de productos (disposición en grid, tarjetas de producto).
  - Diseño del footer (organización en grid, enlaces y textos).
  - Adaptación a dispositivos móviles mediante Media Queries (especialmente para pantallas de hasta 768px).
- **JavaScript:** Añade interactividad básica, como:
  - Validación de formulario de newsletter (verifica el formato del email).
  - Efecto de scroll suave al hacer clic en los enlaces de la navegación.

## Estructura del Proyecto
La página se divide en cuatro secciones principales:

1. **Header**
   - Contiene el logo de "Café Premium" y una barra de navegación con enlaces a "Inicio", "Productos" y "Contacto".

2. **Main**
   - Incluye una sección hero con un título, una breve descripción y (originalmente) un formulario de newsletter.
   - Presenta bloques de comunicación que destacan la propuesta de valor principal y puntos secundarios.

3. **Products**
   - Muestra una selección de productos en formato de tarjetas organizadas en un grid.
   - Cada tarjeta contiene una imagen del producto, su nombre, una breve descripción y el precio.

4. **Footer**
   - Proporciona información de contacto, enlaces a redes sociales y secciones legales.
   - Incluye una zona de copyright.

## Integración de Imágenes
- **Logo:** Se integra mediante la etiqueta `<img>` en el header, utilizando una URL (por ejemplo, `logo.png`) con atributo `alt` para accesibilidad.
- **Imagen de Hero:** Se establece como fondo en la sección hero a través de CSS, utilizando una URL de ejemplo (por ejemplo, de Shutterstock).
- **Imágenes de Producto:** Cada tarjeta de producto incorpora una imagen mediante URLs de ejemplo. En un entorno real, es recomendable almacenar las imágenes localmente en una carpeta (por ejemplo, `images`).

## Pruebas y Validación
Para verificar el funcionamiento y cumplimiento del proyecto, se pueden seguir estas pautas:

1. **Verificar la UI y Requisitos Generales:**
   - Revisar que el proyecto esté desarrollado individualmente y cumpla con la estructura básica.
   - Inspeccionar el código HTML y CSS para confirmar el uso de etiquetas semánticas y media queries.
   - Comprobar que las secciones principales (header, main, products, footer) estén presentes y correctamente organizadas.

2. **Control de Versiones:**
   - Confirmar que el proyecto se encuentre en un repositorio de GitHub, con una descripción clara en la sección "About" o en el archivo README.

3. **Funcionalidades de JavaScript:**
   - **Formulario de Newsletter:** Probar la validación de email con formatos correctos e incorrectos, verificando los mensajes de alerta correspondientes.
   - **Scroll Suave:** Al hacer clic en los enlaces de navegación, la página debe desplazarse suavemente hasta la sección correspondiente.

4. **Diseño Responsivo:**
   - Usar herramientas de desarrollador en el navegador (como el modo dispositivo) o dispositivos móviles reales para comprobar la adaptación del diseño a diferentes tamaños de pantalla.

## Ejecución Local
Para ver el proyecto en tu navegador, sigue estos pasos:

1. Descarga y guarda los archivos `index.html`, `style.css` y `main.js` en la misma carpeta.
2. Abre el archivo `index.html` (puedes hacer doble clic o usar "Abrir con" en tu navegador preferido).
3. Navega por la página y verifica que todas las secciones y funcionalidades se muestren correctamente.

## Despliegue (Opcional)
Para compartir la landing page públicamente, puedes desplegar el proyecto en servicios como [Netlify](https://www.netlify.com/) o [GitHub Pages](https://pages.github.com/).

## Notas Finales
- Este prototipo es una solución web básica, sin funcionalidades complejas de backend o bases de datos.
- El proyecto cumple con los requisitos de prototipado y se adapta a dispositivos móviles, garantizando una buena experiencia de usuario.
