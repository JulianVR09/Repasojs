import { routes } from "./routes";

export function Router(){
    const path = window.location.pathname;

    const publicRoute = routes.public.find(r => r.path === path);
    const privateRoute = routes.private.find(r => r.path === path);

    if(publicRoute){
        publicRoute.page()
        return;
    };

    if(privateRoute){
        if(!localStorage.getItem('token')){
            navigateto('/login');
            return;
        }
        privateRoute.page()
        return;
    };

    navigateto('/not-found');
};

export function navigateto(path){
    window.history.pushState({},"", window.location.origin + path);
    Router();
}