import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useEffect } from "react";
import { useState } from "react";
import { download } from "../../assets";
import { Task } from "../../components";
import { useNavigate } from "react-router-dom";
import ProjectService from "../../service/ProjectService";
export const ProjectRequestPage = (props) => {
  const navigator = useNavigate();
  useEffect(() => {}, []);
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [array, setArray] = useState([]);
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [responseFile, setResponseFile] = useState();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectRequestWrapper}>
        <div className={styles.projectRequest}>
          <div className={styles.secWrapper}>
            <h2 style={{ width: "100%" }}>
              Опишите свой проект, заполнив основные поля
            </h2>
            <input
              style={{ width: "100%" }}
              placeholder="Название проекта"
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div
              style={img ? { width: "fit-content" } : {}}
              className={styles.imgWrapper}
              onClick={() => {
                let input = document.querySelector("#fileInput");
                input.click();
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {!img ? (
                  <>
                    <p className={styles.imgWrapperP}>Добавьте фотографию</p>
                    <img className={styles.download} src={download} alt="" />
                  </>
                ) : (
                  <></>
                )}
              </div>
              {img ? <img className={styles.img} src={img} alt="" /> : <></>}
            </div>
            <textarea
              style={{ width: "100%" }}
              className={styles.textarea}
              name=""
              placeholder="Описание проекта"
              id=""
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
        <div className={styles.secondSectionContent}>
          <div className={styles.insideContent}>
            <h2 className={styles.insideContentH2}>Опишите задачи проекта</h2>
            <button
              onClick={() => {
                setArray([...array, ""]);
              }}
              className={styles.topButton}
            >
              + Добавить
            </button>
            <div className={styles.array}>
              {array.map((value, index) => (
                <Task array={array} setArray={setArray} index={index} />
              ))}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.button}
                disabled={result}
                onClick={async () => {
                  try {
                    const response = await ProjectService.createProject(
                      responseFile,
                      name,
                      description,
                      array
                    );
                    setResult("Добавлено");
                    setError();
                    setTimeout(() => {
                      navigator("/userProjects");
                    }, 5000);
                  } catch (e) {
                    setResult();
                    setError(e.response.data.message);
                    console.log(e.response.data.message);
                    if (e.response.data.message[0].includes("42")) {
                      setError(
                        "описание проекта должны содержать, как минимум 42 символа"
                      );
                    }
                  }
                }}
              >
                Отправить
              </button>
              {error ? <p className={styles.msg}>{error}</p> : <></>}
              {result ? (
                <p
                  style={{ color: "green", fontSize: "50px" }}
                  className={styles.msg}
                >
                  {result}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <input
        id="fileInput"
        accept="image/*"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files[0];
          try {
            setResponseFile(file);
            setImg(URL.createObjectURL(file));
          } catch (e) {
            console.log(e.responce.data.message);
          }
        }}
      />
    </div>
  );
};
