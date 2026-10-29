// Verifica se o desafio foi resolvido: node verificar.js
const fs = require("fs");
const path = require("path");

const falhas = [];
const checar = (ok, msg) => { if (!ok) falhas.push(msg); };

// 1. Nenhum marcador de conflito nos arquivos do projeto
const marcador = new RegExp(`^(${"<".repeat(7)}|${"=".repeat(7)}|${">".repeat(7)})`, "m");
for (const arq of ["calculadora.js", "desconto.js", "config.json"]) {
  const caminho = path.join(__dirname, arq);
  if (!fs.existsSync(caminho)) { falhas.push(`${arq} não existe`); continue; }
  checar(!marcador.test(fs.readFileSync(caminho, "utf8")), `${arq} ainda tem marcadores de conflito`);
}

// 2. config.json válido com as duas chaves
try {
  const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));
  checar("taxaFrete" in cfg, "config.json sem a chave 'taxaFrete' (da main)");
  checar("descontoMaximo" in cfg, "config.json sem a chave 'descontoMaximo' (da feature)");
} catch (e) {
  falhas.push(`config.json inválido: ${e.message}`);
}

// 3. As duas regras de negócio funcionando
try {
  const { calcularTotal } = require("./calculadora");
  const { aplicarDesconto } = require("./desconto");
  // 100 x 2 = 200, -10% = 180, + frete 10 = 190
  checar(calcularTotal(100, 2, 10, 0.1) === 190, "calcularTotal(100, 2, 10, 0.1) deveria retornar 190");
  checar(aplicarDesconto(200, 0.1) === 180, "aplicarDesconto(200, 0.1) deveria retornar 180");
} catch (e) {
  falhas.push(`erro ao carregar o código: ${e.message}`);
}

if (falhas.length) {
  console.log("❌ Ainda há problemas:");
  falhas.forEach((f) => console.log(` - ${f}`));
  process.exit(1);
}
console.log("✅ Conflito resolvido com as duas regras funcionando!");
