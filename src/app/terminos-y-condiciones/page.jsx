import React from 'react';
import Head from 'next/head';
import styles from './TermsConditionsCookiesPage.module.css'; // Importa el CSS del componente
import Footer from '../components/footer';

const TermsConditionsCookiesPage = () => {
  return (
    <>
      <Head>
        <title>Términos y condiciones</title>
        <meta name="description" content="Términos y condiciones" />
        <meta name="keywords" content="literatura, poesía, escritura creativa, frases, textos, fotografía artística, artes visuales, filosofía literaria, blog de pensamiento creativo, Xscriptor, Óscar Preciado" />
        <meta name="author" content="Xscriptor — Óscar Preciado" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" />
      </Head>
      
      <div className={styles.container}>
        <h1 className={styles.title}>Términos, Condiciones y Política de Cookies</h1>
        
        <section className={styles.section}>
          <h2 className={styles.subtitle}>1. Términos y Condiciones</h2>
          <h3 className={styles.heading}>Introducción</h3>
          <p className={styles.paragraph}>Bienvenido a xscriptor.com. Al utilizar nuestro sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones.</p>
          
          <h3 className={styles.heading}>Uso del Sitio</h3>
          <p className={styles.paragraph}>Está prohibido el uso indebido del sitio web, incluyendo pero no limitado a, cometer o facilitar actos delictivos, transmitir virus, malware, o cualquier otro material malicioso o tecnológicamente dañino.</p>
          
          <h3 className={styles.heading}>Cuenta de Usuario</h3>
          <p className={styles.paragraph}>Para acceder a ciertos servicios, es posible que necesites crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.</p>
          
          <h3 className={styles.heading}>Productos y Servicios</h3>
          <p className={styles.paragraph}>Nos reservamos el derecho de modificar los productos y servicios ofrecidos en nuestro sitio en cualquier momento sin previo aviso.</p>
          
          <h3 className={styles.heading}>Propiedad Intelectual</h3>
          <p className={styles.paragraph}>Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, y software, es propiedad de xscriptor.com o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.</p>
          
          <h3 className={styles.heading}>Limitación de Responsabilidad</h3>
          <p className={styles.paragraph}>En la máxima medida permitida por la ley, xscriptor.com no será responsable de ninguna pérdida o daño que resulte del uso del sitio web.</p>
          
          <h3 className={styles.heading}>Modificaciones de los Términos</h3>
          <p className={styles.paragraph}>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor en el momento de su publicación en el sitio web.</p>
          
          <h3 className={styles.heading}>Contacto</h3>
          <p className={styles.paragraph}>
            Si tienes alguna pregunta sobre estos términos y condiciones, contáctanos en 
            <a href="mailto:x@xscriptor.com" className={styles.link}> x@xscriptor.com</a>.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.subtitle}>2. Política de Privacidad</h2>
          <h3 className={styles.heading}>Introducción</h3>
          <p className={styles.paragraph}>Tu privacidad es muy importante para nosotros. Esta política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal.</p>
          
          <h3 className={styles.heading}>Información Recopilada</h3>
          <p className={styles.paragraph}>Recopilamos información personal y no personal cuando interactúas con nuestro sitio web. Esto incluye la dirección de protocolo de Internet (IP), datos de inicio de sesión, dirección de correo electrónico, contraseña, información de la computadora y la conexión, y el historial de compras.</p>
          
          <h3 className={styles.heading}>Uso de la Información</h3>
          <p className={styles.paragraph}>Usamos la información recopilada para proporcionar y operar nuestros servicios, brindar asistencia al cliente, contactar a los usuarios con avisos personalizados, crear datos estadísticos agregados y cumplir con las leyes y regulaciones aplicables.</p>
          
          <h3 className={styles.heading}>Almacenamiento y Seguridad de Datos</h3>
          <p className={styles.paragraph}>Tus datos se almacenan a través de los sistemas de Hostinger en servidores seguros protegidos por un firewall.</p>
          
          <h3 className={styles.heading}>Modificaciones a la Política de Privacidad</h3>
          <p className={styles.paragraph}>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios tendrán efecto inmediato tras su publicación en la página web.</p>
          
          <h3 className={styles.heading}>Contacto</h3>
          <p className={styles.paragraph}>
            Si deseas acceder, corregir, modificar o eliminar cualquier información personal que tengamos sobre ti, envíanos un correo a 
            <a href="mailto:x@xscriptor.com" className={styles.link}> x@xscriptor.com</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>3. Política de Cookies</h2>
          <p className={styles.paragraph}>En xscriptor.com, recibimos, recopilamos y almacenamos cualquier información que ingreses en nuestro sitio web o nos proporciones de otra manera...</p>
          
          <h3 className={styles.heading}>Propósitos de la Recopilación de Información</h3>
          <ul className={styles.paragraph}>
            <li>Proporcionar y operar nuestros servicios de manera eficiente.</li>
            <li>Brindar asistencia continua al cliente y soporte técnico especializado.</li>
            <li>Contactar a nuestros usuarios con avisos personalizados...</li>
          </ul>
          
          <h3 className={styles.heading}>Almacenamiento y Seguridad de Datos</h3>
          <p className={styles.paragraph}>Nuestro sitio web y tienda en línea están alojados en la plataforma Hostinger, que nos proporciona la infraestructura segura para venderte nuestros productos y servicios...</p>
          
          <h3 className={styles.heading}>Comunicaciones</h3>
          <p className={styles.paragraph}>Podemos comunicarnos contigo para notificarte sobre tu cuenta, resolver problemas, gestionar disputas...</p>
        </section>

        
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsCookiesPage;
