// components/NewsletterPopup.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState('');

  // Mostrar el popup después de 2 segundos al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Limpiar cualquier mensaje previo

    if (!acceptedTerms) {
      setMessage('Debes aceptar los términos y condiciones para suscribirte...');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('¡Bienvenido(a)!');
        setEmail(''); // Limpiar el campo de email
        setTimeout(handleClose, 3000); // Cerrar popup después de 3 segundos
      } else {
        setMessage(data.error || 'Algo salió mal. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setMessage('Error al suscribirte. Por favor, intenta de nuevo.');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-400"
            onClick={handleClose}
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'EB Garamond' }}>
            Suscríbete a nuestro boletín
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-black text-white"
              style={{ fontFamily: 'EB Garamond' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Checkbox para aceptar términos y condiciones */}
            <div className="mb-4 text-white">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  required
                />
                <span>
                  Acepto los{' '}
                  <Link
                    href="https://www.xscriptor.com/terminos-y-condiciones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white"
                  >
                    términos y condiciones
                  </Link>
                </span>
              </label>
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-300 transition-colors"
              style={{ fontFamily: 'EB Garamond' }}
            >
              Suscribirse
            </button>
          </form>

          {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
