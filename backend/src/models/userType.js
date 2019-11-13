const userType = (sequelize, DataTypes) => {
    const UserTypes = sequelize.define('userType', {
        types: {
            type: DataTypes.STRING,
            unique: true,
        },
    })

    UserTypes.associate = (models) => {
        UserTypes.hasMany(models.User, {foreignKey: 'userTypeId', as: 'users'});
    };

    return UserTypes;
}

export default userType