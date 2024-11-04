"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import './styles/PortfolioPage.css';
import Link from 'next/link';

const PortfolioPage = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const lineRef = useRef(null);
  const skillLineRefs = useRef([]);
  const controls = useAnimation();
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const skillCategories = [
    {
      title: "Literatura",
      skills: [
        { name: "Redacción SEO", description: "Técnicas de escritura optimizadas para motores de búsqueda, con el objetivo de mejorar la visibilidad en línea.", percentage: 100 },
        { name: "Narrativa digital", description: "Creación de historias atractivas adaptadas a plataformas digitales como blogs y redes sociales.", percentage: 100 },
        { name: "Edición de artículos", description: "Revisión y corrección de estilo, coherencia y gramática en textos periodísticos y de divulgación.", percentage: 100 },
        { name: "Adaptación de contenidos", description: "Modificación y optimización de textos para diferentes audiencias y medios, como blogs, revistas y redes sociales.", percentage: 100 },
        ]
    },
    {
      title: "“...”",
      skills: [
        { name: "Escritura creativa", description: "Técnicas literarias para desarrollar contenido original, como narrativa, diálogos y creación de personajes.", percentage: 90 },
        { name: "Análisis literario", description: "Interpretación y crítica de obras literarias a través de enfoques teóricos y estéticos.", percentage: 85 },
        { name: "Edición de textos", description: "Revisión y corrección de estilo, ortografía y gramática en textos literarios.", percentage: 80 },
        { name: "Poesía experimental", description: "Exploración de formas no convencionales y vanguardistas para escribir poesía.", percentage: 80 },
        ]
    },
    {
      title: "<Programación/>",
      skills: [
        { name: "Programación Imperativa, Orientada a Objetos y Concurrente", description: "Ejecutar instrucciones secuenciales, organizadas en objetos que facilitan la reutilización y mantenimiento, ejecución de múltiples tareas al mismo tiempo para aprovechar mejor los recursos.", percentage: 85 },
        { name: "Programación Funcional, Declarativa y Lógica", description: "Utiliza funciones puras, se enfoca en describir qué se quiere lograr sin detallar los pasos, y aplica reglas y hechos para resolver problemas a través de la inferencia lógica.", percentage: 85 },
        { name: "Programación Reactiva, Basada en Componentes y en Eventos", description: "Reacciona automáticamente a cambios en flujos de datos, organiza el código en módulos reutilizables, y responde a eventos externos o internos, ideal para sistemas interactivos.", percentage: 85 },
      ]
    },
    {
      title: "frontend...",
      skills: [
        { name: "JavaScript", description: "Lenguaje de programación utilizado para el desarrollo web interactivo en el navegador.", percentage: 90 },
        { name: "React", description: "Librería de JavaScript para construir interfaces de usuario reactivas y dinámicas.", percentage: 85 },
        { name: "HTML/CSS", description: "Lenguajes base para la estructura y el diseño de sitios web.", percentage: 90 },
        { name: "TypeScript", description: "Superconjunto tipado de JavaScript que facilita el desarrollo de grandes aplicaciones frontend.", percentage: 80 },
        { name: "Bootstrap", description: "Framework de CSS para desarrollar interfaces web responsivas rápidamente.", percentage: 85 },
        { name: "Tailwind CSS", description: "Framework CSS basado en utilidades para un desarrollo web rápido y personalizado.", percentage: 80 },
        { name: "Next.js", description: "Framework de React para el desarrollo de aplicaciones web con renderizado del lado del servidor.", percentage: 85 },
      ]
    },
    {
      title: "...y backend",
      skills: [
        { name: "Node.js", description: "Entorno de ejecución de JavaScript del lado del servidor para aplicaciones escalables.", percentage: 85 },
        { name: "Python", description: "Lenguaje de programación usado en backend, especialmente con frameworks como Django y Flask.", percentage: 90 },
        { name: "Java", description: "Lenguaje orientado a objetos utilizado en backend para aplicaciones robustas y escalables.", percentage: 80 },
        { name: "Django", description: "Framework web de Python para el desarrollo backend rápido y seguro.", percentage: 85 },
        { name: "Flask", description: "Framework ligero de Python para aplicaciones web backend sencillas.", percentage: 75 },
      ]
    },
    {
      title: "móvil",
      skills: [
        { name: "React Native", description: "Framework para crear aplicaciones móviles nativas utilizando JavaScript y React.", percentage: 80 },
        { name: "Swift", description: "Lenguaje de programación de Apple para desarrollar aplicaciones nativas para iOS.", percentage: 80 },
        { name: "Flutter", description: "Framework de Google para crear aplicaciones móviles multiplataforma con un solo código base.", percentage: 90 },
        { name: "Kotlin", description: "Lenguaje moderno utilizado para el desarrollo nativo de aplicaciones Android.", percentage: 80 },
      ]
    },
    {
      title: "bd",
      skills: [
        { name: "SQL", description: "Lenguaje de consulta estructurado utilizado para gestionar bases de datos relacionales.", percentage: 80 },
        { name: "MongoDB", description: "Base de datos NoSQL orientada a documentos para manejar grandes volúmenes de datos no estructurados.", percentage: 70 },
        { name: "PostgreSQL", description: "Sistema de gestión de bases de datos relacional avanzada, con soporte para consultas complejas.", percentage: 70 },
        { name: "MySQL", description: "Sistema de gestión de bases de datos relacional de código abierto, ampliamente usado en aplicaciones web.", percentage: 80 },
        { name: "Firebase", description: "Base de datos NoSQL en tiempo real proporcionada por Google, utilizada en aplicaciones móviles y web.", percentage: 80 },
      ]
    },
    {
      title: "Diseño",
      skills: [
        { name: "Procreate", description: "Software de edición de ilustraciones, animaciones y covers.", percentage: 100 },
        { name: "Adobe Lightroom", description: "Software de edición fotográfica profesional.", percentage: 100 },
        { name: "After Effects", description: "Creación de gráficos animados y efectos visuales.", percentage: 100 },
        { name: "Snapseed", description: "App de edición de fotos para dispositivos móviles.", percentage: 100 },
        { name: "Adobe Photoshop", description: "Software de edición de imágenes.", percentage: 75 },
        { name: "Adobe Illustrator", description: "Software de edición de imágenes.", percentage: 100 },
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPosition = window.scrollY;
        const documentHeight = document.body.scrollHeight - window.innerHeight;
        const initialLineHeight = window.innerHeight * 0.6;
        const finalLineHeight = window.innerHeight * 0.7;
        const maxHeight = Math.min(scrollPosition, documentHeight);
        const height = Math.max(initialLineHeight + maxHeight, finalLineHeight); 
        lineRef.current.style.height = `${height}px`;
        skillLineRefs.current.forEach((ref, index) => {
          if (ref) {
            const skillTopPosition = ref.getBoundingClientRect().top + scrollPosition;
            if (scrollPosition >= skillTopPosition - window.innerHeight / 2) {
              ref.style.height = "100px"; 
            } else {
              ref.style.height = "0px";
            }
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const handleSectionScroll = (index) => {
    setActiveSection(index);
    const section = document.getElementById(`section-${index}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const renderSkillSection = (skills) => {
    return skills.map((skill, index) => {
      const isRightAligned = index % 2 === 0;
      return (
        <motion.div
          key={skill.name}
          className={`relative flex items-center ${isRightAligned ? 'justify-end' : 'justify-start'} mb-20 z-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={index}
        >
          {isRightAligned && (
            <div className="w-full sm:w-64 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-lg skill-description mr-4 sm:mr-12">
              <p>{skill.description}</p>
            </div>
          )}
          <button
            className={`w-full sm:w-32 p-4 rounded-lg transition-colors duration-300 border-2 ${hoveredSkill === skill.name ? "bg-white text-black border-white" : "bg-black text-white border-white"}`}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {hoveredSkill === skill.name ? `${skill.percentage}%` : skill.name}
          </button>
          {!isRightAligned && (
            <div className="w-full sm:w-64 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-lg skill-description ml-4 sm:ml-12">
              <p>{skill.description}</p>
            </div>
          )}
          <div ref={el => skillLineRefs.current[index] = el} className="skill-line"></div>
        </motion.div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Portafolio de servicios." />
      </Head>
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 snap-y snap-mandatory overflow-y-scroll relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-garamond text-left text-white mb-12 relative z-20 pl-[10%]">Portafolio</h1>
        <div className="relative pl-[10%] mb-8 dropdown-container">
        <button onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg py-2 px-0 rounded inline-flex items-center hover:bg-gray-700 focus:outline-none"
          style={{ width: "auto", paddingLeft: "0.5rem", paddingRight: "0.5rem" }} // Ajustes dinámicos para el ancho
        >
          Proyectos
        </button>
        {isOpen && (
             <ul className="dropdown-menu absolute text-white pt-1">
             <button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-4 sm:py-2">
               <li>
                 <Link
                   href="https://protocol.equisx.org"
                   className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Xprotocol
                 </Link>
               </li>
             </button>
             <button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-4 sm:py-2">
               <li>
                 <Link
                   href="https://xliterato.com"
                   className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Xliterato
                 </Link>
               </li>
             </button>
           </ul>
          )}
        </div>
        <div ref={lineRef} className="main-line z-0"></div>
        {skillCategories.map((category, categoryIndex) => (
          <motion.section key={category.title} id={`section-${categoryIndex}`} className="mb-16 snap-start h-auto sm:h-[80vh] flex flex-col justify-center items-center relative z-10" initial={{ opacity: 0, y: 50 }} animate={controls} custom={categoryIndex}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-left pl-[30%] mb-10 relative z-20">{category.title}</h2>
            <div className="space-y-8 sm:space-y-12 mb-8 relative z-10">
              {renderSkillSection(category.skills)}
            </div>
          </motion.section>
        ))}
      </div>
      <div className="fixed bottom-0 w-full flex justify-center gap-4 p-4 z-20">
  {skillCategories.map((category, index) => (
    <button 
      key={index} 
      onClick={() => handleSectionScroll(index)} 
      className={`text-white text-xs sm:text-sm lg:text-base ${activeSection === index ? 'font-bold underline' : ''}`}
    >
      {/* Asterisco en pantallas móviles */}
      <span className="block sm:hidden">*</span>
      {/* Título de la categoría en pantallas medianas y grandes */}
      <span className="hidden sm:block">{category.title}</span>
    </button>
  ))}
</div>

    </>
  );
};

export default PortfolioPage;
