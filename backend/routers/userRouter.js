import express from 'express';
import User from '../models/userModel.js';
import data from '../server/data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../server/utils.js';

//allows routes in this file seperate from server/index.js
const userRouter = express.Router();


userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({
    createdUser
  });
}));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({
    email: req.body.email
  });
  console.log("user", user)
  if (user) {
    console.log("inside user if")
    if (bcrypt.compareSync(req.body.password, user.password)) {
      console.log("generate token", generateToken(user))
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({
    message: 'Invalid login'
  });
}));

export default userRouter;