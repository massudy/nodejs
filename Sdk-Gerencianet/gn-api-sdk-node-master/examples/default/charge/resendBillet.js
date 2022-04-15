'use strict';

var Gerencianet = require('gn-api-sdk-node');
var options = require('../../credentials');


var params = {
  id: 1000
}

var body = {
  email: 'oldbuck@gerencianet.com.br'
}

var gerencianet = new Gerencianet(options);

gerencianet
  .resendBillet(params, body)
      .then((resposta) => {
        console.log(resposta)
    })
    .catch((error) => {
        console.log(error);
    })
    .done();