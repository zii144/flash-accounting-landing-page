/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is set by the
  // deploy workflow (e.g. "/flash-accounting-landing-page"); local dev and
  // builds without it serve from the root as before.
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
