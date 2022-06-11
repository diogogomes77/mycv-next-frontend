/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/mycv-next-frontend/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
