/* FUNCIONES */

/* *************  Tipo de función con const *****************/

/* Fnción con parametro */
const cuadrado = function(x){
    return x *x;
}
let numero = 4;
console.log(cuadrado(numero));


/* Función sin parametro */
const ruido = function (){
    console.log("Kataplum!")
}
//Llamada a una función
ruido();



/*Funcion con más de un parametro */
const exponencial = function (base, exponente){
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(2,2));


/* *************  Tipo de función Arrow Function **************** */

/*Función con parametros */
const restar = (a,b) => {
    return a -b;
}
console.log(restar(10,30));

/* *************  Tipo de función Comun **************** */

function saludar(quien){
    console.log("Hola "+ quien);
}

saludar("Explorer");

/* EXCEPCIONES */

/*
Cuando tenemos un programa que fucniona de forma continua puede que pase algo y nuestro programa pueda tronar (Contingencia) para ello nosotros debemos de cachar esos posibles errores.
*/

function preguntarDireccion(pregunta){
    let resultado = prompt(pregunta);
    if (resultado.toLowerCase() == "izquierda") return "I";
    if (resultado.toLowerCase() == "derecha") return "D";
    throw new Error("Direccion invalidad: " + resultado);
}

function mirar(){
    if (preguntarDireccion("A qué lado?") == "I") {
        return "una casa";
    }
    else{
        return "2 osos hambrientos";
    }
}

//Cuando entramos a una excepción, lo que hará es que pondra en una caja de protección para encontrar un throw en el catch para atrapar el error.
try{
    console.log("Mira a", mirar());
} catch (error){
        console.log("Hubo un error: " + error);
}