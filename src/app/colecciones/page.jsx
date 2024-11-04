"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/app/colecciones/ColeccionesPage.module.css"; // Cambiado para usar el nuevo CSS
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../components/footer';

const ColeccionesPage = () => {
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Ajusta el tiempo según la duración de tu animación
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

    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const opacity1 = 1 - Math.min(scrollPosition / windowHeight, 1);
    const opacity2 = Math.min(scrollPosition / windowHeight, 1);
    const brightnessEffect = `${1 + opacity2}`; 
    const blurEffect1 = `${10 * opacity2}px`;

    return (
        <div className={styles["bg-black"]}>
            <Head>
                <title>Colecciones</title>
                <meta name="description" content="Descubre las colecciones de Xscriptor, el desarrollo literario, poético y las construcciones artísticas del autor." />
                <meta name="keywords" content="literatura, poesía, escritura creativa, frases, textos, fotografía artística, artes visuales, filosofía literaria, pinturas, Xscriptor, Óscar Preciado" />
                <meta name="author" content="Xscriptor — Óscar Preciado" />
            </Head>
            <motion.div 
                className={`${styles["bg-black"]} ${styles.relative} ${styles["h-full"]} ${styles["h-screen"]} overflow-y-auto ${styles["margin-top-adjust"]}`} 
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }}  
                transition={{ duration: 1 }}  
            >
                <div className={`${styles["relative"]} ${styles["h-full"]}`}>
                    {/* Primera imagen de fondo */}
                    <div className={styles["image-wrapper"]}>
                        <Image 
                            src="/images/colecciones/colecciones01.webp"
                            alt="Colecciones"
                            width={1920}
                            height={1080}
                            className={styles["image-background"]}
                        />
                    </div>

                    {/* Contenido sobre la imagen (frase y botones) */}
                    <div className={`${styles["content-overlay"]} text-center`}>
                        <div className={`${styles["flex"]} ${styles["flex-col"]} ${styles["button-container"]}`}>
                            <Link href="/colecciones/libros" passHref>
                                <button className={styles["button"]} 
                                    style={{ 
                                        filter: `blur(${blurEffect1}) brightness(${brightnessEffect})`
                                    }}>
                                    Explorar literatura
                                </button>
                            </Link>
                            
                            <Link href="/colecciones/arte" passHref>
                                <button className={styles["button"]} 
                                    style={{ 
                                        filter: `blur(${blurEffect1}) brightness(${brightnessEffect})`
                                    }}>
                                    Explorar arte
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default ColeccionesPage;
