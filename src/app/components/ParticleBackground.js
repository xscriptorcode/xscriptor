import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const Init = useCallback(async (engine) => {
    console.log("Particles engine initialized");
    // Cargar todos los paquetes necesarios para tsparticles
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 721.5354273894853
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 4
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        animation: { // Cambiado 'anim' a 'animation'
          enable: false,
          speed: 0.01,
          minimumValue: 0.1, // Cambiado 'opacity_min' a 'minimumValue'
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        animation: { // Cambiado 'anim' a 'animation'
          enable: false,
          speed: 40,
          minimumValue: 0.1, // Cambiado 'size_min' a 'minimumValue'
          sync: false
        }
      },
      links: { // Cambiado 'line_linked' a 'links'
        enable: true,
        distance: 96.20472365193136,
        color: "#000000",
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.734885849793636,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out", // Cambiado 'out_mode' a 'outModes'
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectOn: "canvas", // Cambiado 'detect_on' a 'detectOn'
      events: {
        onHover: { // Cambiado 'onhover' a 'onHover'
          enable: true,
          mode: "repulse"
        },
        onClick: { // Cambiado 'onclick' a 'onClick'
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 50,
          links: { // Cambiado 'line_linked' a 'links'
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 1,
          opacity: 28,
          speed: 3
        },
        repulse: {
          distance: 80,
          duration: 0.1
        },
        push: {
          quantity: 1 // Cambiado 'particles_nb' a 'quantity'
        },
        remove: {
          quantity: 1 // Cambiado 'particles_nb' a 'quantity'
        }
      }
    },
    detectRetina: true // Cambiado 'retina_detect' a 'detectRetina'
  };

  return <Particles init={Init} options={particlesOptions} />;
};

export default ParticleBackground;
