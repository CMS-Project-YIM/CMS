import { Router } from 'express';
const { pool } = require('../config/config');

var router = Router();

router.post('/postCatagory', async (req, res) => {
    console.log(req)
    const catagory = await req.context.models.Catagory.create({
        catagorytype: req.body.catagorytype,
    });
    return res.status(200).json(catagory);
})

router.get('/getCatagory', async (req, res) => {
    console.log(req)
    const catagory = await req.context.models.Catagory.findAll();
    return res.status(200).json(catagory);
})

export default router;