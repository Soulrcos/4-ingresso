const select = (identificador) => document.querySelector(identificador);

function comprar() {
    let tipo = select('#tipo-ingresso').value;
    let quantidade = select('#qtd').value;
    let quantidadeDisponivel = select(`#qtd-${tipo}`);
    let condicao = Number(quantidadeDisponivel.textContent) - quantidade;
    
    if (condicao >= 0 && quantidade>0){
        quantidadeDisponivel.innerText = condicao;
    }
    else {
        alert(`Quantidade indisponível para ${tipo}`);
    }
}