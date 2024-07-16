import { navigateto } from "../../../Router";
export function HomePage(){
    const $root = document.getElementById('root');
    $root.innerHTML = `
    <h1>Welcome to our Home Page</h1>
    <button id='login'>Iniciar seccion</button>
    <button id='register'>Registrarse</button>
    `;

    const $login = document.getElementById('login');
    const $register = document.getElementById('register');

    $login.addEventListener('click', () => {
        navigateto('/login');
    });

    $register.addEventListener('click', () => {
        navigateto('/register'); 
    });
}