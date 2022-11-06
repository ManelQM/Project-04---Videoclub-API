'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Film, { 
        foreignKey: 'filmId' 
      }); 
      this.belongsTo(models.User, { 
        foreignKey: 'userId' 
      });
    }
  }
  Order.init({
    date: DataTypes.STRING,
    filmId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rented: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false
  });
  return Order;
};