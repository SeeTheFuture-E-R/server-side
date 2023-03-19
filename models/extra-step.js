
const { sequelize } = require("./sequelize");

const applyExtraSetup = () => {
const { users, books,freinds,products,purchase_details,purchases, experiences } = sequelize.models;

purchases.belongsTo(users, { foreignKey: "id", as: "user" });
freinds.belongsTo(users, { foreignKey: "id", as: "user" });
experiences.belongsTo(products, { foreignKey: "id", as: "product" });
experiences.belongsTo(users, { foreignKey: "id", as: "user" });
purchase_details.belongsTo(products, { foreignKey: "id", as: "product" });
purchase_details.belongsTo(purchases, { foreignKey: "id", as: "purchase" });
books.belongsTo(users, { foreignKey: "id", as: "user" });
users.hasMany(freinds, { foreignKey: "id", as: "freinds" });
users.hasMany(purchases, { foreignKey: "id", as: "purchases" });
users.hasMany(experiences, { foreignKey: "id", as: "experiences" });
users.hasMany(books, { foreignKey: "id", as: "books" });
purchases.hasMany(purchase_details, { foreignKey: "id", as: "purchases_details" });
products.hasMany(purchase_details, { foreignKey: "id", as: "purchases_details" });
products.hasMany(experiences, { foreignKey: "id", as: "experiences" });
};
module.exports = { applyExtraSetup };
