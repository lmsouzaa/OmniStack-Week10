const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('./devs',  DevController.index); //index - mostrar lista; show- mostrar um único dev; store- criar; update- alterar; destroy - deletar. 

//post == Cadastrar.
routes.post('/devs', DevController.store);
routes.get('/search',SearchController.index);

module.exports = routes;


