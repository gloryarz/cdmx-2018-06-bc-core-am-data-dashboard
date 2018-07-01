let loginScreen = document.getElementById ('loginScreen');
let loginBtn = document.getElementById('loginBtn');
let user = document.getElementById('user');
let password = document.getElementById('password');
let prueba = document.getElementById('prueba');
let loginError = document.getElementById('loginError'); 
let nav = document.getElementById('nav');
let screens =document.getElementById ('screens');


const login = () => {
    //if (user.value == 'Laboratoria' && password.value == 'Contraseña'){
        loginScreen.style.display = "none";
        nav.style.display = "block";
        screens.style.display = "block";

   // } else {
   //     loginError.innerHTML = "Usuario: Laboratoria Contraseña: Contraseña";
   // }
}


loginBtn.addEventListener('click', login);



let sedesBtn = document.getElementById('sedesBtn');
let demo = document.getElementById('demo');
let trial;
let url ='https://raw.githubusercontent.com/gloryarz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

const getData = () => {
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
      for (sedes in data)
      //document.write(sedes);
       trial += `<div class='h2'><h2>${sedes}</h2></div> `;
      demo.innerHTML = trial;
    })
  
  }

  
  sedesBtn.addEventListener('click', getData);
