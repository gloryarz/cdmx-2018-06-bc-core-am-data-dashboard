let url = 'https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
let stats = {};
/*
const getAlumnas = () =>{
  fetch(url)
  .then(response => response.json())
  .then( data => {
    let convertData = Object.keys(data);
       for(sedes in data){
           let generaciones = Object.keys(data[sedes].generacion);
         generaciones.forEach((generacion)=> {
           let selectgeneracion = generacion;
           let arregloEstudiantes = data[sedes].generacion[generacion].estudiantes;
         let generaciones = Object.keys(data[sedes].generacion);
         generaciones.forEach((generacion)=> {
           let selectgeneracion = generacion;
           console.log(selectgeneracion);
         let arregloEstudiantes = data[sedes].generacion[generacion].estudiantes;
         arregloEstudiantes.forEach((estudiante)=>{
           let nombre = estudiante.nombre;
           let correo = estudiante.correo;
           let turno = estudiante.turno;
           let progreso = estudiante.progreso.duracionPrograma;
           let duracion = estudiante.progreso.porcentajeCompletado;
         let temas = Object.keys(estudiante.progreso.temas);
         temas.forEach((tema)=>{
           let selectTema= tema;
         let arregloTemas= estudiante.progreso.temas[tema];
           let duracionTema = estudiante.progreso.temas[tema].duracionTema;
           let duracionTemaCompletado = estudiante.progreso.temas[tema].duracionTemaCompletado;
           let porcentajeCompletado = estudiante.progreso.temas[tema].porcentajeCompletado;
           let subtemasCompletados = estudiante.progreso.temas[tema].subtemasCompletados;
           let subtemasTotales = estudiante.progreso.temas[tema].subtemasTotales;
        let subtemas = Object.keys(estudiante.progreso.temas[tema].subtemas);
        subtemas.forEach((subtema)=>{
          let selectSubtema = subtema;
        let arregloSubTemas= estudiante.progreso.temas[tema].subtemas[subtema];
          let completado = estudiante.progreso.temas[tema].subtemas[subtema].completado;
          let duracionSubtema = estudiante.progreso.temas[tema].subtemas[subtema].duracionSubtema;
          let puntuacion= estudiante.progreso.temas[tema].subtemas[subtema].puntuacion;
          let tipo= estudiante.progreso.temas[tema].subtemas[subtema].tipo;
        })
       })
          const lista = document.createElement("li");
          const contenido = document.createTextNode(sedes +" " + selectgeneracion + " " + nombre + " " + duracion + "% completado");
          lista.appendChild(contenido);
          document.body.appendChild(lista);

    })
   })
  }
 })
}  
*/

// window.computeGenerationsStats = (laboratoria) => {}


// este es el bueno

let contenido = document.getElementById('contenido');
let screens = document.getElementById('screens');
let talk = ' ';
const traer = () =>{
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let convertData = Object.keys(data);
      for (sedes in data) {
        let generaciones = Object.keys(data[sedes].generacion);
        generaciones.forEach((generacion)=> {
          let selectgeneracion = generacion;
          console.log(selectgeneracion);
          let arregloEstudiantes = data[sedes].generacion[generacion].estudiantes;
          arregloEstudiantes.forEach((estudiante)=>{
            let nombre = estudiante.nombre;
            let correo = estudiante.correo;
            let turno = estudiante.turno;
            screens.style.display = 'none';
            // talk += `<li class="list-group-item "> <i class="far fa-grin size user"></i> <b class="size">${nombre}</b>  ${sedes}
            // ${selectgeneracion} ${correo} ${turno}</li>`
            talk += `<li class="list-group-item "> <i class="far fa-grin size user"></i> <b class="size"> <br> ${nombre}</b> <br> Sede: ${sedes} <br>
           Generación: ${selectgeneracion} <br> Email: ${correo} <br> Turno: ${turno}</li>`; 
      
            contenido.innerHTML = talk;
          });
        });
      }
    });
};


// ------------------------


window.computeGenerationsStats = () => {

};

window.computeStudentsStats = () => {
  
};

