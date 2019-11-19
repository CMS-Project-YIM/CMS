const postdata = (sequelize, DataTypes) => {
    const postData = sequelize.define('postdata', {
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    });
    postData.associate = (models) => {
        postData.belongsTo(models.Catagory, { onDelete: 'CASCADE'});
        postData.belongsTo(models.User,{onDelete: 'CASCADE'});
    };

    return postData;
};

export default postdata;