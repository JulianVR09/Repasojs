import { Router } from "./Router";

//Crear id
export function app(){
    const root = document.getElementById('root');

    if(!root){
        throw new Error('No root element found');
    }

    Router();
}
    


