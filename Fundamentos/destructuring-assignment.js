// Destructuring assignment

const array = [1, 2, 3, 4, 5];
[a, b, c] = array;

console.log(a, b, c);

// Desestructuración de los parametros rest
function f(...[a, b, c]) {
    resultado = a + b + c;
    console.log(resultado);
  }
  
  f(1, 2, 3);