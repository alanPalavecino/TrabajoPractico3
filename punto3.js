///////////// PUNTO 3 ////////////

function agregarFila() {
    // Seleccionar la tabla
    const tabla = document.getElementsByClassName('myTable');

    // Crear una nueva fila y celdas
    const nuevaFila = document.createElement('tr');
    const celda1 = document.createElement('td');
    const celda2 = document.createElement('td');

    // Agregar contenido a las celdas
    celda1.textContent = 'Nueva Celda 1';
    celda2.textContent = 'Nueva Celda 2';

    // Agregar las celdas a la fila
    nuevaFila.appendChild(celda1);
    nuevaFila.appendChild(celda2);

    //console.log(tabla);
    //console.log(nuevaFila);

    // Agregar la fila a la tabla
     tabla[0].appendChild(nuevaFila);
   
}

function deleteRow(){

    // asigno a table los elementos de la clase myTable
    const table = document.getElementsByClassName('myTable');
    /// asigno las finlas de la primer tabla a una variable 
    const filas = table[0].rows;
    /// cro una variable y le asigno a la ultima fila de la tabla
    const lastRoww = filas[filas.length - 1];
   // console.log(lastRoww);

   // si encontro la fila la elimina, sino printea un mensaje
    if(lastRoww){
        table[0].deleteRow(lastRoww.rowIndex);
    }else{
        const mensaje = document.getElementById('msj').innerHTML = "la fila no existe o no se encontro";
    }

}

//////////////////// PUNTO 4 /////////////////////

function highlight(){
   const elements = document.getElementsByClassName('myClass');
  console.log(elements);

  for(var i=0; i<elements.length; i++){
    elements[i].style.background = 'yellow';
    elements[i].style.fontSize = '20px';
  } 
  /* otro forma de hacerlo es asi
   /// no se si se puede hacer asi, hay que probarlo

    var clas = elements[0].className; 
   elements[0].classList.add('myClass');
   */
}