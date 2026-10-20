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
      {
        // Catch-all for retired URLs. Must stay last, and must skip live routes,
        // generated files, and static assets, or the site would redirect to itself.
        source:
          '/:path((?!(?:chiropractic|massage|medical-care|team|api|_next|images)(?:/|$)|[^/]*\\.(?:png|jpe?g|gif|svg|ico|webp|avif|txt|xml|webmanifest|json)$).+)',
        destination: 'https://www.thewyomingclinic.com/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
