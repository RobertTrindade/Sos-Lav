/** @type {import('next').NextConfig} */

const generateNextConfig = () => {
  return {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true, // Enable SWC minification for improved performance
    images: { unoptimized: true },

    compiler: {
      removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
  };
};

module.exports = generateNextConfig();
