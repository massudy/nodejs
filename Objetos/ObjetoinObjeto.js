const cliente = {
    nome: "Daniel",
    idade: 22,
    cpf: "13277788806",
    email: "danielmassud@outlook.com"
    }

    cliente.dependentes = {
      nome: "Gustavinho",
      parentesco: "Filho",
      idade: "3"

    }

    console.log(cliente)

    cliente.dependentes.nome = "Marcelinho"

    console.log(cliente)