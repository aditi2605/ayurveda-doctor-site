/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    devIndicators: false,
    images: {
        domains: ['mayas-ayurveda.web.app','mayas-ayurveda.firebaseapp.com','mayasayurveda.com'],
        unoptimized: true,
    },
};

export default nextConfig;
