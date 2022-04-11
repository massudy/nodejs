let Nome = []
let Email = []
let NomeGrupo = []

let Clientes = []

function NovoCliente(NomeCliente,EmailCliente,NomeGrupoCliente){
     Nome.push(NomeCliente)
     Email.push(EmailCliente)
     NomeGrupo.push(NomeGrupoCliente)
     Clientes = [Nome,Email,NomeGrupo]
    }

function BuscarCliente(NomeBusca){
if(Clientes[0].includes(NomeBusca)){
let indice = Clientes[0].indexOf(NomeBusca)
console.log(`Nome : ${Clientes[0][indice]}`)
console.log(`Email : ${Clientes[1][indice]}`)
console.log(`Nome do Grupo : ${Clientes[2][indice]}`)
    
} else { console.log(`Não existe nenhum ${NomeBusca} na base de clientes`)}

}
// Sequencia de ações abaixo

//Adicionando novos clientes
NovoCliente("Daniel","danielmassud@outlook.com","Futeinfo");
NovoCliente("Natanael","natanaelespindola@outlook.com","Betzord");
NovoCliente("Marcelinho","Marcelo@outlook.com","Marcelo TIPS");

//Mostrando toda a array/table e depois buscando um cliente de dentro da base pelo nome
console.table(Clientes);
BuscarCliente("Daniel")

