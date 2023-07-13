'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeApplication.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecipeApplication',
    tableName: 'recipe_applications',
    underscored: true
  });
  return RecipeApplication;
};