import ClientComponentHome from './components/clientcomponenthome';

import Link from 'next/link';

import { Metadata } from 'next';
import Footer from './components/footer';

const metadata: Metadata = {
  title: 'Xscriptor — Óscar Preciado',
  description: 'Xscriptor, un sitio especializado en literatura y arte. Únete a la comunidad, conecta con tu naturaleza creativa y llena de vida a tu entorno.',
  keywords: 'literatura, poesía, escritura creativa, frases, textos, fotografía artística, artes visuales, filosofía literaria, blog de pensamiento creativo, Xscriptor, Óscar Preciado',
  authors: [{ name: 'Óscar Preciado | Xscriptor' }],
};

const Homepage = () => {
  return (
    <div>
      
      <ClientComponentHome/>
      <Footer />
    </div>
  );
};

export default Homepage;
