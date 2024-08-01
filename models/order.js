import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Product from './Product.js';
import User from './user.js';

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
      model: 'User',
      key: 'id',
    },
  },

<<<<<<< HEAD
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },

 

    total: {
        type: DataTypes.FLOAT,
        allowNull: true,

    }
=======
  total: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
>>>>>>> a47f4991cdc7f261bbf8b072840e2d9dfb182be6
});

(async () => {
  await import('./user.js');
  // Beziehung eine Order gehört zu einem User
  Order.belongsTo(User, { foreignKey: 'userId' });
  await Order.sync();
})();

<<<<<<< HEAD
// Beziehung eine Order hat viele Produkte
Order.belongsTo(User, { foreignKey: 'userId' });
// Order.belongsToMany(Product, { through: 'OrderProduct', foreignKey: 'orderId', otherKey: 'productId' });

// Order.sync();
=======
(async () => {
  await import('./product.js');
  // Beziehung eine Order hat viele Produkte
  Order.belongsToMany(Product, {
    through: 'OrderProduct',
    foreignKey: 'orderId',
    otherKey: 'productId',
  });
  await Order.sync();
})();

// Synchronisiere alle Modelle mit der Datenbank
//sequelize.sync();
>>>>>>> a47f4991cdc7f261bbf8b072840e2d9dfb182be6

export default Order;
