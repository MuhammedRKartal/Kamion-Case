/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    DOMAIN_URL: process.env.DOMAIN_URL,
    DOMAIN_REQUEST_URL: process.env.DOMAIN_REQUEST_URL,
  },
};

module.exports = nextConfig;
