/* eslint-disable import/extensions */
import input from 'readline-sync';
import dotenv from 'dotenv';
import downloadInfo from './downloadInfo.js';
import salvarPrevisao from './salvarPrevisao.js';
import logger from './logger.js';

dotenv.config();

const entradaUsuario = process.env.ESPERAENTRADA;

function msginicializacao() {
  console.log(`
  *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
  Olá! Seja bem vindo ao programa que te mostra a temperatura 
  e salva no banco de dados.
  Digite a cidade desejada e a quantidade de dias que você deseja 
  ver a temperatura
  *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
  `);
}

function validacidade() {
  const cidade = input.question('Digite a cidade desejada: ');
  if (cidade === '') {
    throw new Error('Digite uma cidade valida');
  } else {
    return cidade;
  }
}

function validadias() {
  const qtd = input.question('Digite a quantidade de dias (1 ate 7): ');
  if (Number(qtd).isNaN() || Number(qtd) < 1 || Number(qtd) > 3) {
    throw new Error('Digite uma quantidade de dias válida');
  }
}

async function executaPrograma(cidadeInformada, diasInformados) {
  try {
    const retorno = await downloadInfo(cidadeInformada, diasInformados);
    await salvarPrevisao(retorno);
    console.log(retorno);
    logger.info({ cidadeInformada, diasInformados }, 'Dados salvos com sucesso!');
  } catch (e) {
    console.log(`
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    Erro durante a execução do programa:
    ${e.message}
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    `);
  } finally {
    console.log(`
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    Termino da execucao do programa
    *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    `);
  }
}

async function main() {
  msginicializacao();
  let cidade; let
    qtd;
  if (entradaUsuario === '1') {
    cidade = validacidade();
    qtd = validadias();
  } else {
    cidade = 'Pindamonhangaba';
    qtd = '2';
  }
  executaPrograma(cidade, qtd);
}

main();
