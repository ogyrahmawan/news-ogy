const ArticleController = require('../controllers/articleController')

const route = require('express').Router()

route.get('/', ArticleController.getAllArticle)
route.get('/:id', ArticleController.getArticleById)
route.post('/', ArticleController.createArticle)
route.put('/:id', ArticleController.editArticle)
route.delete('/:id', ArticleController.deleteArticle)

module.exports = route