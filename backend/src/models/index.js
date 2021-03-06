import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  Gender : sequelize.import('./gender'),
  User: sequelize.import('./user'),
  userTypes: sequelize.import('./userType'),
  Catagory: sequelize.import('./catagory'),
  PostData: sequelize.import('./postdata')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
