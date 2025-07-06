/* 
   Exemplos de código para cada tópico das Anotações de JavaScript
*/

/* 1. Variáveis e Tipos Primitivos */
let contador = 0;                 // variável que pode mudar
const saudacao = "Olá, mundo!";   // constante de string
var legado = true;                // var (evite em código novo)

/* 2. Operadores Básicos */
let soma = 2 + 3;                 // 5
let comparacao = 10 === '10';     // false (=== verifica tipo)
let logico = true && false;       // false

/* 3. Condicionais */
let idade = 17;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
let status = idade >= 18 ? "adulto" : "menor";
console.log("Status:", status);

/* 4. Repetições (Loops) */
for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}

let x = 0;
while (x < 3) {
  console.log("while:", x);
  x++;
}

let y = 0;
do {
  console.log("do...while:", y);
  y++;
} while (y < 3);

const frutas = ["maçã", "banana", "uva"];
for (const fruta of frutas) {
  console.log("for...of:", fruta);
}

/* 5. Funções */
function somar(a, b) {          // declaração tradicional
  return a + b;
}
const dobrar = n => n * 2;      // arrow function

console.log("Somar 4+5 =", somar(4, 5)); // 9
console.log("Dobro de 4 =", dobrar(4));  // 8

/* 6. Arrays */
const numeros = [1, 2, 3];
numeros.push(4);                // adiciona 4 ao final
numeros.forEach(n => console.log("Número:", n));

/* 7. Objetos */
const pessoa = { nome: "Ana", idade: 25 };
console.log("Nome:", pessoa.nome); // Ana
pessoa.idade++;                   // incrementa idade

/* 8. Interação Básica com o Navegador */
console.log("Abra o DevTools → Console para ver estas mensagens");
// alert("Olá visitante!");     // descomente para testar no navegador
// const nomeUsuario = prompt("Qual seu nome?");
// if (confirm("Deseja continuar?")) {
//   console.log("Usuário confirmou");
// }

/* 9. Variavel composta - Array */
let num = [1,2,3,4,"carlos"]
//console.log(num)
//num[5]=10
//console.log(num)
//num.push(11)
/*
console.log(num)
console.log(num.length)
console.log(num.sort())
console.log(num[0])
for (let pos = 0 ; pos < num.length; pos++){
  console.log(num[pos])
}
*/
for(let pos in num){
  console.log(num[pos])
}
console.log(num.indexOf(4))
