module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    num: { type: DataTypes.INTEGER, allowNull: false },
  });
  return user;
};
