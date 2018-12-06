//services.js

var moment = require('moment');
var jwt = require('jwt-simple');

var config = require('../config');

exports.crearToken = function(usuario){
	var payload = {
			sub:usuario._id,
			iat:moment().unix(),
			exp:moment().add(1,'minutes').unix()
			
	};
	return jwt.encode(payload,config.cadenaEncriptacion);
};