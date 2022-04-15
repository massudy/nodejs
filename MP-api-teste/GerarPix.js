import Gerencianet from 'gn-api-sdk-node'

var options = {
    // PRODUÇÃO = false
    // HOMOLOGAÇÃO = true
    sandbox: false,
    client_id: 'Client_Id_b9c63d20972f12c70c3c0ba402152238f4ec526f',
	client_secret: 'Client_Secret_dcaeea897daaa3fd7190205c84284a70ac5b10a4',
	pix_cert: 'C:/Users/daniel/Desktop/Nodejs Projetos/arquivos/producao-376392-futeinfo.p12',
  };

let preco = 22.35 // preço do pix totalmente maleavel

let body = {
    "calendario": {
        "expiracao": 3600
    },
    "valor": {
        "original": "20"
    },
    "chave": "179c92bc-e7ad-4ffe-82da-6987b33556d0", // chave pix
    "infoAdicionais": [
        {
            "nome": "Pagamento em",
            "valor": "Futeinfo"
        },
        {
            "nome": "Pedido",
            "valor": "583904"
        }
    ]
}




 body.valor.original = preco.toString() // aqui seta dentro do objeto VALOR que o campo original é igual ao preco transformado em string

console.log(JSON.stringify(body))

let gerencianet = new Gerencianet(options);

 gerencianet.pixCreateImmediateCharge([], body)
 .then((resposta) => {
         console.log(resposta);
     })
     .catch((error) => {
         console.log(error);
     })
