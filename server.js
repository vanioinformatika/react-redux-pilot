'use strict'
let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config')
let bodyParser = require('body-parser')
let JWT = require('jsonwebtoken')

let express = require('express')
let app = express()
let cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000'
}

// add cors
app.use(
  cors(corsOptions),
  bodyParser.json()
)

// Post login vegpont az apin
app.post(
  '/api/login',
  function (req, res, next) {
    console.log('POST request to /api/login', req.body)

    // token stuff
    const options = {
      algorithm: 'HS256',
      expiresIn: '1h',
      notBefore: '0h',
      issuer: 'http://vanio.hu',
      jwtid: 'id123456',
      subject: 'andras.meszaros@vanio.hu'
    }

    const token = {
      name: 'Andras Meszaros',
      role: 'user'
    }

    const secret = 'client_secret'

    // generate jwt
    JWT.sign(
      token,
      secret,
      options,
      function (err, jwt) {
        const response = {}
        if (err) {
          response.error = err.message
        } else {
          response.id_token = jwt
        }
        res.json(response)
      }
    )
  }
)

app.post(
  '/api/logout',
  function (req, res, next) {
    console.log('POST request to /api/logout', req.body)
    res.json({id_token: null})
  }
)

// Get login api endpoint for testing only
app.get(
  '/api/login',
  function (req, res, next) {
    console.log('GET response to /api/login:', res)
    res.json(req.body)
  }
)

// API server
app.listen(3001)

/* ----- webpack-dev-server ----- */
new WebpackDevServer(
  webpack(config),
  config.devServer
).listen(
  3000,
  'localhost',
  function (err) {
    if (err) {
      console.log(err)
    }

    console.log('Listening at localhost:3000')
  }
)
