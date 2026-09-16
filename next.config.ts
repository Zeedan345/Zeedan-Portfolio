import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Give local previews their own cache directory when requested.
    distDir: process.env.PORTFOLIO_BUILD_DIR || '.next',
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
