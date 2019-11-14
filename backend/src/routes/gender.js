import {Router} from 'express';

const router = Router();

router.get('/getGender',async (req, res) => {
   const gender = await req.context.models.Gender.findAll();
   return res.status(200).json(gender);
});
export default router;