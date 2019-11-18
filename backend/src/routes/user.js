import { Router } from 'express';
const { pool } = require('../config/config')

var router = Router();


router.get('/getUser/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  );
  return res.json(user);
});

router.get("/getUser", async (req, res, next) => {
    pool.query('SELECT "users".*, "usertypes".types FROM usertypes,users where "users"."usertypeId" = "usertypes"."id"', (error, data) => {
       if(error) {
           throw error
       }
       res.status(200).json(data.rows)
   })
});

router.post("/postUser", async(req, res, next) =>{
  console.log(req)
  const data = await req.context.models.User.create({
    uidUser: req.body.uidUser,
    username: req.body.username,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
  });
  return res.json(data)
});

export default router;





