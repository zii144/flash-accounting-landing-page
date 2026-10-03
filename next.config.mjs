/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export. Vercel serves it from the root; the manual GitHub Pages
  // fallback workflow sets NEXT_PUBLIC_BASE_PATH ("/flash-accounting-landing-page")
  // for its subpath. Local dev and builds without it serve from the root.
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
