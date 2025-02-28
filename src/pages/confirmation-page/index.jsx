import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/AuthService";
export const Confirmation = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const router = useNavigate();
  useEffect(() => {
    console.log(searchParams.get("token"));
    if (searchParams.get("token")) {
      try {
        const response = AuthService.confirm(searchParams.get("token"));
        console.log(response);
        router("/");
      } catch (e) {
        console.log(e);
      }
    } else {
      router("/");
    }
  }, []);

  return <div className={styles.container}>Подтвержение почты</div>;
};
