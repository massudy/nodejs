import PegaArquivo from "./index.js";
import chalk, { Chalk } from "chalk";

const caminho = process.argv;

function inicio(){
    console.log(chalk.blue(`--------- Interface CLI ---------
`))
}


async function ImprimirTexto(CaminhoDoArquivo){
const resultado = await PegaArquivo(CaminhoDoArquivo[2])
console.log(chalk.yellow("Imprimir Texto : "),resultado)

}

inicio()
ImprimirTexto(caminho)