let inicio = document.getElementById('inicio');
let loginBtn = document.getElementById('login');
let menu = document.getElementById('menu');
let main= document.getElementById("main");
let sideNavigation = document.getElementById("sideNavigation");

//Desplegar navegador
function openNav() {
    sideNavigation.style.width = "250px";
    main.style.marginLeft = "250px";
}

//Plegar navegador
function closeNav() {
    sideNavigation.style.width = "0";
    main.style.marginLeft = "0";
}

const logins = () => {
  inicio.style.display = "none";
  menu.style.display = "block";
  main.style.display = "block";
}


loginBtn.addEventListener('click', logins);
