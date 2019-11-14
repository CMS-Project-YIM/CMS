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
        //me: await models.User.findByLogin('rwieruch'),
    };
    next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/catagory', routes.catagory);
app.use('/types', routes.userTypes);
app.use('/post', routes.postData);
app.use('/Gender',routes.gender);

// Start

const eraseDatabaseOnSync = true;

sequelize.sync({force: eraseDatabaseOnSync}).then(async () => {
    if (eraseDatabaseOnSync) {
        createGender();
        createUserType();
        createUsersWithMessages();
        createCatagory();

    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});
const createGender = async () => {
    await models.Gender.create(
        {
            gender: 'Male',
        }
    ),
        await models.Gender.create(
            {
                gender: 'Female',
            }
        )
};

const createUserType = async () => {
    await models.userTypes.create(
        {
            types: 'admin',
        },
    );

    await models.userTypes.create(
        {
            types: 'editor',
        },
    );

    await models.userTypes.create(
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
            usertypeId: 1,
            genderId: 1,
        },
        {
            include: [models.userTypes],
        },
        {
            include: [models.Gender],
        },
    );

    await models.User.create(
        {
            username: 'NSm',
            passWord: 'NS290821m',
            name: 'Narawich Saphimarnm',
            email: 'NarawichSaphimarn@gmail.comm',
            usertypeId: 2,
            genderId: 1,
        },
        {
            include: [models.userTypes],
        },
        {
            include: [models.Gender],
        },
    );

    await models.User.create(
        {
            username: 'NSmm',
            passWord: 'NS290821mm',
            name: 'Narawich Saphimarnmm',
            email: 'NarawichSaphimarn@gmail.commm',
            usertypeId: 3,
            genderId: 2,
        },
        {
            include: [models.userTypes],
        },
        {
            include: [models.Gender],
        },
    );

    await models.User.create(
        {
            username: 'NSmmm',
            passWord: 'NS290821mmm',
            name: 'Narawich Saphimarnmmm',
            email: 'NarawichSaphimarn@gmail.commmm',
            usertypeId: 1,
            genderId: 1,
        },
        {
            include: [models.userTypes],
        },
        {
            include: [models.Gender],
        },
    );
};

const createCatagory = async () => {
    await models.Catagory.create(
        {
            catagorytype: "เรื่องทั่วไป",
        }
    );

    await models.Catagory.create(
        {
            catagorytype: "เรื่องกีฬา",
        }
    );

    await models.Catagory.create(
        {
            catagorytype: "เรื่องการศึกษา",
        }
    );

    await models.Catagory.create(
        {
            catagorytype: "เรื่องความรัก",
        }
    );
};
