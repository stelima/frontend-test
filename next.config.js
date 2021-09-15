module.exports = {
  future: {
    webpack5: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    })

    return config
  },
  trailingSlash: true,
  poweredByHeader: false

}
