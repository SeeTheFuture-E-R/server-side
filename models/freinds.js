const { sequelize, DataTypes } = require("./sequelize");

    const Freind = sequelize.define(
        "freinds",
        {
            freindId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            picturePath: {
                type: DataTypes.STRING,
            },
            expireDate: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        }
    );

    module.exports = Freind;
