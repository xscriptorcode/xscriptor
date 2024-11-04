# Xscriptor

**Esta es una de las últimas versiones de la plantilla general del sitio web xscriptor.com**

**Xscriptor** es un sitio web que ofrece una variedad de contenidos artísticos y literarios, incluyendo colecciones de arte, información sobre el autor, un portafolio de proyectos, un blog y una sección de contacto.

## Secciones del Sitio

- **Inicio**: Página principal que presenta una visión general del sitio y sus contenidos destacados.
- **Colecciones**: Galería de obras de arte y literatura disponibles.
- **Info**: Información detallada sobre el autor y la misión del sitio.
- **Contacto**: Formulario y detalles para comunicarse con el autor o el equipo.
- **Portafolio**: Muestra de proyectos y trabajos realizados.
- **Blog**: Artículos y entradas relacionadas con temas de interés.
- **Políticas**: Página que detalla las políticas de privacidad y términos de uso del sitio.

## Capturas de Pantalla

![Inicio](https://github.com/xscriptorcode/xscriptor/raw/master/screenshots/1.png)
![Animación-json](https://github.com/xscriptorcode/xscriptor/raw/master/screenshots/2.png)
![Formulario-cursor](https://github.com/xscriptorcode/xscriptor/raw/master/screenshots/3.png)

## Componentes
- **Home**: para separar la lógica del home y poder usar las meta con next.
- **Cursor**: implementación de un cursor personalizado.
- **footer**: un componente para sólo tener que importarlo en cada sitio.
- **Inicio.json**: animación al abrir el sitio, que por cierto está renderizado con lottie, fue más eficiente que el mp4.
- **InteractiveText/one/two**: variaciones del mismo código, componente para juego con frases de xscriptor.
- **Loading animation**: componente que define la funcionalidad para reproducir Inicio.Json.
- **Navbar**: barra de navegación.
- **NavLink**: enlaces en la barra de navegación.
- **NewsletterPopup**: componente para suscripción al boletín.
- **ParticleBackground**: componente para el script de partículas en info.
- **TransitionProvider**: animaciones y transiciones.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/): Framework de React para aplicaciones web.
- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para diseño responsivo.
- [Prisma](https://www.prisma.io/): ORM para bases de datos.
- [Mysql](https://www.mysql.com/): Para el almacenamiento de las bases de datos.
- [Apache](https://www.apache.org/): Para la gestión del servidor y aplicaciones web.

**Nota**: actualmente el sitio es estático y está sobre un hosting de terceros pero eventualmente se moverá, al terminar las pruebas a un servidor propio para mayor control de la administración.
**sitemap.xml**: manejo de direccionamiento del sitio en caso de que quieras personalizarlo
## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/xscriptorcode/xscriptor/
   cd xscriptor
   npm install


## Primeros pasos

Ejecutar el server de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Y empieza a transformar el contenido.

