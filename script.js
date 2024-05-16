let campoPago = document.querySelector("#campoPago");
let campoValor = document.querySelector("#campoValor");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function troco(){
    resultado.textContent = Number(campoPago.value) - Number(campoValor.value);
}

btCalcular.onclick = function(){
    troco()
}