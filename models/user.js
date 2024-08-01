import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Order from './Order.js';


const User = sequelize.define('User', {

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

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false

    }
});

User.hasMany(Order, { foreignKey: 'userId' });

// User.hasMany(Order, { foreignKey: 'userId' });


// User.sync();

export default User;
