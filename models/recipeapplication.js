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
      validate:{
        minLengthForTitle(value){
          if(value.length <3){
            throw new Error("length of title cannot be less than 3 char.");
          }
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull :false,
      validate:{
        maxLengthDescription(value){ //max char of 500
        if(value.length >500){
          throw new Error("too much words. 500 char max");
        }
      },
      },
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        maxLengthIngredients(value){
          if(value.length >1000){
            throw new Error("too much chars. 1000 char max");
          }
        },
      },
    },
    instructions:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
      maxLengthInstructions(value){
        if(value.length > 5000){
            throw new Error("too much chars. 5000 char max");
        }
      },
    },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull : false,
    },
    updatedAt:{ 
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'RecipeApplication',
    tableName: 'recipe_applications',
    underscored: true,
    timestamps:false,
  });
  return RecipeApplication;
};