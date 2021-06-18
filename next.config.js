const withPlugins = require('next-compose-plugins');

const bundleAnalyzer = require('@next/bundle-analyzer');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/ghpages/_next/static/images/',
  }],
  [bundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true',
  }],
  {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    future: {
      webpack5: true,
    },
    images: {
      loader: "imgix",
      path: "ghpages/",
    },
    basePath: '/ghpages',
    assetPrefix: '/ghpages/',
    webpack: (config, { dev, isServer }) => {
      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif|mp4)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         publicPath: '/_next',
      //         name: 'static/media/[name].[hash].[ext]',
      //       },
      //     },
      //   ],
      // })
  
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
  
      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }
  
      return config
    },
    async rewrites() {
      return {
        beforeFiles: [
          // Rewrite to prevent a problem when deploying at vercel
          // which directs a user to the index.xml instead of index.html
          // https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/16
          {
            source: '/',
            destination: '/index',
          },
        ],
      }
    },
  }
])
