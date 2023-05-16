/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['placeimg.com', 'picsum.photos','imageio.forbes.com'],	//esta la url del CDN de donde vienen las imagenes
    },  
}