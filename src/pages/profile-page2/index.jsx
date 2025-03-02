import styles from "./styles.module.scss";
import { arrowRight, arrowLeft } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileForm,
  Header,
  SoftSkillsForm,
  HardSkillsForm,
  ResultSoftSkills,
  ResultSoftSkillsSecond,
  Projects,
} from "../../components";
export const ProfilePage2 = (props) => {
  const navigator = useNavigate();
  const [softSkills, setSoftskills] = useState(false);
  const [hardSkills, setHardskills] = useState(false);
  const [softResults, setSoftResults] = useState(false);
  const [hardResults, setHardResults] = useState(false);
  const [softResultsSecond, setSoftResultsSecond] = useState(false);
  const [projects, setProjects] = useState(false);
  function checkStyle() {
    if (softSkills || hardSkills) {
      return "heigth: content-fit";
    }
  }
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header
            projects={projects}
            setProjects={() => {
              setProjects(!projects);
              setHardskills(false);
              setSoftskills(false);
              setSoftResults(false);
              setSoftResultsSecond(false);
            }}
          />
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
                hardSkills={hardSkills}
                softSkills={softSkills}
                softResults={softResults}
                hardResults={hardResults}
                softResultsSecond={softResultsSecond}
                setSoftskills={() => {
                  setHardskills(false);
                  setSoftskills(!softSkills);
                  setSoftResults(false);
                  setSoftResultsSecond(false);
                  setProjects(false);
                }}
                setHardskills={() => {
                  setSoftskills(false);
                  setHardskills(!hardSkills);
                  setSoftResults(false);
                  setSoftResultsSecond(false);
                  setProjects(false);
                }}
              />
              {softSkills && (
                <SoftSkillsForm
                  setSoftResults={setSoftResults}
                  setSoftskills={setSoftskills}
                />
              )}
              {softResults && (
                <ResultSoftSkills
                  setSoftSkills={setSoftskills}
                  setSoftResults={setSoftResults}
                  setSoftResultsSecond={setSoftResultsSecond}
                />
              )}
              {softResultsSecond && (
                <ResultSoftSkillsSecond
                  setSoftSkills={setSoftskills}
                  setSoftResults={setSoftResults}
                  setSoftResultsSecond={setSoftResultsSecond}
                />
              )}
              {hardSkills && <HardSkillsForm />}
              {projects && <Projects />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
