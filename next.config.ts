import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "turnbnb.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "www.turnbnb.com",
          port: "",
          pathname: "/**",
        },
      ],
    }
};

export default nextConfig;
