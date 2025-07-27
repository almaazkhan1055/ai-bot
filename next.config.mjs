/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard/:name*",
        destination: "/dashboard/:name*",
      },
    ];
  },
};

export default nextConfig;
