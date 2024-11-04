// src/app/blog/entradas/confesiones-sobre-el-lienzo/page.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "@/app/blog/entradas/entradas.module.css"; // Importa el CSS exclusivo
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ConfesionesSobreElLienzoPage = () => {
  return (
    <>
      <Head>
        <title>Confesiones sobre el lienzo</title>
        <meta
          name="description"
          content="Blog sobre la inspiración en obras artísticas a través de la poesía de Óscar Preciado"
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
            Confesiones sobre el lienzo: la poesía autoconfesional y la pintura
            como espejos del ser
          </h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Óscar Preciado</strong> el 16 de julio de
            2024 en:{" "}
            <em>Arte, Cielos de alquitrán, Colaterales, Literatura, Pintura, Poesía</em>.
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/confesionessobreellienzo0.webp"
              alt="confesiones sobre el lienzo"
              className={styles.articleImage}
              width={800}
              height={800}
            />
          </div>
          <blockquote className={styles.quote}>
            «Las frases de Óscar Preciado inspiraron este cuadro, frases que
            evocan amores del pasado, besos que nos devoran hoy o tal vez esos
            amores que nunca han sido y que sólo viven en nuestra mente. Las
            palabras que se dijeron y quedaron, las que se omitieron y las que
            quisiéramos haber dicho».<br />— Marcela Robayo.
          </blockquote>
          <p className={styles.highlightedText}>
            <em>«Fuimos sincronicidad». Se requiere una sensibilidad especial
            para materializar la profundidad de una obra cuyo carácter depende
            de tantos tonos, palabras, conjunciones y significados.</em>
          </p>
          <p className={styles.articleText}>
            «Dame fuego nena, le dije. Sus labios ardían más que el otro extremo
            de mi cigarrillo». Cuando redacté Cielos de alquitrán pensé en dejar
            sobre el papel un breve retrato de las experiencias que daban forma
            a mi manera de pensar, sentir y vivir. «La nicotina nublaba los
            nervios que perciben el alma rota», poco tiempo pasó para ser
            plenamente consciente del mapa que iba dejando y que reflejaba desde
            el ámbito literario momentos que se consumaban y me despedían vacío
            y otros, como lo sugirió la interpretación exacta de Marcela en
            algún punto, que no se concretan y a pesar de esa falta de sustancia,
            terminan latiendo eternamente entre los reflejos y sombras de
            nuestras memorias.
          </p>
          <p className={styles.articleText}>
            La obra traída a la realidad entre acrílico y yeso sobre tela es un
            guiño a los amores inconclusos, los deseados, que no alcanzan el
            clímax de su realización y así mismo el desborde de pasión que se
            derrama a través de cada borde de la piel cuando el mundo pone lo
            necesario para que florezcan las coincidencias.
          </p>
          <p className={styles.highlightedText}>
            <em>
              Como esta, muchas de sus pinturas trascienden material esencial de
              la cotidianidad al ámbito artístico, pero ver ésta en particular,
              es observar un prisma de sentimientos y momentos desde varios
              ángulos en un solo plano, porque convergen los desarrollos
              literarios y la manifestación artística, en esa simbiosis pasan a
              ser una creación única.
            </em>
          </p>
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
    title: "Marcela Robayo",
    summary: "https://www.marbayo.art",
    link: "https://www.marbayo.art",
  },
  // Agrega más entradas como sea necesario
];

export default ConfesionesSobreElLienzoPage;
