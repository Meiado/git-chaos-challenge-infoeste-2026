# Git Chaos Challenge 🌪️

Duas pessoas mexeram **nas mesmas linhas** em branches diferentes. Agora o Git
não sabe quem tem razão — e sobrou para você decidir.

## O cenário

| Branch | O que mudou |
| --- | --- |
| `main` | `calcularTotal` ganhou **frete**; `config.json` ganhou `taxaFrete` |
| `feature/calculadora-desconto` | `calcularTotal` ganhou **desconto**; `config.json` ganhou `descontoMaximo`; novo arquivo `desconto.js` |

## Sua missão

1. Estando em `feature/calculadora-desconto`, rode `git merge main` e veja o conflito estourar
   em `calculadora.js` e `config.json`.
2. **Resolva os conflitos mantendo as duas regras de negócio funcionais.**
   A assinatura final esperada é `calcularTotal(preco, quantidade, frete, desconto)`,
   onde o desconto é uma fração (`0.1` = 10%) aplicada ao subtotal e o frete é somado depois.
   O `config.json` deve ter as chaves `taxaFrete` e `descontoMaximo`.
3. **Faça o commit do merge com uma mensagem semântica limpa**, por exemplo
   `merge: integra regras de frete e desconto sazonal`.
4. **Deixe o histórico sem arquivos corrompidos nem marcadores de conflito**
   (as linhas de `<<<<<<<`, `=======` e `>>>>>>>`).

## Como saber se deu certo

```bash
node verificar.js
```

## Dicas

- `git status` mostra os arquivos em conflito.
- `git diff` mostra os dois lados de cada conflito.
- Edite o arquivo, remova os marcadores, depois `git add <arquivo>` e `git commit`.
- Se bagunçar tudo: `git merge --abort` e recomece.
