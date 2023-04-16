/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.*/
let form = document.getElementById("contenedorPadre");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarTarea();
  });
function agregarTarea() {
    //console.log('Funciona el agregar tarea');
    let seccionPadre = document.querySelector("#contenedorPadre");
    let tareaAgregada = document.createElement('p');
    let borrar = document.createElement('button');

    seccionPadre.appendChild(tareaAgregada);
    seccionPadre.appendChild(borrar);
    
    tareaAgregada.innerHTML = inputIngreseTarea.value;
    borrar.innerHTML = 'Borrar';
    borrar.addEventListener ("click", borrarTarea);
    function borrarTarea() {
    tareaAgregada.remove();
    borrar.remove();
};
}