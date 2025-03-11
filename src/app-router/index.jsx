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
  const saveSoftResults = (value) => {
    dispatch({ type: "SET_SOFT_SKILL_INFO", softSkillInfo: value });
  };
  const setFirstRole = (value) => {
    dispatch({ type: "SET_FIRST_ROLE", firstRole: value });
  };
  const setSecondRole = (value) => {
    dispatch({ type: "SET_SECOND_ROLE", secondRole: value });
  };
  const setHardSkills = (value) => {
    dispatch({ type: "SET_HARD_SKILL_INFO", hardSkillInfo: value });
  };

  async function checkAuth() {
    try {
      const response = await UserService.getProfile();
      setName(response.data.name);
      setSurname(response.data.surname);
      setPatronymic(response.data.patronymic);
      setUniversity(response.data.university);
      setEmploymentStatus(response.data.employmentStatus);
      setProfilePicture(response.data.picture);
      setAppointment(response.data.appointment);
      setStudyDirection(response.data.studyDirection);
      setFirstRole(response.data.softSkill);
      setSecondRole(response.data.softSkillSecondary);
      setHardSkills(response.data.hardSkills);
      setAuth(true);
    } catch (e) {
      setAuth(false);
      console.log(e);
    }
    try {
      const response2 = await UserService.getSoftSkillInfo();
      saveSoftResults(response2.data);
    } catch (e) {
      console.log(e.response.data.message);
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
