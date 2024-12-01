import { StartPage } from "../pages/start-page";
import { ProfilePage } from "../pages/profile-page";
export const privateRoutes = [
  { path: "/", component: <ProfilePage />, exact: true },
];
export const publicRoutes = [
  { path: "/", component: <StartPage />, exact: true },
];
