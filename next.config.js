const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental:{
    appDir: true,
  },
  generateBuildId(){
    return '0.0.1' // todo fetch from tag or commit-id
  }
});
