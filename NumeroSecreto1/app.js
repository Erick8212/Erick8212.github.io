/*
// Variables y Tipos de Datos
var nombre = "Pedro"; // String
let cedula = "123456789"; // String
let edad = 25; // Number
let sueldo = 2500.0; // Number
let hijos = false; // Boolean

const PI = 3.1416; // constante, no cambiará su valor -- PI = 3.14 -- Error, no se puede cambiar el valor de una const

/*
String (texto)	"Hola, mundo"
Number (número)	42, 3.14
Boolean (booleano)	true, false
Array (arreglo)	[1, 2, 3, 4]
Object (objeto)	{ nombre: "Pedro", edad: 25 }
*/
/*
// Operadores Aritméticos
let suma = 7 + 8;
let resta = 20 - 4;
let multiplicacion = 9 * 1;
let division = 25 / 5;
let modulo = 30 % 3;
let exponente = 5 ** 2;

console.log(suma, resta, multiplicacion, division, modulo, exponente);

//comando para insertar un mensaje
let saludo = "hola Sr. Erick";
let persona = prompt("ingresa tu nombre: ");
let mensaje = saludo + persona;
console.log(mensaje);

//alert(mensaje); // muestra un mensaje en la pantalla
console.log(saludo, persona);
alert("mañana hay examen de bases de datos");
*/
/*
// Condicionales
let nombre = prompt('ingresa tu nombre: ');
let edadNueva = prompt('ingresa tu edad: ');
if (edadNueva > 18) {
    console.log(nombre, 'Eres mayor de edad');
} else if (edadNueva < 18) {
    console.log(nombre, 'Eres menor de edad');
} else {
    console.log(nombre, 'Tienes 18 años');
}
*/

/*let comparaEdad = edadNueva > 18  ? "Eres mayor de edad" : "Menor de edad";
console.log(nombre, comparaEdad);*/

/*Crea un algoritmo que solicite al usuario uno o mas valores ingresados por prompt(), compare las entradas
y, en funcion de ciertas condiciones, muestre por consolas alert() el resultado segun los valores ingresados y las condiciones 
cumplidas 
Pedir un numero por promt y evluar si esta entre 10 y 50. En caso positivo mostrar un alert 
Pedir un texto mediante prompt y si es igual a "hola" mostrar un alert por consola
Pedir un numero mediante prompt y si es mayor a 1000 mostrar un alert*/




/*Primer ejercicio 
let numero = prompt("Ingresa un número:");

numero = parseFloat(numero);

if (numero > 1000) {
    alert("El número ingresado es mayor a 1000.");
} else {
    alert("El número ingresado no es mayor a 1000.");
}
*/

/*Segundo ejercicio
let texto = prompt("Ingresa un texto:");

if (texto === "hola") {
    console.log("Has saludado Bien Idiota");
} else {
    console.log("No has Saludado bien Pendejo.");
} */

