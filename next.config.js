/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/mycv-next-frontend/' : '',
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
