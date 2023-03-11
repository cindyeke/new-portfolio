const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname)

    // Important: return the modified config
    return config
  },
}