//Tercer ejercicio
/*
let numero = prompt("Por favor, ingresa un número:");

numero = parseFloat(numero);
if (numero >= 10 && numero <= 50) {
    alert("El número ingresado está entre 10 y 50.");
} else {
    alert("El número ingresado no está entre 10 y 50.");
}

/*Los switch*/
//realizar un programa que diga el nombre del mes de 
// acuerdo al numero ingresado
/*
let mes = prompt("Ingresa el numero del mes: ")

switch (mes) {
    case "1": console.log("Enero");break;
    case "2": console.log("Febrero");break;
    case "3": console.log("Marzo");break;
    case "4": console.log("Abril");break;
    case "5": console.log("Mayo");break;
    case "6": console.log("Junio");break;
    case "7": console.log("Julio");break;
    case "8": console.log("Agosto");break;
    case "9": console.log("Septiembre");break;
    case "10": console.log("Octubre");break;
    case "11": console.log("Noviembre");break;
    case "12": console.log("Diciembre");break;
    default: console.log("Número no válido");
}

//verificar el dia de la semana
let dia = prompt("Ingresa el dia de la semana: ")

switch (dia) {
    case "1": console.log("Domingo");break;
    case "2": console.log("Lunes");break;
    case "3": console.log("Martes");break;
    case "4": console.log("Miércoles");break;
    case "5": console.log("Jueves");break;
    case "6": console.log("Viernes");break;
    case "7": console.log("Sábado");break;
    default: console.log("Día no válido");
}

//verificar la estacion del año segun el mes,
//decir si el mes es de 30 dias o si es menos.
/*
let estacin = ("Ingrese el mes:")
switch (estacion){
    case "1": console.log("Enero, 31, invierno");break;
    case "2": console.log("Febrero, 28, invierno");break;
    case "3": console.log("Marzo, 31, primavera");break;
    case "4": console.log("Abril, 30, primavera");break;
    case "5": console.log("Mayo, 31, primavera");break;
    case "6": console.log("Junio, 30, verano");break;
    case "7": console.log("Julio, 31, verano");break;
    case "8": console.log("Agosto, 31 verano");break;
    case "9": console.log("Septiembre, 30, otono");break;
    case "10": console.log("Octubre, 31, otono");break;
    case "11": console.log("Noviembre, 30, otono");break;
    case "12": console.log("Diciembre, 31, invierno");break;
    default: console.log("Número no válido");
    
} 
*/
/*
let estacion = prompt("Ingrese el mes: ")
switch (estacion) {
    case "enero": console.log("31, Invierno");break;
    case "febrero": console.log("28, Invierno");break;
    case "marzo": console.log("31, primavera");break;
    case "abril": console.log("30, primavera");break;
    case "mayo": console.log("31, primavera");break;
    case "junio": console.log("30, verano");break;
    case "julio": console.log("31, verano");break
    case "agosto": console.log("31, verano");break;
    case "septiembre": console.log("30, otoño");break;
    case "octubre": console.log("31, otoño");break;
    case "noviembre": console.log("30, otoño");break;
    case "diciembre": console.log("31, invierno");break;
    default: console.log("Més no válido");
}
*/
/*
// Primer ejercicio 
function calcularPrecioFinal() {
    let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto:"));
  
        if (isNaN(precioOriginal)) {
        console.log("Error: El precio original debe ser un número.");
        return; 
        }
  
    
    let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
  
        
        if (isNaN(descuento)) {
        console.log("Error: El descuento debe ser un número.");
        return; 
        }
  
    
    let precioFinal = precioOriginal - (precioOriginal * descuento / 100);
  
    
        if (descuento >= 50) {
        console.log("¡Oferta especial!");
        }
  
    console.log("Precio final: " + precioFinal);
  }
  
  calcularPrecioFinal();
  */
 /*
 // Segundo ejercicio
 function determinarTipoNumero() {
    let numero = parseFloat(prompt("Ingresa un número:"));
  
    if (isNaN(numero)) {
      console.log("Error: Por favor, ingresa un número válido.");
      return; 
    }
  
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }
  
  determinarTipoNumero();
  */
//Tercer ejercicio
function calcularResultadoEstudiante() {
    let nota1 = parseFloat(prompt("Ingresa la nota 1 (0-100):"));
    let nota2 = parseFloat(prompt("Ingresa la nota 2 (0-100):"));
    let nota3 = parseFloat(prompt("Ingresa la nota 3 (0-100):"));
    let nota4 = parseFloat(prompt("Ingresa la nota 4 (0-100):"));
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ||
        nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
      console.log("Error: Ingresa notas válidas entre 0 y 100.");
      return; 
    }
  
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  
    let mensaje = "Promedio: " + promedio.toFixed(2) + ". "; 
  
    if (promedio >= 70) {
      mensaje += "¡Aprobado!";
    } else if (promedio >= 50) {
      mensaje += "Puedes mejorar.";
    } else {
      mensaje += "Reprobado.";
    }
  
    console.log(mensaje);
  }
  
  calcularResultadoEstudiante();
  
  