import { join } from 'node:path';
import { config } from '@dotenvx/dotenvx';
import type { NextConfig } from 'next';

// Load environment variables from web package .env file
config({ path: join(__dirname, '.env') });

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;
