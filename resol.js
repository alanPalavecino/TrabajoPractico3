
 //////////////// PUNTO 1 //////////////////

 /// muestro mensaje con getelementbyID
 document.getElementById("myid").innerHTML ='HELLO WORD';

 /// muestro el mesnaje seleccionasndo con el query selector
document.querySelector('#myid').innerHTML = "hola soy el queryselector"
const e = document.querySelector('#myid');





/////////////// PUNTO 2 ///////////////////
const elements = document.getElementsByClassName('test');
elements[0].innerHTML = 'hello word punto 2'; 

/// obtengo el primer elemento que tenga la clase test
/// con query selector
const classtest = document.querySelector('.test');
classtest.innerHTML = "pufloooo";

/// ahora con querySelectorAll
const elementsTest = document.querySelectorAll('.test');
elementsTest.forEach((elemento) => {
    console.log(elemento.textContent);
})
 
