import { privateRoutes } from "../router";
import { publicRoutes } from "../router";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserService from "../service/UserService";
import { useEffect } from "react";
export const AppRouter = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const setName = (value) => {
    dispatch({ type: "SET_NAME", name: value });
  };
  const setSurname = (value) => {
    dispatch({ type: "SET_SURNAME", surname: value });
  };
  const setPatronymic = (value) => {
    dispatch({ type: "SET_PATRONYMIC", patronymic: value });
  };
  const setUniversity = (value) => {
    dispatch({ type: "SET_UNIVERSITY", university: value });
  };
  const setEmploymentStatus = (value) => {
    dispatch({ type: "SET_EMPLOYMENT_STATUS", employmentStatus: value });
  };
  const setProfilePicture = (value) => {
    dispatch({ type: "SET_PROFILE_PICTURE", profilePicture: value });
  };
  const setStudyDirection = (value) => {
    dispatch({ type: "SET_STUDY_DIRECTION", studyDirection: value });
  };
  const setAppointment = (value) => {
    dispatch({ type: "SET_APPOINTMENT", appointment: value });
  };
  async function checkAuth() {
    try {
      const response = await UserService.getProfile();
      console.log(response.data);
      setName(response.data.name);
      setSurname(response.data.surname);
      setPatronymic(response.data.patronymic);
      setUniversity(response.data.university);
      setEmploymentStatus(response.data.employmentStatus);
      setProfilePicture(response.data.picture);
      setAppointment(response.data.appointment);
      setStudyDirection(response.data.studyDirection);
      setAuth(true);
    } catch (e) {
      setAuth(false);
      console.log(e);
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <Routes>
      {auth
        ? privateRoutes.map((route, index) => (
            <Route
              key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))
        : publicRoutes.map((route, index) => (
            <Route
              key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
    </Routes>
  );
};
