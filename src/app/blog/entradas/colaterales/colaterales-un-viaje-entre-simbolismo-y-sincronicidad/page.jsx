// src/app/blog/entradas/confesiones-sobre-el-lienzo/page.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "@/app/blog/entradas/entradas.module.css"; // Importa el nuevo CSS exclusivo
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ColateralesUnViajeEntreSimbolismoYSincronicidad = () => {
  return (
    <>
      <Head>
        <title>Colaterales, un viaje entre simbolismo y sincronicidad</title>
        <meta
          name="description"
          content="Blog sobre el análisis de las corrientes de pensamiento en el libro Colaterales de Óscar Preciado, Redactado por Carolina Massa"
        />
        <meta
          name="keywords"
          content="literatura, poesía, escritura creativa, frases, textos, fotografía artística, artes visuales, filosofía literaria, blog de pensamiento creativo, Xscriptor, Óscar Preciado"
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
            Colaterales, un viaje entre simbolismo y sincronicidad
          </h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Carolina Massa y Óscar Preciado</strong> el 07
            de junio de 2024 en:{" "}
            <em> Reseñas, Colaterales, Literatura, Poesía y Filosofía</em>.
          </p>

          <blockquote className={styles.quote}>
            «Leer un libro enseña más que hablar con su autor, porque el autor,
            en el libro, sólo ha puesto sus mejores pensamientos».<br />— René
            Descartes.
          </blockquote>

          <p className={styles.articleText}>
            El libro <em><strong>Colaterales</strong></em> de Óscar Preciado es una obra rica en simbolismo y significado, que invita a reflexionar sobre la conexión entre nuestras experiencias personales y el mundo que nos rodea. La idea de que cada lector establece una conexión única con la obra a través de su subjetividad es interesante, ya que sugiere que la lectura puede ser una experiencia transformadora y enriquecedora.
          </p>

          <p className={styles.articleText}>
            Encontré una relación con lo que el psicoanalista Carl Gustav Jung definió como un <em><strong>principio de conexiones acausales.</strong></em> La sincronicidad Jungiana estudia la forma en que establecemos conexiones mediante un conjunto de coincidencias que en realidad no lo son porque él las considera sincronicidades y no cree que haya algo accidental en nuestra vida. Esta teoría busca explicar cómo nuestro mundo inconsciente se conecta con el mundo consciente, así mismo la incidencia que tiene el pasado, personal y colectivo, y cómo su interacción con la consciencia actual promueve el proceso de integración.
          </p>

          <p className={styles.highlightedText}>
            Al exponer estas teorías podemos comprender más a fondo la intención del autor y descubrir la importancia que le da a sus lectores como conexiones que le aportan un nuevo sentido y propósito a su obra.
          </p>

          <blockquote className={styles.quote}>
            «Creo que algo muy mágico puede suceder cuando se lee un buen libro».<br />— JK Rowling.
          </blockquote>

          <p className={styles.highlightedText}>
            Otro elemento inmerso en el universo de “Colaterales” es la flor del almendro. Esta podría estar evocando la brevedad de las grandes alegrías que se enraízan en la memoria y que constantemente invocamos con añoranza, pues ellas conservan elementos de nuestra identidad más pura.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/colateralesunviajeentresimbolismoysincronicidad0.webp"
              alt="colaterales un viaje entre simbolismo y sincronicidad"
              className={styles.articleImage}
              width={200}
              height={200}
            />
          </div>

          <blockquote className={styles.quote}>
            «Las obras de arte nacen siempre de quien ha afrontado el peligro, de quien ha ido hasta el extremo de la experiencia, hasta el punto que ningún humano puede rebasar. Cuanto más se ve, más propia, más personal, más única se hace una vida».<br />— Rainer María Rilke.
          </blockquote>

          <div className={styles.cardContainer}>
            {contactCard.map((entry, index) => (
              <Link href={entry.link} key={index} className={styles.cardLink}>
                <motion.div
                  className={styles.card}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.cardFront}>
                    <h2>{entry.title}</h2>
                  </div>
                  <div className={styles.cardBack}>
                    <p>{entry.summary}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const contactCard = [
  {
    title: "***** Carolina Massa *****(@cagimass — @Autovigilantes)",
    summary: "Psicología Humanista Clínica-Educativa Pontificia Universidad Javeriana",
    link: "https://www.instagram.com/cagimass", // Añade la URL de la entrada
  },
  // Agrega más entradas como sea necesario
];

export default ColateralesUnViajeEntreSimbolismoYSincronicidad;
