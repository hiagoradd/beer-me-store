require = require('esm')(module);

const products = require('./database/products').default;
const stockPrice = require('./database/stock-price').default;

const express = require('express');
const cors = require('cors');
const app = express();

const port = 4000;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(products);
})

app.get('/api/stock-price/:sku', (req, res) => {
  const sku = req.params.sku; 
  res.send(stockPrice[sku]);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});