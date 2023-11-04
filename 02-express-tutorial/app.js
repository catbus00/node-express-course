const express = require('express')
const app = express()
const peopleRouter = require('./routes/people');

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', peopleRouter)
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(3000, () => {
    console.log('server listening on port 3000')
})