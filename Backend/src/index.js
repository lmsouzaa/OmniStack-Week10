const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Lucyana:caju2626@cluster0-fw87s.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.use(express.json());
app.use(routes);
app.listen(2626);
