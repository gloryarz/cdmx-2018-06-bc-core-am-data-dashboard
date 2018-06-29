// fetch('https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
//   .then((response) => {
//     return response.json()
//   })
//   .then(function(laboratoria) {
//   console.log(laboratoria);
//    for(let sede in laboratoria) {
//   console.log("La propiedad " +sede+ " contiene: " +laboratoria[sede]);
//    for (let gener)
//   }
// })
let contenido = document.querySelector("#contenido");
const traer = () =>{
  fetch('https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
  .then(response => response.json())
  .then( data => {
    for(all in data){
      let generacion= data[all].generacion
      for (item in generacion) {
        console.log(item);
      }
      let arregloEstudiantes = data[all].generacion.tercera.estudiantes;
      //console.log(arregloEstudiantes)
      for(i=0; i<arregloEstudiantes.length; i++){
      //  console.log(document.getElementById('contenido'));
        let div = document.createElement('div')
        let nombre = arregloEstudiantes[i].nombre;
        let correo = arregloEstudiantes[i].correo;
        let progreso = arregloEstudiantes[i].progreso
        let temas = arregloEstudiantes[i].progreso.temas;
        let uno = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"];
        let duracionTema = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTema;
        let duracionTemaCompletado = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTemaCompletado;
        let porcentajeCompletado = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"].porcentajeCompletado;
        let subtemas = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"]["subtemas"];
          for (items in subtemas) {
          //console.log(items);
          let arregloSubtemas = subtemas[items];
        console.log(arregloSubtemas);
        }
        let uno_cero = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"]["subtemas"]["00-bienvenida-orientacion"];
        let completado = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"]["subtemas"]["00-bienvenida-orientacion"].completado;
        let duracionSubtema = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"]["subtemas"]["00-bienvenida-orientacion"].duracionSubtema;
        let tipo = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"]["subtemas"]["00-bienvenida-orientacion"].tipo;

        let subtemasCompletados = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"].subtemasCompletados;
        let subtemasTotales = arregloEstudiantes[i].progreso.temas["01-Introduccion-a-programacion"].subtemasTotales;






         //console.log(subtemas);

      //  let porcentajeCompletado = progreso.porcentajeCompletado;
      //  console.log(correo);
      //  console.log(nombre)
    //  document.getElementById('contenido').innerHTML += '<div>'+ all + generacion + nombre + correo + porcentajeCompletado + '</div>'
// no sirve aun document.getElementById('contenido').innerHTML += '<div>'+ all + generacion + '</div>'

      //  console.log(progreso.porcentajeCompletado);

      }

    }
    // console.log(data.lima.generacion.tercera.estudiantes[5].correo);
   console.log(data);
  //   for (let items of data){
  //   console.log(items);
  //   //
  //   // }
  //
  //
  // }
})
}
