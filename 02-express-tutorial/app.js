const express = require('express')
const path = require('path')
const app = express()
const { products, people } = require('./data');

const logger = function (req, res, next) {
    next();
  };

app.use(express.static('./methods-public'))

app.get('/', logger, (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'))
})

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/people', (req, res) => {
    res.json(people);
});

app.get('/api/people', (req, res) => {
    res.json(people);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/v1/people', (req, res) => {
    if (req.body.name) {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    } else {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
})

app.post('/api/people', (req, res) => {
    if (req.body.name) {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    } else {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
});

app.post('/login', (req, res) => {
    if (req.body.name) {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    } else {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
});
app.get('/api/v1/query', (req, res) => {
    const userSearch = req.query.search || ""; 
    const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_VALUE; 
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