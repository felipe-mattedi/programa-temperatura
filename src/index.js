import input from 'readline-sync';
import consultaWeather from './downloadInfo.js'
import salvarPrevisao from './salvarPrevisao.js'
<<<<<<< HEAD
import { logger } from "./logger.js";
=======
import dotenv from 'dotenv'

dotenv.config()

const entradaUsuario=process.env.ESPERAENTRADA
>>>>>>> developer

function msginicializacao(){
  console.log(`
  *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
  Olá! Seja bem vindo ao programa que te mostra a temperatura 
  e salva no banco de dados.
  Digite a cidade desejada e a quantidade de dias que você deseja 
  ver a temperatura
  *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
  `)
} 

function validacidade(){
  let cidade = input.question('Digite a cidade desejada: ')
  if (cidade == ''){
    throw new Error("Digite uma cidade valida")
  }
  else{
    return cidade
  }
}

function validadias(){
  let qtd = input.question('Digite a quantidade de dias (1 ate 7): ')
  if (parseInt(qtd) == NaN || parseInt(qtd) < 1 || parseInt(qtd) > 7){
    throw new Error("Digite uma quantidade de dias válida")
  }
  else{
    return qtd
  }
}

async function executaPrograma(cidadeInformada, diasInformados){
  try{
    let retorno = await consultaWeather(cidadeInformada,diasInformados)
    await salvarPrevisao(retorno)
    console.log(retorno)
<<<<<<< HEAD
    logger.info({cidade, qtd}, 'Dados salvos com sucesso!')
  
=======
>>>>>>> developer
  }
  
  catch(e) {
    console.log(`
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    Erro durante a execução do programa:
    ${e.message}
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    `)
  }
  
  finally{
    console.log(`
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    Termino da execucao do programa
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    `)
  }
}

async function main() {
  msginicializacao()
  let cidade, qtd
  if(entradaUsuario === '1'){
      cidade = validacidade()
      qtd = validadias()
    } else {
      cidade = 'Pindamonhangaba'
      qtd = '2'
    }
    executaPrograma(cidade, qtd)
}

main()
