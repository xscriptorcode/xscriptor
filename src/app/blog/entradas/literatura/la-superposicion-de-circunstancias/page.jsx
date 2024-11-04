// src/app/blog/entradas/literatura/la-superposicion-de-circunstancia/page.tsx

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
        <title>La superposición de circunstancias</title>
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
          <h2 className={styles.mainTitle}>La superposición de circunstancias</h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Óscar Preciado</strong> el 20 de julio de 2024
            en: <em>Literatura, Ciencia, Arte, Colaterales, Poesía</em>.
          </p>

          <blockquote className={styles.quote}>
            Un estado de la existencia que da forma a la singularidad.
          </blockquote>

          <p className={styles.articleText}>
            La sospecha da lugar a la definición del ámbito donde todo lo posible coexiste hasta que se decanta un solo filamento y, a través de esa selección, florecen las cascadas de casualidades que dan vida a nuestra experiencia.
          </p>

          <p className={styles.articleText}>
            Jamás se está tan cerca de algo que no ocurre como cuando lo contemplamos y es en esa revisión superficial o profunda de las ideas donde damos lugar a la materialización de algo o su descarte absoluto.
          </p>

          <p className={styles.highlightedText}>
            Teniendo entonces la primicia de lo que se materializa y lo que acaba disolviéndose entre sus vestigios surge una nueva veracidad que permite darle altura, ancho y profundidad a la naturaleza que se ha contemplado con anterioridad.
          </p>

          <p className={styles.highlightedText}>
            Sabemos por los sectores que concebimos inertes de nuestras capacidades cognitivas que algo tuvo un espacio y un tiempo muy cercano a su valor nulo, pero esto no es suficiente para encarnar su absoluta negación, por lo que, en el detenimiento de la secuencia una luz brilla donde se supone la presencia inmutable de un vacío. Es el recuerdo de lo que pudo ser y no fue, el engendro silencioso de la materia onírica que sólo se ve esculpida mediante la ausencia de una interacción, imaginación.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/lasuperposiciondesircunstancias0.webp"
              alt="La superposición de circunstancias"
              className={styles.articleImage}
              width={800}
              height={800}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LaSuperposicionDeCircunstanciasPage;
