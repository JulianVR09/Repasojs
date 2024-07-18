import { navigateto } from "../../../Router";

export function LoginPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Página de Login</h1>
    <form>
        <label for='user' >Username or email</label>
        <input type="text" placeholder="Correo electrónico" id='user' required placeholder='example@example.com'>
        <label for='password'>Contraseña</label>
        <input type="password" placeholder="Contraseña" id='password' required >
        <button type='submit'>Iniciar sesión</button>
    </form>`

    const $buttton = document.getElementsByTagName('button')[0];

    $buttton.addEventListener('click', async (e) => {
        e.preventDefault();
        const user = document.getElementById('user');
        const password = document.getElementById('password');

        if(!user.value || !password.value){
            alert('Todos los campos son obligatorios');
            return;
        };

        const logedUser = await fetch('http://localhost:3000/Person');

        if(!logedUser.ok){
            alert('Error al iniciar sesión');
            return;
        }

        const userToJson = await logedUser.json();
        const userFound = userToJson.find(u => u.email === user.value);

        if(!userFound){
            alert('Usuario no encontrado');
            return;
        }

        if(password.value !== userFound.password){
            alert('Contraseña incorrecta');
            return;
        }

        alert('Ingreso exitoso');
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
        navigateto('/dashboard')

    });
};