// Función para Login, si no se accede imprime mensaje, si accede redirige 
document.getElementById('loginBtn').addEventListener('click', (event) => {
  if (user.value == 'Laboratoria' && password.value == '1234') {
    window.location.href = 'data.html';
  } else {
    loginError.innerHTML = 'Usuario: Laboratoria Contraseña: 1234';
  }
});
