// models/associations.js
import User from './user.js';
import Order from './order.js';
import Product from './product.js';
import Category from './category.js';

// Definiere die Beziehungen
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.belongsToMany(Product, {
  through: 'OrderProduct',
  foreignKey: 'orderId',
  otherKey: 'productId',
});
Product.belongsToMany(Order, {
  through: 'OrderProduct',
  foreignKey: 'productId',
  otherKey: 'orderId',
});

Product.belongsToMany(Category, {
  through: 'ProductCategory',
  foreignKey: 'productId',
  otherKey: 'categoryId',
});
Category.belongsToMany(Product, {
  through: 'ProductCategory',
  foreignKey: 'categoryId',
  otherKey: 'productId',
});

// Exportiere Modelle, falls notwendig
export { User, Order, Product, Category };
