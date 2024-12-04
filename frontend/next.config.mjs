/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    compress: true,
    distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    compiler: {
        emotion: true,
        removeConsole: false
    },

    images: {
        minimumCacheTTL: 600,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
                port: '',
                pathname: '**'
            }
        ]
    },

    serverRuntimeConfig: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || '',
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || ''
    }
};

export default nextConfig;
