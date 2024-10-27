/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { loader: "custom" },
  output: 'export' // Add this line for static exports
}

module.exports = nextConfig;
