/** @type {import('next').NextConfig} */

const generateNextConfig = () => {
  return {
    swcMinify: true, // Enable SWC minification for improved performance
    images: { unoptimized: true },

    compiler: {
      removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
  };
};

module.exports = generateNextConfig();
