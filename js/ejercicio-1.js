//1. Paso #1: Capturamos elementos del DOM
//DOM: Document Object Model
const nombreUsuario =  document.getElementById('nombreUsuario');
const btnSaludar =  document.getElementById('btnSaludar');
const mensaje =  document.getElementById('mensaje');

//2. Creamos la Función
function registrar(){
    //Registrando o capturando el dato desde el DOM
    let nombre = nombreUsuario.value;
    //Mostramos en consola
    console.log("El nombre registrado en consola es: " + nombre);

//3. Mostrar todo en el DOM
    mensaje.textContent = "¡Hola, " + nombreUsuario.value + " ¡Bienvenido al curso!";
}