//mongodb+srv://name:<password>@cluster0.b1hv8.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const questionRoutes = require('./routes/question');
//const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://<name>:<password>@cluster0.b1hv8.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas !')
    })
    .catch((error) => {
        console.log('Unable to connect to the database');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/v1/question', questionRoutes);
//app.use('/api/v1/auth', userRoutes);

module.exports = app;
