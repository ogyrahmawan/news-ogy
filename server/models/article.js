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
        as: "Writer",
        targetKey: "id",
        foreignKey: "WriterId" 
      })
      Article.belongsTo(models.User, {
        as: "Editor",
        targetKey:  "id",
        foreignKey: "EditorId" 
      })
    }
  };
  Article.init({
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    WriterId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    EditorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};