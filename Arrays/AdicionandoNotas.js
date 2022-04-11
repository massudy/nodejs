const notas = []

 function CalcularMedia(Soma,QntdTotal){
   return Soma/QntdTotal;
}

   
function SomarNotas(){
let ResultadoFinal = 0;
function AddParaTotal(element){
ResultadoFinal = ResultadoFinal+element;
}
notas.forEach(AddParaTotal);


return ResultadoFinal;

}

function StatusArray(){
    media = CalcularMedia(SomarNotas(),notas.length);
    console.log(`Existem ${notas.length} notas registradas, Resultando em uma média de ${media}`);
    
}

function AdicionarNota(valor){
notas.push(valor);

}

StatusArray();
AdicionarNota(4);
StatusArray();
AdicionarNota(7);
StatusArray();