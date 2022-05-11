let numero1: number = Number(prompt("Ingrese un numero para la tabla"));
let numero2: number = Number(
  prompt("Ingrese un numero que indique hasta donde va a mostrar")
);

for (let num: number = 1; num <= numero2; num++) {
  console.log("El resultado es:", numero1, "X", num, "=", numero1 * num);
}
