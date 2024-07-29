import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';


const Order = sequelize.define('Order', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    // // products: { products: Array of objects containing productId (Integer) and quantity (Integer)
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },

    total: {
        type: DataTypes.FLOAT,
        allowNull: true,

    }
});

User.sync();

export default Order;