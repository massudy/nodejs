'use strict';

let Gerencianet = require('gn-api-sdk-node');
let options = require('../../credentials');

let gerencianet = new Gerencianet(options);

gerencianet.gnDetailSettings()
.then((resposta) => {
        console.log(resposta);
    })
    .catch((error) => {
        console.log(error);
    })
