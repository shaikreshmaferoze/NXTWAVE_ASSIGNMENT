const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const addressRoutes = require('./routes/address');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the public directory

app.use('/api', addressRoutes);

// Sync database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Database sync error: ', err));

module.exports = app;
