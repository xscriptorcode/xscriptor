// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center h5-custom footer-custom">
      <p>© {new Date().getFullYear()} Xscriptor - Todos los derechos reservados</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link href="/terminos-y-condiciones" className="text-gray-400 hover:text-white">
          Políticas
        </Link>
        <Link href="/contacto" className="text-gray-400 hover:text-white">
          Contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
