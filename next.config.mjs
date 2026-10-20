/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: '/the-practice',
        destination: 'https://www.thewyomingclinic.com/#about',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: 'https://www.thewyomingclinic.com/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://www.thewyomingclinic.com/#contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
