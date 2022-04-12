const clientes = []

function CadastrarCliente(nome,email,telefone){
    clientes.push({
        Nome: nome,
        Email: email,
        Telefone: telefone
        })
console.log(`O cliente ${nome} foi registrado com sucesso !`)
}

function InfoCliente(id){
console.log(`
------ Informações do Cliente ----------
Nome: ${clientes[id].Nome}
Email: ${clientes[id].Email}
Telefone: ${clientes[id].Telefone}

`)

}


CadastrarCliente("Daniel","danielmassud@outlook.com","81998027527")
console.table(clientes)
CadastrarCliente("Marcelo","marcelo123@outlook.com","11983291209")
CadastrarCliente("Joelson","jojotips@outlook.com","74882932301")
console.table(clientes)
console.log(clientes.length)

for (let i = 0; i < clientes.length ;i++){
InfoCliente(i)
}



