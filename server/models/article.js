'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, {
        as: "WriterId"
      })
      Article.belongsTo(models.User, {
        as: "EditorId"
      })
    }
  };
  Article.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    WriterId: DataTypes.INTEGER,
    EditorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};