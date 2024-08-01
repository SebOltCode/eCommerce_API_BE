import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Category from '../category.js';
import Order from './order.js';


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

    }

});

Product.belongsToMany(Category, { through: 'ProductCategory', foreignKey: 'productId', otherKey: 'categoryId' });
Product.belongsToMany(Order, { through: 'OrderProduct', foreignKey: 'productId', otherKey: 'OrderId' });


Product.sync();

export default Product;
