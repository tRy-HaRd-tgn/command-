import { privateRoutes } from "../router";
import { publicRoutes } from "../router";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const AppRouter = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
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
