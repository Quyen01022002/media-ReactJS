import LoginPage from "../components/LoginPages";
import config from "../config";

const privateRoutes = [{}];

const publicRoutes = [
  {
    path: config.routes.web.login,
    component: LoginPage,
    roles: ["USER"],
    private: false,
  },
];

const routes = [...publicRoutes, ...privateRoutes];
export default routes;
