'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serieorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Serie, { 
        foreignKey: 'serieId' 
      }); 
      this.belongsTo(models.User, { 
        foreignKey: 'userId' 
      });
    }
  }
  serieorder.init({     
    date: DataTypes.STRING,
    serieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rented: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Serieorder',
    timestamps: false
  });
  return serieorder;
};