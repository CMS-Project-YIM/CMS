const catagory = (sequelize, DataTypes) => {
    const Catagory = sequelize.define('catagory', {
        catagorytype: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Catagory.associate = (models) => {
        Catagory.hasMany(models.PostData);
    }

    return Catagory;
}

export default catagory;