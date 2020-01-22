//Controller- responsavel por receber a  requisição e ativar oq tem q fazer e devolver uma resposta
const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request,response){
        const devs = await Dev.find();

            return response.json(devs);
    },

    async store (request, response) {
        //buscar dados do dev que quer cadastrar:
        const { github_username,techs,latitude, longitude } = request.body; // corpo da requisição, onde usuario vai informar dado.
       
         let dev = await Dev.findOne ({ github_username });
        if (!dev){

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      
        //ESSA PARTE MOSTRA A DESESTRUTURAÇÃO PARA BUSCAR APENAS OQ EU QUERO DO USUARIO:
        const {name = login, avatar_url, bio} =apiResponse.data;
        
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates:[longitude,latitude],
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
        }
    
        
        
        return response.json(dev);
    }
};
