function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}
function calcularTotal(preco, quantidade, frete, desconto) {
  return preco * quantidade * (1 - desconto) + frete;
}

module.exports = { soma, subtracao, calcularTotal };
