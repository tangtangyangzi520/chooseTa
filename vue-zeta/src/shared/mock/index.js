const config = require('../../config/index')

// 配置mock路由
exports.mockConfig = function () {
  if (config.devMock) {
    const express = require('express')
    const app = express()
    const apiRouter = express.Router()
    app.use('/api', apiRouter)
  }
}

exports.mockRouter = function (app) {
  if (config.devMock) {
    const json = {
      data: require('./mock.json'),
      message: 'Success',
      status: 200
    }
    app.get('/api/goods', (req, res) => {
      res.json(json)
    })
    app.post('/api/list', (req, res) => {
      res.json(json)
    })
  }
}
