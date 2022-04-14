import chalk from 'chalk';
import fs from 'fs';




 function ImprimeErro(mensagem){
console.log(chalk.red(mensagem))
 }
  
 function ImprimeSucesso(mensagem){
console.log(chalk.green(mensagem))
}

async function PegaArquivo(CaminhoArquivo){
    const encoding = 'utf8';
    try {
        const texto = await fs.promises.readFile(CaminhoArquivo,encoding)
        return texto
    } catch(erro){
        return "Não foi possivel encontrar o caminho do seu arquivo"
    }

}

export default PegaArquivo;

// function PegaArquivo(CaminhoArquivo){
//     const encoding = 'utf8';
//    fs.promises.readFile(CaminhoArquivo,encoding)
//    .then((texto) => ImprimeSucesso(texto) )
//    .catch((erro) => ImprimeErro(erro) )    
// }

// function PegaArquivo(CaminhoArquivo){
// const encoding = 'utf8';
//     fs.readFile(CaminhoArquivo,encoding,(err,texto) => {
//         if (err){ ImprimeErro(err) }  else {
//         ImprimeSucesso(texto)} })
// }

//PegaArquivo('../arquivos/tex2to.txt');