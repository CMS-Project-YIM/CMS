
const gender =(sequelize, DataTypes) => {
    const Gender = sequelize.define('gender',{
        gender:{
            type: DataTypes.STRING,
            unique: true,
        }
    });
    Gender.associate = (module) => {
        Gender.hasMany(module.User);
    };
    return Gender;

};
export  default gender