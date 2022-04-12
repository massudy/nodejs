function Cliente(nome,email){
this.nome = nome
this.email = email
this.Grupos = []
this.CriarGrupo = function(nomegrupo,descricao,preco){
this.Grupos.push(new Grupo(this.nome,nomegrupo,descricao,preco))
console.log(`O cliente ${this.nome} criou o grupo ${nomegrupo} com sucesso !`)
}
}

function Grupo(dono,nome,descricao,preco){
    this.dono = dono
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
}

function RegistrarCliente(nome,email){
    Clientes.push(new Cliente(nome,email))
    console.log(`O cliente ${nome} foi registrado com sucesso !`)
}

let Clientes = []

//Escopo abaixo

RegistrarCliente("Daniel","danielmassud@outlook.com")
RegistrarCliente("Marcelo","marcelinhotips@hotmail.com")

console.log(`Mostrando abaixo os ${Clientes.length} clientes registrados na base`)
console.table(Clientes)

Clientes[0].CriarGrupo("Robô da Futeinfo","O melhor robô do brasil",30)
Clientes[0].CriarGrupo("Sala de Empates","Os Empates vencedoress GREEN",70)

console.log(`Mostrando abaixo os ${Clientes.length} clientes registrados na base`)
console.table(Clientes)

console.log(`Mostrando abaixo os grupos do cliente ${Clientes[0].nome}`)
console.table(Clientes[0].Grupos)

