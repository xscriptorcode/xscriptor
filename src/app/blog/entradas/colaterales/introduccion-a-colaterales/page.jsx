// src/app/blog/entradas/colaterales/introduccion-a-colaterales/page.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "@/app/blog/entradas/entradas.module.css"; // Importa el nuevo CSS exclusivo
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const IntroduccionAColateralesPage = () => {
  return (
    <>
      <Head>
        <title>Introducción a Colaterales</title>
        <meta
          name="description"
          content="Blog de reflexión sobre los elementos de Colaterales, la existencia cíclica"
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
            Introducción a <em>Colaterales</em> — el aspecto frontal
          </h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Óscar Preciado</strong> el 04 de noviembre del
            2024 en:{" "}
            <em>Literatura, Ciencia, Colaterales, Poesía y Filosofía</em>.
          </p>
          <blockquote className={styles.quote}>
            Lo eterno marchita<br />
            y lo efímero marca nuestras memorias.
          </blockquote>
          <p className={styles.articleText}>
            Reúne parte de las ideas que se ven moldeadas en el recorrido interno del libro, un círculo que encuentra la forma de consumirse a sí mismo tras una silueta, permite entrever la simbología que sutilmente susurra una palabra: uroboro (del griego οὐροβόρος [ὄφις], ‘[serpiente] que se come la cola’, a su vez de οὐρά, ‘cola’, y βόρος, ‘que come’), representando así conceptos como la unificación de la transición de las ideas, la eclosión y su dispersión continua, que más tarde se convertirían en canal de regreso a la consciencia sobre la entropía.
          </p>

          <p className={styles.highlightedText}>
            <em>
              A escala de las masas solares somos minucias irrelevantes,
            </em>{" "}
            pero, a pesar de la certeza de esta afirmación, siempre habrá un
            vértice en una locación relativa a la nada en el que colisionan
            todas nuestras posibilidades.
          </p>

          <p className={styles.articleText}>
            El turquesa es una luz que al traspasar se adhiere fugazmente a la
            esencia del todo y trae a colación la calma que permanece antes,
            durante y después de cada segmento inmerso en la continuidad, misma
            a la que todo se somete cuando logramos observar desde un plano
            superior, un cartesiano en el que ya no se es susceptible a las
            instancias. Todo pasa y, sin importar la derivación de orden que se
            presente, todo está predispuesto desde un modelo inicial en el que
            las mismas ocurren, incluso, sin consideración alguna de las
            coordenadas.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/introduccionacolateraleseeaf.webp"
              alt="La superposición de circunstancias"
              className={styles.articleImage}
              width={900}
              height={900}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default IntroduccionAColateralesPage;
