/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next does not serve index.html for a folder inside public/, so /portfolio
  // would otherwise fall through to the app router and render the home page.
  async rewrites () {
    return [
      { source: '/portfolio', destination: '/portfolio/index.html' },
      { source: '/portfolio/', destination: '/portfolio/index.html' }
    ]
  }
};

export default nextConfig;
