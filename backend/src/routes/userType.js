import { Router } from 'express';

const router = Router();

router.get('/getTypes', async (req, res) => {
    const type = await req.context.models.userTypes.findAll();
    return res.status(200).json(type);
})

export default router;