let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para iniciar o jogo
function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    limparBoneco();
    atualizarDisplayDoJogo();
}

// Função para limpar o boneco na hora de iniciar um nova forca
function limparBoneco() {
    const forca = document.getElementById("forca");
    forca.innerHTML = ""; 
}

// Função para atualizar a exibição do jogo
function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = normalizeString(palavraAtual[i]);
        if (letrasAdivinhadas.indexOf(letra) !== -1 || palavraAtual[i] === " ") {
            palavraExibida += palavraAtual[i];
        } else {
            palavraExibida += "_";
        }
    }
    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = normalizeString(entradaAdivinhacao.value);

    if (letraAdivinhada.length === 1 && /^[a-z0-9\s-]+$/.test(letraAdivinhada)) {
        if (letrasAdivinhadas.indexOf(letraAdivinhada) === -1) {
            letrasAdivinhadas.push(letraAdivinhada);
            
            let letraNaoEncontrada = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (normalizeString(palavraAtual[i]) === letraAdivinhada) {
                    letraNaoEncontrada = false;
                    break;
                }
            }
            
            if (letraNaoEncontrada) {
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(); // Certifique-se de que essa função está implementada

            let palavraCompleta = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (letrasAdivinhadas.indexOf(normalizeString(palavraAtual[i])) === -1 && palavraAtual[i] !== " ") {
                    palavraCompleta = false;
                    break;
                }
            }

            if (palavraCompleta) {
                document.getElementById("status").textContent = "Você venceu!";
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}.`;
                // Aqui você pode adicionar lógica para desabilitar mais tentativas
            }
        }
    }

    entradaAdivinhacao.value = "";
}

// Iniciar o game quando o documento for carregado
document.addEventListener("DOMContentLoaded", iniciarJogo);
