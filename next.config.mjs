/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/profile-page" : "",
  assetPrefix: isProd ? "/profile-page/" : "",
  images: {
    loader: "imgix",
    path: isProd ? "/profile-page/" : "",
  },
};

export default nextConfig;
