const { sequelize, DataTypes } = require("./sequelize");

    const Product = sequelize.define(
        "products",
        {
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
            }
        },
        {
            timestamps: false,
        }
    );
    module.exports= Product;