"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footer";
import styles from './ContactPage.module.css'; // Importamos el CSS modular

const tarjetasContacto = [
  {
    title: "Whatsapp",
    summary: "+346669388748",
    link: "https://wa.me/+346669388748 ",
    imageSrc: "/whatsapp.png",
  },
  {
    title: "E-mail",
    summary: "x@xscriptor.com",
    link: "mailto:x@xscriptor.com",
    imageSrc: "/correo.png",
  },
  {
    title: "Instagram",
    summary: "www.instagram.com/xscriptor",
    link: "https://www.instagram.com/xscriptor",
    imageSrc: "/instagram.png",
  },
  {
    title: "Facebook",
    summary: "www.facebook.com/@xscriptor",
    link: "https://www.facebook.com/@xscriptor",
    imageSrc: "/facebook.png",
  },
  {
    title: "X",
    summary: "www.x.com/xscriptor",
    link: "https://www.x.com/xscriptor",
    imageSrc: "/x.png",
  },
  {
    title: "Github",
    summary: "XscriptorCode",
    link: "https://www.github.com/xscriptorcode",
    imageSrc: "/github.png",
  },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta
          name="description"
          content="Deja un mensaje aquí o en cualquiera de mis redes sociales, estaré encantado de ayudarte con lo que necesitas."
        />
        <meta
          name="keywords"
          content="contacto, comunicacion, servicios editoriales, programación, maquetación, redes sociales, literatura, poesía, escritura creativa, Xscriptor, Óscar Preciado"
        />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
      </Head>
      <div className="bg-black">
        <div className="relative h-screen overflow-y-auto margin-top-adjust">
          <div className={styles["h2-custom-w3s"]}>Contacto</div>
          <div className={styles["h3-custom-wcon"]}>
            Hola, presiona una tarjeta para contactarme a través de cualquiera de estos medios.<br />
            También puedes dejarme un correo en x@xscriptor.com<br />
            ¡Gracias!
          </div>
          <motion.div
            className={styles["grid-container"]}
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            {tarjetasContacto.map((entry, index) => (
              <a href={entry.link} key={index} className={styles["card-container-c"]}>
                <motion.div className={styles["card-c"]} whileHover={{ scale: 1.05 }}>
                  <div className={styles["card-front-c"]}>
                    <div className="flex flex-col">
                      <h2>{entry.title}</h2>
                      <Image
                        src={entry.imageSrc}
                        alt={entry.title}
                        width={40}
                        height={40}
                        className="mx-auto my-4"
                      />
                    </div>
                  </div>
                  <div className={styles["card-back-c"]}>
                    <p>{entry.summary}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
