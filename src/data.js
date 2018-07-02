
let url = 'https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
const traer = () =>{
  fetch(url)
  .then(response => response.json())
  .then( data => {
    let convertData = Object.keys(data);
       for(sedes in data){
         let generaciones = Object.keys(data[sedes].generacion);
         generaciones.forEach((generacion)=> {
           let selectgeneracion = generacion;
           console.log(selectgeneracion);
         let arregloEstudiantes = data[sedes].generacion[generacion].estudiantes;
         arregloEstudiantes.forEach((estudiante)=>{
           let nombre = estudiante.nombre;
           let correo = estudiante.correo;
           let turno = estudiante.turno;
           const lista = document.createElement("li");
           const contenido = document.createTextNode(sedes +" " + selectgeneracion + " " + nombre + " " + correo +" "+ turno );
           lista.appendChild(contenido);
           document.body.appendChild(lista);
    })
   })
  }
 })
}


//window.computeGenerationsStats = (laboratoria) => {}


