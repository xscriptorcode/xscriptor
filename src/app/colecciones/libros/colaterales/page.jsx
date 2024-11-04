"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/app/components/footer";

const ColateralesPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollPosition(scrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Verifica que windowHeight no sea 0
  const windowHeight = typeof window !== "undefined" && window.innerHeight > 0 ? window.innerHeight : 1;
  
  // Evita que los valores sean NaN
  const opacity1 = 1 - Math.min(scrollPosition / windowHeight, 1);
  const opacity2 = Math.min(scrollPosition / windowHeight, 1);
  const opacity3 = 2.2 - Math.max(0, scrollPosition / windowHeight - 1);
  const opacity4 = Math.max(0, scrollPosition / windowHeight - 0.0);
  
  const brightnessEffect = !isNaN(1 + opacity2) ? `${1 + opacity2}` : "1";
  const blurEffect1 = !isNaN(10 * opacity2) ? `${10 * opacity2}px` : "0px";
  const blurEffect2 = !isNaN(10 * (1 - opacity2)) ? `${10 * (1 - opacity2)}px` : "0px";
  const blurEffect3 = !isNaN(10 * (1 - opacity3)) ? `${10 * (1 - opacity3)}px` : "0px";
  const blurEffect4 = !isNaN(10 * (1 - opacity4)) ? `${10 * (1 - opacity4)}px` : "0px";

  return (
    <div className="bg-black">
      <Head>
        <title>Cielos de alquitrán</title>
        <meta
          name="description"
          content="Conoce Colaterales, un poemario autoconfesional que explora las sincronicidades y consecuencias de nuestras propias vidas en torno a los sentimientos"
        />
        <meta
          name="keywords"
          content="Cielos de alquitrán, libro, poesía, escritura creativa, frases, textos, filosofía literaria, amor, Xscriptor, Óscar Preciado"
        />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>

      {/* Vídeo y botones */}
      <div className="relative video-container w-full h-screen">
        <video
          src="/images/colecciones/libros/colateralesvid001.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video"
          style={{ opacity: opacity1, filter: `blur(${blurEffect1})` }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6"
          style={{
            transform: "translateY(50px)",
            opacity: opacity1,
            filter: `blur(${blurEffect1}) brightness(${brightnessEffect})`,
          }}
        >
          <Link
            href="https://buy.stripe.com/5kAbLC5XA9Hj2wUaEE"
            style={{ filter: `blur(${blurEffect1}) brightness(${brightnessEffect})` }}
          >
            <button className="h3-custom-w3sc text-lg md:text-xl p-4 md:p-6 rounded border border-white">
              Compra directa
            </button>
          </Link>
          <Link
            href="https://www.amazon.es/COLATERALES-SIN-COLECCION-%C3%93scar-Preciado/dp/8419871419"
            style={{ filter: `blur(${blurEffect1}) brightness(${brightnessEffect})` }}
          >
            <button className="h3-custom-w3sc text-lg md:text-xl p-4 md:p-6 rounded border border-white">
              Amazon
            </button>
          </Link>
        </div>
        <div className="dark-overlay" />
      </div>

      {/* Primera imagen y descripción */}
      <motion.div
        className="relative bg-black h-screen overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/colecciones/libros/colaterales01.webp"
            alt="Portada del libro Cielos de alquitrán"
            fill
            className="object-cover"
            sizes="120vw"
            style={{
              opacity: opacity2,
              filter: `blur(${blurEffect2})`,
            }}
          />
          <div className="dark-overlay" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
            style={{ filter: `blur(${blurEffect2})`, opacity: opacity2 }}
          >
            <div
              className="h2-custom-w3s text-white mb-8 md:text-right md:absolute md:right-20 md:top-1/2 md:transform md:-translate-y-1/2"
              style={{
                filter: `blur(${blurEffect2}) brightness(${brightnessEffect})`,
              }}
            >
              <p className="text-3xl font-semibold">15,00 &euro;</p>
              <p className="text-lg font-light">
                &bull; Ficha T&eacute;cnica:<br />
                &bull; ISBN: 978-84-19871-41-1<br />
                &bull; EAN: 9788419871411<br />
                &bull; Editorial: Editorial Loto Azul<br />
                &bull; Formato: Tapa blanda<br />
                &bull; País de publicación: España<br />
                &bull; Idioma de publicación: Castellano<br />
                &bull; Idioma original: Castellano<br />
                &bull; Dimensiones: 210 x 140 mm.<br />
                &bull; Peso: 200 gramos<br />
                &bull; Nº páginas: 126<br />
                &bull; Fecha publicación: 15-09-2023
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Segunda imagen */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/colecciones/libros/colaterales0022.webp"
          alt="página de libro Cielos de alquitrán"
          fill
          className="object-cover"
          sizes="120vw"
          style={{ opacity: opacity3, filter: `blur(${blurEffect3})` }}
        />
        <div
          className="h3-custom-w3sc absolute inset-0 flex flex-col items-center justify-center text-center p-4"
          style={{
            transform: "translateY(200px)",
            filter: `blur(${blurEffect3})`,
            opacity: opacity3,
          }}
        >
          un poemario que explora los bordes de la introspección a través de las
          experiencias.
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: opacity3,
            filter: `blur(${blurEffect3}) brightness(${brightnessEffect})`,
          }}
        >
          <div className="h1-custom-w-2s text-white mb-8 text-center flex flex-col items-center justify-center p-4" />
        </div>
        <div className="dark-overlay" />
      </div>

      {/* Tercera imagen */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/colecciones/libros/colaterales03.webp"
          alt="página de libro Colaterales"
          fill
          className="object-cover"
          sizes="120vw"
          style={{ opacity: opacity4, filter: `blur(${blurEffect4})` }}
        />
        <div
          className="h5-custom absolute inset-0 flex flex-col items-center justify-center text-left p-4"
          style={{
            transform: "translateY(-180px)",
            filter: `blur(${blurEffect4})`,
            opacity: opacity4,
          }}
        >
          Este libro es ideal para quienes buscan un reflejo de sus perspectivas
          internas mediante la expresión ajena.
        </div>
        <div className="dark-overlay" />
      </div>
      <Footer />
    </div>
  );
};

export default ColateralesPage;
