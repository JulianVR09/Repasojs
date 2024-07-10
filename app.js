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




});
