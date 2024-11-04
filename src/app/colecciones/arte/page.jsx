"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/app/globals.css';
import Footer from '@/app/components/footer';
 


const ArtePage = () => {
 
  return (
    <>
      <Head>
        <title>Arte</title>
        <meta name="description" content="Descubre todo el material artístico de Óscar Preciado — Xscriptor" />
        <meta name="keywords" content="fotografía artística, artes visuales, imágenes, recortes, plantillas, postales, Xscriptor, Óscar Preciado" />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>
      <motion.div
        className="relative h-full z-20"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5 }}
          >
        <div className='bg-black text-white  h-full w-full' >
        <div className="h2-custom-w3s text-center">Síntesis de galería</div>
        <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte001.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte002.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte003.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte004.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte005.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte006.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte007.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte008.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          <div className="relative w-full h-full">
          <Image 
            src="/images/colecciones/arte/arte010.webp"
            alt=""
            fill
            className="object-cover"
            sizes="120vw"
          /><div className="dark-overlay" />
          </div>
          
        <div className='bg-black h3-custom-wcon text-center'>La misma consiste en entregar una breve muestra de los elementos artísticos correspondientes a Xscriptor</div>
        <Footer />
        </div>
        
      </motion.div>
      
    </>
  );
};

export default ArtePage;

