//Este código implementa um jogo simples de Batalha Naval no console usando JavaScript contra a máquina.
// O Objetivo deste exercício é o desenvolvimento de um jogo de Batalha Naval utilizando JavaScript (JS) puro,
// sem a necessidade de bibliotecas externas. O jogo será jogado no console do navegador do VScode e terá como adversário a máquina,
// que realizará jogadas aleatórias.
// Regras Básicas do Jogo:
// O jogo terá um tabuleiro de 5x5 (matriz [5][5]).
// O jogador (humano) terá 3 navios posicionados aleatoriamente.
// O jogador atira 10 tiros, escolhendo coordenadas (linha e coluna).
// O jogo continua até que todos os navios de um dos jogadores sejam afundados ou a quantidade de tiros se esgotem.
// Ao fim se todos navios forem afundados o jogador ganha (humano), caso algumnavio ainda exista ao final da partida a máquina vence.

const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync para entrada de dados no console

// Função para criar o tabuleiro vazio

function criarTabuleiro(tamanho) {                                               // Cria um tabuleiro de tamanho x tamanho
    const tabuleiro = [];                                                       // Inicializa o tabuleiro como um array vazio
    for (let i = 0; i < tamanho; i++) {                                        // Loop para criar as linhas
        tabuleiro[i] = [];                                                    // Inicializa cada linha como um array vazio
        for (let j = 0; j < tamanho; j++) {                                  // Loop para criar as colunas
            tabuleiro[i][j] = ' ';                                          // Preenche cada célula com um espaço vazio
        }
    }
    return tabuleiro;                                                      // Retorna o tabuleiro criado
}

// Função para posicionar navios aleatoriamente

function posicionarNavios(tabuleiro, quantidadeNavios) {                  // Posiciona navios aleatoriamente no tabuleiro
    let naviosPosicionados = 0;                                          // Contador de navios posicionados   
    while (naviosPosicionados < quantidadeNavios) {                     // Enquanto não posicionar todos os navios
        const linha = Math.floor(Math.random() * tabuleiro.length);    // Gera uma linha aleatória
        const coluna = Math.floor(Math.random() * tabuleiro.length);  // Gera uma coluna aleatória

            // Verifica se a posição está vazia antes de posicionar o navio

        if (tabuleiro[linha][coluna] === ' ') {                     // Verifica se já há um navio na posição
            tabuleiro[linha][coluna] = 'N';                        // Aqui o N representa um navio
            naviosPosicionados++;
        }
    }
}

// Função para imprimir o tabuleiro (sem mostrar navios)

function mostrarTabuleiro(tabuleiro, esconderNavios = true) {       // Parâmetro para esconder navios
    console.log("   0 1 2 3 4");                                   // Mostra os números das colunas
    console.log("  -------------");                               // Linha de separação
    for (let i = 0; i < tabuleiro.length; i++) {                 // Loop para cada linha
        let linhaStr = i + " | ";                               // Mostra o número da linha
        for (let j = 0; j < tabuleiro[i].length; j++) {        // Loop para cada coluna
             // Verifica se deve esconder os navios
            if (esconderNavios && tabuleiro[i][j] === 'N') {  // Esconde navios se o parâmetro for true
                linhaStr += " " + " ";                       // Esconde os Navios
            } else {                                        // Mostra o conteúdo da célula
                linhaStr += tabuleiro[i][j] + " ";         // Mostra o conteúdo da célula
            }
        }
        console.log(linhaStr);                          // Imprime a linha do tabuleiro
    }
}

// Configuração inicial

const tamanho = 5;                                  // Tamanho do tabuleiro 5x5
const quantidadeNavios = 3;                        // Quantidade de navios para cada jogador
let tirosRestantes = 5;                           // Quantidade de tiros do jogador

// Criação dos tabuleiros

const tabuleiroJogador = criarTabuleiro(tamanho); // Tabuleiro do jogador
const tabuleiroMaquina = criarTabuleiro(tamanho); // Tabuleiro da máquina

// Posicionamento dos navios

posicionarNavios(tabuleiroJogador, quantidadeNavios); // Posiciona navios do jogador
posicionarNavios(tabuleiroMaquina, quantidadeNavios); // Posiciona navios da máquina

// Variáveis para controlar o jogo

let naviosJogador = quantidadeNavios;               // Contador de navios do jogador
let naviosMaquina = quantidadeNavios;              // Contador de navios da máquina

