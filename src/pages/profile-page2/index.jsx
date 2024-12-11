import styles from "./styles.module.scss";
import { arrowRight, arrowLeft } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileForm,
  Header,
  SoftSkillsForm,
  HardSkillsForm,
} from "../../components";
export const ProfilePage2 = (props) => {
  const navigator = useNavigate();
  const [softSkills, setSoftskills] = useState(false);
  const [hardSkills, setHardskills] = useState(false);
  const [softResults, setSoftResults] = useState(false);
  const [array, setArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <div className={styles.container__content}>
          <div className={styles.container__content__info}>
            <h2 className={styles.h2}>Профиль</h2>
            <div className={styles.divNav}>
              <img
                onClick={() => {
                  navigator("/");
                }}
                className={styles.arrow}
                src={arrowLeft}
                alt="error"
              />
              <ProfileForm
                setHardskills={() => {
                  setSoftskills(false);
                  setHardskills(!hardSkills);
                }}
                setSoftskills={() => {
                  setHardskills(false);
                  setSoftskills(!softSkills);
                }}
              />
              {softSkills ? <SoftSkillsForm setSoftResults={setSoftResults} setSoftskills={setSoftskills} array={array} setArray={setArray} /> : <></>}
              {hardSkills ? <HardSkillsForm /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
