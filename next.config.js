
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // Set the custom build directory name
  async headers() {
    return [
        {
          source: '/about',
          headers: [
            {
              key: 'x-custom-header',
              value: 'my custom header value',
            },
            {
              key: 'x-another-custom-header',
              value: 'my other custom header value',
            },
          ],
        },
      ];
  },
};

module.exports = nextConfig;
