"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParticleBackground from "../components/ParticleBackground";
import Head from "next/head";
import styles from './InfoPage.module.css'; // Importamos el CSS modular
import Footer from "../components/footer";

const InfoPage = () => {
  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="Biografía de Óscar Preciado en redes: @Xscriptor, trazos de su desarrollo literario y artístico." />
        <meta name="keywords" content="Biografía, Óscar Preciado, Xscriptor, literatura, poesía, escritura creativa, frases, textos, fotografía artística, artes visuales, filosofía literaria" />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>

      {/* Flexbox container that makes sure the footer stays at the bottom */}
      <div className={styles.pageContainer}>
        <motion.div
          className={styles.contentContainer} 
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          {/* Contenedor principal */}
          <div className="p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            {/* Contenedor de biografía */}
            <div className={styles.ctext}>
              <h1 className={styles["h1-custom"]}>Bio</h1>
              <p className={styles["p-custom"]}>
                Óscar Preciado es un poeta y letrista colombiano reconocido por su habilidad para tejer palabras con gran sensibilidad y profundidad emocional. Nacido en Colombia, Preciado ha logrado destacar en el panorama literario gracias a su estilo único que combina la poesía con la música, creando letras que resuenan tanto en el ámbito literario como en el musical.
              </p>
              <span className={styles["p-custom"]}>
                <em>
                  ¿Quiénes somos sino nuestras ideas? Aunque una imagen valga más que mil palabras, son las palabras las que dan forma a los ingenios que más tarde moldean nuestra realidad...
                </em>
              </span>
            </div>
            {/* Firma */}
            <div className="w-fit h-fit self-center md:self-end md:mr-12 ml-auto">
              <Image
                src="/fop.png"
                alt="Firma"
                width={185}
                height={77}
              />
            </div>
            {/* Bio aspecto personal */}
            <span className={`${styles.tpwt} ${styles["blurry-text"]} ${styles.ctext}`}>
            Desde el cruce de la autoconsciencia con otros aspectos fundamentales para el desarrollo de la razón, me surgió el interés espontáneo de absorber conocimiento de diversas materias y así mismo emergió también el deseo de expresar mediante el lenguaje y la pintura. Ya a una edad menos temprana estudié mecatrónica e informática y terminé dándome una segunda oportunidad, la que todos merecemos, para dedicarme a lo que me invadió primero, lo que siempre he sentido que se conecta con mi propósito personal. Recientemente he hecho dos publicaciones, la primera es Cielos de alquitrán, un conjunto de textos que a la fecha, un día cualquiera de septiembre del año dos mil veintidós, está cerca de cumplir once años de iniciar su redacción. La segunda es Primavera en el desierto, un libro más orientado a mi estilo literario actual, cuyo nombre inicialmente fue Retazos de primavera pero el escogido me pareció más apropiado, debido a que escribí el libro en Almería, España, entre febrero y abril, teniendo como objetivo principal la extracción de las ideas de las entrañas de las vivencias.
            </span>
            {/* Contenedor de enlaces */}
            <h1 className={`${styles["h2-custom"]} ${styles["blurry-text"]}`}>Prensa y enlaces:</h1>
            <div className={styles["card-container"]}>
              <a href="https://elescritor.es/entrevista/charlamos-con-el-escritor-oscar-preciado-autor-de-cielos-de-alquitran/" className={styles["white-card"]} target="_blank" rel="noopener noreferrer">
                <h3>Entrevista en Elescritor.es</h3>
                <p>Charlamos con el escritor Óscar Preciado, autor de &quot;Cielos de alquitrán&quot;.</p>
              </a>
              <a href="https://editorialcirculorojo.com/autores/oscar-preciado/" className={styles["white-card"]} target="_blank" rel="noopener noreferrer">
                <h3>Bio Círculo Rojo</h3>
                <p>&quot;Artista polifacético, en los últimos años dedicado al ámbito literario y a la pintura.&quot;</p>
              </a>
              <a href="https://www.europapress.es/andalucia/almeria-00350/noticia-autor-colombiano-oscar-preciado-publica-cielos-alquitran-conjunto-textos-aroma-nostalgia-20230201105437.html" className={styles["white-card"]} target="_blank" rel="noopener noreferrer">
                <h3>EuropaPress</h3>
                <p>&quot;Las palabras conectan incluso en contextos lejanos, convergen en una misma conclusión...&quot;</p>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Footer al final de la página */}
        <Footer />
      </div>
    </>
  );
};

export default InfoPage;
