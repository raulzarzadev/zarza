/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withOffline = require('next-offline')

const nextConfig = {
  reactStrictMode: true,
  
}


module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});


module.exports = withOffline(nextConfig)
