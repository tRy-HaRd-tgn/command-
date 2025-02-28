import { StartPage } from "../pages/start-page";
import { ProfilePage1 } from "../pages/profile-page1";
import { ProfilePage2 } from "../pages/profile-page2";
import { Confirmation } from "../pages/confirmation-page";
export const privateRoutes = [
  { path: "/", component: <ProfilePage1 />, exact: true },
  { path: "/profile1", component: <ProfilePage1 />, exact: true },
  { path: "/profile2", component: <ProfilePage2 />, exact: true },
];
export const publicRoutes = [
  { path: "/", component: <StartPage />, exact: true },
  { path: "*", component: <StartPage />, exact: true },
  {
    path: `/auth/new-verification`,
    component: <Confirmation />,
  },
];
