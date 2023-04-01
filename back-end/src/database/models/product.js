module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'products',
  });

  return Product;
}