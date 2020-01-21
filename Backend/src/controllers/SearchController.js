const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports ={

    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        //console.log(request.query);
        //busca todos devs num raio de 10km e filtra por techs.

        const devs = await Dev.find({
            techs:{
             //se usuario tem as techsde
             $in: techsArray, //$in operador logico do mongo

            },
            location:{
                $near: { //encontra perto de uma location
                    $geometry:{
                        type: 'Point',
                        coordinates:{longitude, latitude},
                    },
                    $maxDistance:10000,
                },
            },

        });
        return response.json({ devs});
    }
}