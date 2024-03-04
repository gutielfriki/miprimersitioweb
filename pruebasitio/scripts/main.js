// VARIABLES

// let nombreDeLaVariable = "Bob";
// nombreDeLaVariable = "Steve";

// COMENTARIOS

// Esto es un comentario de una linea
/* 
Esto es un comentario
de varias lineas.
*/

// OPERADORES

// aritmetico (+ - * /)

// Sumar - Concatenacion
// let suma = 6 + 9;
// let concatena = "Hola " + "mundo";

// Resta - Multiplicacion - Division
// let resta = 9 - 3;
// let multiplicar = 8 * 2;
// let dividir = 9 / 3;

// De Asignacion (=)
// let miVariable = "Bob";

// Identidad - igualdad (===)
// let miVariable2 = 3;
// miVariable2 === 4;

// Negacion - Distinto (! - !==)
// let miVariable3 = 3;
// !miVariable3 === 3;

// CONDICIONALES

// let helado = "chocolate";
// if(helado === "chocolate"){
//   alert("¡Si, amo el helado de chocolate!");
// } else {
//   alert("Awwww, pero mi favorito es el de chocolate...");
// }

// FUNCIONES

// function multiplica(num1, num2) {
//   let resultado = num1 * num2;
//   return resultado;
// }

// console.log(multiplica(4, 7));
// console.log(multiplica(20, 20));
// console.log(multiplica(0.5, 3));

// EVENTOS

// let miHtml = document.querySelector("html")
// miHtml.onclick = function(){
//   alert("¡Ouch! ¡Deja de pincharme!");
// }

let miImage = document.querySelector("img");
miImage.onclick = function(){
  let miSrc = miImage.getAttribute("src");
  if(miSrc === "images/firefox-icon.png"){
    miImage.setAttribute("src", "images/firefox2.png");
  }else{
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario(){
  let miNombre = prompt("Introduzca su nombre");
  if(!miNombre){
    estableceNombreUsuario();
  }else{
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is cool, " + miNombre;
  }
}

if(!localStorage.getItem("nombre")){
  estableceNombreUsuario();
}else{
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Mozilla is cool, " + nombreAlmacenado;
}

miBoton.onclick = function(){
  estableceNombreUsuario();
}