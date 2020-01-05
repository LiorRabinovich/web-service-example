const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger Import
const swaggerFile = require('../docs/swagger.json');

// Middlewares Import
const cors = require('./middlewares/cors');
const notFoundError = require('./middlewares/notFoundError');
const handlerErrors = require('./middlewares/handlerErrors');

// Routes Import
const productsRoutes = require('./routes/products.js');

// Middlewares - Before routes
app.use(morgan('dev'));
app.use(express.json());
app.use(cors);

// Routes
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    explorer: true,
  })
);
app.use('/products', productsRoutes);

// Middlewares - After routes
app.use(notFoundError);
app.use(handlerErrors);

module.exports = app;
