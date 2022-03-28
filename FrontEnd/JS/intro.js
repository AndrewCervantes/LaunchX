
//Numeros
console.log("\n********** Varibales *********\n");
var numero1 = 4;
var numero2 = 2;
console.log("Numero 1: "+ numero1 +" Numero 2: " + numero2);


//String
console.log("\n********** Cadenas *********\n");
var frase1 = "Ejemplo comillas Dobles";
var frase2 = 'Ejemplo comillas Simples';
//En las comillas invetidad puedo añadir variables
var frase3 =`Ejemplo comillas  ${numero1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);


//Condicionales
console.log("\n********** Condicionales *********\n");
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 != numero2);

console.log("\n********** Operador lógico AND *********\n");
console.log(true && true);


console.log("\n********** Operador lógico OR *********\n");
console.log(false || false);


/* VAR VS LET VS CONST
let se utiliza para un bloque de un código .
var es para una varibale de global.
const es una variable que no cambia su valor.
*/

console.log("\n********** Arreglos *********\n");
let listaDeNumero = [2,3,5,7,11,234];
console.log(listaDeNumero[5]);

//Añadir elementos a un arreglo
listaDeNumero.push(16);
listaDeNumero.push(939);
console.log(listaDeNumero);

let listaDePalabras = ["Explorer", "MisterComander", "LaunchX", "Innovacion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

//Las cadenas se tratan como un arreglo
let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n********** Objetos *********\n");

let explorer = {
    nombre: "Nmbre del Explorer",
    email: "email@innoaccion.mx",
    numReg: 321314,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proyectoPersonal: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer);
console.log(explorer.email);
console.log(explorer.proyectoPersonal);


/* Flujo condicional */
let number1 = 2;
let number2 = 6;
console.log("\n************* if / else **************\n");
if (number1 > number2 && number2 > 5) {
  console.log("El número 1 es mayor que número 2");
}
else if( number1 == number2 || number1 < 3){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}

/* Ciclo condicional */
console.log("\n************* While **************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

/* Ciclo condicional de una iteración mínimo */
console.log("\n************* Do While **************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);


/* Ciclo for con iteración controlada */
console.log("\n************* For **************\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

/*
/* Opciones para evitar anidar condicionales */
console.log("\n************* Switch **************\n");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");
