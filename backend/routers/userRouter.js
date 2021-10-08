import express from 'express';
import User from '../models/userModel.js';
import data from '../server/data.js';
import expressAsyncHandler from 'express-async-handler';

//allows routes in this file seperate from server/index.js
const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler( async(req, res) => {
  const createdUser = await User.insertMany(data.users);
  res.send({ createdUser });
}));

export default userRouter;