module.exports = {
  images: {
    domains: ["i.dummyjson.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/functions/:path*`,
      },
    ];
  },
};
