//1. PASO #1: Declarar un Array con 5 lenguaje de programación
const lenguajes = ["Python", "Java", "JavaScript", "PHP", "C#"];

//PASO #2: Capturamos los elementos de DOM
const lista = document.getElementById("lista");

let elementos = "";

// PASO #3: Usamos el bucle FOR para recorrer un Array
for (let i = 0; i < lenguajes.length; i++){
    if (lenguajes[i] === "JavaScript"){
        alert("JavaScript sirve para el Frontend y para el Backend.");
    }
    // PASO #4: Acumulamos cada lenguaje dentro de las etiquetas <li>.
    elementos += "<li>" + lenguajes[i] + "</li>";
}
//PASO #5: Capturamos y mostramos toda la lista en pantalla.
lista.innerHTML = elementos;


