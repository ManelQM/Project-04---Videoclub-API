'use strict';
const { 
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'filmId'
      });
    }
  }
  Film.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    toprated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Film',
    timestamps: false
  });
  return Film;
};