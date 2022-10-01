const express = require('express');
const routes = require('./routes');
const Category = require('./models/Category.js');
const Product = require('./models/Product.js');
const ProductTag = require('./models/ProductTag.js');
const Tag = require('./models/Tag.js');
const sequelize = require('sequelize');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
