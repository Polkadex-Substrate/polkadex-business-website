module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    hostUrl: 'http://localhost:9002',
    hostPort: 9002,
    rangerHostUrl: 'ws://127.0.0.1',
    rangerHostPort: 9944,
  },
};
