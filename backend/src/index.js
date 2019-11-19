import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, {sequelize} from './models';
import routes from './routes';

// var express = require('express');
const app = express();

// Application-Level Middleware

app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
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
        createPostData();
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
            username: 'Yongyut Srisuban',
            email: 'Yongyut120@gmail.com',
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
            username: 'Narawich Saphimarn',
            email: 'NarawichSaphimarn@gmail.com',
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

const createPostData = async () => {
    await models.PostData.create(
        {
            title: "TestTitle",
            content: "TestContent",
            description : "TestDescription",
            catagoryId: 1,
            userId: 1,
        },
        {
            include: [models.Catagory],
        },
        {
            include: [models.User],
        },
    );
    await models.PostData.create(
        {
            title: "TestTitle2",
            content: "TestContent2",
            description : "TestDescription2",
            catagoryId: 1,
            userId: 1,
        },
        {
            include: [models.Catagory],
        },
        {
            include: [models.User],
        },
    );
    await models.PostData.create(
        {
            title: "TestTitle3",
            content: "TestContent3",
            description : "TestDescription3",
            catagoryId: 1,
            userId: 2,
        },
        {
            include: [models.Catagory],
        },
        {
            include: [models.User],
        },
    );
};