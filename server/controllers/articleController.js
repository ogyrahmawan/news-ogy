const {Article, User} = require('../models/index')

class ArticleController {
  static async getAllArticle (req,res,next) {
    try {
      let {role, email, id} = req.userLoggedIn
      if(role === 'writer') {
        let data = await Article.findAll({
          where: {
            WriterId: id
          },
          include: [{
            model: User,
            as: 'Writer'
          }, {
            model: User,
            as: 'Editor'
          }]
        })
        res.status(200).json(data)
      } else if(role === 'editor') {
        let data = await Article.findAll({
          where: {
            EditorId: id
          },
          include: [{
            model: User,
            as: 'Writer'
          }, {
            model: User,
            as: 'Editor'
          }]
        })
        res.status(200).json(data)
      }
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  static async getArticleById (req, res, next) {
    try {
      console.log('test')
      let {id} = req.params
      let data = await Article.findOne({
        where: {
          id: +id
        },
        include: [{
          model: User,
          as: 'Writer'
        }, {
          model: User,
          as: 'Editor'
        }]
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
        WriterId: +req.body.writerId,
        EditorId: +req.body.editorId
      }
      console.log(obj)
      let data = await Article.create(obj)
      res.status(201).json(data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  static async editArticle (req, res, next) {
    try {
      let {id} = req.params
      let obj = {
        title: req.body.title,
        body: req.body.body,
        WriterId: req.body.writerId,
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