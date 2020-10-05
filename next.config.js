const withPlugins = require("next-compose-plugins")
const linaria = require("next-linaria")
const pwa = require("next-pwa")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins(
  [
    linaria,
    [
      pwa,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV === "development",
        },
      },
    ],
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
      },
    ],
  ],
  {
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
  }
)
