/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    assetPrefix: '/', // Usar '/' si el sitio está en el root
  };
  
  export default nextConfig;
  