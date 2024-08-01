import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Category from '../category.js';
import Order from './order.js';

// Synchronisiere alle Modelle mit der Datenbank
//sequelize.sync();

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

(async () => {
  await import('./category.js');

  Product.belongsToMany(Category, {
    through: 'ProductCategory',
    foreignKey: 'productId',
    otherKey: 'categoryId',
  });
  await Product.sync();
})();

(async () => {
  await import('./order.js');
  Product.belongsToMany(Order, {
    through: 'OrderProduct',
    foreignKey: 'productId',
    otherKey: 'OrderId',
  });
  await Product.sync();
})();

// Synchronisiere alle Modelle mit der Datenbank

export default Product;
