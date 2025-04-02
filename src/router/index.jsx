import { StartPage } from "../pages/start-page";
import { ProfilePage1 } from "../pages/profile-page1";
import { ProfilePage2 } from "../pages/profile-page2";
import { Confirmation } from "../pages/confirmation-page";
import { PasswordReset } from "../pages/passwordReset";
import { ProjectPage } from "../pages/project-page";
import { ProjectRequestPage } from "../pages/projectRequest/index";
import { UserProjects } from "../pages/userProjects";
import { ContactPage } from "../pages/contact-page";
export const privateRoutes = [
  { path: "*", component: <ProfilePage1 />, exact: true },
  { path: "/", component: <ProfilePage1 />, exact: true },
  { path: "/profile1", component: <ProfilePage1 />, exact: true },
  { path: "/profile2", component: <ProfilePage2 />, exact: true },
  { path: "/projects", component: <ProjectPage />, exact: true },
  { path: "/projectRequest", component: <ProjectRequestPage />, exact: true },
  { path: "/userProjects", component: <UserProjects />, exact: true },
  { path: "/contact", component: <ContactPage />, exact: true },
];
export const publicRoutes = [
  { path: "/", component: <StartPage />, exact: true },
  { path: "*", component: <StartPage />, exact: true },
  {
    path: `/auth/new-verification`,
    component: <Confirmation />,
  },
  {
    path: `/auth/new-password`,
    component: <PasswordReset />,
  },
];
