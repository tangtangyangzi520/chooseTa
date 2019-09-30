const NODE_ENV = process.env.NODE_ENV
const config = {
  production: {

  },
  development: {
    host: 'localhost',
    port: 8080,
    proxyTable: {

    }
  }
}
// const result = config[NODE_ENV]
console.log(config, NODE_ENV)
module.exports = {
  name: 1
}
