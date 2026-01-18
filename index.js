// Função que calcula o saldo de vitórias e determina o nível do jogador
function calculadoraPartidas(vitorias, derrotas) {
    //Calcula o saldo de vitórias (vitórias menos derrotas)
    let saldoVitorias = vitorias - derrotas;
    // Variável para armazenar o nível do jogador
    let nivel = ""

    // Estrutura condicional para definir o nível baseado no número de vitórias
    if(vitorias < 10) {
        nivel = "Ferro";
    } else if(vitorias <= 20) {
        nivel = "Bronze";
    } else if(vitorias <= 50) {
        nivel = "Prata";
    } else if(vitorias <= 80) {
        nivel = "Ouro";
    } else if(vitorias <= 90) {
        nivel = "Diamante";
    } else if(vitorias <= 100){
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna um objeto com o saldo de vitórias e o nível
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

//Chama a função passando 140 vitórias e 40 derrotas e guarda o resultado
let resultado = calculadoraPartidas(140, 40);

// Exibe a mensagem final formatada com o saldo e o nível do jogador
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
