//usuarios.js
var usuario = require('../models/usuarios');
var services = require('./services');

exports.Autenticar = function(req,res){

	var mUsuario = req.body.usuario;
	var mClave = req.body.clave;

	usuario.findOne({usuario: mUsuario, clave: mClave},function(err,myUser){

		if(err){
			res.status(500).json({mensaje:'error con el servicio de autenticacion'});
		}else{

			if(!myUser){
				res.status(401).json({mensaje:'Credenciales incorrectas'});
			}else{

				
							res.status(200).json({
								status:'ok',
								mensaje:'Autenticación correcta',
								TOKEN:services.crearToken(myUser)
					});
				
			}
		}
	});
};


exports.Listar = function(req,res){
	usuario.find(function(err,data){
		if(err){
			res.status(500).json({mensaje:'Error al listar los usuarios'});
		}else{
			res.status(200).json(data);
		}
	});
};

exports.Agregar = function(req,res){
	var myUser = new usuario();
	myUser.usuario = req.body.usuario;
	myUser.clave = req.body.clave;
	myUser.save(function(err){
		if(err){
			res.status(500).json({mensaje:'error al registrar el usuario'});
		}else{
			res.status(200).json({mensaje:'usuario creado correctamente'});
		}
	});
};