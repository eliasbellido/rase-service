//categoriasController.js

var categoria = require('../models/categorias');


exports.Filtro = function(req,res){

	var mId = req.body._id;

	categoria.findOne({_id: mId},function(err,myCat){

		if(err){
			res.status(500).json({mensaje:'error con el servicio de autenticacion'});
		}else{

			if(!myCat){
				res.status(401).json({mensaje:'Credenciales incorrectas'});
			}else{

				
							res.status(200).json(myCat);
				
			}
		}
	});
};



exports.Listar = function(req,res){
	categoria.find(function(err,data){

		if(err){
			res.status(500).json({mensaje:'Error al lista las categorias'});
		}else{
			res.status(200).json(data);
		}
	});
};

exports.CargaMasiva = function(){

	var categoria1 = new categoria();
	categoria1.nombre = "Desayunos";
	categoria1.foto = "http://localhost:3000/images/desayuno.jpg";

	categoria1.productos.push({
		producto:'Wafles con tocino',
		descripcion:'Excelente wafle para empezar la mañana y con el estomago lleno!',
		precio:'15',
		foto:'http://localhost:3000/images/desayuno1.jpg'
	});
	categoria1.productos.push({
		producto:'Sandiwch vegano',
		descripcion:'Deliciosos Sandiwch con relleno de pepinillos, aceitunas, tomate y demás especias acompañado con frutas',
		precio:'12',
		foto:'http://localhost:3000/images/desayuno2.jpg'
	});


	var categoria2 = new categoria();
	categoria2.nombre = "Almuerzos";
	categoria2.foto = "http://localhost:3000/images/almuerzo.jpg";

	categoria2.productos.push({
		producto:'Saltado de camarones',
		descripcion:'Lo mejor de la comida Coreana acompañado de verduras y salsas especiales',
		precio:'25',
		foto:'http://localhost:3000/images/almuerzo1.jpg'
	});
	categoria2.productos.push({
		producto:'Kimchi original',
		descripcion:'Estofado de kimchi acompañado de un aroma y sazon picante hace el plato bandera de Corea',
		precio:'55',
		foto:'http://localhost:3000/images/almuerzo2.jpg'
	});
	categoria2.productos.push({
		producto:'Kimchi con tofu',
		descripcion:'Kimchi acompañado con tofu y trozos de cerdo y huevo',
		precio:'25',
		foto:'http://localhost:3000/images/almuerzo3.jpg'
	});

	var categoria3 = new categoria();
	categoria3.nombre = "Postres";
	categoria3.foto = "http://localhost:3000/images/postre.jpg";

	categoria3.productos.push({
		producto:'Tarta de uva',
		descripcion:'Una sola porción te hará tocar el cielo',
		precio:'15',
		foto:'http://localhost:3000/images/postre1.jpg'
	});
	categoria3.productos.push({
		producto:'Helado con crispis de chocolate',
		descripcion:'Un delicioso helado artesanal acompañado de cerezas',
		precio:'13',
		foto:'http://localhost:3000/images/postre2.jpg'
	});
	categoria3.productos.push({
		producto:'Trufas de vainilla y chocalte',
		descripcion:'Trufas bañadas en vainilla y chocolate con una gigantesca fresa',
		precio:'14',
		foto:'http://localhost:3000/images/postre3.jpg'
	});

	var categoria4 = new categoria();
	categoria4.nombre = "Bebidas";
	categoria4.foto = "http://localhost:3000/images/drink.jpg";

	categoria4.productos.push({
		producto:'Cocktail afrodisiaco',
		descripcion:'Bebida altamente en grado exotico',
		precio:'35',
		foto:'http://localhost:3000/images/drink1.jpg'
	});
	categoria4.productos.push({
		producto:'Pisco Sour',
		descripcion:'Bebida bandera peruana elaborada con los mejores insumos de la costa peruana',
		precio:'45',
		foto:'http://localhost:3000/images/drink2.jpg'
	});

	categoria1.save();
	categoria2.save();
	categoria3.save();
	categoria4.save();



};


