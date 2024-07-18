import { DashboardPage } from "./Pages/private/Dashboard";
import { HomePage } from "./Pages/public/home";
import { LoginPage } from "./Pages/public/login/LoginPage";
import { NotFound } from "./Pages/public/NotFound";
import { RegisterPage } from "./Pages/public/register";

export const routes = {
    public: [
        {path: '/', page: HomePage},
        {path: '/not-found', page: NotFound},
        {path: '/login', page: LoginPage},
        {path: '/register', page: RegisterPage},
    ],
    private: [
        {path: '/dashboard', page: DashboardPage},
    ]
};