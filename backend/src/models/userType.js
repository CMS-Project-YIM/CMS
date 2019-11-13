const usertypes = (sequelize, DataTypes) => {
    const userTypes = sequelize.define('usertypes', {
        types: {
            type: DataTypes.STRING,
            unique: true,
        },
    })

    userTypes.associate = (models) => {
        userTypes.hasMany(models.User);
    };

    return userTypes;
}

export default usertypes
