//Crear id
document.addEventListener("DOMContentLoaded",()=>{
    class Person {
        constructor(name, age, email, password) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
        };
    };
    
    class UserRegular extends Person {
        constructor(id, name, age, email, password) {
            this.id = generateUniqueId();
            super(name, age, email, password);
        };
    };
    
    class UserAdmin extends Person {
        constructor(id, name, age, email, password, isAdmin) {
            this.id = generateUniqueId();
            super(name, age, email, password);
            this.isAdmin = true;
        };
    };
    
    function generateUniqueId() {
        return Math.floor(Math.random() * 10000000000000000000);
    };

    const root = document.getElementById('root');
    root.innerHTML = `<div class="log-in">
        <h1>Registrarse</h1>
        <label for="name">Nombre: </label>
        <input type="text" id="name" placeholder="Nombre">
        <label for="age">Fecha de Nacimeitno: </label>
        <input type="date" placeholder="Edad">
        <label for="email">Correo Electrónico: </label>
        <input type="email" id="email" placeholder="example@example.org">
        <label for="password">Contraseña: </label>
        <input type="password" id="password" autocompleted="none">
        <button id="submit">Registrar</button>
    </div>`


    
});