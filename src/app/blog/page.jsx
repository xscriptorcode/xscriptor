"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import styles from './BlogPage.module.css'; // Importamos el CSS modular
import Head from "next/head";
import Footer from "../components/footer";

// Ejemplo de datos de entradas (puedes obtenerlos dinámicamente si lo prefieres)
const blogEntries = [
  {
    title: "Conocer la morfología de lo indeterminado",
    summary: "el precio que nadie está dispuesto a pagar",
    link: "/blog/entradas/literatura/conocer-la-morfologia-de-lo-indeterminado", 
  },
  {
    title: "Confesiones sobre el lienzo: la poesía autoconfesional y la pintura como espejos del ser",
    summary: "«Las frases de Óscar Preciado inspiraron este cuadro, frases que evocan amores del pasado, besos que nos devoran hoy o tal vez esos amores que nunca han sido y que sólo viven en nuestra mente. Las palabras que se dijeron y quedaron, las que se omitieron y las que quisiéramos haber dicho». Marcela Robayo «Fuimos (...)",
    link: "/blog/entradas/arte/confesiones-sobre-el-lienzo", 
  },
  {
    title: "La superposición de circunstancias",
    summary: "Un estado de la existencia que da forma a la singularidad. La sospecha da lugar a la definición del ámbito donde todo lo posible coexiste hasta que se decanta un solo filamento y, a través de esa selección, florecen las cascadas de casualidades que dan vida a nuestra experiencia. Jamás se está(...)",
    link: "/blog/entradas/literatura/la-superposicion-de-circunstancias", 
  },
  {
    title: "Colaterales, un viaje entre simbolismo y sincronicidad",
    summary: "«Leer un libro enseña más que hablar con su autor, porque el autor, en el libro, sólo ha puesto sus mejores pensamientos.René Descartes. El libro Colaterales de Óscar Preciado es una obra rica en simbolismo y significado, que invita a reflexionar sobre la conexión entre nuestras experiencias personales y el mundo que nos rodea».",
    link: "/blog/entradas/colaterales/colaterales-un-viaje-entre-simbolismo-y-sincronicidad",
  },
  {
    title: "El eterno retorno — aeternus reditus",
    summary: "«El único recinto donde nuestra existencia redefine el pasado».   “¿Qué pasaría si un demonio te dijera que esta vida, tal como la vives y la has vivido, deberás vivirla una y otra vez innumerables veces más; y no habrá nada nuevo en ella, sino que cada dolor y cada placer y cada pensamiento(...).",
    link: "/blog/entradas/literatura/el-eterno-retorno",
  },
  {
    title: "Introducción a colaterales",
    summary: "«Lo eterno marchita y lo efímero marca nuestras memorias».",
    link: "/blog/entradas/colaterales/introduccion-a-colaterales", 
  },
];

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Descubre los desarrollos literarios y artísticos de Óscar Preciado, Xscriptor, fuera de la publicación tradicional"
        />
        <meta
          name="keywords"
          content="blog, entradas, poesía, escritura creativa, frases, textos, filosofía literaria, reflexiones, pensamientos, Xscriptor, Óscar Preciado"
        />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>
      
      
        <div className={styles["h2-custom-w3s"]}>Blog</div>
        <div className={styles["h3-custom-bcon"]}>Entradas:</div>
        <div className="p-4">
          {blogEntries.map((entry, index) => (
            <Link href={entry.link} key={index} passHref legacyBehavior>
              <motion.a
                className={styles["card-container"]}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',      // Flexbox para centrar
                  justifyContent: 'center',  // Centrar horizontalmente
                  alignItems: 'center',      // Centrar verticalmente
                  height: '100%',       // Asegurar que el contenedor ocupe el alto disponible
                  textAlign: 'center'   // Asegura que el texto dentro esté centrado
                }}
              >
                <div className={styles.card}>
                  <div className={styles["card-front"]}>
                    <h2>{entry.title}</h2>
                  </div>
                  <div className={styles["card-back"]}>
                    <p>{entry.summary}</p>
                  </div>
                </div>
              </motion.a>

            </Link>
          ))}
        </div>
        <Footer />
      
    </>
  );
};

export default BlogPage;

