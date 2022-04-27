module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["portal-tricordiano.s3.amazonaws.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
