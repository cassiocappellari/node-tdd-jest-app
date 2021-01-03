const routes = require('express').Router()
const authMiddleware = require('../src/app/middleware/auth')
const UserController = require('../src/app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.post('/user', UserController.post)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', SessionController.show)

module.exports = routes