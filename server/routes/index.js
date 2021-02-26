const route = require('express').Router()
const UserController = require('../controllers/userControllers')
const articleRoute = require('./articlesRoute')

route.post('/login', UserController.login)
route.post('/register', UserController.register)
route.use('/articles',articleRoute)
module.exports = route