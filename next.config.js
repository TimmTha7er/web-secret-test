/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    })

    return config
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_NAME: process.env.SITE_NAME,
    DESCRIPTION: process.env.DESCRIPTION,
  },
}

module.exports = nextConfig
