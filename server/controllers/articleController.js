const {Article, User} = require('../models/index')

class ArticleController {
  static async getAllArticle (req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }
  static async getArticleById (req, res, next) {
    try {
      let {id} = req.params
      let data = await Article.findOne({
        where: {
          id
        }
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async createArticle (req, res, next) {
    try {
      let obj = {
        title: req.body.title,
        body: req.body.body,
        WriterId: req.body.writerId,
        EditorId: req.body.editorId
      }
      let data = await Article.create(obj)
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async editArticle (req, res, next) {
    try {
      let {id} = req.params
      let obj = {
        title: req.body.title,
        body: req.body.body
      }
      let data = await Article.update(obj, {
        where: {
          id
        }
      })
      res.status(200).json(data[1])
    } catch (error) {
      next(error)
    }
  }
  static async editEditorOfArticle (req, res, next) {
    try {
      let {id} = req.params
      let obj = {
        EditorId: req.body.editorId
      }
      let data = await Article.update(obj, {
        where: {
          id
        }
      })
      res.status(200).json(data[1])
    } catch (error) {
      next(error)
    }
  }
  static async deleteArticle (req, res, next) {
    try {
      let {id} = req.params
      let data = await Article.destroy({
        where: {
          id
        }
      })
      if(data === 0) {
        throw({
          status: 400,
          message: 'data not found'
        })
      } else {
        res.status(200).json({message: 'delete success'})
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ArticleController