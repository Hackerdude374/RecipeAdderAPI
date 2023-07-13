'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeApplication extends Model {}

  RecipeApplication.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull :false,
    },
    ingredients: {type: DataTypes.STRING,
      allowNull: false,
    },
    instructions:{ type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull : false,
    },
    updatedAt:{ type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'RecipeApplication',
    tableName: 'recipe_applications',
    underscored: true
  });
  return RecipeApplication;
};