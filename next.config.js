const withPlugins = require("next-compose-plugins")
const withLinaria = require("next-linaria")
const withSvgr = require("next-svgr")

module.exports = withPlugins([withSvgr, withLinaria], {
  devIndicators: {
    autoPrerender: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/me",
        permanent: false,
      },
      {
        source: "/day",
        destination: "/me",
        permanent: false,
      },
    ]
  },
})
