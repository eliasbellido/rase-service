//usuarios.js

var mongoose = require('mongoose');

//creando el esquema para la coleccion de usuarios
var usuarioEsquema = mongoose.Schema({
	usuario:{type:String, unique:true},
	clave:String
});


module.exports = mongoose.model('usuarios',usuarioEsquema);