 module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(10)
      },
      name: {
        type: DataTypes.STRING(200)
      },
      email: {
        type: DataTypes.STRING(200)
      },
      password: {
        type: DataTypes.STRING(200)
      },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'users'
  });
    return User;
  };
  