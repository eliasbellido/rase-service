//categorias.js

var mongoose = require('mongoose');

var productoEsquema = mongoose.Schema({
	producto:String,
	descripcion:String,
	precio:String,
	foto:String

});

var categoriaEsquema = mongoose.Schema({
	nombre:String,
	foto:String,
	productos:[productoEsquema]
});

module.exports = mongoose.model('categorias',categoriaEsquema);