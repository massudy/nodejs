const cliente = {
    nome: "Daniel",
    idade: 22,
    cpf: "13277788806",
    email: "danielmassud@outlook.com",
    grupo: "Futeinfo",
    membros: [{
        nome: "Joaquim Barbosa",
        plano: "PRO",
        meses: 2

    }]
}


function AdicionarMembro(nome,plano,meses){
    cliente.membros.push({
        nome: nome,
            plano: plano,
            meses: meses
    })
}

function ListaPlano(FiltroPlano){
    if(FiltroPlano === "PRO" || FiltroPlano ==="BASICO"){
    ListaPRO = cliente.membros.filter(membro => membro.plano === FiltroPlano)
    console.log(ListaPRO) 
} else {console.log(`Não existe nenhum plano chamado ${FiltroPlano}`)}
console.log("----------- SEPARADOR ------------")  
}

function ListaMeses(FiltroMeses){
ListaPorMes = cliente.membros.filter(membro => membro.meses >= FiltroMeses)
if(ListaPorMes.length > 0){
console.log(ListaPorMes)
} else { console.log("Não existem membros com essa quantidade de meses")}
console.log("----------- SEPARADOR ------------") 
}

AdicionarMembro("Marcelo Benevides","PRO",4)
AdicionarMembro("Luciano Punhetinha","PRO",7)
AdicionarMembro("Karlos Medeiros","PRO",1)
AdicionarMembro("Karlos Medeiros","BASICO",1)
AdicionarMembro("Karlos Medeiros","BASICO",6)
AdicionarMembro("Karlos Medeiros","BASICO",10)

console.log(cliente)
console.log("----------- SEPARADOR ------------")
ListaPlano("Ultra");
ListaMeses(5);
