// next.config.mjs

export default {
  // Configuración de Next.js
  reactStrictMode: true,

  // Configuración específica de webpack para solucionar el problema de fs
  webpack: (config, { isServer }) => {
    // Si no es el lado del servidor, elimina fs del bundle de webpack
    if (!isServer) {
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  }
};



/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
*/