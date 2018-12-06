//middleware.js
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./config');

exports.verificaToken = function(req,res,next){

	if(!req.headers.authorization){
		return res.status(403).json({mensaje:'Acceso no autorizado!!!'});
	}else{

		try{
			var token = req.headers.authorization.split(' ')[1];	
			var payload = jwt.decode(token,config.cadenaEncriptacion);
			
		}catch(e){
			if(e=='Error: Token expired'){
				return res.status(403).json({mensaje:'Token expirado/'});	
			}					
			return res.status(403).json({mensaje:'Token inválido/'+e});	
			
		}

		/*
		if(payload.exp<moment().unix()){		
			return res.status(403).json({mensaje:'Token expirado'});
		}*/

		
	}
	
	
	
	
	

	next();
};