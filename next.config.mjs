/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "moonlit-bloodhound-823.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
