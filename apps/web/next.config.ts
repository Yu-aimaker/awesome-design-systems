import type { NextConfig } from 'next';
import path from 'node:path';
const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: false,
    webpackBuildWorker: false
  },
  turbopack: {
    root: path.resolve(process.cwd(), '../..')
  }
};
export default nextConfig;
