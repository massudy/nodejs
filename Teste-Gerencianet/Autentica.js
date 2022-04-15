"use strict";
import https from 'https'
import axios from 'axios';
import fs from 'fs';


//Insira o caminho de seu certificado .p12 dentro de seu projeto
var certificado = fs.readFileSync('../arquivos/producao-376392-futeinfo.p12');

//Insira os valores de suas credenciais em desenvolvimento do pix
var credenciais = {
  client_id: "Client_Id_b9c63d20972f12c70c3c0ba402152238f4ec526f",
  client_secret: "Client_Secret_dcaeea897daaa3fd7190205c84284a70ac5b10a4",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Codificando as credenciais em base64
var auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
  pfx: certificado,
  passphrase: "",
});
//Consumo em desenvolvimento da rota post oauth/token
var config = {
  method: "POST",
  url: "https://api-pix.gerencianet.com.br/oauth/token",
  headers: {
    Authorization: "Basic " + auth,
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) { 
    console.log(error);
  });