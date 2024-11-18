import { StartPage } from "../pages/start-page";
export const privateRoutes = [];
export const publicRoutes = [
  { path: "/", component: <StartPage></StartPage>, exact: true },
];
