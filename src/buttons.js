// Función para Login, si no se accede imprime mensaje, si accede redirige 
const login = () => {
    if (user.value == 'Laboratoria' && password.value == '1234'){
      window.location.href = "data.html";

    } else {
        loginError.innerHTML = "Usuario: Laboratoria Contraseña: 1234";
    }
}