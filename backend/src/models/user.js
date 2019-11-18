const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      unique: true,
    },
    uidUser:{
      type: DataTypes.STRING,
      unique: true,
    },
  //   username: {
  //     type: DataTypes.STRING,
  //     unique: true,
  //   },
  //   passWord: {
  //     type: DataTypes.STRING,
  //     unique: true,
  //   },
  //   name: {
  //     type: DataTypes.STRING,
  //   },
  //   email: {
  //     type: DataTypes.STRING,
  //     unique: true,
  //   },
  });

  User.associate = (models) => {
    User.belongsTo(models.Gender, { onDelete: 'CASCADE'});
    User.belongsTo(models.userTypes, { onDelete: 'CASCADE'});
  };

  return User;
};

export default user;
