import { Router } from 'express';
const { pool } = require('../config/config');

var router = Router();

router.get('/getPost', async (req, res) => {
    const data = await req.context.models.PostData.findAll();
    return res.status(200).json(data);
});

router.post('/postPost', async (req, res) => {
    console.log(req)
    const data = await req.context.models.PostData.create({
            title: req.body.title,
            content: req.body.content,
            description: req.body.description,
            catagoryId: req.body.catagoryId,
    });
    return res.status(200).json(data);
});

export default router;