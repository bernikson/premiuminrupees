module.exports = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "primefaces.org",
      "flagsapi.com",
      "upload.wikimedia.org",
      "cdn.shopify.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primefaces.org",
        port: "",
        pathname: "/cdn/primereact/images/flag/**",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};
