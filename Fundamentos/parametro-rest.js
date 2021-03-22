// Parametro rest

const da = (a, b, ...args) => {
    let valor = 0;
    args.forEach((n) => { 
      valor = valor + n;
    });
  console.log(a, b);
  console.log(args);
  console.log(valor);
  }
  
  da(1, 2, 3, 4);