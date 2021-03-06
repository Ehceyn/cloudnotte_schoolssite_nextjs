/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cloudnotte.com",
      "www.pngitem.com",
      "cdn.pixabay.com",
      "static.vecteezy.com",
      "cloudnotte-cdn.fra1.cdn.digitaloceanspaces.com",
    ],
  },
  experimental: {
    outputStandalone: true,
  },
};

const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        // for webpack 5 use
        // { and: [/\.(js|ts)x?$/] }
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
