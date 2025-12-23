const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;
const errorHandler = require('./middleware/error.middleware');

app.use(errorHandler);
