module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("orders", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frame_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images_urls: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Order;
};
