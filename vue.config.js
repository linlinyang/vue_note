const path = require('path');
const resolve = dirname => path.resolve(__dirname,dirname);


module.exports = {
    css: {
      modules: true
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
      },
};
  
function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
            resolve('./src/assets/styles/global.less')
        ],
      })
  }