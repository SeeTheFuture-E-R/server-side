
const { sequelize, DataTypes } = require("./sequelize");
    const User = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            handicap_precentage: {
                type: DataTypes.INTEGER,
            },
            points: {
                type: DataTypes.FLOAT,
            },
            phone: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            birth_year: {
                type: DataTypes.DATE,
            },
            family_status: {
                type: DataTypes.STRING,
            },
            num_of_children: {
                type: DataTypes.INTEGER,
            },
            identity_card: {
                type: DataTypes.STRING,
                
            },
            handicap_card: {
                type: DataTypes.STRING,
                
            },
            blind_card: {
                type: DataTypes.STRING,
                
            },
        },
        {
            timestamps: false,
        }
    );
module.exports= User;

