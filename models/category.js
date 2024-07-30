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

Category.belongsToMany(Product, { through: 'ProductCategory', foreignKey: 'categoryId', otherKey: 'productId' });


await Category.sync();
export default Category;