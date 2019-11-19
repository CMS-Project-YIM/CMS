const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      // unique: true,
    },
    email: {
      type: DataTypes.STRING,
      // unique: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      // unique: true,
    },
    uidUser:{
      type: DataTypes.STRING,
      // unique: true,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.PostData);
    User.belongsTo(models.Gender, { onDelete: 'CASCADE'});
    User.belongsTo(models.userTypes, { onDelete: 'CASCADE'});
  };

  return User;
};

export default user;