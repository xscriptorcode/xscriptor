// src/app/blog/entradas/literatura/conocer-la-morfologia-de-lo-indeterminado/page.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "@/app/blog/entradas/entradas.module.css"; // Importa el nuevo CSS exclusivo
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const LaSuperposicionDeCircunstanciasPage = () => {
  return (
    <>
      <Head>
        <title>Conocer la morfología de lo indeterminado</title>
        <meta
          name="description"
          content="Blog de reflexión sobre el destino, nuestras decisiones y la materialización de las ideas"
        />
        <meta
          name="keywords"
          content="literatura, poesía, ciencia, escritura creativa, frases, textos, frases filosóficas, ciencia, filosofía literaria, blog de pensamiento creativo, Xscriptor, Óscar Preciado"
        />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>
      <motion.div
        className={styles.pageContainer}
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.contentWrapper}>
          <h2 className={styles.mainTitle}>
            Conocer la morfología de lo indeterminado
          </h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Óscar Preciado</strong> el 12 de septiembre
            del 2024 en:{" "}
            <em>Literatura, Ciencia, Arte, Destino, Colaterales, Poesía</em>.
          </p>

          <blockquote className={styles.quote}>
            El precio que nadie está dispuesto a pagar
          </blockquote>

          <p className={styles.articleText}>
            Poder contemplarlo todo, quizás, con absoluta discreción, sitúa el trasfondo de los instintos más silenciosos e indómitos de la humanidad en una extensión lejana y poco consecuente con el movimiento de la sangre.
          </p>

          <p className={styles.articleText}>
            Uno se revuelca ante la narrativa de poder trascender aspectos de la mente, como la capacidad de recordar una idea o un sentimiento encajado en determinado momento de la continuidad, como anticipándose a lo que es posible anhelar y sin embargo permanece lejos del alcance de sus deseos más profundos.
          </p>

          <p className={styles.highlightedText}>
            El destino, como conclusión de una serie de acontecimientos que se comprimen sobre sí mismos en el límite de la linealidad, sugiere la posibilidad de conocer la suma de los desenlaces siempre que conozcamos las variables que toquetean su naturaleza intrínseca. Pero a todos sus efectos, se le añade un factor externo que, personal y metódicamente, catalogaría como la carga: un dolor de proporciones inmensas que supone la experiencia anticipada de la agonía de todas las cosas y la imposibilidad de reconducir esa metamorfosis (a la que la materia está sometida naturalmente) hacia otro desenlace.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/conocerlamorfologiadeloindeterminado.webp"
              alt="Morfología de lo indeterminado"
              className={styles.articleImage}
              width={800}
              height={800}
            />
          </div>

          <p className={styles.subtitle}>
            Almeria, España 2023
          </p>

          <p className={styles.highlightedText}>
            <em>
              Aunque empecé a redactar este poemario hace más de diez años y la gentileza del tiempo lo único que permite como constante es la metamorfosis del todo, las expresiones que provienen de las entrañas pueden surgir eventualmente, como en este caso, para acercar la definición del dolor ante el pleno conocimiento de un destino.
            </em>
          </p>

          <h3 className={styles.sectionTitle}>
            Comprender el tiempo
          </h3>

          <p className={styles.poemText}>
            <em>
              Como un déjà vu insostenible<br />
              del que no se puede desacoplar<br />
              ni por un instante<br />
              sus miserias y su grandeza.
            </em>
          </p>

          <h3 className={styles.sectionTitleRight}>
            Tiro de gracia
          </h3>

          <p className={styles.poemTextRight}>
            <em>
              Eres mi ruleta rusa,<br />
              el arma que me volaría los sesos…<br />
              o la bala que redimiría mi existencia.
            </em>
          </p>

          <h3 className={styles.sectionTitleLeft} style={{ textAlign: "right" }}>
            Farewell
          </h3>

          <p className={styles.poemTextLeft} style={{ textAlign: "right" }}>
            <em>
              Me vi en su mirada,<br />
              me costaba irme, más de lo que cualquier ser humano puede planear.<br />
              Sus ojos emanaban un dolor de magnitudes incalculables,<br />
              pero era tarde,<br />
              siempre lo fue,<br />
              el viaje había comenzado<br />
              y a pesar de que nos habíamos llenado las bocas de adiós,<br />
              los ojos aún no hallaban forma de despedirse.<br />
              Y dolió contemplar su mirada a través del cristal<br />
              y dolió verme reflejado en sus ojos huyendo sin ella.<br />
              Entonces lo supe: algunas cosas duelen un minuto,<br />
              otras un par de horas…<br />
              y algunas otras toda una vida.
            </em>
          </p>

          <p className={styles.subtitle}>
            Fragmentos de <strong><em>Cielos de alquitrán.</em></strong>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default LaSuperposicionDeCircunstanciasPage;
