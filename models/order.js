import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import User from './user.js';
import Product from './product.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Stellen Sie sicher, dass dies der Name der Tabelle ist
      key: 'id',
    },
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// Definiere Beziehungen
Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsToMany(Product, {
  through: 'OrderProduct',
  foreignKey: 'orderId',
  otherKey: 'productId',
});

// Synchronisiere die Order-Tabelle
(async () => {
  try {
    // Synchronisiere nur die Order-Tabelle. `sequelize.sync()` wird normalerweise global verwendet.
    await Order.sync();
    console.log('Order table synchronized');
  } catch (error) {
    console.error('Error synchronizing the Order table:', error);
  }
})();

export default Order;
