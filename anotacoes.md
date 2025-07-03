# JavaScript (Vanilla) — Anotações
## Link útil
   - Documentação oficial: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 1. Variáveis e Tipos Primitivos

### 1.1 Declarando Variáveis

| Palavra‑chave | Escopo          | Pode mudar? | Use quando…                                              |
| ------------- | --------------- | ----------- | -------------------------------------------------------- |
| `let`         | Bloco           | ✅           | Valor irá mudar                                          |
| `const`       | Bloco           | ❌\*         | Valor fixo (ou objeto/array que não troca de referência) |
| `var`         | Função / Global | ✅           |                                                          |

| **Evite** (legado) |
| ------------------ |

> *Somente o identificador é imutável; o conteúdo de objetos/arrays ainda pode mudar.*

### 1.2 Tipos Primitivos

| Tipo      | Exemplo                |
| --------- | ---------------------- |
| Number    | `const idade = 24;`    |
| String    | `let nome = "Ana";`    |
| Boolean   | `const ativo = false;` |
| Undefined | `let x;`               |
| Null      | `const vazio = null;`  |

### 1.3 `typeof`

```js
typeof "Oi";   // "string"
typeof 7;       // "number"
typeof false;   // "boolean"
```

---

## 2. Operadores Básicos

### 2.1 Aritméticos

`+  -  *  /  %  **`

### 2.2 Atribuição

`=  +=  -=  *=  /=`

### 2.3 Comparação

`==  !=  ===  !==  >  <  >=  <=`

### 2.4 Lógicos

`&&  ||  !`

---

## 3. Condicionais

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 13) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

// Operador ternário
const situacao = idade >= 18 ? "adulto" : "menor";
```

> Use `switch` quando houver muitos casos sobre o mesmo valor:

```js
switch (dia) {
  case 1: console.log("Dom"); break;
  case 2: console.log("Seg"); break;
  // ...
  default: console.log("Inválido");
}
```

---

## 4. Repetições (Loops)

| Estrutura  | Quando usar                   | Exemplo breve                    |
| ---------- | ----------------------------- | -------------------------------- |
| `for`      | Contador conhecido            | `for (let i = 0; i < 5; i++) {}` |
| `while`    | Até condição mudar            | `while (valor !== 0) {}`         |
| `do…while` | Executar **ao menos uma** vez | `do { } while (ok);`             |
| `for…of`   | Percorrer arrays/iteráveis    | `for (const item of lista) {}`   |

---

## 5. Funções

```js
// Declaração
function somar(a, b) {
  return a + b;
}

// Expressão / Arrow
const dobrar = n => n * 2;
```

---

## 6. Arrays — Conceitos Essenciais

```js
const frutas = ["maçã", "banana"];
frutas.push("uva");   // adiciona
const primeira = frutas[0]; // "maçã"
frutas.forEach(f => console.log(f));
```

Métodos úteis: `push`, `pop`, `shift`, `unshift`, `length`, `forEach`.

---

## 7. Objetos Simples

```js
const pessoa = {
  nome: "João",
  idade: 30
};

console.log(pessoa.nome);
pessoa.idade = 31;
```

---

## 8. Interação Básica com o Navegador

```js
console.log("Mensagem no console");
alert("Olá visitante!");
const nome = prompt("Qual seu nome?");
const confirmacao = confirm("Tem certeza?");
```

---


---

