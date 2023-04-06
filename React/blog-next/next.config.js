/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["images.musement.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
