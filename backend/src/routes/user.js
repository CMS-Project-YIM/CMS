import { Router } from 'express';
const { pool } = require('../config/config')

const router = Router();

// router.get('/', async (req, res) => {
//   const users = await req.context.models.User.findAll();
//   return res.send(users);
// });

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  );
  return res.json(user);
});

router.get('/', async (req, res) => {
   pool.query('SELECT "users".*, "usertypes".types FROM usertypes,users where "users"."usertypeId" = "usertypes"."id"', (error, data) => {
       if(error) {
           throw error
       }
       res.status(200).json(data.rows)
   })
});

// router.get('/', async (req, res) => {
//     pool.query('select * from public.usertypes', (error, data2) => {
//         if(error) {
//             throw error
//         }
//         res.status(200).json(data2)
//     })
// });

export default router;
