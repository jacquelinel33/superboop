import data from './data.js';
import express from 'express';
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/api/products', (req,res) => {
  res.send(data.products);
})