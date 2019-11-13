import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, {sequelize} from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('rwieruch'),
    };
    next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// Start

const eraseDatabaseOnSync = true;

sequelize.sync({force: eraseDatabaseOnSync}).then(async () => {
    if (eraseDatabaseOnSync) {
        createUserType();
        createUsersWithMessages();

    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});

const createUserType = async () => {
    await models.UserTypes.create(
        {
            types: 'admin',
        },
    );

    await models.UserTypes.create(
        {
            types: 'editor',
        },
    );

    await models.UserTypes.create(
        {
            types: 'subscription',
        },
    );
};

//issue-43
const createUsersWithMessages = async () => {
    await models.User.create(
        {
            username: 'NS',
            passWord: 'NS290821',
            name: 'Narawich Saphimarn',
            email: 'NarawichSaphimarn@gmail.com',
            userTypeId: 1,
        },
        {
            include: [models.UserTypes],
        },
    );

    await models.User.create(
        {
            username: 'NSm',
            passWord: 'NS290821m',
            name: 'Narawich Saphimarnm',
            email: 'NarawichSaphimarn@gmail.comm',
            userTypeId: 2,
        },
        {
            include: [models.UserTypes],
        },
    );
};
