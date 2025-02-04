import { navigateto } from "../../../Router";

export function RegisterPage() {
  const $root = document.getElementById("root");

  class Person {
    constructor(name, age, email, password) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.password = password;
    }
  }

  class UserRegular extends Person {
    constructor(name, age, email, password) {
      super(name, age, email, password);
      this.id = generateUniqueId();
    }
  }

  class UserAdmin extends UserRegular {
    constructor(name, age, email, password, isAdmin) {
      super(name, age, email, password);
      this.isAdmin = true;
    }
  }

  const Admin = "srylb7fr7ck";

  function generateUniqueId() {
    return Math.floor(Math.random() * 10000000000000000000);
  }

  $root.innerHTML = `<div class="log-in">
          <h1>Registrarse</h1>
          <label for="name">Nombre: </label>
          <input type="text" id="name" placeholder="Nombre">
          <label for="age">Fecha de Nacimiento: </label>
          <input type="date" placeholder="Edad" id='age'>
          <label for="email">Correo Electrónico: </label>
          <input type="email" id="email" placeholder="example@example.org">
          <label for="password">Contraseña: </label>
          <input type="password" id="password" autocompleted="none">
          <button id="submit">Registrar</button>
      </div>`;

  const $submit = document.getElementById("submit");

  $submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const $name = document.getElementById("name");
    const $password = document.getElementById("password");
    const $age = document.getElementById("age");
    const $email = document.getElementById("email");

    if (!$name.value || !$email.value || !$password.value) {
      alert("Todos los campos son requeridos");
      return;
    }

    const PeticionPerson = await fetch("http://localhost:3000/Person",{
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify(
        new Person($name.value, $age.value, $email.value, $password.value)
      ),
    })

    if($password.value === Admin){
      const peticion = await fetch("http://localhost:3000/UserAdmin", {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(
          new UserAdmin($name.value, $age.value, $email.value, $password.value)
        ),
      });
      alert('Bienvenido adminitrador')
      navigateto('/login');
    }

    const peticion = await fetch("http://localhost:3000/UserRegular", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify(
        new UserRegular($name.value, $age.value, $email.value, $password.value)
      ),
    });
    alert('Has sido registrado con exito');
    navigateto('/login');
  });
};
