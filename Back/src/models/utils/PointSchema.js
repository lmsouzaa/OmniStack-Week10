const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        enum:['Point'],
        required: true,
    },
    coordinates:{
        type: [Number], //armazena latitude e longitude. no mongo primeiro é longitude
        required: true,
        },
});

module.exports = PointSchema;