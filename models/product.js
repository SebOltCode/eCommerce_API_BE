import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';


const User = sequelize.define('User', {

    id: {
        type: DataTypes.INTEGER,
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

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

User.sync();

export default Product;
