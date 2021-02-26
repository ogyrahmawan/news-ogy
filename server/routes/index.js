const route = require('express').Router()
const UserController = require('../controllers/userControllers')
const articleRoute = require('./articlesRoute')
const authentication = require('../middleware/authentication')

route.post('/login', UserController.login)
route.post('/register', UserController.register)
route.get('/editors',UserController.getEditorData)
route.use(authentication)
route.use('/articles',articleRoute)
module.exports = route