require('dotenv').config();
require('express-async-errors');

const appRouter = require('./routes/routes');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', appRouter);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
