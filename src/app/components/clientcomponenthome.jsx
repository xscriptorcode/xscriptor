"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import InteractivePhrase from './InteractiveTextone';
import InteractivePhrase2 from './InteractiveTexttwo';
import Link from "next/link";
import NewsletterPopup from './NewsletterPopup';

const ClientComponentHome = () => {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollPosition(scrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const opacity1 = 1 - Math.min(scrollPosition / windowHeight, 1);
  const opacity2 = Math.min(scrollPosition / windowHeight, 1);
  const opacity3 = Math.max(0, (scrollPosition / windowHeight) - 0.6);
  const brightnessEffect = `${1 + opacity2}`; 
  const blurEffect1 = `${10 * opacity2}px`;
  const blurEffect2 = `${10 * (1 - opacity2)}px`;
  const blurEffect3 = `${10 * (1 - opacity3)}px`;

  return (
    <div className="bg-black">
      <NewsletterPopup />
      <motion.div 
        className="bg-black relative h-full z-20 relative h-screen overflow-y-auto margin-top-adjust" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full h-full video-container">
          <video 
      src="/background01x.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="video bg-black"
      style={{ 
        opacity: opacity1, 
        filter: `blur(${blurEffect1})`, 
        maxWidth: '100%', 
        maxHeight: '100%', 
        objectFit: 'contain',  // Asegura que el video mantenga sus proporciones
        backgroundColor: 'black'  // Fondo negro alrededor del video
      }}
    />
            <div className="dark-overlay" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4" style={{ opacity: opacity1 }}>
              <div className="h1-custom-w text-white mb-8" style={{ filter: `blur(${blurEffect1}) brightness(${brightnessEffect})` }} >
                <InteractivePhrase />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/colecciones/libros/colaterales" style={{ filter: `blur(${blurEffect1}) brightness(${brightnessEffect})` }}>
                  <button className="bg-black text-white p-2 rounded">Colaterales</button>
                </Link>
                <Link href="/colecciones/libros/cielos-de-alquitran" style={{ filter: `blur(${blurEffect1}) brightness(${brightnessEffect})` }}>
                  <button className="bg-black text-white p-2 rounded">Cielos de alquitrán</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative w-full h-screen video-container">
        <video 
          src="/background02x.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video"
          style={{ opacity: opacity2, filter: `blur(${blurEffect2}) brightness(${brightnessEffect})`,
         }}
        />
        <div className="absolute inset-0 flex items-center justify-center" 
        style={{ opacity: opacity2, filter: `blur(${blurEffect2}) brightness(${brightnessEffect})` }}>
          <div className="h1-custom-w-2s text-white mb-8 text-center flex flex-col items-center justify-center p-4" >
            <InteractivePhrase2 />
          </div>
        </div>
        <div className="dark-overlay" />
      </div>
      <div className="relative w-full h-screen video-container">
        <video 
          src="/background03x.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video"
          style={{ opacity: opacity2, filter: `blur(${blurEffect3})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center" 
        style={{ opacity: opacity2, filter: `blur(${blurEffect3}) brightness(${brightnessEffect})` }}>
          <div className="text-white mb-8 text-center flex flex-col items-center justify-center p-4">
            <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-32">
              <Link href="/colecciones/arte" style={{ filter: `blur(${blurEffect3}) brightness(${brightnessEffect})` }}>
                <button className="h3-custom-w3sc text-xl md:text-2xl p-4 md:p-6 rounded">Explorar arte</button>
              </Link>
              <Link href="/colecciones/libros/" style={{ filter: `blur(${blurEffect3}) brightness(${brightnessEffect})` }}>
                <button className="h3-custom-w3sc text-xl md:text-2xl p-4 md:p-6 rounded">Explorar literatura</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="dark-overlay" />
        <div className="dark-overlay" />
        <div className="dark-overlay" />
      </div>
    </div>
  );
};

export default ClientComponentHome;
