const express = require('express')
const path = require('path')
const app = express()
const { products } = require('./data');

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'))
})

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/query', (req, res) => {
    const userSearch = req.query.search || ""; 
    const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_VALUE; // Default to a very high value if "maxPrice" is not provided

    const filteredProducts = products.filter((product) => {
        const searchMatch = product.name.startsWith(userSearch);
        const priceMatch = parseFloat(product.price) <= maxPrice;
        return searchMatch && priceMatch;
    });

    const slicedProducts = filteredProducts.slice(0, 5);

    res.json(slicedProducts);
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(3000, () => {
    console.log('server listening on port 3000')
})