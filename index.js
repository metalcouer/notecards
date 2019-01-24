const express = require('express')
const app = express()
const port = 3000

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const db = require('knex')(knexConfig);



app.get('/', (req, res, next) => {
    db('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Porty on port ${port}!`))