console.log("====== · 🚢 · ⚔️ · 🚀 · 🌊 · Bem-vindo ao Jogo Batalha Naval! · 🚢 · ⚔️ · 🚀 · 🌊 · ======="); // Mensagem de boas-vindas
console.log("======= · Você tem 5 tiros para destruir os navios da máquina · ======"); // Instruções iniciais

// Lógica principal do jogo

while (tirosRestantes > 0 && naviosJogador > 0 && naviosMaquina > 0) { // Enquanto houver tiros e navios
    console.log("=======================");
    console.log("\nSeu tabuleiro:");                // Mostra o tabuleiro do jogador
    console.log("=======================");
    mostrarTabuleiro(tabuleiroJogador, false);      // Mostra o tabuleiro do jogador (sem esconder navios)

    console.log("=======================");    
    console.log("\nTabuleiro da máquina:");         // Mostra o tabuleiro da máquina
    console.log("=======================");
    mostrarTabuleiro(tabuleiroMaquina, true);       // Mostra o tabuleiro da máquina (escondendo navios)

    // logica do jogador

    let linha = parseInt(prompt("Digite a linha (0 a 4): "));           // Solicita a linha
    let coluna = parseInt(prompt("Digite a coluna (0 a 4): "));         // Solicita a coluna

     // Verifica se a entrada é válida

    if (linha >= 0 && linha < tamanho && coluna >= 0 && coluna < tamanho) {         // Verifica se a entrada é válida
        if (tabuleiroMaquina[linha][coluna] === 'N') {                              // Verifica se acertou um navio
            console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯"); // Mensagem de acerto
            console.log("Você acertou um navio!");                                  // Mensagem de acerto
            console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");
            tabuleiroMaquina[linha][coluna] = 'X';                                  // Marca o navio como acertado
            naviosMaquina--;                                                        // Decrementa o contador de navios da máquina
        } else if (tabuleiroMaquina[linha][coluna] === ' ') {                      // Verifica se acertou água
            console.log("💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊");      // Mensagem de erro
            console.log(" Foi pra Água..."); 
            console.log("💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊💦🌊");                  
            tabuleiroMaquina[linha][coluna] = 'O';
        } else {
            console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");        // Mensagem de aviso 
            console.log(" Você já atirou aqui!");
            console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");       // Mensagem de aviso 
        }
        tirosRestantes--;
    } else {
        console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");           // Mensagem de aviso 
        console.log(" Coordenada inválida! Jogue de novo.");
        console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");          // Mensagem de aviso 
            }

    // Aqui a maquina joga aleatoriamente
    
    if (naviosMaquina > 0 && tirosRestantes > 0) {                              // A máquina só joga se ainda tiver navios e tiros
        let linhaM, colunaM;                                                   // Variáveis para linha e coluna da máquina
        do {                                                                  // Gera coordenadas aleatórias
            linhaM = Math.floor(Math.random() * tamanho);                    // Gera linha aleatória
            colunaM = Math.floor(Math.random() * tamanho);                  // Gera coluna aleatória
        } while (tabuleiroJogador[linhaM][colunaM] === 'X' || tabuleiroJogador[linhaM][colunaM] === 'O'); // Evita repetir tiros

         // Verifica se a máquina acertou um navio

        if (tabuleiroJogador[linhaM][colunaM] === 'N') {                                    // Verifica se acertou um navio
            console.log(`💥 A máquina acertou seu navio em (${linhaM},${colunaM})!`);      // Mensagem de acerto
            tabuleiroJogador[linhaM][colunaM] = 'X';                                      // Marca o navio como acertado
            naviosJogador--;                                                             // Decrementa o contador de navios do jogador
        } else {                                                                        // Verifica se acertou água
            console.log(`🌊 A máquina errou em (${linhaM},${colunaM}).`);              // Mensagem de erro
            tabuleiroJogador[linhaM][colunaM] = 'O';                                   // Marca como água
        }
    }
}

// Final do jogo

console.log("\n-ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈ Fim do Jogo! -ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈-ˋˏ✄┈┈┈┈");   // Mensagem de fim de jogo
if (naviosMaquina === 0) {
    console.log("🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊");
    console.log("Parabéns! Você venceu a Batalha Naval!");
    console.log("🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊🎉🏆🥳🎊");
} else {
    console.log("😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣");
    console.log("Seus navios foram destruídos ou os tiros acabaram. A máquina venceu! Não Chorax!💔💔");
     console.log("😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣😢🥺😔😞💣");
}