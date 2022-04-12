const cliente = {
    nome: "Daniel",
    idade: 22,
    cpf: "13277788806",
    email: "danielmassud@outlook.com",
    QntdGrupos: 0,
    Grupos: [{}],

    CriarGrupo:function(NomeGp){
     cliente.Grupos.push({
         NomeDoGrupo: NomeGp,
         Membros: 0
     })
     this.QntdGrupos += 1
    }
}

console.log(cliente)
console.log("----------- Separador ------------")
cliente.CriarGrupo("Futeinfo")
cliente.CriarGrupo("TIPS do Daniel")
console.log(cliente.Grupos)