const crossEnv = process.env
const config = {
  production: {
    // 平台 安卓|ios
    platforms: crossEnv.platforms,
    // app类型 极速版(speed) | 正式版(official)
    appType: 'speed',
    baseInfo: {
      chatDomain: 'http://localhost:8050/chat/f',
      domain: 'http://www.wpdev.com',
      imagePath: 'http://image.wpdev.com'
    },
    theme: ''
  },
  development: {
    host: 'localhost',
    port: 8081,
    /**
     * target 要代理的域名
     * changeOrigin 允许跨域
     * pathRewrite 定义要访问的路径
     */
    proxyTable: {
      '/api': {
        target: 'http://192.168.0.1:200',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    baseInfo: {
      chatDomain: 'http://localhost:8050/chat/f',
      domain: 'http://www.wpdev.com',
      imagePath: 'http://image.wpdev.com'
    },
    // 平台 安卓|ios
    platforms: crossEnv.platforms
  }
}
module.exports = config[crossEnv.NODE_ENV] || config['development']
