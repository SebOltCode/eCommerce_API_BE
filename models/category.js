import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Category.sync();

export default Category;