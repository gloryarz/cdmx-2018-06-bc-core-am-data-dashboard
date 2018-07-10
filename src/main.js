document.getElementById('loginBtn').addEventListener('click', (event) => {
  if (user.value === 'Laboratoria' && password.value === '1234') {
    window.location.href = 'data.html';
  } else {
    loginError.innerHTML = '<p>El usuario o contraseña son incorrectos</p><p>Usuario: Laboratoria</p> <p>Contraseña: 1234 </p>';
  }
});
let loginScreen = document.getElementById('loginScreen');
let user = document.getElementById('user');
let password = document.getElementById('password');
let prueba = document.getElementById('prueba');
let loginError = document.getElementById('loginError');

let general = document.getElementById('general');
let lima = document.getElementById('lima');
let mexico = document.getElementById('mexico');
let santiago = document.getElementById('santiago');
let alumnas = document.getElementById('alumnas');
