const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//informar qual o formato que o dev vai ter na base de dados. exemplo: vai ter nome, email, descrição?

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // vetor pois vai ser mais de uma tech.
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);