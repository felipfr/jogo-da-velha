let jogo = [['', '', ''], ['', '', ''], ['', '', '']];
let turno = "X";
let fimDeJogo = false;
let tabuleiro = document.querySelectorAll(".tabuleiro");
let jogador1 = document.getElementById("jogador1");
let jogador2 = document.getElementById("jogador2");

let mensagem = document.getElementById("mensagem");
mensagem.textContent = "";

jogador1.onchange = function () {
    mensagem.textContent = `${jogador1.value}, pode começar!`;
};

function vez(celula) {
    if (fimDeJogo != false) {
        return;
    };
    if (celula.innerHTML == "") {
        celula.innerHTML = turno;
        if (turno == "X") {
            let casa = celula.id;
            let [, row, col] = casa.match(/casa-(\d)-(\d)/);
            jogo[row][col] = turno;
            turno = "O";
            resultado();
            mensagem.textContent;
        } else {
            let casa = celula.id;
            let [, row, col] = casa.match(/casa-(\d)-(\d)/);
            jogo[row][col] = turno;
            turno = "X";
            resultado();
            mensagem.textContent;
        };
    };
};

function verificaJogo() {
    // Verifica as linhas
    for (let row = 0; row < 3; row++) {
        if (jogo[row][0] === jogo[row][1] && jogo[row][1] === jogo[row][2]) {
            return jogo[row][0];
        }
    };
    // Verifica as colunas
    for (let col = 0; col < 3; col++) {
        if (jogo[0][col] === jogo[1][col] && jogo[1][col] === jogo[2][col]) {
            return jogo[0][col];
        }
    };
    // Verifica as diagonais
    if (jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2]) {
        return jogo[0][0];
    };
    if (jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0]) {
        return jogo[0][2];
    };
    // Verifica se houve empate
    let casasVazias = 0;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (jogo[row][col] === '') {
                casasVazias++;
            };
        };
    };
    if (casasVazias === 0) {
        return "Empate";
    };
    return "";
};

function resultado() {
    if (verificaJogo() === 'X') {
        document.getElementById("mensagem").style.color = "#056717";
        mensagem.textContent = `${jogador1.value} venceu!`;
        fimDeJogo = true;
        return
    } else if (verificaJogo() === 'O') {
        document.getElementById("mensagem").style.color = "#056717";
        mensagem.textContent = `${jogador2.value} venceu!`;
        fimDeJogo = true;
        return
    } else if (verificaJogo() === "Empate") {
        document.getElementById("mensagem").style.color = "#DE0000";
        mensagem.textContent = `O jogo empatou!`;
        fimDeJogo = true;
        return
    } else if (verificaJogo() === "" && turno == "X") {
        mensagem.textContent = `É a vez de ${jogador1.value}`;
        return
    } else if (verificaJogo() === "" && turno == "O") {
        mensagem.textContent = `É a vez de ${jogador2.value}`;
        return
    };
};

function reiniciar() {
    tabuleiro.forEach(casas => {
        casas.textContent = "";
        casas.style.backgroundColor = '#e6e5e5';
        jogo = [['', '', ''], ['', '', ''], ['', '', '']];
        fimDeJogo = false;
        turno = "X";
        document.getElementById("mensagem").style.color = "#000000";
        mensagem.textContent = `${jogador1.value}, pode começar!`;
    });
};