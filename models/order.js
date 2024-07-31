import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Product from './product.js';
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
            model: User,
            key: 'id'
        }
    },

 

    total: {
        type: DataTypes.FLOAT,
        allowNull: true,

    }
});

// Beziehung eine Order gehört zu einem User
Order.belongsTo(User, { foreignKey: 'userId' });

// Beziehung eine Order hat viele Produkte
Order.belongsToMany(Product, { through: 'OrderProduct', foreignKey: 'orderId', otherKey: 'productId' });

Order.sync();

export default Order;