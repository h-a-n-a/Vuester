const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('constants', resolve('src/constants'))
      .set('utils', resolve('src/utils'))

    config.output.filename('[name].[hash].js').end()
  },
  lintOnSave: process.env.NODE_ENV !== 'prod'
}
