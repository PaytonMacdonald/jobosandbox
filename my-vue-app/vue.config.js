const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('copy').tap(([options]) => {
      options.patterns.push({
        from: 'public/CNAME',
        to: 'CNAME',
        toType: 'file'
      });
      return [options];
    });
  }
});
