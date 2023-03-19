/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_ID:
      "571051781459-p30l8addh2hfmqngs4g2895ji1c45emp.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    GITHUB_ID: "c519e76942c3cd7a990c",
    GITHUB_SECRET: "aab5e2b4d16dccc16d10b721665f6befd0778d61",
    NAME: "bala",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
