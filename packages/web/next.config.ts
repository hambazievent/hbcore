import type { NextConfig } from 'next';

// Next.js automatically loads .env, .env.local, .env.production files
// NEXT_PUBLIC_ variables are embedded at build time
// No need to manually load them here

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@hbcore/types'],
};

export default nextConfig;
