const select = (identificador) => document.querySelector(identificador);

function comprar() {
    let tipo = select('#tipo-ingresso').value;
    let quantidade = select('#qtd').value;
    let quantidadePista = select(`#qtd-${tipo}`);
    
    if (Number(quantidadePista.textContent) - quantidade >= 0 && quantidade>0){
        quantidadePista.innerText = Number(quantidadePista.textContent) - quantidade
    }
    else {
        alert(`Quantidade indisponível para ${tipo}`)
    }
}