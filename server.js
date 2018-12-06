//server.js
//referenciando las librerias

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var config = require('./config');
var usuarioController = require('./controllers/usuarios');
var categoriaController = require('./controllers/categoriasController');
var middleware = require('./middleware');

var port = process.env.PORT || 3000;

//conectando a la BD
mongoose.connect(config.cadenaConexion,function(err){

	if(err){
		console.log('error al conectar a la BD');
	}else{
		console.log('conexion correcta');
	}
});




//configurando la aplicación con express
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//configurando el ruteo
var router = express.Router();
router.route('/usuarios')
.get(usuarioController.Listar)
.post(usuarioController.Agregar);

router.route('/Autenticar')
.post(usuarioController.Autenticar);

router.route('/categorias')
.get(middleware.verificaToken,categoriaController.Listar)
.post(categoriaController.CargaMasiva);

router.route('/filtro')
.post(categoriaController.Filtro);

app.use('/api',router);
app.use(express.static('public'));
//app.listen(port);

app.listen(port, function(){
	console.log('Express server listening on port ' + port);
})







