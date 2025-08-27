import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev','http://169.254.225.148','192.168.0.104'],
};
export default nextConfig;
