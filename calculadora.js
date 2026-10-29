function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function calcularTotal(preco, quantidade, desconto) {
  return preco * quantidade * (1 - desconto);
}

  function calcularTotal(preco, quantidade, frete) {
  return preco * quantidade + frete;
}

module.exports = { soma, subtracao, calcularTotal };
