function desenharBoneco() {
    const forca = document.getElementById("forca");

    forca.innerHTML = "";

    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "0px";
    palo.style.left = "83%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "100px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);

    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "88px";
    travessa.style.left = "60%";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "70px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa); // Correção

    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.top = "100px";
    travessaSuperior.style.left = "83%";
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "60px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior); // Correção

    // Adiciona a cabeça se restam 5 ou menos tentativas
    if (tentativasRestantes <= 5) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.top = "90px";
        cabeca.style.left = "40%";
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "50px";
        cabeca.style.height = "50px";
        cabeca.style.border = "2px solid blue"; // Correção
        cabeca.style.borderRadius = "50%";
        cabeca.style.backgroundColor = "#333";
        forca.appendChild(cabeca); // Correção
    }

    // Adiciona o corpo se restam 4 ou menos tentativas
    if (tentativasRestantes <= 4) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.top = "140px"; // Ajustado para ficar abaixo da cabeça
        corpo.style.left = "40%";
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "2px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "blue";
        forca.appendChild(corpo); // Correção
    }

    // Adiciona os braços
    if (tentativasRestantes <= 3) {
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.top = "170px"; // Ajustado
        bracoEsquerdo.style.left = "25%";
        bracoEsquerdo.style.transform = "translateX(-50%) rotate(-45deg)";
        bracoEsquerdo.style.width = "60px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "blue";
        forca.appendChild(bracoEsquerdo); // Correção
    }

    if (tentativasRestantes <= 2) {
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.top = "170px"; // Ajustado
        bracoDireito.style.left = "54%"; // Correção para ficar à direita
        bracoDireito.style.transform = "translateX(-50%) rotate(45deg)";
        bracoDireito.style.width = "60px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "blue";
        forca.appendChild(bracoDireito); // Correção
    }

    // Adiciona as pernas
    if (tentativasRestantes <= 1) {
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.top = "219px"; // Ajustado
        pernaEsquerda.style.left = "25%"; // Ajustado
        pernaEsquerda.style.transform = "translateX(-50%) rotate(-45deg)";
        pernaEsquerda.style.width = "60px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "blue";
        forca.appendChild(pernaEsquerda); // Correção
    }

    if (tentativasRestantes <= 0) {
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.top = "219px"; // Ajustado
        pernaDireita.style.left = "54%"; // Ajustado
        pernaDireita.style.transform = "translateX(-50%) rotate(45deg)";
        pernaDireita.style.width = "60px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "blue";
        forca.appendChild(pernaDireita); // Correção
    }
}
