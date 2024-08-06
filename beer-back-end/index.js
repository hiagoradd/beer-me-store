require = require('esm')(module);

const products = require('./database/products').default;
const stockPrice = require('./database/stock-price').default;

const express = require('express');
const cors = require('cors');
const app = express();

const port = 4000;

app.use(cors());

app.get('/api/products', (req, res) => {
  const productsToSend = products.map(product => {
    const newData = product
    product.skus.forEach(sku => {
      newData.minPrice = stockPrice[sku.code].price;
    })
    return newData;
  });
  res.send(productsToSend);
})

app.get('/api/products/:id', (req, res) => {
  const item = products.find(it => it.id === parseInt(req.params.id));
  res.send(item);
})

app.get('/api/stock-price/:sku', (req, res) => {
  const sku = req.params.sku; 
  res.send(stockPrice[sku]);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});