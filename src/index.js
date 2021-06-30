///*teste*////

import input from 'readline-sync'

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


msginicializacao()

try{

  let cidade = validacidade()
  let qtd = validadias()

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
