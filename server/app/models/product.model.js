module.exports = (connex, Sequelize) => {
  const Product = connex.define("product", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.REAL,
    },
    image: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};
