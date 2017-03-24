const express = require('express');
let app = express();
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const cardRoute = require('./routes/cards.js')

const CONFIG = require('./config/config.json');
const db = require('./models');
const { Cards } = db;

app.use('/cards', cardRoute);


app.listen(PORT, () => {
  console.log('listening on port' + " " + PORT)
  db.sequelize.sync();
})