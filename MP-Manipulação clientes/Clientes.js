// Classe cliente com seus atributos padrões
class Cliente{
    constructor(nome,email){
this.Nome = nome
this.Email = email
this.Grupos = []
this.ReceitaEstimada
}

// Abaixo as funções que um cliente é capaz de fazer

// Imprimir as informações do cliente
InfoCliente(){
console.log(`
------ Informações Cliente -------
    Nome : ${this.Nome}
    Email : ${this.Email}
    Grupos : ${this.Grupos.length}

    `)
}
//Recebe um novo email e altera pelo atual do cliente
AlterarEmail(novoemail){
this.Email = novoemail
console.log("Email alterado com sucesso !")
}
// recebe informações de um grupo e cria dentro da array Grupos do cliente
CriarGrupo(nomegrupo,descricao,preco,membrosiniciais){
this.Grupos.push(new Grupo(this.Nome,nomegrupo,descricao,preco,membrosiniciais))
console.log(`O grupo ${nomegrupo} foi criado por ${this.Nome} com sucesso !`)    
}
// Recebe o index do grupo e a quantidade de membros a serem adicionados no respectivo grupo
AdicionarMembros(grupo,quantidade){
this.Grupos[grupo].NovosMembros(quantidade)
console.log(`Foram adicionadas ${quantidade} pessoas ao grupo ${this.Grupos[grupo].NomeGrupo}`)
}

}
//classe Grupo com atributos dele
class Grupo{
constructor(dono,nome,descricao,preco,membrosiniciais){
this.DonoGrupo = dono
this.NomeGrupo = nome
this.DescricaoGrupo = descricao
this.PrecoGrupo = preco
this.Membros = membrosiniciais
this.ReceitaGrupo = this.Membros*this.PrecoGrupo
}
// recebe uma quantidade de membros a serem adicionados ao grupo alterando também a receita do grupo
NovosMembros(quantidade){
this.Membros += quantidade
this.ReceitaGrupo = this.Membros*this.PrecoGrupo
}

}

//****** Abaixo funções gerais ******

// recebe nome e email e registra o cliente no sistema
function RegistrarCliente(nome,email){
    Clientes.push(new Cliente(nome,email))
console.log(`O cliente ${nome} foi registrado no sistema com sucesso !`)    
}

// recebe o index do cliente e remove ele da base
function RemoverCliente(cliente){
let ClienteRemovido = Clientes[cliente].Nome
    Clientes.splice(cliente,1)
console.log(`O cliente ${ClienteRemovido} foi removido com sucesso`)
}

//Retorna o um log table com a lista de clientes no sistema
function ListarClientes(){
console.table(Clientes)
    }
// recebe o index do cliente e retorna um table com todos os grupos dele
function ListarGrupos(cliente){
    console.table(Clientes[cliente].Grupos)
}

//Função que retorna todos os grupos de todos os clientes
function ListarTodosGrupos(){
let ListaGerada = []
for (i = 0; i < Clientes.length; i++){
for(i2 = 0; i2 < Clientes[i].Grupos.length;i2++){
ListaGerada.push(Clientes[i].Grupos[i2])
}

}


console.table(ListaGerada)
}


// função que imprime um espaçador de inicio
function ImprimirInicio(){
console.log(`----------- Inicio Escopo -------------



`)

}

// array que armazena os clientes
    let Clientes = []

 
// escopo abaixo



ImprimirInicio()
RegistrarCliente("Daniel","danielmassud@outlook.com")
RegistrarCliente("André","andre123@hotmail.com")
RegistrarCliente("Marcelo","marcelinho_bol@hotmail.com")
RegistrarCliente("Alessandro","alejosue@gmail.com")
ListarClientes()
Clientes[0].InfoCliente()
Clientes[0].CriarGrupo("Futeinfo","As melhores entradas",30,15)
Clientes[1].CriarGrupo("André Sinais Basico","Plano Basico dos melhores sinais",50,40)
Clientes[1].CriarGrupo("André Sinais PRO","Plano PRO dos melhores sinais",150,20)
ListarClientes()
ListarGrupos(0)
ListarGrupos(1)
Clientes[0].AdicionarMembros(0,10)
ListarGrupos(0)
ListarTodosGrupos()
Clientes[0].AlterarEmail("dandanfilho@hotmail.com")
ListarClientes()
RemoverCliente(0)
ListarClientes()
ListarTodosGrupos()




