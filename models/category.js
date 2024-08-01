import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Product from './product.js';

const Category = sequelize.define('Category', {
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
});

// Definiere die Beziehung erst nach der Definition beider Modelle
(async () => {
  await import('./product.js');
  Category.belongsToMany(Product, {
    through: 'ProductCategory',
    foreignKey: 'categoryId',
    otherKey: 'productId',
  });
  await Category.sync();
})();

// Synchronisiere alle Modelle mit der Datenbank
//sequelize.sync();

export default Category;
