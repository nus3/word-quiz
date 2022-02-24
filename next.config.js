/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const config = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}

module.exports = withPWA(config)
