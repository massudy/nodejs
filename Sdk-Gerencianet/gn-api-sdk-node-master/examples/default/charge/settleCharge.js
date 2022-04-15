'use strict';

var Gerencianet = require('gn-api-sdk-node');
var options = require('../../credentials');


var params = {
	id: 553834
}

var gerencianet = new Gerencianet(options);

gerencianet
	.settleCharge(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error);
	})
	.done();
