import express from 'express';
import mongoose from 'mongoose';
import userRouter from '../routers/userRouter.js';
import productRouter from '../routers/productRouter.js';

const app = express()
const port = 8000;

//connect to db
mongoose.connect('mongodb://localhost/superboop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// app.get('/api/products/:id', (req,res) => {
//   console.log("params", req)
//   const product = data.products.find( product => product._id === req.params.id);
//   if (product) { 
//     res.send(product);
//  } else {
//    res.status(404).send({ message: 'Product not found' });
//  }
// });

// app.get('/api/products', (req,res) => {
//   res.send(data.products);
// })

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

app.get('/', (req,res) => {
  res.send('Server is ready');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

