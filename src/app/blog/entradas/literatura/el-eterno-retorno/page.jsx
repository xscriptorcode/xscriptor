// src/app/blog/entradas/literatura/el-eterno-retorno/page.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "@/app/blog/entradas/entradas.module.css"; // Importa el nuevo CSS exclusivo
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ElEternoRetornoPage = () => {
  return (
    <>
      <Head>
        <title>El eterno retorno</title>
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
          <h2 className={styles.mainTitle}>El eterno retorno</h2>
          <p className={styles.metaInfo}>
            <strong>Publicado por Óscar Preciado</strong> el 23 de mayo de 2024
            en: <em>Literatura, Ciencia, Arte, Colaterales, Filosofía</em>.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/blog/eleternoretorno0.webp"
              alt="El eterno retorno, fragmento de colaterales"
              className={styles.articleImage}
              width={300}
              height={300}
            />
          </div>

          <p className={styles.articleText} style={{ textAlign: "center" }}>
            que es el único recinto donde nuestra existencia redefine el pasado.
          </p>

          <blockquote className={styles.quote}>
            “¿Qué pasaría si un demonio te dijera que esta vida, tal como la
            vives y la has vivido, deberás vivirla una y otra vez innumerables
            veces más; y no habrá nada nuevo en ella, sino que cada dolor y cada
            placer y cada pensamiento y suspiro y todo lo indeciblemente
            pequeño y grande en tu vida deberá retornar a ti, todo en la misma
            secuencia y sucesión (…)?”, La carga más pesada,{" "}
            <strong>Friedrich Nietzsche.</strong>
          </blockquote>

          <p className={styles.articleText}>
            Colaterales deja entre sus ramificaciones un guiño a la idea que consolidaría el pensamiento contemplado en obras anteriores a través de ideas como “Todo se transforma, todo pasa, lo eterno marchita y lo efímero marca nuestras memorias”, donde sugeriría que el todo está sujeto a un factor de cambio y que, sin importar qué se haga, las acciones y sus repercusiones están sometidas a un conjunto de movimientos trazados desde el origen de la concepción de la vida hasta su finalización.
          </p>

          <div className={styles.sectionTitle}>
            <strong>Definición</strong>
          </div>

          <p className={styles.articleText}>
            El término <strong><em>Colaterales</em></strong> sugiere efectos secundarios, aunque el poemario tiende a simplificar más esa definición, trascendiéndola como aspectos que emanan de la precisión de las circunstancias en torno a la vida en cuestión, consecuencias indirectas o impactos no previstos que acompañan a una concatenación de acciones.
          </p>

          <div className={styles.sectionTitle}>
            <strong>La relación de lo paralelo con el Eterno Retorno</strong>
          </div>

          <p className={styles.highlightedText}>
            <em>Ciclicidad del Amor:</em> al igual que el eterno retorno plantea la repetición infinita de los eventos, la serie de transformaciones experimentadas en “Colaterales” se presentan como un ciclo que florece, impacta y deja huellas recurrentes en nuestras vidas.
          </p>

          <p className={styles.highlightedText}>
            <em>Reflexión Existencial:</em> el eterno retorno nos confronta con la necesidad de vivir nuestras vidas de manera que podamos desear su repetición infinita. “Colaterales” examina cómo las experiencias profundas e intensas y sus efectos físicos y metafísicos nos transforman.
          </p>

          <p className={styles.highlightedText}>
            <em>Búsqueda de Sentido:</em> en el eterno retorno, la aceptación de la repetición eterna se convierte en una forma de encontrar sentido y afirmar la vida. En “Colaterales”, son las experiencias mismas las que nos empujan a encontrar un sentido, conformando nuestra comprensión del ser y la conexión con otros.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default ElEternoRetornoPage;
