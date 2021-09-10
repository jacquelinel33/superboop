import express from 'express';
import User from '../models/userModel';
import data from '../server/data.js';

//allow multiple files to have routers
const userRouter = express.Router();

userRouter.get('/seed', async(req,res) => {
  const createdUser = await User.insertMany(data.users );
  res.send({ createdUsers });
})

export default userRouter;