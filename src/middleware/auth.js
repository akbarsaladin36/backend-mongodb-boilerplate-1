const jwt = require('jsonwebtoken')
const helper = require('../helper/helper')

const AuthMiddleware = {
    userAuthentication(req, res, next) {
        let token = req.headers.authorization
        if (token) {
          token = token.split(' ')[1]
          // validating token process
          jwt.verify(token, process.env.JWT_SECRETKEY, (error, result) => {
            if (
              (error && error.name === 'JsonWebTokenError') ||
              (error && error.name === 'TokenExpiredError')
            ) {
              return helper.getStatusJson(res, 403, error.message, null)
            } else {
              req.decodeToken = result
              next()
            }
          })
        } else {
          return helper.getStatusJson(res, 403, 'Please login first to website as user!', null)
        }
    }
}

module.exports = AuthMiddleware