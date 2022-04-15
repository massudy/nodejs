'use strict';

var Gerencianet = require('gn-api-sdk-node');
var options = require('../../credentials');


var params = {
  id: 1009
}

var body = {
  notification_url: 'http://yourdomain.com',
  custom_id: 'my_new_id'
}

var gerencianet = new Gerencianet(options);

gerencianet
  .updateSubscriptionMetadata(params, body)
      .then((resposta) => {
        console.log(resposta)
    })
    .catch((error) => {
        console.log(error);
    })
    .done();