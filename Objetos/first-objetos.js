const cliente = {
nome: "Daniel",
idade: 22,
cpf: "13277788806",
email: "danielmassud@outlook.com"
}

const chaves = ["nome","idade","cpf","email"]

chaves.forEach(calculo=>console.log(cliente[calculo]))