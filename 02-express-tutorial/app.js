const express = require('express')
const app = express()
const peopleRouter = require('./routes/people');
const cookieRouter = require('./routes/cookie');
const cookieParser = require('cookie-parser');

app.use(express.static('./methods-public'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// people section

app.use('/api/people', peopleRouter)

// cookie section

app.use(cookieParser());
app.get('/test', cookieRouter)
app.post('/logon', cookieRouter)
app.delete('/logoff', cookieRouter)

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(3000, () => {
    console.log('server listening on port 3000')
})