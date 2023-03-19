const { sequelize, DataTypes } = require("./sequelize");

    const Purchase_details = sequelize.define(
        "purchase details",
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            }, 
            productId: {
                type: DataTypes.INTEGER,
            },
            count: {
                type: DataTypes.INTEGER,
            },
            price_per_unit: {
                type: DataTypes.FLOAT,
            },
            discount_precentage: {
                type: DataTypes.FLOAT,
            },
            purchaseId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
module.exports= Purchase_details;

