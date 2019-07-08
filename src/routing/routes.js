import LoginView from "../views/LoginView/LoginView";

const routes = [
  { path: "/login", component: LoginView, view: "Login" },
  { path: "/dashboard", component: DashboardView, view: "Dashboard" }
];

export default routes;
