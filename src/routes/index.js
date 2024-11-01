import LoginPage from "../components/LoginPages";
import Profile from "../components/Profile";
import config from "../config";
import HomePage from "../page/HomePages";

const privateRoutes = [{}];

const publicRoutes = [
  {
    path: config.routes.web.login,
    component: LoginPage,
    roles: ["USER"],
    private: false,
  },
  {
    path: config.routes.web.home,
    component: HomePage,
    roles: ["USER"],
    private: false,
  },
  {
    path: config.routes.web.profiles,
    component: Profile,
    roles: ["USER"],
    private: false,
  },
];

const routes = [...publicRoutes, ...privateRoutes];
export default routes;
